// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App

import './App.css';
import './assets/css/style.css';
import './assets/css/bootstrap.css';
import React, { useState, useEffect } from "react";

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Contact from './pages/Contact';
import Products from './pages/Product';
import ProductProfile from './pages/ProductProfile';
import Plans from './pages/Plans';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Terms from "./pages/Terms";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Cancellation from "./pages/Cancellation";
import PublicLayout from './layouts/PublicLayout';
import AuthLayout from './layouts/AuthLayout';
import About from './pages/About';
import StepperForm from './components/StepperForm';
import Dashboard from './pages/Dashboard';
import MatchProfile from './pages/MatchProfile';

function App() {

  // 🔐 AUTH STATE
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // 💎 PLAN STATE
  const [hasActivePlan, setHasActivePlan] = useState(false);
useEffect(() => {
    if (window.WOW) {
      new window.WOW().init();
    }

    if (window.$ && window.$(".owl-carousel").length) {
      window.$(".owl-carousel").owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        dots: true,
        items: 1,
      });
    }
  }, []);
  return (
    <BrowserRouter>
      <Routes>

        {/* 🌍 PUBLIC ROUTES */}
        <Route element={<PublicLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product/:id" element={<ProductProfile />} />
          <Route path="/about" element={<About />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/cancellation-policy" element={<Cancellation />} />
          <Route path="/onboarding" element={<StepperForm />} />

        </Route>

        {/* 🔐 AUTH ROUTES */}
        <Route element={<AuthLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />

          <Route
            path="/match/:id"
            element={
              <MatchProfile
                isLoggedIn={isLoggedIn}
                hasActivePlan={hasActivePlan}
              />
            }
          />

          <Route
            path="/signin"
            element={<SignIn setIsLoggedIn={setIsLoggedIn} />}
          />

          <Route
            path="/signup"
            element={<SignUp setIsLoggedIn={setIsLoggedIn} />}
          />

          <Route
            path="/plans"
            element={<Plans setHasActivePlan={setHasActivePlan} />}
          />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
