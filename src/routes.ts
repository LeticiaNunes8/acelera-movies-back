import { getMovies, itsWorks } from "@controllers/movie"

export const defineRoutes = (app) => {
  app.get("/", itsWorks)
  app.get("/movie", getMovies)
}
