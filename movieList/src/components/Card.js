import React from 'react';


const Card = ({movie}) =>{


   console.log(movie);
     return(
        <>
    <h2>{`#${movie.ranking} - ${movie.title} (${movie.year})`}</h2>
    <img src={movie.img.src} at={movie.img.alt} width='200'/>

     <p>{`Distributor: ${movie.distributor}`}</p>
 
     <p>{`Amount: ${movie.amount}1</p>
        </>`}</p>
        </>
     )
}



export default Card