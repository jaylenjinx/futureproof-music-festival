"use client";

import { useState, useRef } from "react";
import { useIsIntersecting } from "@/app/util/useObserver";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Image from "next/image";
import Container from "@/app/global-components/Container/Container";
import { MapMapper, Calendar } from "@/app/svg-icons/svg-icons";

const galleryThumbnails = [
	{
		id: 1,
		src: "/gallery/thumbnails/thumbnail-1.jpg",
		club: "The Golden Eagle.",
		city: "Miami",
		date: "12/2/2021",
		slides: [{ src: "/gallery/slider-images/slider-1.jpg" }, { src: "/gallery/slider-images/slider-2.jpg" }, { src: "/gallery/slider-images/slider-3.jpg" }],
	},
	{
		id: 2,
		src: "/gallery/thumbnails/thumbnail-2.jpg",
		club: "The Silver Elephant.",
		city: "Atlanta",
		date: "23/6/2019",
		slides: [{ src: "/gallery/slider-images/slider-4.jpg" }, { src: "/gallery/slider-images/slider-5.jpg" }, { src: "/gallery/slider-images/slider-6.jpg" }],
	},
	{
		id: 3,
		src: "/gallery/thumbnails/thumbnail-3.jpg",
		club: "The Electric Fox.",
		city: "Los Angeles",
		date: "11/3/2019",
		slides: [{ src: "/gallery/slider-images/slider-7.jpg" }, { src: "/gallery/slider-images/slider-8.jpg" }, { src: "/gallery/slider-images/slider-9.jpg" }],
	},
	{
		id: 4,
		src: "/gallery/thumbnails/thumbnail-4.jpg",
		club: "The Cool Mouse.",
		city: "New York",
		date: "03/12/2018",
		slides: [{ src: "/gallery/slider-images/slider-10.jpg" }, { src: "/gallery/slider-images/slider-11.jpg" }, { src: "/gallery/slider-images/slider-12.jpg" }],
	},
	{
		id: 5,
		src: "/gallery/thumbnails/thumbnail-5.jpg",
		club: "The Super Cat.",
		city: "Rome",
		date: "03/03/2018",
		slides: [{ src: "/gallery/slider-images/slider-13.jpg" }, { src: "/gallery/slider-images/slider-14.jpg" }, { src: "/gallery/slider-images/slider-15.jpg" }],
	},
	{
		id: 6,
		src: "/gallery/thumbnails/thumbnail-6.jpg",
		club: "The Brave Salmon.",
		city: "Berlin",
		date: "25/12/2017",
		slides: [{ src: "/gallery/slider-images/slider-16.jpg" }, { src: "/gallery/slider-images/slider-17.jpg" }, { src: "/gallery/slider-images/slider-18.jpg" }],
	},
];

const observerOptions = {
	rootMargin: "0px",
	threshold: 0.2,
};

export default function PhotoGallery() {
	const [openGallery, setOpenGallery] = useState(false);
	const [galleryIndex, setGalleryIndex] = useState(0);
	const sectionRef = useRef(null);
	const isIntersecting = useIsIntersecting(observerOptions, sectionRef);

	const clickHandler = (index) => {
		setOpenGallery(true);
		setGalleryIndex(index);
	};

	return (
		<section id="photo-gallery" className={`w-full mt-1 pb-2 lg:mt-20 lg:pb-20 lg:mb-[22.5rem] reveal${isIntersecting ? " visible" : ""}`} ref={sectionRef}>
			<Container>
				
				{/*<h2 className="font-bold text-6xl pb-6">Coming Soon!</h2>*/}
				
			</Container>
		</section>
	);
}
