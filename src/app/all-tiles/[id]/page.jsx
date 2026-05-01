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
      <Link href={"/all-photos"}><button className="mb-4 text-sm font-semibold cursor-p text-gray-600 hover:text-black">
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

            {/* badges */}
             
            <p>{tile.description}</p> 

            {/* Stats */}
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
                {tile.category}
               </span>
            
            </div> 
           
<div>
<div className='flex gap-30'>
          <p>Price:</p>
          <p>{tile.price}</p>
</div>
<div></div>

</div>


           

          
          

          
            
          </div>
        </div>

        
      </div>
    </div>
    
          );
};

export default TilesDetailsPage;