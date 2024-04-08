import './App.css';
import Aos from 'aos';
import Header from './components/Header'
import Introduction from './components/Introduction';
import { useEffect } from 'react';
import Skills from './components/Skills';
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
    <div className='container-3xl overflow-hidden bg-white dark:bg-slate-950'>
      <Header handleChangeMode={handleChangeMode}/>
      <main className='w-full'>
      <Introduction/>
      <Education/>
      <Skills/>
      <Projects/>
      <Contact/>
      </main>
      <Footer/>
    </div>
  )
}

export default App
