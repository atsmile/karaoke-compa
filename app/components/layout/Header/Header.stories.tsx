import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { userEvent, within, waitFor } from "storybook/test";

import Header from "./index";

const meta: Meta<typeof Header> = {
  title: "Layout/Header",
  component: Header,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof Header>;

export const Mobile: Story = {};

export const Desktop: Story = {
  globals: {
    viewport: { value: "desktop" },
  },
};
export const Mobile_Open: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole("button", { name: "メニューを開く" });
    await userEvent.click(button);
    await waitFor(() => {
      const btn = canvas.getByRole("button", { name: "メニューを閉じる" });
      if (!btn) throw new Error();
    });
    button.blur();
  },
};
