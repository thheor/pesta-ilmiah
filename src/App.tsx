import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "@/routes/home";
import { About } from "@/routes/about";
import { NotFound } from "@/NotFound";

const router = createBrowserRouter(
  [
    { path: "/", element: <Home /> },
    { path: "/about", element: <About /> },
    { path: "/*", element: <NotFound /> },
  ],
  {
    basename: import.meta.env.BASE_URL,
  },
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
