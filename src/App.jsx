
import { Suspense, useState } from 'react'
import './App.css'
import Banner from './components/Homepage/Banner/Banner'
import Players from './components/Homepage/Players/Players'
 import { ToastContainer} from 'react-toastify';
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer';

const fetchPlayer=async()=>{
  const res = await fetch("/data.json")
  return res.json();
}

function App() {
  const playersPromise = fetchPlayer();
  const [coins, setCoins] = useState(500000000)
  const handleCoin = (price) => {
    setCoins(prev => prev - price)
}
const handleAddCoin = (price) => {
    setCoins(prev => prev + price)  
}
  return (
    <>
   <Navbar coins={coins}/>
   <Banner/>
   <Suspense fallback={<span className="loading loading-spinner text-success"></span>}>
    <Players playersPromise={playersPromise} setCoin={handleCoin} addCoin={handleAddCoin} coins={coins}/>
   </Suspense>
    <Footer/>
     <ToastContainer />
    </>
  )
}

export default App
