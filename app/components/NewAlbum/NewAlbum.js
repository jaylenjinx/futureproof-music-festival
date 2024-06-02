export default function NewAlbum({ customClasses }) {
	return (
		<div className={`flex flex-col items-center justify-center p-4${customClasses ? ` ${customClasses}` : ""}`}>
			<h4 className="text-white font-permanentMarker text-xl">Next Event</h4>
			<h4 className="text-white font-warpDrive text-xl">Generate</h4>
			<p className="text-fluo-green text-base">Happening 4th of August</p>
		</div>
	);
}
