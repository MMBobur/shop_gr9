import React from "react";
import Image_list from "../../components/image_list";
import Navbar from "../../components/Navbar";
import Carusel from '../../components/Carusel'
import Footer from "../../components/Footer";
import LookBook from "../../components/LookBook";
import Blog from "../../components/blog";

export default () => {
	return (
		<>
			<Navbar />
			<Carusel />
			<Image_list />
			<LookBook />
			<Blog />
			<Footer />


		</>
	);
};
