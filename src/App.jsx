import Nav from "./components/nav";
import Images from "./components/images/images";
import Place_details from "./components/place_details/place_details";
import Overview from "./components/overview/overview";
import Review from './components/review_section/Review'
import Related_activities from "./components/related_activites/related_activities";
import Footer from "./components/footer";

export default function App() {
  return (
    <div>
      <Nav />
      <Images />
      <Place_details />
      <Overview/>
      <Review/>
      <Related_activities/>
      <Footer/>
    </div>
  );
}
