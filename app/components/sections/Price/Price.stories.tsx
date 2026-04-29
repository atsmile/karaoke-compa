import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import Price from "./index";

const meta: Meta<typeof Price> = {
  title: "Sections/Price",
  component: Price,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof Price>;

export const Default: Story = {};
