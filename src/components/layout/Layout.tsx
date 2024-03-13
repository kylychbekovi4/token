import { Route, Routes } from "react-router-dom";
import LoginPage from "../pages/loginPage/LoginPage";
import RegisterPage from "../pages/registerPage/RegisterPage";
import UserPage from "../pages/userPage/UserPage";
import NotFoundPage from "../pages/notFoundPage/NotFoundPage";

const Layout = () => {
	return (
		<div>
			<Routes>
				<Route path="/" element={<LoginPage />} />
				<Route path="/register" element={<RegisterPage />} />
				<Route path="/user" element={<UserPage />} />
				<Route path="*" element={<NotFoundPage />} />
			</Routes>
		</div>
	);
};

export default Layout;
