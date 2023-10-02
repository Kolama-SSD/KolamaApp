import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ToastContainer } from 'react-toastify';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Shop from './container/OrderManagement/User/shop/Shop';
import Cart from './container/OrderManagement/User/ShopingCart/Cart';
import ArtHeader from './components/ArtHeader/ArtHeader.jsx';
import PlaceHeader from './components/PlaceHeader/PlaceHeader.jsx';
import EventHeader from './components/EventHeader/EventHeader.jsx';
import ShopHeader from './components/ShopHeader/ShopHeader.jsx';
import AboutUs from './container/AboutUs/AboutUs';
import SriLanka from './container/SriLanka/SriLanka';
import Team from './container/Team/Team';
import Intro from './container/Intro/Intro';
import Login from './components/Login/Login';
import Register from './components/Registration/Register.jsx';
import { ShopContextProvider } from './context/shop-context';
import Gallery from './container/Gallery/Gallery';
import FindUs from './container/FindUs/FindUs';
import Footer from './container/Footer/Footer';


import AdminHome from './container/AdminHome/AdminHome';
import UserProfile from './container/UserProfile/UserProfile';
import UpdateProduct from './container/OrderManagement/Supplier/EditProduct/UpdateProduct';

import Add from './container/OrderManagement/Supplier/Add/Add';
import MyProduct from './container/OrderManagement/Supplier/MyProduct/MyProducts';
import ProductDetails from './container/OrderManagement/User/ProductDetails/ProductDetails';

import Art from './container/Arts Management/User/Art/Art';

import AddKolam from './container/Arts Management/Admin/Kolam/AddKolam.jsx';

import Masks from './container/Arts Management/User/Masks/Masks';
import EventHome from './container/EventManagement/Admin/EventHome';
import './App.css';
import Kolam from './container/Arts Management/User/Kolam/Kolam';
import AddMask from './container/Arts Management/Admin/Masks/AddMask';
import ViewKolam from './container/Arts Management/Admin/Kolam/ViewKolam';
import Puppets from './container/Arts Management/User/Puppets/Puppets';
import MasksDetails from './container/Arts Management/User/Masks/MasksDetails';
import ViewMask from './container/Arts Management/Admin/Masks/ViewMask';
import KolamDetails from './container/Arts Management/User/Kolam/KolamDetails';
import EditKolam from './container/Arts Management/Admin/Kolam/EditKolam';
import EditMask from './container/Arts Management/Admin/Masks/EditMask';

const queryClient = new QueryClient();

const App = () => (
  <ShopContextProvider>
    <Router>
      <QueryClientProvider client={queryClient}>
        <ToastContainer></ToastContainer>
        <Navbar />
        <Routes>
          <Route
            path='/'
            element={
              <>
                <ArtHeader />
                <PlaceHeader />
                <EventHeader />
                <ShopHeader />
                <AboutUs />
                <SriLanka />
                <Team />
                <Intro />
                <Gallery />
                <FindUs />
                <Footer />
              </>
            }
          />
          <Route
            path='/shop'
            element={
              <>
                <Shop />
                <Footer />
              </>
            }
          />
          <Route
            path='/arts'
            element={
              <>
                <Art />
                <Footer />
              </>
            }
          />
          <Route
            path='/cart'
            element={
              <>
                <Cart />
                <Footer />
              </>
            }
          />
          <Route
            path='/adminhome'
            element={
              <>
                <AdminHome />
              </>
            }
          />
          <Route
            path='/register'
            element={
              <>
                <Register />
                <Footer />
              </>
            }
          />
          <Route
            path='/login'
            element={
              <>
                <Login />
                <Footer />
              </>
            }
          />
          <Route
            path='/userprofile'
            element={
              <>
                <UserProfile />
                <Footer />
              </>
            }
          />
          <Route
            path='/supplier/add'
            element={
              <>
                <Add />

              </>
            }
          />
          <Route
            path='/addkolam'
            element={
              <>
                <AddKolam />
              </>
            }
          />
          <Route
            path='/addmask'
            element={
              <>
                <AddMask />
              </>
            }
          />
          <Route
            path='/kolam'
            element={
              <>
                <Masks />
                <Footer />
              </>
            }
          />
          <Route
            path='/mask'
            element={
              <>
                <Kolam />
                <Footer />
              </>
            }
          />
          <Route
            path='/puppet'
            element={
              <>
                <Puppets />
                <Footer />
              </>
            }
          />
          <Route
            path='/myproduct/updateproduct/:productId'
            element={
              <>
                <UpdateProduct />
              </>
            }
          />
          <Route
            path='/myproduct'
            element={
              <>
                <MyProduct />
              </>
            }
          />
          <Route
            path='/shop/productdetails/:productId'
            element={
              <>
                <ProductDetails />
                <Footer />
               </>
                }/>
             <Route
            path='/viewkolam'
            element={
              <>
                <ViewKolam />
                {/* <Footer /> */}
              </>
            }
          />
          <Route
            path='/viewmask'
            element={
              <>
                <ViewMask />

              </>
            }
          />
          <Route
            path='/products/:id'
            element={
              <>
                <MasksDetails/>
                <Footer />
              </>
            }
          />
          <Route
            path='/masks/:id'
            element={
              <>
                <KolamDetails />
                <Footer />
              </>
            }
          />
          <Route
            path='/adminhome'
            element={
              <>
                <AdminHome />
              </>
            }
          />
          <Route
            path='/editkolam/:id'
            element={
              <>
                <EditKolam />
              </>
            }
          />
          <Route
            path='/editmask/:id'
            element={
              <>
                <EditMask />

              </>
            }
           
          />
        </Routes>
      </QueryClientProvider>
    </Router>
  </ShopContextProvider>
);

export default App;