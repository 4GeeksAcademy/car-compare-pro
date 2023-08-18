import React, { useContext, useRef, useEffect } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import AboutPage from "../component/aboutPage";
<<<<<<< HEAD
import car_video from "../../../assets/carvideo.mov";
import Carousel from "../component/carousel";
=======
import Carousel from "../component/carousel";
import { Footer } from "../component/footer";

import car_video from "../../../assets/carvideo.mov"
>>>>>>> 4ae06ba70b7cd4c75c32f5b31c9e9baf62b70cc7

export const Home = () => {
	const { store, actions } = useContext(Context);
	const videoRef= useRef()
	useEffect(()=>{videoRef.current.play()},[])
	return (
		<div className="text-center">


		<div className="home-container">
			<div className="background">
				<video width="100%" height="100%" loop muted ref={videoRef} autoPlay={true}> <source src={car_video}/> </video>
			</div>
			<section className="hero text-center text-capitalize position-absolute top-50 start-50 translate-middle text-white" style={{fontSize:48,zIndex:"1000"}}>
			<h1 style={{fontSize:48,zIndex:"1000"}} >Vehicles that drive the world</h1>
				<p className="fs-5 py-2 ps-1">Empowering Your Car Choices through Comprehensive Comparisons.</p>
			</section>
			<Carousel />
<<<<<<< HEAD
			
=======
			<Footer />			
>>>>>>> 4ae06ba70b7cd4c75c32f5b31c9e9baf62b70cc7
		</div>
		</div>	);

};
