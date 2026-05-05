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

export const Default: Story = {};
