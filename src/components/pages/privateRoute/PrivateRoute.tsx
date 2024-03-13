import { FC, ReactNode, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

interface ProtectRouteProps {
	children: ReactNode;
}

const ProtectRoute: FC<ProtectRouteProps> = ({ children }) => {
	const navigate = useNavigate();
	const { pathname } = useLocation();

	const isAuth = Boolean(localStorage.getItem("isAuth"));

	useEffect(() => {
		if (isAuth && (pathname === "/" || pathname === "/register")) {
			navigate("/user");
		} else if (!isAuth && pathname === "/user") {
			navigate("/");
		}
	}, [isAuth, pathname, navigate]);

	return children;
};

export default ProtectRoute;
