import scss from "./Register.module.scss";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
	useCreateTodoMutation,
	useGetTodoQuery,
} from "../../../redux/api/auth";

const RegisterPage = () => {
	const { data, isLoading } = useGetTodoQuery();
	console.log(data);
	console.log(isLoading);

	const navigate = useNavigate();

	const [userName, setUserName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [createTodo] = useCreateTodoMutation();

	const handleAdd = async () => {
		const newUsers = {
			userName,
			email,
			password,
		};
		await createTodo(newUsers);
		navigate("/");
	};

	return (
		<div className={scss.RegisterPage}>
			<div className="container">
				<div className={scss.Elements_Parent}>
					<div className={scss.Elements}>
						<h1>Register</h1>
						<div className={scss.elements_input}>
							<TextField
								value={userName}
								onChange={(e) => setUserName(e.target.value)}
								type="text"
								id="filled-basic"
								label="Имя пользователя"
								variant="filled"
							/>
							<TextField
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								type="text"
								id="filled-basic"
								label="Электронная почта Gmail"
								variant="filled"
							/>
							<TextField
								value={password}
								onChange={(e) => setPassword(e.target.value)}
								type="password"
								id="filled-basic"
								label="Пароль"
								variant="filled"
							/>
						</div>
						<div className={scss.elements_button}>
							<Button onClick={handleAdd} variant="outlined" color="error">
								Завершить
							</Button>
							<a href="/">Уже есть аккаунт</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default RegisterPage;
