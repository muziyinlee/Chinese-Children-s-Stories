import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { Article } from "./pages/Article";
import { About } from "./pages/About";
import { Privacy } from "./pages/Privacy";
import { Terms } from "./pages/Terms";
import { Articles } from "./pages/Articles";
import { Contact } from "./pages/Contact";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="articles" element={<Articles />} />
          <Route path="article/:id" element={<Article />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="privacy" element={<Privacy />} />
          <Route path="terms" element={<Terms />} />
        </Route>
      </Routes>
    </Router>
  );
}
