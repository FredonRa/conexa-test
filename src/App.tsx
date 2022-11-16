import {
	createBrowserRouter,
	RouterProvider
} from "react-router-dom";
import { CharacterProvider } from "./context/CharacterProvider";
import HomePage from "./pages/HomePage";
import "./App.scss"
import ErrorPage from "./pages/ErrorPage";

const router = createBrowserRouter([
	{
		path: "/",
		element: <HomePage />,
	},
	{
		path: "*",
		element: <ErrorPage />
	},
]);

function App() {
	return (
		<CharacterProvider>
			<RouterProvider router={router} />
		</CharacterProvider>
	)
}

export default App
