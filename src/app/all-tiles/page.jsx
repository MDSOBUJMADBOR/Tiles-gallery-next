import TilesCard from '@/components/TilesCard';
import { Label, SearchField } from '@heroui/react';
import React from 'react';

const AllTilesPage =async () => {
const res = await fetch("https://tiles-gallery-next.vercel.app/data.json")
const tiles = await res.json()
console.log(tiles);
          return (
                    <div className='my-8 mb-15'>

<div className='my-10 w-[280px] max-w-7xl mx-auto'>
<SearchField name="search">
      <Label>Search</Label>
      <SearchField.Group className="border border-gray-300 rounded-md px-2 py-1">
        <SearchField.SearchIcon />
        <SearchField.Input className="w-[280px]" placeholder="Search tiles by title..." />
        <SearchField.ClearButton />
      </SearchField.Group>
    </SearchField>
</div>

<h1 className='font-bold text-3xl '>All Tiles</h1>
 <div className='grid grid-cols-1 md:grid-cols-4 gap-5 max-w-7xl mx-auto '>
{
tiles.map(tiles => <TilesCard key={tiles.id} tiles={tiles}></TilesCard>)
}
</div>
                    </div>
          );
};

export default AllTilesPage;