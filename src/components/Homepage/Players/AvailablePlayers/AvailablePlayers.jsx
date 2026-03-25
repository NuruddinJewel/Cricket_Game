import React from 'react';
// import { FaFlag, FaUser } from "react-icons/fa";
// import { FaFlag } from "react-icons/fa";
// import Card from '../../../UI/Card';

// const AvailablePlayers = ({players, setCoin}) => {
//     console.log(players,"players")
//     return (
//       <div>
//         <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
//           {players.map((player) => (
//             <Card key={player.player_name} player={player} setCoin={setCoin}/>
//           ))}
//         </div>
//       </div>
//     );
// };

// export default AvailablePlayers;



// const Card = ({ players }) => {
//   return (
//     <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
//       {players.map((player) => (
//         <PlayerCard key={player.player_name} player={player} />
//       ))}
//     </div>
//   );
// };


import Card from '../../../UI/Card';

const AvailablePlayers = ({players, setCoin, coins, setSelectedPlayers, selectedPlayers}) => {
    return (
      <div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
          {players.map((player) => (
            <Card key={player.player_name} player={player} setCoin={setCoin} coins={coins} setSelectedPlayers={setSelectedPlayers} selectedPlayers={selectedPlayers} />
          ))}
        </div>
      </div>
    );
};

export default AvailablePlayers;