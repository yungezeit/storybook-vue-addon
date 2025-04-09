import React from 'react';
import { addons, types, useParameter } from 'storybook/internal/manager-api';

import { Panel } from './components/Panel';
import { Tool } from './components/Tool';
import { ADDON_ID, PANEL_ID, TOOL_ID } from './constants';
import themeDark from './theme-dark';
import themeLight from './theme-light';

const dark = true;

const theme = dark ? themeDark : themeLight;
addons.setConfig({ theme });
addons.register(ADDON_ID, (api) => {
  addons.add(TOOL_ID, {
    type: types.TOOL,
    title: 'Open documentation',
    match: ({ viewMode }) => !!viewMode?.match(/^(story)$/),
    render: () => {
      const documentationUrl = useParameter('documentationUrl', undefined);
      return documentationUrl && <Tool api={api} url={documentationUrl} />;
    },
  });

  addons.add(PANEL_ID, {
    type: types.PANEL,
    title: 'Vue model',
    match: ({ viewMode }) => viewMode === 'story',
    render: ({ active }) => <Panel active={active} />,
  });
});
