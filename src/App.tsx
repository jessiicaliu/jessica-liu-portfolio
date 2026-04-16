import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
// Trigger redeploy 
import Navbar from "@/components/Navbar";
import ClickSparkles from "@/components/ClickSparkles";
import MusicPlayer from "@/components/MusicPlayer";
import { Novatrix } from "./components/Novatrix";
import NotFound from "./pages/NotFound";
import ScrollableSite from "./pages/ScrollableSite";

const hashRedirectRoutes = ["stack", "experience", "projects", "contact"] as const;

const App = () => (
  <BrowserRouter>
    <div className="fixed inset-0 -z-10 opacity-25 pointer-events-none">
      <Novatrix speed={0.35} amplitude={0.06} mouseReact />
    </div>
    <ClickSparkles />
    <Navbar />
    <MusicPlayer />
    <Routes>
      <Route path="/" element={<ScrollableSite />} />
      {hashRedirectRoutes.map((id) => (
        <Route key={id} path={`/${id}`} element={<Navigate to={`/#${id}`} replace />} />
      ))}
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default App;
