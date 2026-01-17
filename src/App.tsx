import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Resume from './components/Resume'
import Gallery from './components/Gallery'
import Footer from './components/Footer'
import { LanguageProvider } from './context/LanguageContext'

function App() {
  const [activeTab, setActiveTab] = useState('cv')
  
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [activeTab])

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white text-black font-sans selection:bg-black selection:text-white">
        <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
        
        <main>
          {activeTab === 'cv' ? <Resume /> : <Gallery />}
        </main>

        <Footer />
      </div>
    </LanguageProvider>
  )
}

export default App
