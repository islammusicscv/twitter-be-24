import { Module } from '@nestjs/common';
import { TweetController } from './tweet.controller';
import { TweetService } from './tweet.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tweet } from './tweet.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Tweet])],
  controllers: [TweetController],
  providers: [TweetService],
})
export class TweetModule {}
