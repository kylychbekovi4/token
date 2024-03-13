import { api as index } from "../index";

const api = index.injectEndpoints({
	endpoints: (builder) => ({
		// ! product
		// ! GET
		getProducts: builder.query<CRUD.GetProductResponse, CRUD.GetProductRequest>(
			{
				query: () => ({
					url: "products",
					method: "GET",
				}),
				providesTags: ["crud"],
			}
		),
		// ! post
		productPost: builder.mutation<CRUD.ProductResponse, CRUD.ProductRequest>({
			query: (productElements) => ({
				url: "products",
				method: "POST",
				body: productElements,
			}),
			invalidatesTags: ["crud"],
		}),
		deleteProducts: builder.mutation({
			query: (_id) => ({
				url: `products/${_id}`,
				method: "DELETE",
			}),
			invalidatesTags: ["crud"],
		}),
	}),
});

export const { useProductPostMutation, useGetProductsQuery, useDeleteProductsMutation } = api;
