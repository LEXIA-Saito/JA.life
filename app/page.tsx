import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Properties from '@/components/Properties'
import Process from '@/components/Process'
import Company from '@/components/Company'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <main id="main-content">
        <Hero />
        <Properties />
        <Process />
        <Company />
        <Contact />
      </main>
      <Footer />
    </>
  )
}