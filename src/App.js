// import './App.css';
import Nav from "./componentes/nav";
import Header from "./componentes/header";
import MovieCard from "./componentes/movie-cards";
import Footer from "./componentes/footer";

const App = () => (
    <div className="pt-4 bg-black text-white" >

      <div className="max-w-[1140px] m-auto trans-bg">

      <Nav />
      <Header />
      <MovieCard />
      <Footer />
      
      </div>

    </div>
  );

export default App;
