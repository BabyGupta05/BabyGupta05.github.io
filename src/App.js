
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import ScrollUp from './components/scrollup/ScrollUp';
import Project from './components/project/Project';
import Github from './components/git/Github';
function App() {
  return (
    <> 
    <Header/>
    <main className='main'>
    <Home/>
    <About/>
    <Skills/>
    <Project/>
    <Github/>
    <Contact/>
    <Footer/>
    <ScrollUp/>
    </main>

   
    </>
     
       
    
  );
}

export default App;
