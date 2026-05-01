import TilesCard from '@/components/TilesCard';
import React from 'react';

const AllTilesPage =async () => {
const res = await fetch("https://tiles-gallery-next.vercel.app/data.json")
const tiles = await res.json()
console.log(tiles);
          return (
                    <div className='my-10'>

 <div className='grid grid-cols-1 md:grid-cols-4 gap-5 max-w-7xl mx-auto '>
{
tiles.map(tiles => <TilesCard key={tiles.id} tiles={tiles}></TilesCard>)
}
</div>
                    </div>
          );
};

export default AllTilesPage;