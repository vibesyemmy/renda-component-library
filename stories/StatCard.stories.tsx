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
    priceChange: {
      control: "number",
    },
    currency: {
      control: "text",
    },
  },
} satisfies Meta<typeof StatCard>

export default meta
type Story = StoryObj<typeof meta>

export const WithImage: Story = {
  args: {
    symbol: "BTC",
    price: "15,234,567.89",
    priceChange: 5.23,
    imageUrl:
      "https://dynamic-assets.coinbase.com/e785e0181f1a23a30d9476038d9be91e9f6c63959b538eabbc51a1abc8898940383291eede695c3b8dfaa1829a9b57f5a2d0a16b0523580346c6b8fab67af14b/asset_icons/b57ac673f06a4b0338a596817eb0a50ce16e2059f327dc117744449a47915cb2.png",
    currency: "NGN",
  },
}

export const PositiveChange: Story = {
  args: {
    symbol: "ETH",
    price: "4,553,355.61",
    priceChange: 0.4,
    imageUrl:
      "https://dynamic-assets.coinbase.com/dbb4b4983bde81309ddab83eb598358eb44375b930b94687ebe38bc22e52c3b2125258ffb8477a5ef22e33d6bd72e32a506c391caa13af64c00e46613c3e5806/asset_icons/4113b082d21cc5fab17fc8f2d19fb996165bcce635e6900f7fc2d57c4ef33ae9.png",
    currency: "NGN",
  },
}

export const NegativeChange: Story = {
  args: {
    symbol: "SOL",
    price: "202,693.73",
    priceChange: -0.55,
    imageUrl:
      "https://asset-metadata-service-production.s3.amazonaws.com/asset_icons/b658adaf7913c1513c8d120bcb41934a5a4bf09b6adbcb436085e2fbf6eb128c.png",
    currency: "NGN",
  },
}

export const NeutralChange: Story = {
  args: {
    symbol: "USDC",
    price: "1,440.60",
    priceChange: 0.0,
    imageUrl:
      "https://dynamic-assets.coinbase.com/3c15df5e2ac7d4abbe9499ed9335041f00c620f28e8de2f93474a9f432058742cdf4674bd43f309e69778a26969372310135be97eb183d91c492154176d455b8/asset_icons/9d67b728b6c8f457717154b3a35f9ddc702eae7e76c4684ee39302c4d7fd0bb8.png",
    currency: "NGN",
  },
}

export const WithIcon: Story = {
  args: {
    symbol: "Revenue",
    price: "2,450,000",
    priceChange: 12.5,
    icon: "TrendingUp",
    currency: "₦",
  },
}

export const WithoutCurrency: Story = {
  args: {
    symbol: "BTC",
    price: "45,230",
    priceChange: 2.5,
    imageUrl:
      "https://dynamic-assets.coinbase.com/e785e0181f1a23a30d9476038d9be91e9f6c63959b538eabbc51a1abc8898940383291eede695c3b8dfaa1829a9b57f5a2d0a16b0523580346c6b8fab67af14b/asset_icons/b57ac673f06a4b0338a596817eb0a50ce16e2059f327dc117744449a47915cb2.png",
  },
}

