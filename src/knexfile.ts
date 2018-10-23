// Update with your config settings.

const knexfile = {
  client: 'sqlite3',
  useNullAsDefault: true,
  connection: {
    filename: './dev.sqlite3'
  }
}

export default knexfile