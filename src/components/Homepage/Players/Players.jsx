import React, { use, useState } from 'react';
import AvailablePlayers from "./AvailablePlayers/AvailablePlayers";
import SelectedPlayers from './SelectedPlayers/SelectedPlayers';

// import SelectedPlayers from './SelectedPlayers/SelectedPlayers.jsx';
const Players = ({playersPromise, setCoin, coins,addCoin}) => {
//    console.log(playersPromise)
   const players = use(playersPromise);
//    console.log(players)
   
   const[selectedType, setSelectedType] = useState("available");
   console.log(selectedType,"selectedType");
   const[selectedPlayers, setSelectedPlayers]= useState([]);

   return (
        <div className='container mx-auto my-15'>
            {/* Players : {data.length} */}
       
       <div className='flex justify-between gap-4 items-center mb-5'>
        {selectedType === "available" ? (<h2 className='font-bold text-2xl'>Available Players </h2> ) : (<h2 className='font-bold text-2xl'>Selected Players({selectedPlayers.length}/{players.length})</h2>)}
        <div>
            
            <button  onClick={() => setSelectedType ("available")}
            className={`btn ${selectedType === "available" ? "bg-[#E7FE29]": " "} rounded-r-none rounded-l-xl`}>Available</button>
            <button onClick={() => setSelectedType ("selected")}
            className={`btn ${selectedType === "selected" ? "bg-[#E7FE29]": " "} rounded-l-none rounded-r-xl`}> 
            Selected ({selectedPlayers.length})</button>
        </div>
       </div>
       
       
   {selectedType === "available" ? <AvailablePlayers players ={players} setCoin={setCoin} coins={coins} setSelectedPlayers={setSelectedPlayers} selectedPlayers={selectedPlayers} /> :<SelectedPlayers selectedPlayers={selectedPlayers} setSelectedPlayers={setSelectedPlayers} addCoin={addCoin}/>  }
        </div>
    );
};

export default Players;

// import React, { use, useState } from 'react';
// import AvailablePlayers from "./AvailablePlayers/AvailablePlayers";
// import SelectedPlayers from './SelectedPlayers/SelectedPlayers';

// const Players = ({playersPromise, setCoin}) => {
//    const players = use(playersPromise);
//    const [selectedType, setSelectedType] = useState("available");

//    return (
//         <div className='container mx-auto my-15'>
//             <div className='flex justify-between gap-4 items-center mb-5'>
//                 {selectedType === "available" 
//                     ? <h2 className='font-bold text-2xl'>Available Players</h2> 
//                     : <h2 className='font-bold text-2xl'>Selected Players(4/12)</h2>
//                 }
//                 <div>
//                     <button onClick={() => setSelectedType("available")}
//                         className={`btn ${selectedType === "available" ? "bg-[#E7FE29]": ""} rounded-r-none rounded-l-xl`}>
//                         Available
//                     </button>
//                     <button onClick={() => setSelectedType("selected")}
//                         className={`btn ${selectedType === "selected" ? "bg-[#E7FE29]": ""} rounded-l-none rounded-r-xl`}>
//                         Selected (0)
//                     </button>
//                 </div>
//             </div>
//             {selectedType === "available" 
//                 ? <AvailablePlayers players={players} setCoin={setCoin}/> 
//                 : <SelectedPlayers/>
//             }
//         </div>
//     );
// };

// export default Players;