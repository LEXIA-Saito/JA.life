export default function Company() {
  const companyInfo = [
    { label: '会社名', value: '株式会社不動産会社' },
    { label: '設立', value: '2010年4月1日' },
    { label: '資本金', value: '1,000万円' },
    { label: '代表者', value: '代表取締役 田中太郎' },
    { label: '従業員数', value: '25名' },
    { label: '免許番号', value: '東京都知事(3)第12345号' },
  ]

  const services = [
    {
      title: '売買仲介',
      description: 'マンション、戸建て、土地の売買仲介を行います。',
      icon: '🏘️',
    },
    {
      title: '賃貸仲介',
      description: '賃貸物件の仲介・管理業務を行います。',
      icon: '🏢',
    },
    {
      title: '不動産投資',
      description: '投資用物件のご提案・サポートを行います。',
      icon: '📈',
    },
    {
      title: 'コンサルティング',
      description: '不動産に関する総合的なコンサルティングを提供します。',
      icon: '💼',
    },
  ]

  return (
    <section id="company" className="py-24 sm:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">
            会社概要
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            お客様に信頼される不動産会社として、誠実にサービスを提供しています。
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-4xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* 会社情報 */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-black mb-8">会社情報</h3>
              <dl className="space-y-6">
                {companyInfo.map((info) => (
                  <div key={info.label} className="flex flex-col sm:flex-row">
                    <dt className="text-sm font-medium text-gray-600 sm:w-24 mb-1 sm:mb-0">
                      {info.label}
                    </dt>
                    <dd className="text-sm text-black font-medium">
                      {info.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            {/* アクセス情報 */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-black mb-8">アクセス</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-black mb-2">所在地</h4>
                  <p className="text-sm text-gray-600">
                    〒100-0001<br />
                    東京都千代田区千代田1-1-1<br />
                    千代田ビル5F
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-black mb-2">アクセス</h4>
                  <p className="text-sm text-gray-600">
                    JR山手線「東京駅」徒歩5分<br />
                    東京メトロ丸ノ内線「東京駅」徒歩3分
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-black mb-2">営業時間</h4>
                  <p className="text-sm text-gray-600">
                    平日 9:00-18:00<br />
                    土日祝 10:00-17:00
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* サービス内容 */}
        <div className="mx-auto mt-16 max-w-6xl">
          <h3 className="text-2xl font-bold text-black text-center mb-12">サービス内容</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => (
              <div key={service.title} className="text-center border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">
                  {service.icon}
                </div>
                <h4 className="text-lg font-semibold text-black mb-3">
                  {service.title}
                </h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 代表メッセージ */}
        <div className="mx-auto mt-16 max-w-4xl">
          <div className="bg-black text-white rounded-2xl p-8 lg:p-12">
            <h3 className="text-2xl font-bold mb-6">代表メッセージ</h3>
            <p className="text-lg leading-relaxed mb-6">
              私たちは、お客様一人ひとりのライフスタイルに合った最適な不動産をご提案することを使命としています。
              豊富な経験と専門知識を活かし、安心・安全なお取引をサポートいたします。
            </p>
            <p className="text-gray-300">
              代表取締役 田中太郎
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}