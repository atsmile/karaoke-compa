import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { FadeIn } from "./index";

const meta: Meta<typeof FadeIn> = {
  title: "UI/FadeIn",
  component: FadeIn,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof FadeIn>;

export const Mobile: Story = {
  args: {
    children: "フェードインするコンテンツ",
  },
};

export const Desktop: Story = {
  globals: {
    viewport: { value: "desktop" },
  },
  args: {
    children: "フェードインするコンテンツ",
  },
};
