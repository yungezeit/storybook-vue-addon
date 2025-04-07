import React, { memo } from 'react';
import type { ComponentModel } from 'src/withModelValue';
import { Badge, SyntaxHighlighter } from 'storybook/internal/components';
import { styled, useTheme } from 'storybook/internal/theming';

export interface ModelState extends ComponentModel {
  /** Model value. */
  value: any;
}

export type ModelProps = ModelState;

const ModelTitle = styled('h3')({
  marginBlockEnd: '0.75rem',
});

const ModelLayout = styled('div')({
  padding: '0.75rem',
  borderBlockEnd: '1px solid',
});

const RawValue = styled('div')({
  background: 'rgba(0, 0, 0, 0.125)',
  padding: '0.325rem',
  borderRadius: '4px',
});

export const Model: React.FC<ModelProps> = memo(function Model({ modifiers, name, value }) {
  const _theme = useTheme();
  return (
    <ModelLayout style={{ borderColor: _theme.appBorderColor }}>
      <ModelTitle>{name}</ModelTitle>
      {modifiers?.length > 0 && (
        <div>
          {modifiers.map((modifier, i) => (
            <Badge key={i} status="neutral">
              {modifier}
            </Badge>
          ))}
        </div>
      )}
      <RawValue>
        {value === undefined ? (
          <SyntaxHighlighter language="text">undefined</SyntaxHighlighter>
        ) : (
          <SyntaxHighlighter language="json">
            {JSON.stringify(value ?? undefined, null, 2)}
          </SyntaxHighlighter>
        )}
      </RawValue>
    </ModelLayout>
  );
});
