"use client";

import { useRef } from "react";
import { useIsIntersecting } from "@/app/util/useObserver";
import ScrollTo from "@/app/global-components/ScrollTo/ScrollTo";
import ButtonPrimary from "@/app/global-components/ButtonPrimary/ButtonPrimary";
import { MapMapper, Github } from "@/app/svg-icons/svg-icons";

const observerOptions = {
	rootMargin: "0px",
	threshold: 0.3,
};

const tourDates = [
	{
		id: 1,
		date: "29 Jun",
		dayTime: "Sundaze but not Sundaze",
		venue: "Set Times TBA",
		city: "Red Rattler, Marrickville",
	},
	{
		id: 2,
		date: "4 Aug",
		dayTime: "Generate Music Festival",
		venue: "Set Times TBA",
		city: "Yeo Park, Ashfield",
	},
	{
		id: 3,
		date: "16 Nov",
		dayTime: "Graduates",
		venue: "Set Times TBA",
		city: "TBA",
	},
];

export default function IntroTourDates() {
	const sectionRef = useRef(null);
	const isIntersecting = useIsIntersecting(observerOptions, sectionRef);
	return (
		<div className={`flex flex-col justify-center items-center reveal lg:justify-end lg:items-end${isIntersecting ? " visible" : ""}`} ref={sectionRef}>
			<h2 className="text-white font-permanentMarker text-2xl md:text-3xl lg:text-4xl">Upcoming Shows</h2>
			<ul className="list-none">
				{tourDates.map((gig) => {
					return (
						<li key={gig.id} className="flex items-center my-10 justify-between text-xl md:justify-end md:text-2xl lg:text-2xl xl:text-3xl">
							<div className="flex flex-col justify-center items-center date w-[4.7rem] h-[4.7rem] p-2 bg-fluo-green mr-4 text-2xl rounded-md md:mr-12 lg:w-[5.5rem] lg:h-[5.5rem]">
								<p className="font-bold text-xl text-white leading-none text-center uppercase lg:text-3xl">{gig.date}</p>
							</div>
							<div className="text-white text-right leading-none md:mr-12">
								<p style={{width: 400}}>{gig.dayTime}</p>
								<p class="venue">{gig.venue}</p>
								<div className="flex justify-end md:hidden">
									<MapMapper extraClasses="fill-amber-400 mr-2" />
									<p style={{width: 400}}>{gig.city}</p>
								</div>
							</div>
							<div className="hidden text-right text-white leading-none md:flex">
								<MapMapper extraClasses="fill-amber-400 mr-2" />
								<p style={{width: 200}}>{gig.city}</p>
							</div>
						</li>
					);
				})}
			</ul>
			<div className="hidden gap-x-3 lg:flex">
				<ScrollTo toId="shows" duration={1500}>
					<ButtonPrimary>Find out more</ButtonPrimary>
				</ScrollTo>
			</div>
		</div>
	);
}
