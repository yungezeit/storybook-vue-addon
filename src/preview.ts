import type { ProjectAnnotations, Renderer } from 'storybook/internal/types';

import { withModelValue } from './withModelValue';

const preview: ProjectAnnotations<Renderer> = {
  decorators: [withModelValue],
};

export default preview;
