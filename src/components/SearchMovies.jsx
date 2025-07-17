import React from "react"
import MovieCard from "./MovieCard"
import SkeletonCard from "./SkeletonCard";
import NoResultsFound from "./NoResultsFound";

export default function SearchMovies() {


    const [query, setQuery] = React.useState("");
    const [movies, setMovies] = React.useState(null);
    const [loading, setLoading] = React.useState(false);



    const searchMovies = async (e) => {
        e.preventDefault();
        console.log("submitting");

        const url = `https://api.themoviedb.org/3/search/movie?api_key=d426d3d2cf18905b83013c21ed56e752&language=en-US&query=${query}&page=1&include_adult=false`;

        try {
            setLoading(true);
            const res = await fetch(url);
            const data = await res.json();
            setMovies(data.results);

        } catch (err) {
            console.error(err);
        }
        finally {
            setLoading(false);
            setQuery(""); // Clear the input field after search
        }
    }



    return (
        <>
            <form
                className="form"
                onSubmit={searchMovies}
            >

                <label
                    htmlFor="query"
                    className="label"
                >
                    Movie Name
                </label>

                <input
                    type="text"
                    id="query"
                    className="input"
                    placeholder="Batman, Avengers, etc."

                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />

                <button
                    type="submit"
                    className="button"
                >
                    Search
                </button>

            </form>

            {loading && (
                <div className="card-list">
                    {Array.from({ length: 6 }).map((_, i) => (
                        <SkeletonCard key={i} />
                    ))}
                </div>
            )}

            <div className="card-list">
                {movies?.filter(movie => movie?.poster_path).map(movie => (
                    <MovieCard
                        key={movie.id}
                        movie={movie}
                    />
                ))}
                {movies !== null && movies.length==0 && <NoResultsFound />}
            </div>
        </>
    )
}