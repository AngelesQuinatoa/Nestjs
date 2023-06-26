import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateMovieDto } from 'src/product/dto/create-movie.dto';
import { MovieEntity } from 'src/product/entities/movie.entity';
import { Repository } from 'typeorm';

@Injectable()
export class MovieService {
  constructor(
    @InjectRepository(MovieEntity)
    private readonly movieRepository: Repository<MovieEntity>,
  ) {}

  async createMovie(createMovieDto: CreateMovieDto): Promise<MovieEntity> {
    const movie = this.movieRepository.create(createMovieDto);
    return this.movieRepository.save(movie);
  }

  async getAllMovies(): Promise<MovieEntity[]> {
    return this.movieRepository.find();
  }

  async getMovieById(id: string): Promise<MovieEntity> {
    return this.movieRepository.findOne(id);
  }

  async updateMovie(id: string, updateMovieDto: CreateMovieDto): Promise<MovieEntity> {
    await this.movieRepository.update(id, updateMovieDto);
    return this.movieRepository.findOne(id);
  }

  async deleteMovie(id: string): Promise<void> {
    await this.movieRepository.delete(id);
  }
}
