import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import SectionHeader from './index'

const meta: Meta<typeof SectionHeader> = {
  title: 'UI/SectionHeader',
  component: SectionHeader,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof SectionHeader>

export const Default: Story = {
  args: {
    label: 'gallery',
    title: '店内の様子',
  },
}