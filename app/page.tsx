import Hero from '@/components/Hero'
import Projects from '@/components/Projects'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen px-6 py-16 max-w-3xl mx-auto">
      <Hero />
      <Projects />
      <Footer />
    </main>
  )
}
