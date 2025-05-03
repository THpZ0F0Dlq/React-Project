import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import SidebarProvider from "./contexts/SidebarContext";
import CartProvider from "./contexts/CartContext";
import CurrencyProvider from "./contexts/CurrencyContext.jsx";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<SidebarProvider>
			<CurrencyProvider>
				<CartProvider>
					<App />
				</CartProvider>
			</CurrencyProvider>
		</SidebarProvider>
	</StrictMode>
);
