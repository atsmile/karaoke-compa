# カラオケ喫茶 コンパ 公式サイト

大阪府大阪市都島区、京橋駅徒歩圏内のカラオケ喫茶コンパの公式サイトです。

## URL

https://karaoke-compa.com

## 技術スタック

- [Next.js 16](https://nextjs.org/) - Reactフレームワーク
- [TypeScript](https://www.typescriptlang.org/) - 型安全な開発
- [Tailwind CSS v4](https://tailwindcss.com/) - スタイリング
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
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   ├── sections/
│   │   ├── KeyVisual/
│   │   │   ├── index.tsx
│   │   │   └── FeatureBadge.tsx
│   │   ├── Gallery.tsx
│   │   ├── Price/
│   │   │   ├── index.tsx
│   │   │   └── PriceCard.tsx
│   │   ├── Faq/
│   │   │   ├── index.tsx
│   │   │   └── FaqItem.tsx
│   │   └── Access.tsx
│   └── ui/
│       ├── SectionHeader.tsx
│       ├── SectionWrapper.tsx
│       ├── TelButton.tsx
│       └── FadeIn.tsx
├── hooks/
│   └── useInView.ts
├── JsonLd.tsx
├── layout.tsx
├── page.tsx
├── sitemap.ts
└── robots.ts
public/
└── images/
tests/
└── vrt/
├── top.spec.ts
└── snapshots/
```

## 開発環境のセットアップ

```bash
# リポジトリをクローン
git clone https://github.com/atsmile/karaoke-compa.git

# 依存パッケージをインストール
npm install

# Playwrightブラウザをインストール
npx playwright install chromium webkit

# 開発サーバーを起動
npm run dev
```

## VRT（Visual Regression Testing）

Playwrightを使ったスクリーンショット比較テストを導入しています。

```bash
# ベースライン撮影
npx playwright test --update-snapshots

# 差分確認
npx playwright test
```

### 別環境でクローンした場合の注意

GitHubリポジトリの以下の設定が必要です。

`Settings` → `Actions` → `General` → `Workflow permissions` → `Read and write permissions`

## デプロイ

GitHubのmainブランチへのpushで自動デプロイされます。

## CI/CD

GitHub ActionsでPR時に以下を自動実行しています。

- VRT（スクリーンショット差分確認）
- Cloudflare Pagesへの自動デプロイ

## 今後の予定

- reg-suit導入（VRT差分レポートのPRコメント通知）
- Storybook導入
- 姉妹店舗ページの追加
- Neon（PostgreSQL）+ Prismaによるデータベース管理への移行
