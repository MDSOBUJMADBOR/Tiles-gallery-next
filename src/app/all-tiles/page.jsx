import TilesCard from '@/components/TilesCard';
import React from 'react';

const AllTilesPage =async () => {
const res = await fetch("https://tiles-gallery-next.vercel.app/data.json")
const tiles = await res.json()
console.log(tiles);
          return (
                    <div>

 <div className='grid grid-cols-4 gap-5'>
{
tiles.map(tiles => <TilesCard key={tiles.id} tiles={tiles}></TilesCard>)
}
</div>
                    </div>
          );
};

export default AllTilesPage;