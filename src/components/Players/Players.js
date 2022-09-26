import React from "react";
import SinglePlayer from "../SinglePlayer/SinglePlayer";
import "./Players.css";

const Players = ({ players, setCart, cart }) => {
  //   console.log(players);
  return (
    <div>
      <div className="card-container">
        {players?.map((pd) => (
          <SinglePlayer
            player={pd}
            key={pd?.idPlayer}
            cart={cart}
            setCart={setCart}
          ></SinglePlayer>
        ))}
      </div>
    </div>
  );
};

export default Players;
