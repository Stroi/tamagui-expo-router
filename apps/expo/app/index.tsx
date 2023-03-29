import "expo-dev-client";
import React from "react";
import { Provider } from "app/provider";
import { useFonts } from "expo-font";
import { HomeScreen } from "app/features/home/screen";

export default function App() {
	// const [loaded] = useFonts({
	//   Inter: require('@tamagui/font-inter/otf/Inter-Medium.otf'),
	//   InterBold: require('@tamagui/font-inter/otf/Inter-Bold.otf'),
	// })

	// if (!loaded) {
	//   return null
	// }

	// return (
	// 	<Provider>
	// 		<HomeScreen />
	// 	</Provider>
	// );

	return <HomeScreen />;
}