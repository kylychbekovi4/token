import { api as index } from "../index";

const api = index.injectEndpoints({
	endpoints: (builder) => ({
		getTodo: builder.query<CRUD.GetCrudResponse, CRUD.GetCrudRequest>({
			query: () => ({
				url: "users",
				method: "GET",
			}),
			providesTags: ["crud"],
		}),

		// ! register
		createTodo: builder.mutation<
			CRUD.CreateCrudResponse,
			CRUD.CreateCrudRequest
		>({
			query: (newUsers) => ({
				url: "users",
				method: "POST",
				body: newUsers,
			}),

			invalidatesTags: ["crud"],
		}),
		// ! login
		logTodo: builder.mutation<
			CRUD.CreateLoginResponse,
			CRUD.CreateLoginRequest
		>({
			query: (logUsers) => ({
				url: "login",
				method: "POST",
				body: logUsers,
			}),
			invalidatesTags: ["crud"],
		}),
	}),
});

export const { useGetTodoQuery, useCreateTodoMutation, useLogTodoMutation } =
	api;
