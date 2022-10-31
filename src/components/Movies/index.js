import MovieDetails from "../MovieDetails"
import { Route, Switch, NavLink } from "react-router-dom";

function Movies({ movies }) {
  return (
    <div className='comp orange'>
      <h1>Movies Component</h1>
      <nav>
        {movies.map((movie) => {
          let url="/movies/".concat(movie.id);
          return (
            <NavLink key={movie.id} to={url}>
              {movie.title}
            </NavLink>
          )
        })}
      </nav>


      <Switch>
        <Route path="/movies/:movieID">
          <MovieDetails movies={movies}/>
        </Route>
      </Switch>
    </div>
  );
}

export default Movies;