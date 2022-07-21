import { getRepository } from "typeorm"
import { repositoryMovie } from "@models/entity/Movies"

export const itsWorks = (request, response) => {
  return response.json({ message: "It's Works!!" })
}

export const getMovies = async (request, response) => {
  try {
    const movieRepository = getRepository(repositoryMovie)
    const movie = await movieRepository.find()

    return response.status(200).json(movie)
  } catch (error) {
    return response.status(500).json(error)
  }
}
