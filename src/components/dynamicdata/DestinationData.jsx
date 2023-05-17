import React from 'react';

/** Structure of the component  */

const DestinationData = (props) => {
  return (
    <div className={props.className}>
        <div className="desc-text">
          <h2>{props.heading}</h2>
          <p>{props.text}</p>
        </div>
        <div className="image">
            <img src={props.img1} alt="deomali_1" />    
            <img src={props.img2} alt="deomali_2" />    
        </div>
      </div>
  )
}

export default DestinationData