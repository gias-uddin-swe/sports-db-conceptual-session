import React from "react";
import "./SinglePlayer.css";

const SinglePlayer = ({ player, cart, setCart }) => {
  const { strPlayer, idPlayer, strCutout } = player;

  const name = "gias";
  const handleAddToCart = () => {
    const info = {
      strPlayer,
      idPlayer,
      strCutout,
      price: 110,
    };

    if (cart?.length) {
      setCart([...cart, info]);
      return;
    } else {
      setCart([info]);
      return;
    }
  };

  const handleBookmark = () => {
    const info = {
      strPlayer,
      idPlayer,
      strCutout,
      quanity: 1,
      bookmark: "true",
    };

    const prevBookmark = localStorage.getItem("bookmark");
    const oldBokmark = JSON.parse(prevBookmark);

    if (oldBokmark) {
      const isExist = oldBokmark.find((p) => p.idPlayer === idPlayer);

      if (isExist) {
        isExist.quanity = isExist.quanity + 1;
        localStorage.setItem("bookmark", JSON.stringify(oldBokmark));
      } else {
        localStorage.setItem("bookmark", JSON.stringify([...oldBokmark, info]));
      }
    } else {
      localStorage.setItem("bookmark", JSON.stringify([info]));
    }

    // if (oldBokmark) {
    //   const isExit = oldBokmark.find((p) => p.idPlayer === idPlayer);

    //   if (isExit) {
    //     const updatedPrice = parseFloat(isExit.quanity);
    //     const newUpdatePrice = updatedPrice + 1;
    //     isExit.quanity = newUpdatePrice;
    //     localStorage.setItem("bookmark", JSON.stringify(oldBokmark));

    //     return;
    //   } else {
    //     localStorage.setItem("bookmark", JSON.stringify([...oldBokmark, info]));
    //   }
    // } else {
    //   localStorage.setItem("bookmark", JSON.stringify([info]));
    //   console.log("naiiiiiii");
    // }
  };

  return (
    <div className="card" data-aos="zoom-in">
      <img className="player-img" src={strCutout} alt="" />
      <h6>{strPlayer}</h6>
      <button className="card-btn">Details</button>
      <button onClick={handleAddToCart} className="card-btn">
        Add to cart
      </button>
      <button onClick={handleBookmark} className="card-btn">
        Bookmark
      </button>
    </div>
  );
};

export default SinglePlayer;
