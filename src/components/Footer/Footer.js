import classes from "./Footer.module.css";
import React from "react";
import FooterSection from "../FooterSection/FooterSection";

const Footer = () => {
  return (
    <div className={classes.footer}>
        <FooterSection
        heading="Get to know us"
        t1="Careers"
        t2="Blog"
        t3="Amazon Devices"
        t4="Amazon Tours"/>

        <FooterSection
        heading="Make Money With Us"
        t1="Sell products on Amazon"
        t2="Sell on Amazon Business"
        t3="Sell Apps on Amazon"
        t4="Host on Amazon Hub"/>

        <FooterSection
        heading="Amazon Payment Products"
        t1="Amazon Business Card"
        t2="Shop with Points"
        t3="Reload with Points"
        t4="Amazon Currency Converter"/>

        <FooterSection
        heading="Let Us Help You"
        t1="Amazon and Covid-19"
        t2="Your Account"
        t3="Your Orders"
        t4="Shipping"/>
     </div>
      
  );
};

export default Footer;
