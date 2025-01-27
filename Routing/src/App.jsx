//import { Dashboard } from "./Components/Dashboard";
import React, { Suspense } from "react";

const Dashboard = React.lazy(() => import("./Components/Dashboard"));
const Landing = React.lazy(() => import("./Components/Landing"));

import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom"; // we can only use useNavigate inside the the BrowserRouter

function App() {
  //suspense API
  return (
    <div>
      <BrowserRouter>
        <Appbar />
        <React.Suspense fallback={<div>Screen Loading</div>}>
          <Routes>
            <Route
              path="/dashboard"
              element={
                <Suspense fallback={"Loading"}>
                  <Dashboard />
                </Suspense>
              }
            />
            // another way to use suspense
            <Route path="/" element={<Landing />} />
          </Routes>
        </React.Suspense>
      </BrowserRouter>
    </div>
  );
}

function Appbar() {
  const navigate = useNavigate(); // we can define it above <BrowserRouter /> component that's why we need to create a new comonent and here we defined our useNavigate hook
  return (
    <div>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Landing Page
      </button>
      <button
        onClick={() => {
          navigate("/dashboard");
        }}
      >
        Dashboard
      </button>
    </div>
  );
}

export default App;

//  using this window.location.href is not good as when you switch from one route to another ( / -> /dashboard) it will again fetch the whole data and then renders it on screen.
