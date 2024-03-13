import scss from "./LoginPage.module.scss";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLogTodoMutation } from "../../../redux/api/auth";

const LoginPage = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [logTodo] = useLogTodoMutation();
	const navigate = useNavigate();

	const handleAdd = async () => {
		if (email === "" || password === "") {
			alert("Заполните все поля");
		} else {
			const logUsers = {
				email: email,
				password: password,
			};
			const response = await logTodo(logUsers);
			if ("data" in response) {
				const responseData = response.data.token;
				localStorage.setItem("token", responseData);
				localStorage.setItem("isAuth", "true");
				navigate("/user");
			} else {
				alert("Неверный логин или пароль");
			}
		}
		setEmail("");
		setPassword("");
	};

	return (
		<div className={scss.LoginPage}>
			<div className="container">
				<div className={scss.Elements_Parent}>
					<div className={scss.Elements}>
						<h1>Login</h1>
						<div className={scss.elements_input}>
							<TextField
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								type="text"
								id="filled-basic"
								label="Email"
								variant="filled"
							/>
							<TextField
								value={password}
								onChange={(e) => setPassword(e.target.value)}
								type="password"
								id="filled-basic"
								label="Password"
								variant="filled"
							/>
						</div>
						<div className={scss.elements_button}>
							<Button onClick={handleAdd} variant="outlined" color="error">
								Войти
							</Button>
							<a href="/register">Зарегистрироваться</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default LoginPage;
