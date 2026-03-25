// import React, { useState } from 'react';
import React from 'react';
import { FaFlag, FaUser } from "react-icons/fa";
import { toast } from 'react-toastify';

const Card = ({ player, setCoin, coins, setSelectedPlayers, selectedPlayers }) => {
  // const [isSelected, setIsSelected] = useState(false);
  const isSelected = selectedPlayers.some(p => p.player_name === player.player_name);
  const handleChoosePlayer = () => {
    // alert(`${player.player_name} is selected`)
    // setIsSelected(true);
    const cleanPrice = Number(player.price.replace(/[$,]/g, ''))

    if (coins >= cleanPrice) {
      setCoin(cleanPrice);
      // setIsSelected(true);
      const updatedPlayers = [...selectedPlayers, player];
      setSelectedPlayers(updatedPlayers);
      console.log(updatedPlayers, "selected players"); 
      toast.success(`${player.player_name} is selected`);
    } else {
     toast.error("Not Enough coins to purchase this player");
    }

  }
  return (
    <div className='container mx-auto'>
      <div className="card bg-base-100 shadow-sm">
        <figure>
          <img src={player.player_image} alt=" " className='w-75 h-75' />
        </figure>
        <div className="card-body">
          <h2 className="card-title"><FaUser />{player.player_name}</h2>
          <div className='flex justify-between gap-2 items-center'>
            <div className='flex gap-2 items-center'>
              <FaFlag />
              <p>{player.player_country}</p>
            </div>
            <button className='btn'>{player.playing_role}</button>
          </div>
          <div className="divider"></div>
          <h2 className='font-bold'>Rating({player.rating})</h2>
          <div className='flex justify-between gap-4 font-bold'>
            <p>{player.batting_style}</p>
            <p className='text-right'>{player.bowling_style}</p>
          </div>
          <div className="card-actions justify-between items-center">
            <p className='font-semibold'>Price: {player.price}</p>
            <button
              className="btn"
              onClick={handleChoosePlayer}
              disabled={isSelected}
            >
              {isSelected ? "Selected" : "Choose Player"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;


