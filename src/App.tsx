
import Navbar from './components/navbar/Navbar'
import Hero from './components/hero/Hero'
import Feature from './components/feature/featureCard'
import FAQ from './components/FAQ/FAQ'
import NewsLetter from './components/newsletter/Newsletter'
import Footer from './components/footer/footer'
// import Foot from './components/extra/foot'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Hero />
      <Feature />
      <FAQ />
      <NewsLetter />
    {/* <Foot /> */}
      <Footer />
    </>
  )
}

export default App
