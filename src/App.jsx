import './App.css';
import Aos from 'aos';
import Header from './components/Header'
import Introduction from './components/Introduction';
import { useEffect } from 'react';
import Skills from './components/Skills';
import Services from './components/Services';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Education from './components/Education';
function App() {
   function handleChangeMode(){
       document.documentElement.classList.toggle("dark");
   }
   useEffect(()=>{
    Aos.init();
   },[])
  return (
    <div className='container-2xl bg-slate-50 dark:bg-slate-800'>
      <Header handleChangeMode={handleChangeMode}/>
      <main>
      <Introduction/>
      <Education/>
      <Skills/>
      <Services/>
      <Projects/>
      <Contact/>
      </main>
      <Footer/>
    </div>
  )
}

export default App
