import { sql } from './db.js'

sql`
    CREATE TABLE videos (
        id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        description TEXT,
        duration INTEGER NOT NULL
    );
`.then(() => { 
    console.log("table created.")
});