/* eslint-disable @typescript-eslint/no-unused-vars */
namespace CRUD {
	type GetCrudRequest = void;
	type GetCrudResponse = {
		_id?: number;
		userName: string;
		email: string;
		password: string | number;
	}[];

	type CreateCrudRequest = {
		_id?: number;
		email: string;
		userName: string;
		password: string | number;
	};

	type CreateCrudResponse = {
		_id?: number;
		email: string;
		userName: string;
		password: string | number;
	}[];
	type CreateLoginRequest = {
		email: string;
		password: string | number;
	};

	type CreateLoginResponse = {
		token: string;
	};

	type ProductResponse = {
		_id?: number;
		productName: string;
		quantity: number;
		price: number;
		photoUrl: string;
	}[];

	type ProductRequest = {
		productName: string;
		quantity: number;
		price: number;
		photoUrl: string;
	};

	type GetProductResponse = {
		productName: string;
		quantity: number;
		price: number;
		photoUrl: string;
		_id: number;
	}[];

	type GetProductRequest = void
}
