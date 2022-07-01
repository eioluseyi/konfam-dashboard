import Dashboard from "./Dashboard";
import "normalize.css";
import "./styles.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

export default function App() {
	return (
		<div className="App">
			<ToastContainer />
			<Dashboard />
		</div>
	);
}
