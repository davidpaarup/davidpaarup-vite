import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Resume from './components/Resume'
import Gallery from './components/Gallery'
import Footer from './components/Footer'
import { LanguageProvider } from './context/LanguageContext'
import { useLanguage } from './context/UseLanguage'

function AppContent() {
  const { showCV } = useLanguage()
  const [activeTab, setActiveTab] = useState(showCV ? 'cv' : 'gallery')
  
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [activeTab])

  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-black selection:text-white">
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <main>
        {activeTab === 'cv' && showCV ? <Resume /> : <Gallery />}
      </main>

      <Footer />
    </div>
  )
}

function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  )
}

export default App
