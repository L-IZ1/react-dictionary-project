import React from "react";
import "./Photos.css";

export default function Photos (props){
   
    if(props.photos){
     
    return(
    <section className="Pictures">
    <div className="row">
    {props.photos.map(function(photo, index){
    return (
              <div className="col-4" key={index}>
                <a href={photo.src.original} target="_blank" rel="noreferrer">
                  <img
                    src={photo.src.landscape}
                    className="img-fluid"
                    alt="images"
                  />
                </a>
              </div>
            );

})}
    </div>
    </section>);
    }else{
            return null;}
     }

   