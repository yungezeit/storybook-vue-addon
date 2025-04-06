import React from "react";
import { addons, types } from "storybook/internal/manager-api";

import { Panel } from "./components/Panel";
import { Tool } from "./components/Tool";
import { ADDON_ID, PANEL_ID, TOOL_ID } from "./constants";

addons.register(ADDON_ID, (api) => {
  addons.add(TOOL_ID, {
    type: types.TOOL,
    title: "Open documentation",
    match: ({ viewMode, tabId }) =>
      !!((viewMode && viewMode.match(/^(story)$/)) ),
    render: () => <Tool api={api} />,
  });

  addons.add(PANEL_ID, {
    type: types.PANEL,
    title: "Model",
    match: ({ viewMode }) => viewMode === "story",
    render: ({ active }) => <Panel active={active} />
  });
});
