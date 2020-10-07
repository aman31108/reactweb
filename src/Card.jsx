import React from 'react';


const Cards = (props) => {
  return (
    <div>

<div className=" col-lg-4 col-md-4 col-12 mx-auto">

    <div class="card" >
     <img src={props.imgsrc} className="card-img-top" alt={props.imgsrc} />
      <div class="card-body">
        <h5 class="card-title">{props.title}</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>

    </div>

  </div>
  );
  }



    export default Cards;
