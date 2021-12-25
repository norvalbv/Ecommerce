import React from 'react'
import NavBar from '../components/navbar/navbar';
import Intro from '../components/intro/intro'
import ShopItems from '../components/shopitems/shopitems';
import Newsletter from '../components/newsletter/newsletter';
import Footer from '../components/footer/footer';
import Announcement from '../components/announcement/announcement';

export default function HomePage() {
    return (
        <div>
            <Announcement />
            <NavBar />
            <Intro />
            <ShopItems />
            <Newsletter />
            <Footer />
        </div>
    )
}