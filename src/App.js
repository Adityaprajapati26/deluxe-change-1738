import logo from "./logo.svg";
import "./App.css";

import Announcement from "./Components/Announcement";
import Navbar from "./Components/Navbar";
import Categories from "./Components/Categories";

import Products from "./Components/Product/Products";
import HomePageMain from "./Components/HomepageMain/HomeProducts"
import Shop from "./Components/Feed";
import Feed from "./Components/Feed";

import Footer from "./Components/Footer/Footer";


function App() {
	return (
		<>
			<Announcement />
			<hr />
			<Navbar />
			<HomePageMain />
			<Products />
			<br />
			<br />
			
      <hr />
      <br />
      <br />
			<Footer />
		</>
	);

	}
export default App;

