create database rlr_db;

use rlr_db;

create table users(id VARCHAR(10) PRIMARY KEY,username VARCHAR(50) NOT NULL,password VARCHAR(50) NOT NULL);
insert into users values ('RLR001','colombo-01','colombo-01'), ('RLR002','colombo-02','colombo-02'), ('RLR003','negombo','negombo');
