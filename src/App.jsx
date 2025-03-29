import { Route, Routes } from "react-router";
import Header from "@/components/Header";
import Home from "@/pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Results from "./pages/Results";
import Game from "./pages/Game";
import Blogs from "./pages/Blogs";
import BlogSingle from "./pages/BlogSingle";
import ScrollToTop from "./components/ScrollTop";
import NotFound from "./pages/404/NotFound";

function App() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/results" element={<Results />} />
        <Route path="/game" element={<Game />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="blogs/:slug" element={<BlogSingle />} />{" "}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
