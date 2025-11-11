import type { Meta, StoryObj } from "@storybook/react"
import { StatCard } from "@/components/molecules/stat-card"

const meta = {
  title: "Molecules/StatCard",
  component: StatCard,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["gain", "loss", "neutral"],
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
  },
} satisfies Meta<typeof StatCard>

export default meta
type Story = StoryObj<typeof meta>

export const Gain: Story = {
  args: {
    symbol: "IMX",
    price: "$1.53",
    percent: 15.24,
    subtitle: "24h",
    icon: "TrendingUp",
    variant: "gain",
    size: "md",
  },
}

export const Loss: Story = {
  args: {
    symbol: "NCT",
    price: "$0.0244",
    percent: -13.51,
    subtitle: "24h",
    icon: "TrendingDown",
    variant: "loss",
    size: "md",
  },
}

export const Neutral: Story = {
  args: {
    symbol: "MATH",
    price: "$0.43",
    percent: 0.0,
    subtitle: "24h",
    icon: "BarChart",
    variant: "neutral",
    size: "md",
  },
}

export const Small: Story = {
  args: {
    symbol: "BTC",
    price: "$45,230",
    percent: 2.5,
    subtitle: "24h",
    icon: "TrendingUp",
    variant: "gain",
    size: "sm",
  },
}

export const Large: Story = {
  args: {
    symbol: "ETH",
    price: "$2,450",
    percent: -5.2,
    subtitle: "24h",
    icon: "TrendingDown",
    variant: "loss",
    size: "lg",
  },
}

export const WithoutIcon: Story = {
  args: {
    symbol: "SOL",
    price: "$98.50",
    percent: 8.1,
    subtitle: "24h",
    variant: "gain",
    size: "md",
  },
}

export const WithoutSubtitle: Story = {
  args: {
    symbol: "ADA",
    price: "$0.52",
    percent: 1.2,
    icon: "TrendingUp",
    variant: "gain",
    size: "md",
  },
}

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <StatCard
        symbol="IMX"
        price="$1.53"
        percent={15.24}
        subtitle="24h"
        icon="TrendingUp"
        variant="gain"
        size="md"
      />
      <StatCard
        symbol="NCT"
        price="$0.0244"
        percent={-13.51}
        subtitle="24h"
        icon="TrendingDown"
        variant="loss"
        size="md"
      />
      <StatCard
        symbol="MATH"
        price="$0.43"
        percent={0.0}
        subtitle="24h"
        icon="BarChart"
        variant="neutral"
        size="md"
      />
    </div>
  ),
}

export const AllSizes: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4 items-end">
      <StatCard
        symbol="BTC"
        price="$45,230"
        percent={2.5}
        subtitle="24h"
        icon="TrendingUp"
        variant="gain"
        size="sm"
      />
      <StatCard
        symbol="ETH"
        price="$2,450"
        percent={-5.2}
        subtitle="24h"
        icon="TrendingDown"
        variant="loss"
        size="md"
      />
      <StatCard
        symbol="SOL"
        price="$98.50"
        percent={8.1}
        subtitle="24h"
        icon="TrendingUp"
        variant="gain"
        size="lg"
      />
    </div>
  ),
}
