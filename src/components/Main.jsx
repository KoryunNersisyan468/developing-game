import { Route, Routes } from "react-router";
import { lazy, Suspense } from "react";
import { FallbackLoader } from "./FallbackLoader";


const Home = lazy(() => import("../pages/Home"));
const About = lazy(() => import("../pages/About"));
const Contact = lazy(() => import("../pages/Contact"));
const Results = lazy(() => import("../pages/Results"));
const Game = lazy(() => import("../pages/Game"));
const Blogs = lazy(() => import("../pages/Blogs"));
const BlogSingle = lazy(() => import("../pages/BlogSingle"));
const NotFound = lazy(() => import("../pages/404/NotFound"));

export default function Main() {
  return (
    <main>
      <Routes>
        <Route
          path="/"
          element={
            <Suspense
              fallback={
                <FallbackLoader />
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
                <FallbackLoader />
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
                <FallbackLoader />
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
                <FallbackLoader />
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
                <FallbackLoader />
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
                <FallbackLoader />
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
                <FallbackLoader />
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
                <FallbackLoader />
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
                <FallbackLoader />
              }
            >
              <NotFound />
            </Suspense>
          }
        />
      </Routes>
    </main>
  );
}