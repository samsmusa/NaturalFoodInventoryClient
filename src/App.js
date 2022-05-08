import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./component/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";
import MyItem from "./pages/MyItem/MyItem";
import Login from "./pages/Auth/Login/Login";
import Register from "./pages/Auth/Register/Register";
import Profile from "./pages/Profile/Profile";
import RequireAuth from "./component/RequireAuth/RequireAuth";
import Inventory from "./pages/MyItem/Inventory/Inventory/Inventory";
import CustomerList from "./pages/MyItem/Accounts/CustomerList/CustomerList";
import ProspectLists from "./pages/MyItem/Accounts/ProspectLists/ProspectLists";
import VendorLists from "./pages/MyItem/Accounts/VendorLists/VendorLists";
import Sales from "./pages/MyItem/Accounts/Sales/Sales";
import SalesOrders from "./pages/MyItem/Orders/SalesOrders/SalesOrders";
import Purchase from "./pages/MyItem/Orders/Purchase/Purchase";
import Quotations from "./pages/MyItem/Orders/Quotations/Quotations";
import Invoices from "./pages/MyItem/Orders/Invoices/Invoices";
import Stock from "./pages/MyItem/Inventory/Stock/Stock";
import Categories from "./pages/MyItem/Inventory/Categories/Categories";
import Attributes from "./pages/MyItem/Inventory/Attributes/Attributes";
import LocationAndZone from "./pages/MyItem/Inventory/LocationAndZone/LocationAndZone";
import Item from "./pages/Item/Item";
import Blog from "./pages/Blog/Blog";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage></Homepage>}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/blog" element={<Blog />}></Route>

        <Route
          path="/myitem"
          element={
            <RequireAuth>
              <MyItem />
            </RequireAuth>
          }
        >
          <Route path="accounts/customer" element={<CustomerList />}></Route>
          <Route path="accounts/prospect" element={<ProspectLists />}></Route>
          <Route path="accounts/vendor" element={<VendorLists />}></Route>
          <Route path="accounts/sales" element={<Sales />}></Route>
          <Route path="orders/salesorder" element={<SalesOrders />}></Route>
          <Route path="orders/purchase" element={<Purchase />}></Route>
          <Route path="orders/quotation" element={<Quotations />}></Route>
          <Route path="orders/invoices" element={<Invoices />}></Route>
          <Route path="inventory/inventory" element={<Inventory />}></Route>
          <Route path="inventory/stock" element={<Stock />}></Route>
          <Route path="inventory/categories" element={<Categories />}></Route>
          <Route path="inventory/attributes" element={<Attributes />}></Route>
          <Route path="inventory/lz" element={<LocationAndZone />}></Route>
        </Route>

        <Route
          path="/profile"
          element={
            <RequireAuth>
              <Profile />
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/item/:id"
          element={
            <RequireAuth>
              <Item/>
            </RequireAuth>
          }
        ></Route>
      </Routes>
      <footer class="bg-light text-center text-lg-start">
  <div class="text-center p-3" style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}>
    © 2020 Copyright:
    <a class="text-dark" href="https://mdbootstrap.com/">sams musa</a>
  </div>
</footer>
    </div>
  );
}

export default App;
