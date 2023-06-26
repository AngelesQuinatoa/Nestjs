import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, FindOneOptions } from 'typeorm';
import { MovieDto } from 'src/product/dto/movie.dto';
import { MovieEntity } from 'src/product/entities/movie.entity';

@Injectable()
export class MovieService {
  constructor(
    @InjectRepository(MovieEntity)
    private readonly movieRepository: Repository<MovieEntity>,
  ) {}

  async createMovie(movieDto: MovieDto): Promise<MovieEntity> {
    const movie = this.movieRepository.create(movieDto);
    return await this.movieRepository.save(movie);
  }

  async findAllMovies(): Promise<MovieEntity[]> {
    return await this.movieRepository.find();
  }

  async findMovieById(id: string): Promise<MovieEntity> {
    const options: FindOneOptions<MovieEntity> = { where: { id } };
    return await this.movieRepository.findOne(options);
  }

  async updateMovie(id: string, movieDto: MovieDto): Promise<MovieEntity> {
    await this.movieRepository.update(id, movieDto);
    return await this.movieRepository.findOne({ where: { id } });
  }

  async deleteMovie(id: string): Promise<void> {
    await this.movieRepository.delete(id);
  }
}
