import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Tweet } from '../tweet/tweet.entity';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  first_name: string;
  @Column()
  last_name: string;
  @Column({ unique: true })
  email: string;
  @Column()
  pass: string;
  @CreateDateColumn()
  created_at: Date;
  @UpdateDateColumn()
  updated_at: Date;
  @OneToMany(() => Tweet, (tweet) => tweet.user)
  tweets: Tweet[];
}
