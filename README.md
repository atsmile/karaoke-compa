# カラオケ喫茶 コンパ 公式サイト

![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js) ![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript) ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38bdf8?logo=tailwindcss) ![Storybook](https://img.shields.io/badge/Storybook-10-FF4785?logo=storybook) ![Cloudflare Pages](https://img.shields.io/badge/Cloudflare-Pages-F38020?logo=cloudflare)

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

## コマンド一覧

| コマンド | 内容 |
| --- | --- |
| `npm run dev` | 開発サーバーを起動（http://localhost:3000） |
| `npm run build` | 本番ビルド |
| `npm run lint` | ESLintによるコードチェック |
| `npm run storybook` | Storybookを起動（http://localhost:6006） |
| `npm run build-storybook` | Storybookを静的ビルド |

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

GitHub ActionsでPR・mainへのpush時に以下を自動実行しています。

**CI（`ci.yml`）— PR・mainへのpushで実行**
- 型チェック（`tsc --noEmit`）
- Lint（ESLint）
- ビルド確認（`next build`）

**VRT（`vrt.yml`）— PR時に実行**
- Storybookコンポーネントのスクリーンショット撮影
- `reg-suit` による差分確認・S3レポート生成
- PRへのコメント通知

**デプロイ — mainへのpushで実行**
- Cloudflare Pagesへ自動デプロイ

## 今後の予定

- 姉妹店舗ページの追加
- Supabase（PostgreSQL）+ Prismaによるデータベース管理への移行
