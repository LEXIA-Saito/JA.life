export default function About() {
  const features = [
    {
      title: '文化交流',
      description: 'アフリカの豊かな文化を日本に紹介し、相互理解を深める活動を行っています。',
      icon: '🌍',
    },
    {
      title: '教育支援',
      description: 'アフリカの子どもたちの教育環境改善に向けた支援活動を実施しています。',
      icon: '📚',
    },
    {
      title: '国際協力',
      description: '持続可能な発展に向けた国際協力プロジェクトを推進しています。',
      icon: '🤝',
    },
  ]

  return (
    <section id="about" className="py-24 sm:py-32 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            私たちについて
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            JALIFE愛知は、日本とアフリカの友好関係を築き、
            相互の発展に貢献することを目指しています。
          </p>
        </div>
        
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.title} className="flex flex-col items-center text-center">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-lg bg-primary-600 text-white text-2xl">
                  {feature.icon}
                </div>
                <dt className="text-xl font-semibold leading-7 text-gray-900">
                  {feature.title}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="mx-auto mt-16 max-w-4xl">
          <div className="bg-white rounded-2xl shadow-sm p-8 lg:p-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">私たちのミッション</h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              JALIFE愛知は、日本とアフリカの架け橋として、文化的な相互理解を深め、
              教育・経済・社会の各分野における協力関係を構築することを使命としています。
              私たちは、多様性を尊重し、持続可能な発展を目指した活動を通じて、
              両地域の人々の生活向上に貢献します。
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}