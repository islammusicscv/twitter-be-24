import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { User } from '../user/user.entity';

@Entity('tweets')
export class Tweet {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  content: string;
  @CreateDateColumn()
  created_at: Date;
  @UpdateDateColumn()
  updated_at: Date;
  @ManyToOne(() => User, (user) => user.tweets)
  @JoinColumn({ name: 'user_id' })
  user: User;
}
