import React from "react";
import { FaAddressBook, FaCalendar, FaHome, FaList, FaSearch, FaShoppingCart, FaStar } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="flex">
      {/* dashboard sidebar */}
      <div className="w-64 bg-orange-300 min-h-screen">
        <ul className="menu ">
          <li>
            <NavLink to="/dashboard/userHome">
            <FaHome></FaHome>
            User Home</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/cart">
            <FaShoppingCart></FaShoppingCart>
            My Cart</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/reservation">
            <FaCalendar></FaCalendar>
            My Reservation</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/review">
            <FaStar></FaStar>
            Add a Review</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/bookings">
            <FaList></FaList>
            My Bookings</NavLink>
          </li>
          <div className="divider"></div>
          <li>
            <NavLink to="/">
            <FaHome></FaHome>
             Home</NavLink>
          </li>
           <li>
            <NavLink to="/order/salad">
            <FaSearch></FaSearch>
             Menu</NavLink>
          </li>
        </ul>
      </div>
      {/* dashboard content */}
      <div className="flex-1">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
