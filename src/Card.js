import React from 'react'
import "./Card.css"


function Card({image,title,desc}) {
    return (
      <div className="center">
        <div className="property-card">
          <a href="#">
            <div className="property-image">
            <img src={image} alt="Girl in a jacket"/>
              <div className="property-image-title">
                {/* Optional <h5>Card Title</h5> If you want it, turn on the CSS also. */}
              </div>
            </div></a>
          <div className="property-description">
            <h5> {title} </h5>
           <p>{desc}</p>
          
          </div>
        
        </div>
      </div>
    )
}

export default Card;
