import Link from 'next/link'

export default function Hero() {
  return (
    <section id="top" className="relative bg-black text-white">
      <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            理想の住まいを
            <span className="block text-gray-300">見つけませんか</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-300">
            豊富な物件情報と確かな実績で、お客様の不動産取引をサポートいたします。
            売買から賃貸まで、幅広いニーズにお応えします。
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="#properties"
              className="rounded-md bg-white px-6 py-3 text-base font-semibold text-black shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-colors"
            >
              物件を探す
            </Link>
            <Link
              href="#company"
              className="text-base font-semibold leading-6 text-white hover:text-gray-300 transition-colors"
            >
              会社概要を見る <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
      
      {/* シンプルな装飾要素 */}
      <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
        <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-gray-800 to-gray-600 opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" />
      </div>
    </section>
  )
}