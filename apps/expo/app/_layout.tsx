import "expo-dev-client";
import React, { FC, PropsWithChildren, Suspense, useEffect } from "react";
import { Provider } from "app/provider";
import { useFonts } from "expo-font";
import { SplashScreen, Slot, Stack } from "expo-router";

export const App: FC<PropsWithChildren> = ({ children }) => {
	const [fontsLoaded] = useFonts({
		Inter: require("@tamagui/font-inter/otf/Inter-Medium.otf"),
		InterBold: require("@tamagui/font-inter/otf/Inter-Bold.otf"),
	});

	useEffect(() => {
		if (fontsLoaded) {
			// Hide the splash screen after the fonts have loaded and the
			// UI is ready.
			SplashScreen.hideAsync();
		}
	}, [fontsLoaded]);

	// Prevent rendering until the font has loaded
	if (!fontsLoaded) {
		return null;
	}

	return (
		<Provider>
			<Slot />
		</Provider>
	);
};
