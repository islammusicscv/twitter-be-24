import { Body, Controller, Get, Post } from "@nestjs/common";
import { TweetService } from './tweet.service';
import { Tweet } from './tweet.entity';
import { CreateTweetDto } from "./create-tweet.dto";

@Controller('tweets')
export class TweetController {
  constructor(private tweetService: TweetService) {}

  @Get()
  getAll(): Promise<Tweet[]> {
    return this.tweetService.getAll();
  }

  @Post()
  create(@Body() createTweetDto: CreateTweetDto): Promise<Tweet> {
    return this.tweetService.create(createTweetDto);
  }
}
