import React from 'react';
import '../styles/Home.css';
import Product from './Product';

function Home() {
  return (
    <div className='home'>
        <div className='homeRow'>
            <Product
                title='KVM Switch HDMI 2 Port Box with Cables, Selector Switcher USB and HDMI Switch for 2 Computers Share Keyboard Mouse USB Peripheral and one HD Monitor, Support 4k×2K@30hz Resolution (HDMI KVM Switch)' 
                price={38.99}
                image='https://m.media-amazon.com/images/I/61chUiMczoL._AC_UL320_.jpg'
                rating={4}
            />

            <Product
                title='AMD Ryzen 5 5600X 6-core, 12-Thread Unlocked Desktop Processor with Wraith Stealth Cooler' 
                price={299.00}
                image='https://m.media-amazon.com/images/I/61vGQNUEsGL._AC_UL320_.jpg'
                rating={5}
            />

            <Product
                title='SAMSUNG 970 EVO Plus SSD 2TB - M.2 NVMe Interface Internal Solid State Drive with V-NAND Technology (MZ-V7S2T0B/AM)' 
                price={219.99}
                image='https://m.media-amazon.com/images/I/813bvfaxuAL._AC_UL320_.jpg'
                rating={5}
            />
        </div>
        <div className='homeRow'>
            <Product
                title='Seagate Storage Expansion Card for Xbox Series X|S 1TB Solid State Drive - NVMe Expansion SSD for Xbox Series X|S (STJR1000400)' 
                price={218.56}
                image='https://m.media-amazon.com/images/I/61MGrHUMWzL._AC_UL320_.jpg'
                rating={3}
            />

            <Product
                title='Corsair Vengeance LPX 16GB (2x8GB) DDR4 DRAM 3200MHz C16 Desktop Memory Kit - Black (CMK16GX4M2B3200C16)' 
                price={66.99}
                image='https://m.media-amazon.com/images/I/51XWCgqIUVL._AC_UL320_.jpg'
                rating={4}
            />

            <Product
                title='Toshiba Canvio Basics 2TB Portable External Hard Drive USB 3.0, Black - HDTB420XK3AA' 
                price={59.99}
                image='https://m.media-amazon.com/images/I/910A6B1Sa4L._AC_UL320_.jpg'
                rating={4}
            />
        </div>
    </div>
  );
}

export default Home;

