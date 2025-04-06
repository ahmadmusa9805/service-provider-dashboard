import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import MainLayout from "../components/Layout/MainLayout";
import Login from "../Pages/Auth/Login";
import ForgotPage from "../Pages/Auth/ForgotPage";
import Register from "../Pages/Auth/Register";



const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children: [
        {
        //   path: "/",
          index: true,
          element: <App></App>,
        },
        {
          path: "/about",
          element: <About></About>,
        },
        {
            path: "/contact",
            element: <Contact></Contact>,
          }
      ]
    },
    {
      path: "/login",
      element: <Login></Login>,
    },
    {
      path: "/register",
      element: <Register></Register>,
    },
    {
      path: "/forgot-password",
      element: <ForgotPage></ForgotPage>,
    }
    

    // main layout
    // {
    //   path: "/",
    //   element:
    //     // <Main />,
    //     // <ProtectedRoute> <Main /></ProtectedRoute>,
    //     <App></App>,
    //   children: [
    //     {
    //       path: "/",
    //       element: <Analytics></Analytics>,
    //     },
    //   ],
    // },
  ]);

  export default router;
