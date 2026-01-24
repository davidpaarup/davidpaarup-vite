import Navbar from './components/Navbar'
import Gallery from './components/Gallery'
import Footer from './components/Footer'
import { LanguageProvider } from './context/LanguageContext'

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white text-black font-sans selection:bg-black selection:text-white">
        <Navbar />
        
        <main>
          <Gallery />
        </main>

        <Footer />
      </div>
    </LanguageProvider>
  )
}

export default App
