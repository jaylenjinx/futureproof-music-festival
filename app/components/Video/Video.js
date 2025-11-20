"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import Container from "@/app/global-components/Container/Container";
import { Spotify, SoundCloud, BandCamp, AppleMusic } from "@/app/svg-icons/svg-icons";

export default function Video() {
	const textRef = useRef(null);
	const isInView = useInView(textRef, { once: true });

	return (
		<section id="video" className="w-full mt-16 lg:mt-56">
			<Container customClasses="flex flex-col lg:flex-row">
				<div
					className="flex flex-col justify-center basis-2/4 lg:max-w-lg xl:max-w-2xl 2xl:max-w-4xl"
					ref={textRef}
					style={{
						transform: isInView ? "none" : "translateX(-100px)",
						opacity: isInView ? 1 : 0,
						transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
					}}>
					<p>Listen to one of artists albums!</p>
					<div className="overflow-hidden">
						<h2
							className={`font-bold text-6xl pb-6 opacity-0 ${isInView ? "animate-slide-up" : ""}`}>
							The Diary of a Songwriter
						</h2>
					</div>
					<div className="flex items-center pt-4 gap-4">
						<a href="https://ajstanton.bandcamp.com/album/the-diary-of-the-songwriter-2"><BandCamp /></a>
						<a href="https://open.spotify.com/album/7tyjdD7hH7wVjYGnTDEgVD"><Spotify /></a>
						<a href="https://music.apple.com/gb/album/the-diary-of-the-songwriter/1639032490"><AppleMusic /></a>
					</div>
				</div>
				<div className="flex justify-end items-center mt-5 basis-2/4 lg:max-w-lg lg:mt-0 xl:max-w-2xl 2xl:max-w-4xl">					
					<iframe src="https://bandcamp.com/EmbeddedPlayer/album=2272656426/size=large/bgcol=ffffff/linkcol=f171a2/tracklist=true/transparent=false"
							width="80%" height="600" frameBorder="0" allowFullScreen=""
							allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
							loading="lazy"></iframe>
				</div>
			</Container>
		</section>
	);
}
