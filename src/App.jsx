import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Appointments from "./pages/Appointments.jsx";
import VideoConsultation from "./pages/VideoConsultation.jsx";
import NotFound from "./pages/NotFound.jsx";

const router = createBrowserRouter(
  [
    { path: "/", element: <Index /> },
    { path: "/appointments", element: <Appointments /> },
    { path: "/video-consultation", element: <VideoConsultation /> },
    { path: "*", element: <NotFound /> },
  ],
  {
    // Opt into React Router v7 behavior early to silence the future warnings.
    future: {
      v7_startTransition: true,
      v7_relativeSplatPath: true,
    },
  }
);

const App = () => <RouterProvider router={router} />;

export default App;
