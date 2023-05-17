import React from 'react'

/** Structure of the Trips Cards */

const TripData = (props) => {
  return (
    <div className="t-card">
        <div className="t-image">
            <img src={props.image} alt="trip images" />
        </div>
        <h4>{props.title}</h4>
        <p>{props.text}</p>
    </div>
  )
}

export default TripData