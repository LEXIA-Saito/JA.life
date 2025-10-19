import Link from 'next/link'

export default function Hero() {
  return (
    <section id="home" className="relative bg-gradient-to-r from-primary-600 to-primary-700 text-white">
      <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            日本とアフリカの
            <span className="block text-yellow-300">架け橋として</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-primary-100">
            JALIFE愛知は、愛知県を拠点として日本とアフリカの文化交流・国際協力を推進する団体です。
            相互理解と友好関係の発展に貢献しています。
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="#about"
              className="rounded-md bg-white px-6 py-3 text-base font-semibold text-primary-600 shadow-sm hover:bg-gray-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-colors"
            >
              私たちについて
            </Link>
            <Link
              href="#activities"
              className="text-base font-semibold leading-6 text-white hover:text-yellow-300 transition-colors"
            >
              活動内容を見る <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
      
      {/* 装飾的な背景要素 */}
      <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
        <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-yellow-400 to-orange-600 opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" />
      </div>
    </section>
  )
}