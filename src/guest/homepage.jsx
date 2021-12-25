import '../universal.scss';
import NavBar from '../components/navbar/navbar';
import Intro from '../components/intro/intro'
import ShopItems from '../components/shopitems/shopitems';
import Newsletter from '../components/newsletter/newsletter';
import Footer from '../components/footer/footer';
import Announcement from '../components/announcement/announcement';
import HPCategories from '../components/hp-categories/hp-categories';

export default function HomePage() {
    return (
        <div>
            <Announcement />
            <NavBar />
            <Intro />
            <ShopItems />
            {/* <p style={'color: #fff'}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id obcaecati dignissimos incidunt perferendis facilis deleniti porro totam est, atque ullam iure exercitationem harum accusantium cupiditate.</p> */}
            <HPCategories />
            <Newsletter />
            <Footer />
        </div>
    )
}