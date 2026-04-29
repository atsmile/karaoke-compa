import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import PriceCard from "./PriceCard";
import { prices } from "@data/price";

const meta: Meta<typeof PriceCard> = {
  title: "Sections/Price/PriceCard",
  component: PriceCard,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof PriceCard>;

export const Daytime: Story = {
  args: prices[0],
};

export const NightMale: Story = {
  args: prices[1],
};

export const NightFemale: Story = {
  args: prices[2],
};
