import { useState } from "react";
import scss from "./UserPage.module.scss";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import {
	useDeleteProductsMutation,
	useGetProductsQuery,
	useProductPostMutation,
} from "../../../redux/api/crud";
import {} from "../../../redux/api/auth";
import { useNavigate } from "react-router-dom";

const UserPage = () => {
	// ! STATES
	const [productName, setProductName] = useState("");
	const [productQuantity, setProductQuantity] = useState(0);
	const [productPrice, setProductPrice] = useState(0);
	const [productImage, setProductImage] = useState("");
	const [product] = useProductPostMutation();
	const { data, isLoading } = useGetProductsQuery();
	const navigate = useNavigate();

	const [deleteProducts] = useDeleteProductsMutation();

	// ! handle Add Function
	const handleAdd = async () => {
		if (
			productName === "" ||
			productQuantity === 0 ||
			productPrice === 0 ||
			productImage === ""
		) {
			alert("Заполните все поля");
		} else {
			const productElements = {
				productName: productName,
				quantity: productQuantity,
				price: productPrice,
				photoUrl: productImage,
			};
			await product(productElements);
		}
		setProductName("");
		setProductQuantity(0);
		setProductPrice(0);
		setProductImage("");
	};

	// ! exit remove local storage
	const handleExit = () => {
		localStorage.removeItem("token");
		localStorage.removeItem("isAuth");
		navigate("/");
	};

	const handleDelete = async (_id: number) => {
		await deleteProducts(_id);
	};

	return (
		<div className={scss.UserPage}>
			<div className="container">
				<div className={scss.main_elements}>
					<div className={scss.element_inputs}>
						<TextField
							value={productName}
							onChange={(e) => setProductName(e.target.value)}
							type="text"
							id="filled-basic"
							label="Name"
							variant="filled"
						/>
						<TextField
							value={productQuantity}
							onChange={(e) => setProductQuantity(+e.target.value)}
							type="number"
							id="filled-basic"
							label="Quantity"
							variant="filled"
						/>
						<TextField
							value={productPrice}
							onChange={(e) => setProductPrice(+e.target.value)}
							type="number"
							id="filled-basic"
							label="Price"
							variant="filled"
						/>
						<TextField
							value={productImage}
							onChange={(e) => setProductImage(e.target.value)}
							type="url"
							id="filled-basic"
							label="Image"
							variant="filled"
						/>
					</div>
					<div className={scss.element_buttons}>
						<Button onClick={handleAdd} variant="outlined" color="error">
							Add
						</Button>
						<Button onClick={handleExit} variant="outlined" color="error">
							Exit
						</Button>
					</div>
				</div>
				{isLoading ? (
					<h1>...Loading</h1>
				) : (
					<div className={scss.Main_rendering}>
						{data?.map((item) => (
							<div key={item._id}>
								<div className={scss.element_render}>
									<div className={scss.rendering}>
										<div className={scss.element_texts}>
											<h1>{item.productName}</h1>
											<h2>quantity: {item.quantity}</h2>
											<h3>price: {item.price}</h3>
										</div>
										<img src={item.photoUrl} alt={item.productName} />
									</div>
									<div className={scss.btn}>
										<Button
											onClick={() => handleDelete(item._id)}
											variant="outlined"
											color="error">
											Delete
										</Button>
									</div>
								</div>
							</div>
						))}
					</div>
				)}
			</div>
		</div>
	);
};

export default UserPage;
