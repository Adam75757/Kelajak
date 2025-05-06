drop database kelajak;
-- 1. Baza
CREATE DATABASE kelajak;
USE kelajak;

-- 2. Student jadvali
CREATE TABLE student (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    age INT,
    email VARCHAR(100),
    phone VARCHAR(20)
);

-- 3. Natija (triggerlar uchun)
CREATE TABLE natija (
    id INT AUTO_INCREMENT PRIMARY KEY,
    student_id INT,
    amal VARCHAR(50),
    vaqt DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- 4. Triggerlar
DELIMITER //

CREATE TRIGGER student_after_insert
AFTER INSERT ON student
FOR EACH ROW
BEGIN
    INSERT INTO natija (student_id, amal) VALUES (NEW.id, 'qo‘shildi');
END;
//

CREATE TRIGGER student_after_update
AFTER UPDATE ON student
FOR EACH ROW
BEGIN
    INSERT INTO natija (student_id, amal) VALUES (NEW.id, 'yangilandi');
END;
//

CREATE TRIGGER student_after_delete
AFTER DELETE ON student
FOR EACH ROW
BEGIN
    INSERT INTO natija (student_id, amal) VALUES (OLD.id, 'o‘chirildi');
END;
//

DELIMITER ;
