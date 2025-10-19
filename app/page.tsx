import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Activities from '@/components/Activities'
import News from '@/components/News'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <main id="main-content">
        <Hero />
        <About />
        <Activities />
        <News />
        <Contact />
      </main>
      <Footer />
    </>
  )
}