import { useEffect, useState } from "react";

const useScreen = () => {
	const [screen, setScreen] = useState(0);

	useEffect(() => {
		const updatePosition = () => {
			setScreen(window.innerWidth);
		};
		window.addEventListener("resize", updatePosition);
		updatePosition();
		return () => window.removeEventListener("resize", updatePosition);
	}, []);
	console.log(screen);
	return screen;
};

export default useScreen;
