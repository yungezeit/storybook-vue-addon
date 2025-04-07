import React, { Fragment, memo, useState } from 'react';
import { AddonPanel, Code, EmptyTabContent, Link } from 'storybook/internal/components';

import { useChannel } from 'storybook/internal/manager-api';
import { styled, useTheme } from 'storybook/internal/theming';

import { Model, type ModelState } from './Model';
import { EVENTS } from '../constants';
import { DocumentIcon } from '@storybook/icons';

export interface PanelProps {
  active?: boolean;
}

export type ModelsState = Record<string, ModelState>;

const Links = styled.div(({ theme }) => ({
  display: 'flex',
  fontSize: theme.typography.size.s2 - 1,
  gap: 25,
}));

const Container = styled.div(({ theme }) => ({
  height: '100%',
  background: theme.background.content,
}));

export const Panel: React.FC<PanelProps> = memo(function MyPanel(props) {
  const theme = useTheme();
  const [modelsState, setModelsState] = useState<ModelsState>();

  useChannel({
    [EVENTS.SET_MODEL_DATA]: (modelData: ModelsState) => {
      setModelsState(modelData);
    },
    [EVENTS.MODEL_CHANGED]: (name, newValue: any) => {
      setModelsState((prevState) => {
        const newModelState = { ...prevState?.[name], value: newValue };
        const updatedState = { ...prevState, [name]: newModelState };
        return updatedState;
      });
    },
  });

  return (
    props.active && (
      <Container>
        <div aria-label="Vue component model" />
        {modelsState && Object.keys(modelsState).length > 0 ? (
          <Fragment>
            {Object.values(modelsState).map((model) => (
              <Model key={model.name} {...model} />
            ))}
          </Fragment>
        ) : (
          <EmptyTabContent
            title="No component model"
            description={
              <>
                The current component does not have any model or two-way binding. Models can be
                added by either using Vue 3.4's <Code>defineModel</Code> macro or by declaring both
                a value prop and its <Code>update:*</Code> emit.
              </>
            }
            footer={
              <Links>
                <Link
                  href={'https://vuejs.org/guide/components/v-model.html'}
                  target="_blank"
                  withArrow
                >
                  <DocumentIcon /> Read docs
                </Link>
              </Links>
            }
          />
        )}
      </Container>
    )
  );
});
