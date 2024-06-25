"use client";

import { useState, useRef } from "react";
import { useIsIntersecting } from "@/app/util/useObserver";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Image from "next/image";
import Container from "@/app/global-components/Container/Container";
import { MapMapper, Calendar } from "@/app/svg-icons/svg-icons";

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
