create database notary_db;

use notary_db;

create table lands_mapper(nic VARCHAR(12),land_key VARCHAR(25),land_id VARCHAR(10) NOT NULL, PRIMARY KEY (nic,land_key));
insert into lands_mapper values ('962650678V','1234','LAND_001'), ('123456789012','4321','LAND_002');

create table deed_table(
  reg_no VARCHAR(20) PRIMARY KEY,
  land_id VARCHAR(10) NOT NULL,
  notary_name VARCHAR(255) NOT NULL, 
  deed_type VARCHAR(10) NOT NULL, 
  plan_id VARCHAR(20) NOT NULL);
insert into deed_table values
  ('DEED_001','LAND_001','Mr. Mahinda Gunathilake','GIFT','PLAN_001');

create table plan_table(
  reg_no VARCHAR(20) PRIMARY KEY,
  land_id VARCHAR(10) NOT NULL,
  surveyor_name VARCHAR(255) NOT NULL);
insert into plan_table values
  ('PLAN_001','LAND_001','Mr. Aruna Weerawarna');