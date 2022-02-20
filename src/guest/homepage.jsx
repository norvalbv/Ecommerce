import "../universal.scss";
import NavBar from "../components/navbar/navbar";
import Intro from "../components/intro/intro";
import ShopItems from "../components/shopitems/shopitems";
import Newsletter from "../components/newsletter/newsletter";
import Footer from "../components/footer/footer";
import Announcement from "../components/announcement/announcement";
import HPCategories from "../components/hp-categories/hp-categories";
import ModalComp from "../components/modal";

export default function HomePage() {
  return (
    <div>
      <ModalComp />
      <Announcement />
      <NavBar />
      <Intro />
      <ShopItems />
      <HPCategories />
      <Newsletter />
      <Footer />
    </div>
  );
}
