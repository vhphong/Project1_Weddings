DROP TABLE wedding;

CREATE TABLE wedding (
	weddingid int primary key generated always as identity,
	weddingdate DATE NOT NULL DEFAULT CURRENT_DATE,
	weddinglocation varchar(200) NOT NULL default 'TBD',
	weddingname varchar(200) NOT NULL default 'TBD',
	budget float NOT NULL default 0
);

INSERT INTO wedding VALUES (default, '11/18/2021', 'Hawaii', 'Brian Alice', 4268.45);

select weddingdate from wedding where weddingid = 1;

--Format: YYYY-MM-DD

SELECT * FROM wedding;

SELECT weddingid, TO_CHAR(weddingdate, 'MM-DD-YYYY'), weddinglocation, weddingname, budget FROM wedding WHERE weddingid = 1;

-- https://www.postgresqltutorial.com/postgresql-date/
-- https://www.quest.com/community/blogs/b/database-management/posts/exploring-postgres-date-formats-and-their-different-functions
-- https://stackoverflow.com/questions/7415077/date-in-mmm-yyyy-format-in-postgresql
-- https://tableplus.com/blog/2018/09/ms-sql-server-how-to-get-date-only-from-datetime-value.html
SELECT NOW()::date;
SELECT CURRENT_DATE;
SELECT TO_CHAR(NOW() :: DATE, 'mm/dd/yyyy');
SELECT TO_CHAR('05/22/2021' :: DATE, 'mm/dd/yyyy');
SELECT CAST(getdate() AS varchar(10));



---------------------------------------------------------------


DROP TABLE expense;

CREATE TABLE expense (
	expenseid int primary key generated always as identity,
	reason varchar(200) NOT NULL default 'TBD',
	amount float NOT NULL default 0,
	wedding_id int,
	constraint fk_expense_wedding foreign key (wedding_id) references wedding(weddingid)
);

INSERT INTO expense(expenseid, reason, amount, wedding_id) VALUES (default, 'anything', 12.18, 1);

INSERT INTO expense (reason, amount, wedding_id) VALUES ('Candies', 4, 1);

SELECT * FROM expense;

SELECT weddingdate FROM wedding WHERE weddingid = 1;



---------------------------------------------------------------


DROP TABLE employee;

CREATE TABLE employee (
	empl_id int primary key generated always as identity,
	empl_fname varchar(100),
	empl_lname varchar(100),
	empl_email varchar(100),
	empl_password varchar(100)
);

SELECT * FROM employee;

INSERT INTO employee VALUES (default, 'Phong', 'Vo', 'phong@email.com', '123456');
INSERT INTO employee VALUES (default, 'Bill', 'Smith', 'bill@wed.com', 'gatorfan1');

SELECT empl_email FROM employee WHERE empl_email = 'phong@email.com';

SELECT empl_fname, empl_lname FROM employee WHERE empl_email = 'phong@email.com' AND empl_password = '123456';

SELECT empl_password FROM employee WHERE empl_email = 'phong@email.com';

