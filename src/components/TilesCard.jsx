import { Button, Card } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const TilesCard = ({tiles}) => {
console.log(tiles);
          return (
          <Card className="card bg-base-100 max-w-96 shadow-lg mx-5 transition duration-500 hover:scale-108">
 <div className="relative w-full aspect-square">
    <Image
      src={tiles.image}
      fill
sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"     
      alt={tiles.title}
      className='object-cover rounded-xl'
      />
</div>
  <div className="card-body space-y-2">
    <h2 className="card-title font-bold text-lg">{tiles.title}</h2>
    <p className='font-bold'>$:{tiles.price}</p>
    <div className="card-actions justify-end">
      <Link href={`/all-tiles/${tiles.id}`}><Button variant="outline" className="rounded-md text-black border border-black hover:bg-[#0f4ea6] hover:text-white hover:border-white">View Details</Button></Link>
    </div>
  </div>
</Card>
          );
};

export default TilesCard;