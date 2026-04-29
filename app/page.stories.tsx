import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import Home from "./page";
import Header from "@layout/Header";
import Footer from "@layout/Footer";

const meta: Meta<typeof Home> = {
  title: "Pages/Top",
  component: Home,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story) => (
      <>
        <Header />
        <Story />
        <Footer />
      </>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Home>;

export const Default: Story = {};
