import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import Faq from "./index";

const meta: Meta<typeof Faq> = {
  title: "Sections/Faq",
  component: Faq,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof Faq>;

export const Mobile: Story = {};

export const Desktop: Story = {
  globals: {
    viewport: { value: "desktop" },
  },
};
