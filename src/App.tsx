import './App.css'
import Navbar from './components/Navbar';
import Midde from './components/Midde';
import onepiece from './assets/onepiece2.jpg';
import Contact from './components/Contact';

function App() {


  return (
    <>
 
      <div className="w-screen h-screen bg-center bg-cover"
  style={{ backgroundImage: `url(${onepiece})` }}>
        <Navbar/>
    
        <Midde/>


        <div className='absolute bottom-0 left-0 right-0'>
          <Contact/>

        </div>
      
    
       
      </div>
    </>
  )
}

export default App
