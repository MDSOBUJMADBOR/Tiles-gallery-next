import Image from 'next/image';
import React from 'react';

const TilesCard = ({tiles}) => {
console.log(tiles);
          return (
                    <div className="card bg-base-100 w-96 shadow-sm">
  <figure>
    <Image
      src={tiles.image}
      width={200} 
      height={200}      
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{tiles.title}</h2>
    <p>{tiles.description}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
          );
};

export default TilesCard;