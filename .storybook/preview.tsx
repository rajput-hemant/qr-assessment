import React from "react";
import { NextUIProvider } from "@nextui-org/system";
import type { Preview } from "@storybook/react";

import "./style.css";

const preview: Preview = {
  decorators: [
    (Story) => {
      return (
        <NextUIProvider>
          <Story />
        </NextUIProvider>
      );
    },
  ],
  parameters: {
    options: {
      storySort: {
        method: "alphabetical",
      },
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
