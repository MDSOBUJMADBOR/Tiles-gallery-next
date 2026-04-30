import TilesCard from "./TilesCard";


const FeaturedTiles =async () => {
const res = await fetch("https://tiles-gallery-next.vercel.app/data.json")
const tiles = await res.json()
const topTiles = tiles.slice(0,4)

// console.log(tiles);

          return (
                    <div className="max-w-7xl mx-auto">
<h1 className="text-2xl font-bold mt-7">Featured Tiles</h1>
<div className="grid grid-cols-4 gap-5">
{
topTiles.map(tiles => <TilesCard key={tiles.id} tiles={tiles}></TilesCard>)
}
</div>


                    </div>
          );
};

export default FeaturedTiles;