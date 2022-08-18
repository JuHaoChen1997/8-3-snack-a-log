--step 1 connect to the db
\c dc954tf60ab8j0; 

--step 2 drop table if exist
DROP TABLE IF EXISTS snacks;

--step 3 create the snacks table
CREATE TABLE snacks (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    fiber INT,
    protein INT,
    added_sugar INT,
    is_healthy BOOLEAN,
    image TEXT
)
