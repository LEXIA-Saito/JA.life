export default function Process() {
  const steps = [
    {
      step: '01',
      title: 'ご相談・ヒアリング',
      description: 'お客様のご希望やご予算をお聞きし、最適な物件をご提案いたします。',
      icon: '💬',
    },
    {
      step: '02',
      title: '物件のご紹介',
      description: 'ご希望に合った物件を厳選してご紹介。実際に物件をご見学いただけます。',
      icon: '🏠',
    },
    {
      step: '03',
      title: '契約手続き',
      description: '重要事項説明を行い、売買契約または賃貸契約を締結いたします。',
      icon: '📝',
    },
    {
      step: '04',
      title: 'お引き渡し',
      description: '残金決済・鍵のお引き渡しを行い、お取引完了となります。',
      icon: '🔑',
    },
  ]

  return (
    <section id="process" className="py-24 sm:py-32 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">
            不動産取引の流れ
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            安心・安全なお取引のため、丁寧にサポートいたします。
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-4xl">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => (
              <div key={step.step} className="relative">
                <div className="flex flex-col items-center text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-black text-white text-2xl font-bold mb-4">
                    {step.step}
                  </div>
                  <div className="mb-4 text-4xl">
                    {step.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-black mb-3">
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
                
                {/* 矢印（最後の要素以外） */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-8 h-0.5 bg-gray-300 transform -translate-y-1/2">
                    <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-4 border-l-gray-300 border-t-2 border-b-2 border-t-transparent border-b-transparent"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="mx-auto mt-16 max-w-4xl">
          <div className="bg-white rounded-2xl shadow-sm p-8 lg:p-12 border border-gray-200">
            <h3 className="text-2xl font-bold text-black mb-6">お取引の特徴</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl mb-3">⚡</div>
                <h4 className="font-semibold text-black mb-2">スピード対応</h4>
                <p className="text-sm text-gray-600">迅速な対応でお客様の時間を大切にします</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-3">🛡️</div>
                <h4 className="font-semibold text-black mb-2">安心サポート</h4>
                <p className="text-sm text-gray-600">専門スタッフが最後まで責任を持ってサポート</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-3">💰</div>
                <h4 className="font-semibold text-black mb-2">透明な料金</h4>
                <p className="text-sm text-gray-600">明確な料金体系で安心してご利用いただけます</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}