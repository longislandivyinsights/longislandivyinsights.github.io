import { column, defineDb, defineTable } from 'astro:db';

const User = defineTable({
  columns: {
    id: column.text({
      primaryKey: true,
      optional: false,
      unique: true,
    }),
    username: column.text({
      unique: true,
      optional: false,
    }),
    password_hash: column.text({
      optional: false,
    }),
  },
});

const Session = defineTable({
  columns: {
    id: column.text({
      primaryKey: true,
      optional: false,
      unique: true,
    }),
    expiresAt: column.date({
      optional: false,
    }),
    userId: column.text({
      references: () => User.columns.id,
      optional: false,
    }),
  },
});

export default defineDb({
  tables: {
    User,
    Session,
  },
});
