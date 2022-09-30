INSERT INTO Employee_db.department(department_name)
VALUES ('Engineering'),
       ('Finance'),
       ('Legal'),
       ('Sales');

INSERT INTO Employee_db.rolee(title,salary,department_id)
VALUES ('Manager',10000,1,);

INSERT INTO Employee_db.employee(first_name,last_name,rolee_id,manager_id)
VALUES ('Jonathon','vanausdal','Manager',1);
       