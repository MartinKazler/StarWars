import React from "react";
import { NavLink } from "react-router-dom";
export const Navbar = () => {

  return (
    <>
      <div style={{backgroundColor: "black", borderBottom: "2px solid black", borderTop: "2px solid black"}}>
        <NavLink to="/Movies" style={{color: "red"}}>
         <p> Movies </p>
        </NavLink>
        <NavLink to="/Character" style={{color: "red"}}>
        <p> Characters </p>
        </NavLink>
      </div>
    </>
  );
};