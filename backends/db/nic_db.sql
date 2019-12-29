create database nic_db;

use nic_db;

create table nic_table(
  nic_no VARCHAR(12) PRIMARY KEY,
  fullname VARCHAR(255) NOT NULL, 
  gender VARCHAR(10) NOT NULL, 
  birthday DATE NOT NULL,
  occupation VARCHAR(255) NOT NULL, 
  postal_address VARCHAR(255) NOT NULL,
  registered_date DATE NOT NULL);
insert into nic_table values 
  ('962650678V','RAVINDU SACHINTHA PEIRIS','MALE','1996-09-21','student','640/57,2nd Kurana,Colombo Rd,Negombo','2012-10-12'),
  ('123456789012','DASUN MADUSHAN','MALE','1994-12-22','student','97,Colombo Rd,Ja-ela','2010-10-12');
