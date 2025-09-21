
import Navbar from './components/navbar/Navbar'
import Hero from './components/hero/Hero'
import Feature from './components/feature/featureCard'
import FAQ from './components/FAQ/FAQ'
import NewsLetter from './components/newsletter/Newsletter'
import Footer from './components/footer/footer'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Hero />
      <Feature />
      <FAQ />
      <NewsLetter />
      <Footer />
    </>
  )
}

export default App
