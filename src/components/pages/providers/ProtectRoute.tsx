import { FC, ReactNode } from "react";
import { Provider } from "react-redux";
import { store } from "../../../redux/store";

interface ReduxProviderType {
	children: ReactNode;
}

export const ReduxProvider: FC<ReduxProviderType> = ({ children }) => {
	return (
		<>
			<Provider store={store}>{children}</Provider>
		</>
	);
};
