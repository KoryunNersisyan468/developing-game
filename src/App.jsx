import { Route, Routes } from "react-router";
import { lazy, Suspense } from "react";
import { FadeLoader } from "react-spinners";
import Header from "@/components/Header";
import ScrollToTop from "./components/ScrollTop";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const Results = lazy(() => import("./pages/Results"));
const Game = lazy(() => import("./pages/Game"));
const Blogs = lazy(() => import("./pages/Blogs"));
const BlogSingle = lazy(() => import("./pages/BlogSingle"));
const NotFound = lazy(() => import("./pages/404/NotFound"));

function App() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <Suspense
              fallback={
                <div className="w-full flex justify-center items-center h-[93vh]">
                  <FadeLoader />
                </div>
              }
            >
              <Home />
            </Suspense>
          }
        />
        <Route
          path="/home"
          element={
            <Suspense
              fallback={
                <div className="w-full flex justify-center items-center h-[93vh]">
                  <FadeLoader />
                </div>
              }
            >
              <Home />
            </Suspense>
          }
        />
        <Route
          path="/about"
          element={
            <Suspense
              fallback={
                <div className="w-full flex justify-center items-center h-[93vh]">
                  <FadeLoader />
                </div>
              }
            >
              <About />
            </Suspense>
          }
        />
        <Route
          path="/contact"
          element={
            <Suspense
              fallback={
                <div className="w-full flex justify-center items-center h-[93vh]">
                  <FadeLoader />
                </div>
              }
            >
              <Contact />
            </Suspense>
          }
        />
        <Route
          path="/results"
          element={
            <Suspense
              fallback={
                <div className="w-full flex justify-center items-center h-[93vh]">
                  <FadeLoader />
                </div>
              }
            >
              <Results />
            </Suspense>
          }
        />
        <Route
          path="/game"
          element={
            <Suspense
              fallback={
                <div className="w-full flex justify-center items-center h-[93vh]">
                  <FadeLoader />
                </div>
              }
            >
              <Game />
            </Suspense>
          }
        />
        <Route
          path="/blogs"
          element={
            <Suspense
              fallback={
                <div className="w-full flex justify-center items-center h-[93vh]">
                  <FadeLoader />
                </div>
              }
            >
              <Blogs />
            </Suspense>
          }
        />
        <Route
          path="/blogs/:slug"
          element={
            <Suspense
              fallback={
                <div className="w-full flex justify-center items-center h-[93vh]">
                  <FadeLoader />
                </div>
              }
            >
              <BlogSingle />
            </Suspense>
          }
        />
        <Route
          path="*"
          element={
            <Suspense
              fallback={
                <div className="w-full flex justify-center items-center h-[93vh]">
                  <FadeLoader />
                </div>
              }
            >
              <NotFound />
            </Suspense>
          }
        />
      </Routes>
    </>
  );
}

export default App;
