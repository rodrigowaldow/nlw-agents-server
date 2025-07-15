import { pgTable, text, timestamp, uuid } from 'drizzle-orm/pg-core'
import rooms from './rooms.ts'

export default pgTable('questions', {
  id: uuid().primaryKey().defaultRandom(),
  roomId: uuid()
    .references(() => rooms.id)
    .notNull(),
  question: text().notNull(),
  answer: text(),
  createdAt: timestamp().notNull().defaultNow(),
})
