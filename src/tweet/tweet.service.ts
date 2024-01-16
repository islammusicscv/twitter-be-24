import { Injectable } from '@nestjs/common';
import { Tweet } from './tweet.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTweetDto } from "./create-tweet.dto";

@Injectable()
export class TweetService {
  constructor(
    @InjectRepository(Tweet)
    private readonly tweetRepository: Repository<Tweet>,
  ) {}
  getAll(): Promise<Tweet[]> {
    return this.tweetRepository.find();
  }

  async create(createTweetDto: CreateTweetDto): Promise<Tweet> {
    const user_id = 1;
    const data = { ...createTweetDto, user: { id: user_id } };
    const post = this.tweetRepository.create(data);
    return await this.tweetRepository.save(post);
  }
}
