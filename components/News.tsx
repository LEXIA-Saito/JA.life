export default function News() {
  const news = [
    {
      id: 1,
      title: 'アフリカ文化祭2024開催のお知らせ',
      excerpt: '今年も愛知県内でアフリカ文化祭を開催いたします。音楽、ダンス、料理など盛りだくさんの内容です。',
      date: '2024年3月15日',
      category: 'イベント',
    },
    {
      id: 2,
      title: '教育支援プロジェクト進捗報告',
      excerpt: 'ケニアでの学校建設プロジェクトが順調に進んでいます。現地からの最新レポートをお届けします。',
      date: '2024年3月10日',
      category: '支援活動',
    },
    {
      id: 3,
      title: '新メンバー募集のお知らせ',
      excerpt: 'JALIFE愛知では、一緒に活動していただける新しいメンバーを募集しています。',
      date: '2024年3月5日',
      category: '募集',
    },
  ]

  return (
    <section id="news" className="py-24 sm:py-32 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            最新ニュース
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            私たちの最新の活動や取り組みをお知らせします。
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {news.map((article) => (
            <article key={article.id} className="flex flex-col items-start justify-between bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-x-4 text-xs">
                <time dateTime={article.date} className="text-gray-500">
                  {article.date}
                </time>
                <span className="relative z-10 rounded-full bg-primary-50 px-3 py-1.5 font-medium text-primary-600">
                  {article.category}
                </span>
              </div>
              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                  <span className="absolute inset-0" />
                  {article.title}
                </h3>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                  {article.excerpt}
                </p>
              </div>
              <div className="relative mt-8 flex items-center gap-x-4">
                <div className="text-sm leading-6">
                  <p className="font-semibold text-gray-900">
                    <span className="absolute inset-0" />
                    JALIFE愛知
                  </p>
                  <p className="text-gray-600">事務局</p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="rounded-md bg-primary-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600 transition-colors">
            すべてのニュースを見る
          </button>
        </div>
      </div>
    </section>
  )
}