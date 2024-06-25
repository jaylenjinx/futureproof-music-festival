"use client";

import { useRef } from "react";
import { useIsIntersecting } from "@/app/util/useObserver";
import Container from "@/app/global-components/Container/Container";
import { Spotify, Youtube, AppleMusic } from "@/app/svg-icons/svg-icons";

const observerOptions = {
	rootMargin: "0px",
	threshold: 0.3,
};

export default function Listen() {
	const sectionRef = useRef(null);
	const isIntersecting = useIsIntersecting(observerOptions, sectionRef);

	return (
		<section id="listen" className={`w-full mt-16 lg:mt-56 reveal${isIntersecting ? " visible" : ""}`} ref={sectionRef}>
			<Container customClasses="flex flex-col lg:flex-row">
				<div className="flex flex-col justify-center basis-2/4 lg:max-w-lg xl:max-w-2xl 2xl:max-w-4xl">
					<h2 className="font-bold text-6xl pb-6">Have a listen to some of out artists music!</h2>
					<div className="flex items-center pt-4 gap-4">
						{/*
						<a href="https://open.spotify.com/album/6eEPULW6Ew0fOUdxFzpoQH"><Spotify /></a>
						<a href="https://www.youtube.com/playlist?list=OLAK5uy_mRsA0L7FcdQhDkzcdqsQjZCETHlTJLqMg"><Youtube /></a>
						<a href="https://music.apple.com/au/album/do-you-hear-me-ep/1700983625"><AppleMusic /></a>
						*/}
					</div>
				</div>
				<div className="flex items-center justify-center basis-2/4 mt-20 lg:mt-0 lg:justify-end">
					{/*<iframe src="https://open.spotify.com/embed/album/6eEPULW6Ew0fOUdxFzpoQH?utm_source=generator"
							width="80%" height="450" frameBorder="0" allowFullScreen=""
							allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
							loading="lazy"></iframe>*/}
					<iframe
						src="https://open.spotify.com/embed/playlist/2GwRHOoC09tEqICZ3hKLU9?utm_source=generator&theme=0"
						width="80%" height="450" frameBorder="0" allowFullScreen=""
						allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
						loading="lazy"></iframe>
				</div>
			</Container>
		</section>
	);
}
