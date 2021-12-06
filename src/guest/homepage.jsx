import React from 'react'
import NavBar from '../components/navbar/navbar';
import Intro from '../components/intro/intro'
import ShopItems from '../components/shopitems/shopitems';

export default function HomePage() {
    return (
        <div>
            <NavBar />
            <Intro />
            <ShopItems />
        </div>
    )
}