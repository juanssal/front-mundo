
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import Inicio from "./components/routes/Inicio";
// import Podcasts from "./components/routes/Podcasts";
// import Show from "./components/routes/Show";
// import Nosotros from "./components/routes/Nosotros";
import Footer from "./components/Footer";
// import Articulo from "./components/routes/Articulo"

// STYLES
// import './styles/index.css';
// import './styles/podcast-cards.css';
// import './styles/posts-cards.css';
// import './styles/podcast.css';
// import './styles/streaming.css';
// import './styles/nosotros.css'
// import { Helmet } from "react-helmet";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />    
        
        <Routes>

          <Route exact="true" path="/" element={<Inicio />} />
          {/* <Route path="/articulos/:articulo" element={<Articulo/>} /> */}
          {/* <Route path="/podcasts/:show" element={<Show />} />
          <Route path="/podcasts/" element={<Podcasts />} />
          <Route path="/show" element={<Show />} /> */}
          {/* <Route path="/nosotros" element={<Nosotros />} /> */}

        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
