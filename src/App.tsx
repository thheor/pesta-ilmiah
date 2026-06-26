import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "@/routes/home";
import { About } from "@/routes/about";
import { NotFound } from "@/NotFound";
import { Esai } from "@/routes/competition/esai";
import { Infografis } from "@/routes/competition/infografis";
import { CCI } from "@/routes/competition/cci";
import { Talkshow } from "@/routes/talkshow";

const router = createBrowserRouter(
  [
    { path: "/", element: <Home /> },
    { path: "/about", element: <About /> },
    { path: "/talkshow", element: <Talkshow /> },
    { path: "/competition/esai", element: <Esai /> },
    { path: "/competition/infografis", element: <Infografis /> },
    { path: "/competition/cci", element: <CCI /> },
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
