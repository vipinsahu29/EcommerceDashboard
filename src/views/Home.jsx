import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const Home = () => {
  const { role } = useSelector((state) => state.auth);
  if (role === "seller") {
    return <Navigate to={"/seller/dashboard"} replace />;
  }
  else if(role === "admin") {
    return <Navigate to={"/admin/dashboard"} replace />;
  }
  return (
    <div>
      <h1>Home Page</h1>
    </div>
  );
};

export default Home;
