import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import ProductProvider from "./contexts/ProductContext";
import CartProvider from "./contexts/CartContext";
import CurrencyProvider from "./contexts/CurrencyContext";
import { SidebarProvider } from "./contexts/SidebarContext";
import PrivateRoute from "./components/PrivateRoute";

import Home from "./pages/Home";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Profile from "./components/Profile";
import ProductDetailsPage from "./pages/ProductDetailsPage";

import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
	return (
		<BrowserRouter>
			<AuthProvider>
				<CurrencyProvider>
					<ProductProvider>
						<CartProvider>
							<SidebarProvider>
								<div className="flex flex-col min-h-screen">
									<Header />
									<div className="flex flex-1">
										<Sidebar />
										<main className="flex-1">
											<Routes>
												{/* Public routes */}
												<Route path="/" element={<Home />} />
												<Route path="/signup" element={<Signup />} />
												<Route path="/login" element={<Login />} />
												<Route path="/product/:id" element={<ProductDetailsPage />} />

												{/* Protected routes */}
												<Route
													path="/profile"
													element={
														<PrivateRoute>
															<Profile />
														</PrivateRoute>
													}
												/>
											</Routes>
										</main>
									</div>
									<Footer />
								</div>
							</SidebarProvider>
						</CartProvider>
					</ProductProvider>
				</CurrencyProvider>
			</AuthProvider>
		</BrowserRouter>
	);
}

export default App;
