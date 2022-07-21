import { admin_directory_v1 } from "googleapis"
import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
} from "typeorm"

@Entity()
export class repositoryMovie {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ name: "title", type: "varchar" })
  title: String

  @Column({ name: "subtitle", type: "varchar" })
  subtitle: String

  @Column({ name: "resume", type: "varchar" })
  resume: String

  @CreateDateColumn({
    name: "created_at",
    type: "timestamptz",
    default: () => "CURRENT_TIMESTAMP(6)",
  })
  createdAt: Date

  //image

  @Column({ name: "director", type: "varchar" })
  director: String

  @Column({ name: "writer", type: "varchar" })
  writer: String

  @Column({ name: "classification", type: "varchar" })
  classification: String

  @Column({ name: "studio", type: "varchar" })
  studio: String

  //stars
}
