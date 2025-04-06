import React, { Fragment, memo, useCallback, useState } from "react";
import { AddonPanel } from "storybook/internal/components";
import { Placeholder, SyntaxHighlighter } from "storybook/internal/components";
import { useChannel } from "storybook/internal/manager-api";
import { useTheme } from "storybook/internal/theming";

import { EVENTS } from "../constants";

interface PanelProps {
  active: boolean;
}

interface PanelState {
  currentValue: any;
}


export const Panel: React.FC<PanelProps> = memo(function MyPanel(props) {
  const theme = useTheme();

  const [currentValue, setCurrentValue] = useState<PanelState['currentValue']>(undefined);

  const emit = useChannel({
    [EVENTS.VALUE_CHANGED]: (newValue: any) => {
      setCurrentValue(newValue);
    },
  });

  const fetchData = useCallback(() => {
    emit(EVENTS.REQUEST);
  }, [emit]);

  return (
    <AddonPanel active={props.active}>
      <div id="overview" title="Overview" color={theme.color.positive}>
        <Placeholder>
          <Fragment>
            <SyntaxHighlighter language="json">
            { JSON.stringify(currentValue, null, 2) }
            </SyntaxHighlighter>
          </Fragment>
        </Placeholder>
      </div>
    </AddonPanel>
  );
});
