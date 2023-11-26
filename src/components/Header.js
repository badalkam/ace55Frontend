import React from "react";
import { FaSearch } from "react-icons/fa";
import { Link, Navigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { jwtDecode } from "jwt-decode";

const {username} = ""

function Header() {
  const token = localStorage.getItem("token");
  if (token) {
    
    let decode = jwtDecode(token);
    console.log(decode);
    var {username}  = decode;
    console.log(username);
   
    
  }
  else{
    
  }



  return (
    <div>
      <header className="bg-slate-400 shadow-md">
        <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
          <h1 className="font-bolt text-sm sm:text-xl flex flex-wrap">
            <Link to={"/home"}>
              <span className="text-slate-500">FireFist</span>
              <span className="text-slate-700">Ace55</span>
            </Link>
          </h1>

          <form className="bg-slate-100 p-3 rounded-lg flex items-center">
            <input
              className=" bg-transparent focus:outline-none w-24 sm:w-64"
              type="text"
              placeholder="Search..."
            />
            <FaSearch className="text-slate-500" />
          </form>

          <ul className="flex gap-5">
            <Link to={"/"}>
              {" "}
              <li className="hidden sm:inline text-slate-800 hover:underline cursor-pointer">
                Home
              </li>
            </Link>
            <Link to={"/about"}>
              <li className="hidden sm:inline text-slate-800 hover:underline cursor-pointer">
                About
              </li>
            </Link>
            <Link to={"/signIn"}>
              {!username ? (
                <li className="text-slate-800 hover:underline cursor-pointer">
                  Sign In
                </li>
              ) : ( <Link to={'/list3'}><li className="text-slate-800 hover:underline cursor-pointer">
              {username}
            </li> </Link>
                
              )}
            </Link>

            <Link to={"/list"}>
              <li className="text-slate-800 hover:underline cursor-pointer">
                List
              </li>
            </Link>
          </ul>
        </div>
      </header>
      <Toaster position="top-center" reverseOrder="false"></Toaster>
    </div>
  );
}

export default Header;
