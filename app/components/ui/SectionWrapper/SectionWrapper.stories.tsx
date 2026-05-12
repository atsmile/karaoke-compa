import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import SectionWrapper from "./index";

const meta: Meta<typeof SectionWrapper> = {
  title: "UI/SectionWrapper",
  component: SectionWrapper,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof SectionWrapper>;

export const White_Mobile: Story = {
  args: {
    variant: "white",
    children: "コンテンツが入ります",
  },
};

export const White_Desktop: Story = {
  globals: {
    viewport: { value: "desktop" },
  },
  args: {
    variant: "white",
    children: "コンテンツが入ります",
  },
};

export const Amber_Mobile: Story = {
  args: {
    variant: "amber",
    children: "コンテンツが入ります",
  },
};

export const Amber_Desktop: Story = {
  globals: {
    viewport: { value: "desktop" },
  },
  args: {
    variant: "amber",
    children: "コンテンツが入ります",
  },
};
