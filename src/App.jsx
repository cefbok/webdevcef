import Hero from './components/Hero';
import Background from './components/Background';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App bg-white dark:bg-stone-900 text-stone-900 dark:text-stone-300 transition-colors duration-700">
      <div className="max-w-7xl mx-auto">
        < Hero />
        < Background />
        < Projects />
        < Contact />
        < Footer />
      </div>
    </div>
  )
}

export default App