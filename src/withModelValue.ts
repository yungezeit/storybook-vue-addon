import { useChannel } from "storybook/internal/preview-api";
import type { DecoratorFunction } from "storybook/internal/types";

import { EVENTS } from "./constants";

export const withModelValue: DecoratorFunction = (storyFn, context) => {
  const emit = useChannel({
    [EVENTS.REQUEST]: () => {
      // …
    },
  });

  return storyFn({
    args: {
      ...context.args,
      modelValue: context.args?.modelValue,
      'onUpdate:modelValue': (value: any) => {
        emit(EVENTS.VALUE_CHANGED, value)
      }
    }
  });
};
