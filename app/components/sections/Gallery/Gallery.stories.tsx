import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import Gallery from "./index";

const meta: Meta<typeof Gallery> = {
  title: "Sections/Gallery",
  component: Gallery,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof Gallery>;

export const Mobile: Story = {};

export const Desktop: Story = {
  globals: {
    viewport: { value: "desktop" },
  },
};
