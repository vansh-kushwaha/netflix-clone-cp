import "./App.css";
import requests from "./requests";
import Row from "./Row";
import Banner from "./Banner";
import Navbar from "./Navbar";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Row
        title="Netflix Original"
        isLargeRow
        fetchUrl={requests.fetchNetflixOriginals}
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Animation Movies" fetchUrl={requests.fetchAnimationMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Crime " fetchUrl={requests.fetchCrimeMovies} />
      <Row title="Romance" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
