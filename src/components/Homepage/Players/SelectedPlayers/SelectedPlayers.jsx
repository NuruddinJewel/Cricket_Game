// import React from 'react';

// const SelectedPlayers = ({selectedPlayers}) => {
//     return (
//         <div>
//             Selected Players  
//         </div>
//     );
// };

// export default SelectedPlayers;
//

// import React from 'react';

// const SelectedPlayers = ({selectedPlayers}) => {
//     console.log(selectedPlayers, "selected players"); 
//     return (
//         <div>
//             {/* <h2 className='font-bold text-2xl'>Selected Players</h2> */}
//             {selectedPlayers.map((player) => (
//                 <div key={player.player_name}>
//                     <p>{player.player_name}</p>
//                 </div>
//             ))}
//         </div>
//     );
// };

// export default SelectedPlayers;



import React from 'react';
import { MdDelete } from "react-icons/md";
import { FaUser } from "react-icons/fa";

const SelectedPlayers = ({selectedPlayers, setSelectedPlayers, addCoin}) => {
    
    const handleDelete = (player) => {
        const filteredPlayers = selectedPlayers.filter(
            selectedPlayer => selectedPlayer.player_name !== player.player_name
        );
        setSelectedPlayers(filteredPlayers);
        const cleanPrice = Number(player.price.replace(/[$,]/g, ''));
        addCoin(cleanPrice); 
    };

    return (
        <div>
            <div className='space-y-4'>
            {selectedPlayers.map((player, ind) => (
                <div key={ind} className='flex items-center gap-6 justify-between p-8 rounded-xl border'>
                  <div className='flex items-center gap-6'>
                    <img src={player.player_image} alt={player.player_name} className='h-20 w-auto rounded-md' />
                    <div>
                      <h2 className='flex items-center gap-2 font-semibold text-xl'>
                        <FaUser /> {player.player_name}
                      </h2>
                    </div>
                  </div>
                  <button className='btn text-red-500' onClick={() => handleDelete(player)}>
                    <MdDelete />
                  </button>
                </div>
            ))}
            </div>
        </div>
    );
};

export default SelectedPlayers;
