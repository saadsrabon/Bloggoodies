
import logo from "../../assets/logo.svg";
import search from "../../assets/icons/search.svg";
import { Link } from "react-router-dom";

import { useAuth } from "../../hooks/useAuth";
import { useEffect, useState } from "react";

const Header = () => {

const{logout,user,islogin ,token }=useAuth()
console.log(token,"from header")

const handleLogout =()=>{
  logout()
}


  return (
    <header>
      <nav className="container">
        {/* <!-- Logo --> */}
        <div>
          <Link to="/">
            <img className="w-32" src={logo} alt="lws" />
          </Link>
        </div>

        {/* <!-- Actions - Login, Write, Home, Search --> */}
        {/* <!-- Notes for Developers --> */}
        {/* <!-- For Logged in User - Write, Profile, Logout Menu --> */}
        {/* <!-- For Not Logged in User - Login Menu --> */}
        <div>
          <ul className="flex items-center space-x-5">
         
        <li>
              <Link
                to="/create-blog"
                className="bg-indigo-600 text-white px-6 py-2 md:py-3 rounded-md hover:bg-indigo-700 transition-all duration-200"
              >
                Write
              </Link>
            </li>
            
            <li>
              <a
                href="./search.html"
                className="flex items-center gap-2 cursor-pointer"
              >
                <img src={search} alt="Search" />
                <span>Search</span>
              </a>
            </li>
            {
             islogin?(<li>
              <button
                onClick={handleLogout}
                className="text-white/50 hover:text-white transition-all duration-200"
              >
                Logout
              </button>
            </li>):(<li>
              <Link to="/login"
            
                className="text-white/50 hover:text-white transition-all duration-200"
              >
                Login
              </Link>
            </li>)
            }
            <li className="flex items-center">
              {/* <!-- Circular Div with background color --> */}
              <div className="avater-img bg-orange-600 text-white">
                <span className="">S</span>
                {/* <!-- User's first name initial --> */}
              </div>

              {/* <!-- Logged-in user's name --> */}
              <a href="./profile.html">
                <span className="text-white ml-2">Saad Hasan</span>
              </a>
              {/* <!-- Profile Image --> */}
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
