import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import ContatctUs from "./components/ContatctUs";
import Error from "./components/Error";
import RestaurantBody from "./components/RestaurantBody";
import Footer from "./components/Footer";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import userContext from "../utils/userContext";
import { Provider } from "react-redux";
import appStore from "../utils/appStore";
import CartPage from "./components/CartPage";


const root = ReactDOM.createRoot(document.getElementById("root"));

const Grocery = lazy(() => import("./components/Grocery"));

const About = lazy(() => import("./components/AboutUs"));
const AppLayout = () => {
  // authentication
  const [userName, setUserName] = useState();

  useEffect(() => {
    setUserName(data.name);
    setUserName(" ")
  }, []);

  const data = {                                              // fetch
    name: "Joseph Sam Immanuel",
  };
  console.log(data);

  return (                                                // over Ridding
    <Provider store={appStore}>
    <userContext.Provider value={{loggedInUser: userName, setUserName}}>      
      <div className=" flex flex-col gap-10">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </userContext.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
        errorElement: <Error />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<h1>Loading ...</h1>}>
            <About />
          </Suspense>
        ),
        errorElement: <Error />,
      },
      {
        path: "/contact",
        element: <ContatctUs />,
        errorElement: <Error />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading ...</h1>}>
            <Grocery />
          </Suspense>
        ),
        errorElement: <Error />,
      },
      {
        path: "/cart",
        element: <CartPage />,
        errorElement: <Error />,
      },
      {
        path: "/restaurants/:restaurantId",
        element: <RestaurantBody />,
        errorElement: <Error />,
      },
    ],
  },
]);

root.render(<RouterProvider router={appRouter} />);
