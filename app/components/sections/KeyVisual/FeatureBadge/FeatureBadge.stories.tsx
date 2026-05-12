import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import FeatureBadge from "./index";
import { features } from "@data/keyvisual";

const meta: Meta<typeof FeatureBadge> = {
  title: "Sections/KeyVisual/FeatureBadge",
  component: FeatureBadge,
  tags: ["autodocs"],
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
};

export default meta;
type Story = StoryObj<typeof FeatureBadge>;

export const Mobile: Story = {
  args: {
    children: features[0],
  },

  decorators: [
    (Story) => (
      <div className="p-4 bg-stone-900">
        <Story />
      </div>
    ),
  ],
};

export const Desktop: Story = {
  globals: {
    viewport: { value: "desktop" },
  },
  args: {
    children: features[0],
  },
  decorators: [
    (Story) => (
      <div className="p-4 bg-stone-900">
        <Story />
      </div>
    ),
  ],
};

export const AllBadges_Mobile: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2 p-4 bg-stone-900">
      {features.map((text) => (
        <FeatureBadge key={text}>{text}</FeatureBadge>
      ))}
    </div>
  ),
};
export const AllBadges_Desktop: Story = {
  globals: {
    viewport: { value: "desktop" },
  },
  render: () => (
    <div className="flex flex-wrap gap-2 p-4 bg-stone-900">
      {features.map((text) => (
        <FeatureBadge key={text}>{text}</FeatureBadge>
      ))}
    </div>
  ),
};
