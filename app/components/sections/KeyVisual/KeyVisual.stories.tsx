import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import KeyVisual from "./index";

const meta: Meta<typeof KeyVisual> = {
  title: "Sections/KeyVisual",
  component: KeyVisual,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof KeyVisual>;

export const Default: Story = {};
