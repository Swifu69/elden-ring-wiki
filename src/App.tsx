import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Bosses from "./views/bosses";
import BossesInfo from "./views/bossesInfo";
import Home from "./views/home";
import Classes from "./views/classes";
import ClassInfo from "./views/classInfo";
import ErrorPage from "./views/error";

function App() {
	return (
		<BrowserRouter>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/bosses" element={<Bosses />} />
				<Route path="/bosses/:bossId" element={<BossesInfo />} />
				<Route path="/classes" element={<Classes />} />
				<Route path="/classes/:classId" element={<ClassInfo />} />
				<Route path="*" element={<ErrorPage />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
