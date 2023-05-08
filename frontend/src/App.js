import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './pages/About';
import Appetizermenu from './pages/Appetizermenu';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Nopage from './pages/Nopage';
import Mainmenu from './pages/Mainmenu';
import Pizzamenu from './pages/Pizzamenu';
import Dessertmenu from './pages/Dessertmenu';
import Burgermenu from './pages/Burgermenu';
import Seafoodmenu from './pages/Seafoodmenu';
import Cocktailmenu from './pages/Cocktailmenu';
import Snacksmenu from './pages/Snacksmenu';
import Footer from './components/Footer';
import Productdetails from './screens/Productdetails';
import Cartscreen from './screens/Cartscreen';
import SigninScreen from './screens/SigninScreen';
import RegisterScreen from './screens/RegisterScreen';
import ShippingAddressScreen from './screens/ShippingAddressScreen';
import PaymentMethodScreen from './screens/PaymentMethodScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import OrderScreen from './screens/OrderScreen';
import OrderHistoryScreen from './screens/OrderHistoryScreen';
import ProfileScreen from './screens/ProfileScreen';
import PrivateRoute from './components/PrivateRoute';
import AdminRoute from './components/AdminRoute';
import AppetizerListScreen from './screens/menuitemscreen/AppetizerListScreen';
import BurgerListScreen from './screens/menuitemscreen/BurgerListScreen';
import SnacksListScreen from './screens/menuitemscreen/SnacksListScreen';
import MainMenuListScreen from './screens/menuitemscreen/MainMenuListScreen';
import SeafoodListScreen from './screens/menuitemscreen/SeafoodListScreen';
import PizzaListScreen from './screens/menuitemscreen/PizzaListScreen';
import CocktailListScreen from './screens/menuitemscreen/CocktailListScreen';
import DessertListScreen from './screens/menuitemscreen/DessertListScreen';
import ProductEditScreen from './screens/ProductEditScreen';
import OrderListScreen from './screens/OrderListScreen';

export default function App() {
    return (
        <BrowserRouter>
            <Navbar title="Uncle Sammy's Kitchen"/>
                <Routes>
                        {/* navbar links */}
                        <Route index element={<Home/>}></Route>
                        <Route path='/Menu' element={<Menu/>}></Route>
                        <Route path='/About' element={<About/>}></Route>
                        <Route path='/Contact' element={<Contact/>}></Route>

                        {/* menu item pages */}
                        <Route path='/snacks' element={<Snacksmenu/>}></Route>
                        <Route path='/appetizer' element={<Appetizermenu/>}></Route>
                        <Route path='/mainmenu' element={<Mainmenu/>}></Route>
                        <Route path='/seafood' element={<Seafoodmenu/>}></Route>
                        <Route path='/pizza' element={<Pizzamenu/>}></Route>
                        <Route path='/cocktail' element={<Cocktailmenu/>}></Route>
                        <Route path='/dessert' element={<Dessertmenu/>}></Route>
                        <Route path='/burger' element={<Burgermenu/>}></Route>

                        {/* product details page */}
                        <Route path='/productdetails/:category/:id' element={<Productdetails/>}></Route>
                        <Route path='/:category/:id/edit' element={<ProductEditScreen/>}></Route>

                        {/* shopping cart */}
                        <Route path="/cart" element={<Cartscreen/>}></Route>
                        <Route path="/cart/:category/:id" element={<Cartscreen/>}></Route>

                        {/* sigin screen */}
                        <Route path="/signin" element={<SigninScreen/>}></Route>

                        {/* register screen */}
                        <Route path="/register" element={<RegisterScreen/>}></Route>

                        {/* shipping screen */}
                        <Route path="/shipping" element={<ShippingAddressScreen/>}></Route>

                        {/* payment screen */}
                        <Route path="/payment" element={<PaymentMethodScreen/>}></Route>

                        {/* placeorder details screen */}
                        <Route path="/placeorder" element={<PlaceOrderScreen/>}></Route>

                        {/* orderdetails screen */}
                        <Route path="/order/:id" element={<OrderScreen/>}></Route>

                        {/* orderhistory screen */}
                        <Route path="/orderhistory" element={<OrderHistoryScreen/>}></Route>

                        {/* profile screen */}
                        <Route path="/profile" element={<PrivateRoute><ProfileScreen /></PrivateRoute>}/>

                        {/* admin menu items list screens */}
                        <Route path="/appetizerlist" element={<AdminRoute><AppetizerListScreen /></AdminRoute>}/>
                        <Route path="/burgerlist" element={<AdminRoute><BurgerListScreen /></AdminRoute>}/>
                        <Route path="/snackslist" element={<AdminRoute><SnacksListScreen /></AdminRoute>}/>
                        <Route path="/mainmenulist" element={<AdminRoute><MainMenuListScreen /></AdminRoute>}/>
                        <Route path="/seafoodlist" element={<AdminRoute><SeafoodListScreen /></AdminRoute>}/>
                        <Route path="/pizzalist" element={<AdminRoute><PizzaListScreen /></AdminRoute>}/>
                        <Route path="/cocktaillist" element={<AdminRoute><CocktailListScreen /></AdminRoute>}/>
                        <Route path="/dessertlist" element={<AdminRoute><DessertListScreen /></AdminRoute>}/>

                        <Route path="/orderlist" element={<AdminRoute><OrderListScreen/></AdminRoute>}/>

                        {/* error page */}
                        <Route path='*' element={<Nopage/>}></Route>
                </Routes>
            <Footer/>
        </BrowserRouter>
    )
}
