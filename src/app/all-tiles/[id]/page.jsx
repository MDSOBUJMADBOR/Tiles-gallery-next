import { Button } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const TilesDetailsPage =async ({params}) => {
const {id} =await params;
const res = await fetch("https://tiles-gallery-next.vercel.app/data.json")
const tiles = await res.json()
// console.log(tiles,'al');
const tile = tiles.find(p => p.id == id)

            return (
       <div className="min-h-screen bg-gray-100 p-6">
      {/* Back */}
      <Link href={"/all-tiles"}><button className="mb-4 text-sm font-semibold cursor-p text-gray-600 hover:text-black">
        ← Back to Gallery
      </button></Link>

      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
        <div className="grid md:grid-cols-2 gap-6 p-6">
          {/* Image */}
          <div className="relative w-full h-[500px] rounded-xl overflow-hidden">
            <Image
              src={tile.image}
              alt={tile.title}
              fill
              className="object-cover"
            />
          </div>

          {/* Right Side */}
          <div className="space-y-4">
            <h1 className="text-3xl font-bold">{tile.title}</h1>
            <h2 className='text-xl font-bold'>by <span className=' text-blue-500 '>TileGallery Studio</span></h2>

            {/* badges */}
             
            <p>{tile.description}</p> 

            {/* Stats */}
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
                {tile.category}
               </span>
            
            </div> 
           
<div className='max-w-100 space-y-5 '>
<div className='flex justify-between'>
          <p className=''>Price:</p>
          <p className='font-bold'>{tile.price} {tile.currency}</p>
</div>
<div className='flex justify-between'>
          <p>Dimensions:</p>
          <p className='font-bold'>{tile.dimensions}</p>
</div>
<div className='flex justify-between'>
          <p>Material:</p>
          <p className='font-bold'>{tile.material}</p>
</div>
<div className='flex justify-between'>
          <p>InStock:</p>
         
          <p className='font-bold'>{tile.inStock.toString()}</p>
</div>


</div>

<div className='flex gap-4'> 
  <Button  className="rounded-md  border border-black text-white">Add to Cart</Button>
  <Button variant="outline" className="rounded-md text-black border border-black hover:bg-[#0f4ea6] hover:text-white hover:border-white">Save</Button>
</div>
           

          
          

          
            
          </div>
        </div>

        
      </div>
    </div>
    
          );
};

export default TilesDetailsPage;