// import React from "react";
// import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './App.css';
// import Home from "./pages/Home";
// import Header from "./component/Header";
// import LoginPage from "./pages/Login";

// // Wrapper component to conditionally show Header
// function Layout() {
//   const location = useLocation();

//   return (
//     <>
//       {/* Show Header on all routes except '/' */}
//       {location.pathname !== '/' && <Header />}
//       <Routes>
//         <Route path="/" element={<LoginPage />} />
//         <Route path="/home/" element={<Home />} />
//       </Routes>
//     </>
//   );
// }

// function App() {
//   return (
//     <BrowserRouter>
//       <Layout />
//     </BrowserRouter>
//   );
// }

// export default App;

import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Home from "./pages/Home";
import Header from "./component/Header";
import LoginPage from "./pages/Login";

function Layout() {
  const location = useLocation();

  return (
    <>
      {location.pathname !== '/' && <Header />}
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home/*" element={<Home />} /> {/* ✅ Allow nested routing */}
      </Routes>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}

export default App;
