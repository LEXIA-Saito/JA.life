export default function Properties() {
  const properties = [
    {
      id: 1,
      title: '新築マンション',
      location: '東京都渋谷区',
      price: '5,800万円',
      size: '3LDK / 75㎡',
      image: '/images/placeholder.svg',
      features: ['駅徒歩5分', '南向き', 'ペット可'],
    },
    {
      id: 2,
      title: '中古戸建て',
      location: '神奈川県横浜市',
      price: '4,200万円',
      size: '4LDK / 120㎡',
      image: '/images/placeholder.svg',
      features: ['駐車場2台', '庭付き', 'リフォーム済'],
    },
    {
      id: 3,
      title: '賃貸アパート',
      location: '東京都新宿区',
      price: '月額12万円',
      size: '1K / 25㎡',
      image: '/images/placeholder.svg',
      features: ['駅徒歩3分', '築浅', 'オートロック'],
    },
    {
      id: 4,
      title: '投資用マンション',
      location: '大阪府大阪市',
      price: '2,800万円',
      size: '1LDK / 45㎡',
      image: '/images/placeholder.svg',
      features: ['高利回り', '管理良好', '駅近'],
    },
  ]

  return (
    <section id="properties" className="py-24 sm:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">
            物件情報
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            厳選された物件を豊富に取り揃えております。
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          {properties.map((property) => (
            <article key={property.id} className="flex flex-col items-start border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative w-full">
                <div className="aspect-[16/9] w-full bg-gray-100 object-cover">
                  <div className="flex h-full items-center justify-center text-gray-400">
                    <svg className="h-12 w-12" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M4 5h16a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1zM4 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h16a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3H4z"/>
                      <path d="m15 9-6 6m0-6 6 6"/>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="p-6 w-full">
                <div className="flex items-center gap-x-4 text-xs">
                  <span className="text-gray-500">{property.location}</span>
                  <span className="relative z-10 rounded-full bg-black px-3 py-1.5 font-medium text-white">
                    {property.size}
                  </span>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-black group-hover:text-gray-600">
                    {property.title}
                  </h3>
                  <p className="mt-2 text-xl font-bold text-black">
                    {property.price}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {property.features.map((feature, index) => (
                      <span key={index} className="inline-flex items-center rounded-md bg-gray-100 px-2 py-1 text-xs font-medium text-gray-600">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
                <button className="mt-6 w-full rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black transition-colors">
                  詳細を見る
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="rounded-md bg-black px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black transition-colors">
            すべての物件を見る
          </button>
        </div>
      </div>
    </section>
  )
}