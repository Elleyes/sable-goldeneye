DROP TABLE IF EXISTS items;

CREATE TABLE items (
    id SERIAL PRIMARY KEY,
    task VARCHAR(100) NOT NULL,
    complete BOOLEAN NOT NULL DEFAULT false,
    checked BOOLEAN NOT NULL DEFAULT false,
    listOrder SERIAL /*Mel - is serial the best practice*/
)
