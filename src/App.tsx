import { useState } from 'react'
import Navbar from './components/Navbar'
import Resume from './components/Resume'
import Gallery from './components/Gallery'
import Footer from './components/Footer'

function App() {
  const [activeTab, setActiveTab] = useState('cv')

  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-black selection:text-white">
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <main>
        {activeTab === 'cv' ? <Resume /> : <Gallery />}
      </main>

      <Footer />
    </div>
  )
}

export default App
