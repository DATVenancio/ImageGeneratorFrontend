import Home from "./pages/home";
import './App.css';
import LanguageDropdown from "./components/common/language_dropdown"
import { Routes, Route } from "react-router-dom";
function App() {
  return (
		<div className="App">
			<LanguageDropdown/>
			<Routes>
				<Route path="/" element={<Home />} />
			</Routes>

		</div>
	);
}

export default App;
