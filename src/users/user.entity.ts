import { Entity, Column, PrimaryGeneratedColumn,BeforeInsert } from 'typeorm';
import * as crypto from 'crypto';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  email: string;

  @BeforeInsert()
  hashPassword() {
    this.password = this.hashedPassword(this.password);
  }
  @Column()
  password: string;

  
  constructor(firstName: string, lastName: string, email: string, password: string){
      this.firstName = firstName;
      this.lastName = lastName;
      this.email = email;
      this.password = password;
  }

  hashedPassword(password: string){
    return crypto.createHmac('sha256', password).digest('hex');
  }
}