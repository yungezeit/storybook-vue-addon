import type { API } from 'storybook/internal/manager-api';
import React, { memo, useCallback, useEffect } from 'react';
import { DocumentIcon } from '@storybook/icons';
import { IconButton } from 'storybook/internal/components';
import { ADDON_ID, TOOL_ID } from '../constants';

export const Tool = memo(function MyAddonSelector({ api, url }: { api: API; url: string }) {
  const openDocumentation = useCallback(() => {
    window.open(url, '_blank');
  }, []);

  useEffect(() => {
    api.setAddonShortcut(ADDON_ID, {
      label: 'Open documentation [F1]',
      defaultShortcut: ['F1'],
      actionName: 'documentation',
      showInMenu: false,
      action: openDocumentation,
    });
  }, [api]);

  return (
    <IconButton key={TOOL_ID} title="Open documentation" onClick={openDocumentation}>
      <DocumentIcon />
    </IconButton>
  );
});
