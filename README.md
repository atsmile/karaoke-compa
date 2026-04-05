# カラオケ喫茶 コンパ 公式サイト

大阪府大阪市都島区、京橋駅徒歩圏内のカラオケ喫茶コンパの公式サイトです。

## URL

https://karaoke-compa.com

## 技術スタック

- [Next.js 16](https://nextjs.org/) - Reactフレームワーク
- [TypeScript](https://www.typescriptlang.org/) - 型安全な開発
- [Tailwind CSS v4](https://tailwindcss.com/) - スタイリング
- [framer-motion](https://www.framer-motion.com/) - アニメーション
- [Cloudflare Pages](https://pages.cloudflare.com/) - ホスティング

## 機能

- レスポンシブデザイン（PC・スマホ対応）
- ハンバーガーメニュー
- スクロールアニメーション
- Googleマップ埋め込み
- FAQアコーディオン
- SEO対策（メタデータ・構造化データ・サイトマップ）

## ディレクトリ構成
```

app/
├── components/
│ ├── Header.tsx
│ ├── KeyVisual/
│ │ ├── index.tsx
│ │ └── FeatureBadge.tsx
│ ├── Gallery.tsx
│ ├── Price/
│ │ ├── index.tsx
│ │ └── PriceCard.tsx
│ ├── Faq/
│ │ ├── index.tsx
│ │ └── FaqItem.tsx
│ ├── Access.tsx
│ ├── Footer.tsx
│ ├── TelButton.tsx
│ ├── SectionHeader.tsx
│ ├── SectionWrapper.tsx
│ └── JsonLd.tsx
├── layout.tsx
├── page.tsx
├── sitemap.ts
└── robots.ts
public/
└── images/
```

## 開発環境のセットアップ

```bash
# リポジトリをクローン
git clone https://github.com/t-hana/karaoke-compa.git

# 依存パッケージをインストール
npm install

# 開発サーバーを起動
npm run dev
```

## デプロイ

GitHubのmainブランチへのpushで自動デプロイされます。

## CI/CD

GitHub Actionsで以下を自動実行しています。

- TypeScript型チェック
- ESLint
- ビルド確認
