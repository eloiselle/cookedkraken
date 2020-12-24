drop database if exists cookedKraken_db;
CREATE DATABASE cookedKraken_db DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci;

CREATE USER IF NOT EXISTS ck@localhost IDENTIFIED BY '6d2%:&wR[cV$/knl';
GRANT ALL PRIVILEGES ON *.* TO ck@localhost IDENTIFIED BY '6d2%:&wR[cV$/knl';
FLUSH PRIVILEGES;

SET GLOBAL time_zone = '-4:00';

USE cookedKraken_db;