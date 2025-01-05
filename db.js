import 'dotenv/config'
import postgres from 'postgres'

const url = `postgresql://${process.env.PGUSER}:${process.env.PGPASSWORD}@${process.env.PGHOST}:${process.env.PGPORT}/${process.env.PGDATABASE}`;

export const sql = postgres(URL, { ssl: 'require' });