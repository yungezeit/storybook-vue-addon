import type { DefineComponent } from 'vue';
import type { Args, DecoratorFunction } from 'storybook/internal/types';
import { useChannel } from 'storybook/internal/preview-api';

import { EVENTS } from './constants';
import type { ModelsState } from './components/Panel';

export interface ComponentModel {
  /** Model name. */
  name: string;
  /** Model modifiers. */
  modifiers: string[];
}

export const withModelValue: DecoratorFunction = (storyFn, context) => {
  const component = context.component as DefineComponent;
  const componentEmits = component.emits;
  const componentProps = component.props ?? {};
  const emits: (string | undefined)[] = !Array.isArray(componentEmits)
    ? [componentEmits]
    : componentEmits;

  const models = emits.reduce<ComponentModel[]>((acc, vueEmit) => {
    if (!vueEmit?.startsWith('update:')) return acc;
    const [, modelName] = vueEmit.split('update:');
    const modifiers = Object.keys(componentProps[`${modelName}Modifiers`] ?? {});
    acc.push({ name: modelName, modifiers });
    return acc;
  }, []);

  const emit = useChannel({});

  emit(
    EVENTS.SET_MODEL_DATA,
    models.reduce<ModelsState>((acc, model) => {
      acc[model.name] = {
        name: model.name,
        modifiers: model.modifiers,
        value: context.args[model.name],
      };
      return acc;
    }, {}),
  );

  const args = models.reduce<Args>(
    (acc, { name }) => {
      acc[name] = context.args[name];
      acc[`onUpdate:${name}`] = (value: any) => {
        context.args[name] = value;
        emit(EVENTS.MODEL_CHANGED, name, value);
      };
      return acc;
    },
    { ...context.args },
  );

  return storyFn({ args });
};
