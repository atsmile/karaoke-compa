import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import FaqItem from "./FaqItem";
import { faqs } from "@data/faq";

const meta: Meta<typeof FaqItem> = {
  title: "Sections/Faq/FaqItem",
  component: FaqItem,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof FaqItem>;

export const Default: Story = {
  args: faqs[0],
};
