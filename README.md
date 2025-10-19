# 不動産会社 ウェブサイト

このプロジェクトは、不動産会社のウェブサイトをモダンなNext.jsアプリケーションとして開発したものです。

## 特徴

- **モダンなフレームワーク**: Next.js 14 + React 18 + TypeScript
- **レスポンシブデザイン**: Tailwind CSSによるモバイルファーストデザイン
- **SEO最適化**: メタタグ、構造化データ、サイトマップ対応
- **アクセシビリティ**: WCAG 2.1準拠のアクセシブルなUI
- **パフォーマンス**: 画像最適化、コード分割、キャッシュ戦略
- **多言語対応準備**: 日本語・英語対応の基盤

## 技術スタック

- **フロントエンド**: Next.js, React, TypeScript
- **スタイリング**: Tailwind CSS
- **フォント**: Noto Sans JP (Google Fonts)
- **開発ツール**: ESLint, Prettier

## セットアップ

1. 依存関係のインストール:
```bash
npm install
```

2. 開発サーバーの起動:
```bash
npm run dev
```

3. ブラウザで http://localhost:3000 を開く

## プロジェクト構造

```
├── app/                    # Next.js App Router
│   ├── globals.css        # グローバルスタイル
│   ├── layout.tsx         # ルートレイアウト
│   └── page.tsx           # ホームページ
├── components/            # Reactコンポーネント
│   ├── Header.tsx         # ヘッダーナビゲーション
│   ├── Hero.tsx           # ヒーローセクション
│   ├── Properties.tsx     # 物件情報
│   ├── Process.tsx        # 不動産取引の流れ
│   ├── Company.tsx        # 会社概要
│   ├── Contact.tsx        # お問い合わせ
│   └── Footer.tsx         # フッター
├── public/                # 静的ファイル
└── styles/                # 追加スタイル
```

## 主な改善点

### パフォーマンス
- Next.js の自動最適化機能
- 画像の遅延読み込み
- コード分割とバンドル最適化

### SEO
- メタタグの最適化
- Open Graph対応
- 構造化データ
- サイトマップ生成

### アクセシビリティ
- セマンティックHTML
- キーボードナビゲーション
- スクリーンリーダー対応
- 適切なコントラスト比

### ユーザビリティ
- レスポンシブデザイン
- 直感的なナビゲーション
- 高速な表示速度
- モバイル最適化

## デプロイ

### Vercel (推奨)
1. GitHubリポジトリをVercelに接続
2. Vercelが自動的にNext.jsプロジェクトを検出
3. 自動デプロイが実行されます

**注意**: vercel.jsonファイルは不要です。Vercelが自動的に最適な設定を適用します。

### ローカルビルド確認
```bash
npm run build
npm start
```

### その他のプラットフォーム
- Netlify: `npm run build && npm run export`
- AWS Amplify: 自動ビルド設定
- 静的ホスティング: `.next`フォルダをアップロード

## カスタマイズ

### カラーテーマ
`tailwind.config.js` でカラーパレットを変更できます。

### コンテンツ
各コンポーネントファイルでテキストや画像を更新できます。

### 機能追加
- ブログ機能
- イベント管理
- 会員システム
- 多言語切り替え

## ライセンス

このプロジェクトはMITライセンスの下で公開されています。