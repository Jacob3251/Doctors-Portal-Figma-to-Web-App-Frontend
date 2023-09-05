import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomeLayout from "./Pages/Home/Home/HomeLayout";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayout></HomeLayout>,
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
