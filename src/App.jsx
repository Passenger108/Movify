
import SearchMovies from './components/SearchMovies';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="container"> 
      <h1 className="title">Movify</h1>
      <SearchMovies />
      <Footer/>
    </div>
  )
}