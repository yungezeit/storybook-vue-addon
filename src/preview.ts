import type { ProjectAnnotations, Renderer } from "storybook/internal/types";

import { KEY } from "./constants";
import { withGlobals } from "./withGlobals";
import { withModelValue } from "./withModelValue";

const preview: ProjectAnnotations<Renderer> = {
  decorators: [withGlobals, withModelValue],
  initialGlobals: {
    [KEY]: false,
  },
};

export default preview;
