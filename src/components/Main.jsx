import { Route, Routes } from "react-router";
import { lazy, Suspense } from "react";
import { FadeLoader } from "react-spinners";

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
                <FadeLoader />
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
                <FadeLoader />
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
                <FadeLoader />
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
                <FadeLoader />
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
                <FadeLoader />
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
                <FadeLoader />
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
                <FadeLoader />
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
                <FadeLoader />
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
                <FadeLoader />
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