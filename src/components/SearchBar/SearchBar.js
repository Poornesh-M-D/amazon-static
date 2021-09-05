import React from "react";
import Input from "./input";
import classes from "./SearchBar.module.css"

const searchbar = () => {
  return (
    <div >
      <select className={classes.select} name="cars" id="cars">
        <option value="All">All</option>
        <option value="Footwear">Footwear</option>
        <option value="clothing">clothing</option>
        <option value="Accessories">Accessories</option>
      </select>

      <Input className={classes.input} />

       <img className={classes.logo} src="https://icon-library.com/images/search-icon/search-icon-11.jpg" alt="search"/> 
       <img className={classes.cart}src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQS70_vVCqjcK3Gr5rOgo-JuaHmKMWj_mZc2hy278hYjxLc_Jjj6WsYe5YUUzlGXoPQWGI&usqp=CAU" alt ="cart"/>
       <img className={classes.wishlist} src="https://p.kindpng.com/picc/s/82-828436_red-heart-icon2x-environmental-defence-canada-hd-png.png" alt="wishlist"/>
       <img className={classes.notification} src="https://cdn1.vectorstock.com/i/1000x1000/94/35/notification-bell-icon-inbox-message-vector-20579435.jpg" alt="notification"/> 
    </div>
  );
};

export default searchbar;
