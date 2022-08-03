import { Route, Routes } from "react-router-dom";
import { Event } from "./pages/Event";
// import { PageNotFound } from './pages/PageNotFound';
// import { Platform } from './pages/Platform';
import { Subscribe } from "./pages/Subscribe";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Subscribe />} />
      <Route path="/event" element={<Event />} />
      <Route path="/event/lesson/:slug" element={<Event />} />
      {/* <Route path="/event/lesson" element={<Platform />} />
      <Route path="*" element={<PageNotFound />} /> */}
    </Routes>
  );
}
