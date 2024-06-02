"use client";

import { useRef } from "react";
import { useIsIntersecting } from "@/app/util/useObserver";
import Image from "next/image";
import Container from "@/app/global-components/Container/Container";

const observerOptions = {
	rootMargin: "0px",
	threshold: 0.3,
};

export default function About() {
	const sectionRef = useRef(null);
	const isIntersecting = useIsIntersecting(observerOptions, sectionRef);

	return (
		<section id="about" className={`relative flex flex-col items-center justify-end w-full mt-16 mx-auto max-w-[150rem] lg:flex-row lg:mt-56 reveal${isIntersecting ? " visible" : ""}`} ref={sectionRef}>
			<Container customClasses="lg:absolute lg:left-1/2 lg:-translate-x-1/2">
				<div className="flex flex-col lg:max-w-md xl:max-w-2xl 2xl:max-w-4xl">
					<h2 className="font-bold text-6xl pb-6">About</h2>
					<p>
						Futureproof is a youth-run volunteer music festival aimed at giving younf bands the chance to perform on stage for possibly the first time. 
						Through the dedication of staff, volunteers, performers and musicians, Futureproof has gained the sponsorship of Inner West Council as well. 
						
					</p>
					<p className="pt-8">
					Moreover, Futureproof celebrates and welcomes all identities, and is a safe place for everyone to come together and enjoy music from their local scene.
						The power of music, and the sense of community allows Futureproof to thrive on behalf of the whole Sydney youth music scene.
					</p>
					<div className="flex pt-8 gap-4">
						<a href="https://www.facebook.com/futureproofmusicfest/">
							<svg fill="#1C2033" width="52" height="52" viewBox="0 0 51.71 51.71" xmlns="http://www.w3.org/2000/svg">
							<path d="m33.31,22.59h-4v-5.37h3.26c.58,0,1.05-.42,1.05-1.05v-5.58c0-.58-.42-1.05-1.05-1.05h-3.84c-4.16,0-7.05,2.95-7.05,7.31v5.63h-4.63c-.74,0-1.42.58-1.42,1.42v3.79c0,.74.58,1.42,1.42,1.42h4.52v11.63c0,.74.58,1.42,1.42,1.42h4.94c.32,0,.58-.16.79-.37s.37-.58.37-.89v-11.73h3.47c.68,0,1.21-.42,1.32-1.05v-.11l.74-3.63c.05-.37,0-.79-.32-1.21-.11-.26-.58-.53-1-.58Z" />
							<path d="m25.85,51.71C11.6,51.71,0,40.11,0,25.85S11.6,0,25.85,0s25.85,11.6,25.85,25.85-11.6,25.85-25.85,25.85Zm0-46.58C14.42,5.13,5.13,14.42,5.13,25.85s9.3,20.73,20.73,20.73,20.73-9.3,20.73-20.73S37.28,5.13,25.85,5.13Z" />
						</svg></a>
						<a href="https://www.instagram.com/futureproofmusicfest/"><svg fill="#1C2033" width="52" height="52" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
							<path d="M62.9 19.2C62.8 16 62.2 13.7 61.5 11.6C60.8 9.5 59.7 7.8 58 6.1C56.3 4.4 54.6 3.4 52.6 2.6C50.6 1.8 48.4 1.3 45 1.2C41.5 1 40.5 1 32 1C23.5 1 22.6 1 19.2 1.1C15.8 1.2 13.7 1.8 11.6 2.5C9.5 3.2 7.8 4.4 6.1 6.1C4.4 7.8 3.3 9.5 2.6 11.6C1.8 13.6 1.3 15.8 1.2 19.2C1.1 22.6 1 23.5 1 32C1 40.5 1 41.4 1.1 44.8C1.2 48.2 1.8 50.3 2.5 52.4C3.2 54.5 4.3 56.2 6 57.9C7.7 59.6 9.5 60.7 11.5 61.4C13.5 62.1 15.7 62.7 19.1 62.8C22.5 63 23.4 63 31.9 63C40.4 63 41.3 63 44.7 62.9C48.1 62.8 50.2 62.2 52.3 61.5C54.4 60.8 56.1 59.7 57.8 58C59.5 56.3 60.6 54.5 61.3 52.5C62 50.5 62.6 48.3 62.7 44.9C62.8 41.7 62.8 40.7 62.8 32.2C62.8 23.7 63 22.6 62.9 19.2ZM57.3 44.5C57.2 47.5 56.6 49.1 56.2 50.3C55.6 51.7 54.9 52.8 53.8 53.8C52.7 54.9 51.7 55.5 50.3 56.2C49.2 56.6 47.6 57.2 44.5 57.3C41.3 57.3 40.3 57.3 32.1 57.3C23.9 57.3 22.8 57.3 19.6 57.2C16.6 57.1 15 56.5 13.8 56.1C12.4 55.5 11.3 54.8 10.3 53.7C9.2 52.6 8.6 51.6 7.9 50.2C7.5 49.1 6.9 47.5 6.8 44.4C6.8 41.3 6.8 40.3 6.8 32C6.8 23.7 6.8 22.7 6.9 19.5C7 16.5 7.6 14.9 8 13.7C8.6 12.3 9.3 11.2 10.3 10.2C11.4 9.1 12.4 8.5 13.8 7.9C14.9 7.5 16.5 6.9 19.6 6.8C22.8 6.7 23.8 6.7 32.1 6.7C40.4 6.7 41.4 6.7 44.6 6.8C47.6 6.9 49.2 7.5 50.4 7.9C51.8 8.5 52.9 9.2 53.9 10.2C55 11.3 55.6 12.3 56.3 13.7C56.7 14.8 57.3 16.4 57.4 19.5C57.5 22.7 57.5 23.7 57.5 32C57.5 40.3 57.4 41.3 57.3 44.5Z" />
							<path d="M32.0016 16.0996C23.1016 16.0996 16.1016 23.2996 16.1016 31.9996C16.1016 40.8996 23.3016 47.8996 32.0016 47.8996C40.7016 47.8996 48.0016 40.8996 48.0016 31.9996C48.0016 23.0996 40.9016 16.0996 32.0016 16.0996ZM32.0016 42.3996C26.2016 42.3996 21.6016 37.6996 21.6016 31.9996C21.6016 26.2996 26.3016 21.5996 32.0016 21.5996C37.8016 21.5996 42.4016 26.1996 42.4016 31.9996C42.4016 37.7996 37.8016 42.3996 32.0016 42.3996Z" />
							<path d="M48.7 19.1002C50.7435 19.1002 52.4 17.4436 52.4 15.4002C52.4 13.3567 50.7435 11.7002 48.7 11.7002C46.6565 11.7002 45 13.3567 45 15.4002C45 17.4436 46.6565 19.1002 48.7 19.1002Z" />
						</svg></a>
					</div>
				</div>
			</Container>
			<Image className="mt-5 lg:hidden" src="/about-mobile.jpg" width={1000} height={486} alt="Holding guitar" />
			<Image className="hidden lg:max-w-lg lg:block xl:max-w-xl" src="/about.jpg" width={750} height={533} alt="Holding guitar" />
		</section>
	);
}
