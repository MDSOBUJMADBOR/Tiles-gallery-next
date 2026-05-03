import React from 'react';
import Marquee from 'react-fast-marquee';
const news = [
    {
        id:"1",
        title:"✨ Elevate Your Space with Luxury Tiles | 🆕 Fresh Designs Just Landed | 🎯 Crafted for Modern Living",
        
    },
    {
        id:"2",
        title:"New Trends. Timeless Designs. | Discover Tiles That Define Your Style | Upgrade Your Space Today",
        
    },
    {
        id:"3",
        title:"Limited Edition Tiles Available Now | Transform Your Home with Stunning Designs | Shop the Latest Collection",
        
    }
];

const MarqueePage = () => {
          return (
                    <div className='  bg-[#0c0240] text-white py-4 px-6'>
                        
                <Marquee pauseOnHover={true} speed={100}>
{
news.map(n => (
       <span key={n.id} className="mr-20">{n.title}</span>
)
)
}

                </Marquee>


                    </div>
          );
};

export default MarqueePage;