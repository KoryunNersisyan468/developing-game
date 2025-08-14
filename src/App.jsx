import Header from "@/components/Header";
import ScrollToTop from "./components/ScrollTop";
import Main from "./components/Main";
import CanonicalUrl from "./components/CanonicalUrl";

function App() {
  return (
    <>
      <CanonicalUrl />
      <ScrollToTop />
      <Header />
      <Main />
    </>
  );
}

export default App;
