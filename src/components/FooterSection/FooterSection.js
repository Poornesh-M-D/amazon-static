import React from 'react';

const FooterSection = (props) =>{
    return(
        <div>
        <h2>{props.heading}</h2>
        <h4>{props.t1}</h4>
        <h4>{props.t2}</h4>
        <h4>{props.t3}</h4>
        <h4>{props.t4}</h4>
      </div>
    )
}

export default FooterSection;