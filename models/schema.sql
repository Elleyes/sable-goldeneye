DROP TABLE IF EXISTS items;

CREATE TABLE items (
    id SERIAL PRIMARY KEY,
    task VARCHAR(100) NOT NULL,
    checked BOOLEAN NOT NULL DEFAULT false,
    listOrder SERIAL --Melissa - Not sure if SERIAL is appropriate to use--
)
