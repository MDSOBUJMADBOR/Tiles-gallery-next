import Link from "next/link";
import TilesCard from "./TilesCard";
import { Button } from "@heroui/react";


const FeaturedTiles =async () => {
const res = await fetch("https://tiles-gallery-next.vercel.app/data.json")
const tiles = await res.json()
const topTiles = tiles.slice(0,4)

// console.log(tiles);

          return (
                    <div className="max-w-7xl mx-auto">
<h1 className="text-2xl font-bold mt-7">Featured Tiles</h1>
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 max-w-7xl mx-auto my-10 ">
{
topTiles.map(tiles => <TilesCard key={tiles.id} tiles={tiles}></TilesCard>)
}
</div>

<div className="flex justify-center items-center mb-5">
<Link href={`/all-tiles`}><Button variant="outline" className="rounded-md text-black border-none ">View All</Button></Link>
</div>
                    </div>
          );
};

export default FeaturedTiles;