drop database if exists cookedKraken_db;
create database if not exists cookedKraken_db;
USE cookedKraken_db;

-- TABLES
CREATE TABLE IF NOT EXISTS user (
    id_user INT,
    username VARCHAR(50),
    password VARCHAR(50),
    id_permission INT,
    PRIMARY KEY(id_user)
);

CREATE TABLE IF NOT EXISTS permission (
    id_permission INT,
    name VARCHAR(50),
    description VARCHAR(500),
    PRIMARY KEY(id_permission)
);

CREATE TABLE IF NOT EXISTS session (
    id_session INT,
    expiration FLOAT,
    ipv4 VARCHAR(15),
    id_user INT,
    PRIMARY KEY(id_session)
);

CREATE TABLE IF NOT EXISTS ingredient (
    id_ingredient INT,
    name VARCHAR(100),
    description VARCHAR(500),
    hp_value INT,
    hunger_value INT,
    sanity_value INT,
    spoil_time INT,
    can_cook BOOL,
    id_version_specific INT,
    PRIMARY KEY(id_ingredient)
);

CREATE TABLE IF NOT EXISTS meal (
    id_meal INT,
    name VARCHAR(100),
    description VARCHAR(500),
    cook_time INT,
    hp_value INT,
    hunger_value INT,
    sanity_value INT,
    spoil_time INT,
    id_version_specific INT,
    PRIMARY KEY(id_meal)
);

CREATE TABLE IF NOT EXISTS version_specific (
    id_version_specific INT,
    name VARCHAR(100),
    description VARCHAR(500),
    PRIMARY KEY(id_version_specific)
);

CREATE TABLE IF NOT EXISTS object_instance(
    id_object_instance INT,
    name VARCHAR(100),
    image_url VARCHAR(500),
    description VARCHAR(500),
    id_object_type INT,
    id_version_specific INT,
    PRIMARY KEY(id_object_instance)
);

CREATE TABLE IF NOT EXISTS object_type(
    id_object_type INT,
    name VARCHAR(100),
    description VARCHAR(500),
    PRIMARY KEY(id_object_type)
);

CREATE TABLE IF NOT EXISTS ingredient_type(
    id_ingredient_type INT,
    name VARCHAR(100),
    description VARCHAR(500),
    PRIMARY KEY(id_ingredient_type)
);

CREATE TABLE IF NOT EXISTS inventory (
    id_user INT,
    id_ingredient INT,
    quantity INT,
    PRIMARY KEY(id_user, id_ingredient)
);

CREATE TABLE IF NOT EXISTS favorite (
    id_user INT,
    id_meal INT,
    PRIMARY KEY(id_user, id_meal)
);

CREATE TABLE IF NOT exists ta_ingredient_object_instance(
    id_object_instance INT,
    id_ingredient INT,
    drop_chance INT,
    PRIMARY KEY(id_object_instance, id_ingredient)
);

CREATE TABLE IF NOT exists ta_meal_ingredient(
    id_meal INT,
    id_ingredient INT,
    quantity INT,
    PRIMARY KEY(id_meal, id_ingredient)
);

CREATE TABLE IF NOT exists ta_ingredient_ingredient_type(
    id_ingredient INT,
    id_ingredient_type INT,
    type_value INT,
    PRIMARY KEY(id_ingredient, id_ingredient_type)
);

-- FOREIGN KEYS
ALTER TABLE user
ADD FOREIGN KEY (id_permission)
REFERENCES permission(id_permission);

ALTER TABLE session
ADD FOREIGN KEY (id_user)
REFERENCES user(id_user);

ALTER TABLE ingredient
ADD FOREIGN KEY (id_version_specific)
REFERENCES version_specific(id_version_specific);

ALTER TABLE meal
ADD FOREIGN KEY (id_version_specific)
REFERENCES version_specific(id_version_specific);

ALTER TABLE object_instance
ADD FOREIGN KEY (id_object_type)
REFERENCES object_type(id_object_type);

ALTER TABLE object_instance
ADD FOREIGN KEY (id_version_specific)
REFERENCES version_specific(id_version_specific);

ALTER TABLE inventory
ADD FOREIGN KEY (id_user)
REFERENCES user(id_user)
on delete cascade;

ALTER TABLE inventory
ADD FOREIGN KEY (id_ingredient)
REFERENCES ingredient(id_ingredient)
on delete cascade;

ALTER TABLE favorite
ADD FOREIGN KEY (id_meal)
REFERENCES meal(id_meal)
on delete cascade;

ALTER TABLE favorite
ADD FOREIGN KEY (id_user)
REFERENCES user(id_user)
on delete cascade;

ALTER TABLE ta_ingredient_object_instance
ADD FOREIGN KEY (id_object_instance)
REFERENCES object_instance(id_object_instance)
on delete cascade;

ALTER TABLE ta_ingredient_object_instance
ADD FOREIGN KEY (id_ingredient)
REFERENCES ingredient(id_ingredient)
on delete cascade;

ALTER TABLE ta_meal_ingredient
ADD FOREIGN KEY (id_meal)
REFERENCES meal(id_meal)
on delete cascade;

ALTER TABLE ta_meal_ingredient
ADD FOREIGN KEY (id_ingredient)
REFERENCES ingredient(id_ingredient)
on delete cascade;

ALTER TABLE ta_ingredient_ingredient_type
ADD FOREIGN KEY (id_ingredient)
REFERENCES ingredient(id_ingredient)
on delete cascade;

ALTER TABLE ta_ingredient_ingredient_type
ADD FOREIGN KEY (id_ingredient_type)
REFERENCES ingredient_type(id_ingredient_type)
on delete cascade;





