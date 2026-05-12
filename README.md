# カラオケ喫茶 コンパ 公式サイト

大阪府大阪市都島区、京橋駅徒歩圏内のカラオケ喫茶コンパの公式サイトです。

## URL

https://karaoke-compa.com

## 技術スタック

- [Next.js 16](https://nextjs.org/) - Reactフレームワーク
- [TypeScript](https://www.typescriptlang.org/) - 型安全な開発
- [Tailwind CSS v4](https://tailwindcss.com/) - スタイリング
- [Storybook 10](https://storybook.js.org/) - コンポーネントカタログ
- [Cloudflare Pages](https://pages.cloudflare.com/) - ホスティング

## 機能

- レスポンシブデザイン（PC・スマホ対応）
- ハンバーガーメニュー
- スクロールアニメーション（Intersection Observer API）
- Googleマップ埋め込み
- FAQアコーディオン
- SEO対策（メタデータ・構造化データ・サイトマップ）
- VRT（Visual Regression Testing）

## ディレクトリ構成

```
app/
├── components/
│   ├── layout/
│   │   ├── Header/
│   │   └── Footer/
│   ├── sections/
│   │   ├── KeyVisual/
│   │   │   ├── index.tsx
│   │   │   └── FeatureBadge/
│   │   ├── Gallery/
│   │   ├── Price/
│   │   │   ├── index.tsx
│   │   │   └── PriceCard.tsx
│   │   ├── Faq/
│   │   │   ├── index.tsx
│   │   │   └── FaqItem.tsx
│   │   └── Access/
│   └── ui/
│       ├── TelButton/
│       ├── SectionHeader/
│       ├── SectionWrapper/
│       └── FadeIn/
├── data/
├── defs/
├── hooks/
│   └── useInView.ts
├── JsonLd.tsx
├── layout.tsx
├── page.tsx
├── sitemap.ts
└── robots.ts
public/
└── images/
.storybook/
tests/
└── vrt/
```

## 開発環境のセットアップ

```bash
# リポジトリをクローン
git clone https://github.com/atsmile/karaoke-compa.git

# 依存パッケージをインストール
npm install

# Playwrightブラウザをインストール
npx playwright install chromium

# 開発サーバーを起動
npm run dev
```

## Storybook

```bash
# Storybookを起動
npm run storybook
```

Storybookは以下にデプロイされています。  
https://karaoke-compa-storybook.atsmile.dev

## VRT（Visual Regression Testing）

`@storycap-testrun/browser` + `reg-suit` を使ったStorybookベースのコンポーネント単位VRTを導入しています。

```bash
# スクリーンショット撮影
npx vitest --project sb-mobile --project sb-desktop run

# 差分確認・S3アップロード
npx reg-suit run
```

## デプロイ

GitHubのmainブランチへのpushで自動デプロイされます。

## CI/CD

GitHub ActionsでPR時に以下を自動実行しています。

- VRT（Storybookコンポーネントの差分確認・S3レポート・PRコメント通知）
- Cloudflare Pagesへの自動デプロイ

## 今後の予定

- 姉妹店舗ページの追加
- Supabase（PostgreSQL）+ Prismaによるデータベース管理への移行
