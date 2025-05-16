const express = require('express');
const app = express();
const path = require('path');
const db = require('./db');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post('/admin', (req, res) => {
    const password = req.body.password;
    if (password === '11201111') {
        res.sendFile(path.join(__dirname, 'public', 'student.html'));
    } else if (password === '12345679') {
        res.sendFile(path.join(__dirname, 'public', 'register.html'));
    } else {
        res.send('❌ Noto‘g‘ri parol');
    }
});

app.post('/register', (req, res) => {
    const { name, age, email, phone } = req.body;
    db.query('INSERT INTO student (name, age, email, phone) VALUES (?, ?, ?, ?)', 
    [name, age, email, phone], (err) => {
        if (err) return res.send('Xatolik');
     
        res.redirect('/');
    });
});

app.get('/students', (req, res) => {
    db.query('SELECT * FROM student', (err, results) => {
        if (err) return res.json([]);
        res.json(results);
    });
});

app.post('/update', (req, res) => {
    const { id, name, age, email, phone } = req.body;
    db.query('UPDATE student SET name=?, age=?, email=?, phone=? WHERE id=?',
        [name, age, email, phone, id], () => {
            res.sendStatus(200);
        });
});

app.post('/delete', (req, res) => {
    const { id } = req.body;
    db.query('DELETE FROM student WHERE id=?', [id], () => {
        res.sendStatus(200);
    });
});

app.listen(4000, () => {
    console.log('Server ishlayapti: http://localhost:4000');
});