export const WithClickHandler: Story = {
  args: {
    symbol: "ETH",
    price: "2,450",
    priceChange: -5.2,
    icon: "TrendingDown",
    currency: "$",
    onClick: () => alert("Card clicked!"),
  },
}

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <StatCard
        symbol="BTC"
        price="15,234,567.89"
        priceChange={5.23}
        imageUrl="https://dynamic-assets.coinbase.com/e785e0181f1a23a30d9476038d9be91e9f6c63959b538eabbc51a1abc8898940383291eede695c3b8dfaa1829a9b57f5a2d0a16b0523580346c6b8fab67af14b/asset_icons/b57ac673f06a4b0338a596817eb0a50ce16e2059f327dc117744449a47915cb2.png"
        currency="NGN"
      />
      <StatCard
        symbol="ETH"
        price="4,553,355.61"
        priceChange={-0.4}
        imageUrl="https://dynamic-assets.coinbase.com/dbb4b4983bde81309ddab83eb598358eb44375b930b94687ebe38bc22e52c3b2125258ffb8477a5ef22e33d6bd72e32a506c391caa13af64c00e46613c3e5806/asset_icons/4113b082d21cc5fab17fc8f2d19fb996165bcce635e6900f7fc2d57c4ef33ae9.png"
        currency="NGN"
      />
      <StatCard
        symbol="USDC"
        price="1,440.60"
        priceChange={0.0}
        imageUrl="https://dynamic-assets.coinbase.com/3c15df5e2ac7d4abbe9499ed9335041f00c620f28e8de2f93474a9f432058742cdf4674bd43f309e69778a26969372310135be97eb183d91c492154176d455b8/asset_icons/9d67b728b6c8f457717154b3a35f9ddc702eae7e76c4684ee39302c4d7fd0bb8.png"
        currency="NGN"
      />
      <StatCard
        symbol="SOL"
        price="202,693.73"
        priceChange={-0.55}
        imageUrl="https://asset-metadata-service-production.s3.amazonaws.com/asset_icons/b658adaf7913c1513c8d120bcb41934a5a4bf09b6adbcb436085e2fbf6eb128c.png"
        currency="NGN"
      />
    </div>
  ),
}

export const CryptoCarousel: Story = {
  render: () => {
    const cryptoData = [
      {
        symbol: "USDC",
        price: "1,440.60",
        priceChange: 0.0,
        imageUrl:
          "https://dynamic-assets.coinbase.com/3c15df5e2ac7d4abbe9499ed9335041f00c620f28e8de2f93474a9f432058742cdf4674bd43f309e69778a26969372310135be97eb183d91c492154176d455b8/asset_icons/9d67b728b6c8f457717154b3a35f9ddc702eae7e76c4684ee39302c4d7fd0bb8.png",
      },
      {
        symbol: "ETH",
        price: "4,553,355.61",
        priceChange: -0.4,
        imageUrl:
          "https://dynamic-assets.coinbase.com/dbb4b4983bde81309ddab83eb598358eb44375b930b94687ebe38bc22e52c3b2125258ffb8477a5ef22e33d6bd72e32a506c391caa13af64c00e46613c3e5806/asset_icons/4113b082d21cc5fab17fc8f2d19fb996165bcce635e6900f7fc2d57c4ef33ae9.png",
      },
      {
        symbol: "SOL",
        price: "202,693.73",
        priceChange: -0.55,
        imageUrl:
          "https://asset-metadata-service-production.s3.amazonaws.com/asset_icons/b658adaf7913c1513c8d120bcb41934a5a4bf09b6adbcb436085e2fbf6eb128c.png",
      },
      {
        symbol: "ADA",
        price: "725.99",
        priceChange: -2.49,
        imageUrl:
          "https://dynamic-assets.coinbase.com/da39dfe3632bf7a9c26b5aff94fe72bc1a70850bc488e0c4d68ab3cf87ddac277cd1561427b94acb4b3e37479a1f73f1c37ed311c11a742d6edf512672aea7bb/asset_icons/a55046bc53c5de686bf82a2d9d280b006bd8d2aa1f3bbb4eba28f0c69c7597da.png",
      },
      {
        symbol: "USDT",
        price: "1,439.76",
        priceChange: -0.03,
        imageUrl:
          "https://dynamic-assets.coinbase.com/41f6a93a3a222078c939115fc304a67c384886b7a9e6c15dcbfa6519dc45f6bb4a586e9c48535d099efa596dbf8a9dd72b05815bcd32ac650c50abb5391a5bd0/asset_icons/1f8489bb280fb0a0fd643c1161312ba49655040e9aaaced5f9ad3eeaf868eadc.png",
      },
    ]

    return (
      <div className="w-full max-w-4xl">
        <h3 className="text-xl font-semibold mb-4 text-foreground">You may also like</h3>
        <div className="flex gap-3 overflow-x-auto pb-2">
          {cryptoData.map((item, index) => (
            <StatCard key={`${item.symbol}-${index}`} {...item} currency="NGN" />
          ))}
        </div>
      </div>
    )
  },
}
