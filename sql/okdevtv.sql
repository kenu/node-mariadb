GRANT ALL PRIVILEGES ON okdevtv.* TO devuser@localhost
   IDENTIFIED BY 'okpassokpass' WITH GRANT OPTION;

create database okdevtv;

use okdevtv;

create table user (
    id int not null auto_increment primary key,
    name varchar(255) not null,
    email varchar(255) not null,
    passwd varchar(255) not null,
    description varchar(255)
);
