export default function Activities() {
  const activities = [
    {
      title: '文化イベント',
      description: 'アフリカの音楽、ダンス、料理を紹介するイベントを定期的に開催しています。',
      image: '/images/cultural-event.jpg',
      category: '文化交流',
    },
    {
      title: '教育プログラム',
      description: '学校や地域でのアフリカ理解促進のための教育プログラムを実施しています。',
      image: '/images/education-program.jpg',
      category: '教育',
    },
    {
      title: '支援プロジェクト',
      description: 'アフリカの地域開発や教育支援のためのプロジェクトを運営しています。',
      image: '/images/support-project.jpg',
      category: '国際協力',
    },
    {
      title: '研究・調査',
      description: 'アフリカに関する研究活動や現地調査を通じて情報発信を行っています。',
      image: '/images/research.jpg',
      category: '研究',
    },
  ]

  return (
    <section id="activities" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            活動内容
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            私たちは多様な活動を通じて、日本とアフリカの交流を促進しています。
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          {activities.map((activity, index) => (
            <article key={activity.title} className="flex flex-col items-start">
              <div className="relative w-full">
                <div className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]">
                  <div className="flex h-full items-center justify-center text-gray-400">
                    <svg className="h-12 w-12" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M4 5h16a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1zM4 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h16a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3H4z"/>
                      <path d="m15 9-6 6m0-6 6 6"/>
                    </svg>
                  </div>
                </div>
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
              </div>
              <div className="max-w-xl">
                <div className="mt-8 flex items-center gap-x-4 text-xs">
                  <span className="relative z-10 rounded-full bg-primary-50 px-3 py-1.5 font-medium text-primary-600">
                    {activity.category}
                  </span>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <span className="absolute inset-0" />
                    {activity.title}
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                    {activity.description}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}