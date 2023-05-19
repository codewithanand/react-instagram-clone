import { useContext, useState } from "react";
import Home from "./pages/home/Home";
import { DarkModeContext } from "./context/DarkModeContext";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Sidebar from "./components/sidebar/Sidebar";
import Rightbar from "./components/rightbar/Rightbar";
import Create from "./pages/create/Create";
import Chat from "./pages/chat/Chat";
import Profile from "./pages/profile/Profile";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";

function App() {
  const {darkMode} = useContext(DarkModeContext)
  const [rightBarVisible, setRightBarVisible] = useState(true)

  const handleRightBar = (visibility) => {
    setRightBarVisible(visibility)
    console.log(rightBarVisible)
  }

  const Layout = () => {
    return (
      <div className={`theme-${darkMode ? "dark" : "light"}`}>
        <div style={{display: 'flex',}}>
          <Sidebar rightBar={(v) => handleRightBar(v)} />
          <Outlet />
          {rightBarVisible && <Rightbar />}
        </div>
      </div>
    )
  }

  const router = createBrowserRouter([
    {
      path: '/',
      element: (
          <Layout />
      ),
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/create",
          element: <Create />
        },
        {
          path: "/chat",
          element: <Chat  />
        },
        {
          path: "/profile/:id",
          element: <Profile  />
        }
      ]
    },
    {
      path: '/login',
      element: <Login />
    },
    {
      path: '/register',
      element: <Register />
    }
  ])
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
