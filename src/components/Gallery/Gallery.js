import React from 'react';
import classes from './Gallery.module.css';
import Categories from './../Categories/Categories';


const gallery = () =>{
    return (
        <div >
            <img className={classes.gallery} src="https://aircargoworld.com/wp-content/uploads/2017/12/Souq-UAE.jpg"alt="gallery"/>
            <p className={classes.p} ><b> You are on Amazon.com.You can also shop on Amazon India for millions of products with fast local delivery.</b></p>

            <div className={classes.card1}>
                   <Categories 
                   title="Get Fit at home"
                   imgSrc="https://images-na.ssl-images-amazon.com/images/G/01/events/GFAH/GWDesktop_SingleImageCard_fitathome_1x._SY304_CB434924743_.jpg" 
                   altTxt="yoga"
                   buttonTxt="Explore Now"/>

                   <Categories 
                   title="Computer and Accessories"
                   imgSrc="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_PC_1x._SY304_CB431800965_.jpg" 
                   altTxt="system"
                   buttonTxt="Shop Now"/>

                   <Categories 
                   title="Shop by Categories"
                   imgSrc="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2020/PrimeDay/Fuji_Dash_PD_Nonprime__1x._SY304_CB403084762_.jpg" 
                   altTxt="categories"
                   buttonTxt="Shop Now"/>

            </div>

            <div className={classes.card1}>
                  <Categories 
                   title="Amazon Basics"
                   imgSrc="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/July/amazonbasics_520x520._SY304_CB442725065_.jpg" 
                   altTxt="basic"
                   buttonTxt="Shop Now"/>

                  <Categories 
                   title="Beauty Picks"
                   imgSrc="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Beauty_1x._SY304_CB432774351_.jpg" 
                   altTxt="Beauty "
                   buttonTxt="Shop Now"/>

                  <Categories 
                   title="Ideal Tv"
                   imgSrc="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_TV_2X._SY304_CB432517900_.jpg" 
                   altTxt="tv"
                   buttonTxt="Explore Now"/>
            </div> 
            
        </div>


    )
}

export default gallery;