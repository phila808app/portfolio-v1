import './App.css'
import Navbar from './components/Navbar';

function App() {
  const items = ['Prime Circle', 'Arno Carstons', 'The Parlotones'];


  return (
    <>
      <div>
        <Navbar/>
  
      
        <h1>Simple List with Vite and React</h1>
      <ol>
        {
          items.map((item,index)=>(
            <li key={index}>{item}</li>
          ))
        }
      
      </ol>
    
       
      </div>
    </>
  )
}

export default App
