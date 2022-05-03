import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Bosses from "./views/bosses";
import Home from "./views/home";
import Classes from "./views/classes";

function App() {
	return (
		<BrowserRouter>
			<Navbar />
			<Routes>
				<Route path="/bosses" element={<Bosses />} />
				<Route path="/classes" element={<Classes />} />
				<Route path="/" element={<Home />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
