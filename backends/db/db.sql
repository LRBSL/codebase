create database lrbsl_db;

use lrbsl_db;

-- rlr users table for login
create table rlr_users(
  id VARCHAR(10) PRIMARY KEY,
  username VARCHAR(50) NOT NULL,
  password VARCHAR(50) NOT NULL);
insert into rlr_users values 
('RLR001','colombo-01','colombo-01'), 
('RLR002','colombo-02','colombo-02'), 
('RLR003','negombo','negombo');

-- notary users table for login
create table notary_users(
  id VARCHAR(10) PRIMARY KEY,
  username VARCHAR(50) NOT NULL,
  password VARCHAR(50) NOT NULL);
insert into notary_users values 
('NT001','ravindu','ravindu'),
('NT002','sachintha','sachintha'),
('NT003','gayan','gayan');

-- member data table
create table member_data(
  id VARCHAR(10) PRIMARY KEY,
  type VARCHAR(10) NOT NULL,
  fname VARCHAR(50) NOT NULL,
  lname VARCHAR(50) NOT NULL,
  nic_no VARCHAR(12) NOT NULL,
  reg_date DATE,
  rlr_id VARCHAR(10),
  postal_address VARCHAR(255),
  email_address VARCHAR(255),
  mobile_no VARCHAR(15)
  );
insert into member_data values 
('NT001','Notary','Ravindu','Sachintha','962650678V','2018-10-12','RLR001',
'640/57, 2nd Kurana, Negombo','ravindusachintha53@gmail.com','0772769963'), 
('NT002','Notary','Sachintha','Rathnayake','952505986V','2017-05-06','RLR002',
'93, Main Street, Seeduwa','sachintha@gmail.com','0773245123'), 
('NT003','Notary','Gayan','Sampath','953648782V','2019-01-01','RLR003',
'45, Greens Road, Gampaha','gayan@gmail.com','0714325645'),
('SV001','Surveyor','Anura','Withana','962665178V','2018-10-12','RLR001',
'07, Main Street, Negombo','anura@gmail.com','0752245689'), 
('SV002','Surveyor','Janindu','Rathnayake','952144566V','2016-05-06','RLR002',
'13, Suhada Road, Kandana','janindu@gmail.com','0773232523'), 
('SV003','Surveyor','Pasindu','Bhanuka','956588782V','2018-01-01','RLR003',
'45, Greens Road, Yakkala','pasindu@gmail.com','0765285645');