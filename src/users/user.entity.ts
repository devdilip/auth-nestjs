import { Entity, Column, PrimaryGeneratedColumn,BeforeInsert } from 'typeorm';
import * as crypto from 'crypto';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column({default: ''})
  username: string;

  @Column()
  email: string;

  @BeforeInsert()
  hashPassword() {
    this.password = this.hashedPassword(this.password);
  }
  @Column()
  password: string;

  
  constructor(name: string, username: string, email: string, password: string){
      this.name = name;
      this.username = username;
      this.email = email;
      this.password = password;
  }

  hashedPassword(password: string){
    return crypto.createHmac('sha256', password).digest('hex');
  }
}