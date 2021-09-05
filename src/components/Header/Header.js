import React from 'react';
import classes from './Header.module.css';
import SearchBar from './../SearchBar/SearchBar';

const header = () =>{
    return(
        <div className={classes.header}>
            <img className={classes.logo} src="https://static.businessworld.in/article/article_extra_large_image/1597056012_CNRvas_amazon_dkblue_noto_email_v2016_us_main_CB468775337_.png" alt="logo"/>
            <SearchBar/>
        </div>
    )
}

export default header;