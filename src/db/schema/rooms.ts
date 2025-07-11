import { pgTable, text, timestamp, uuid } from 'drizzle-orm/pg-core'

export default pgTable('rooms', {
  id: uuid().primaryKey().defaultRandom(),
  name: text().notNull(),
  description: text(),
  createdAt: timestamp().notNull().defaultNow(),
})
