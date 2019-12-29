create database rlr_db;

use rlr_db;

create table users(id VARCHAR(5) PRIMARY KEY,username VARCHAR(25) NOT NULL,password VARCHAR(25) NOT NULL);
insert into users values ('RLR001','colombo-01','colombo-01'), ('RLR002','colombo-02','colombo-02'), ('RLR003','negombo','negombo');
