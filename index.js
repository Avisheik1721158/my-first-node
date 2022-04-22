const express = require('express');
const app = express();
const cors = require('cors');

const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Look Avi! You should be a full stack or mern stack developer! oi oi')
});
const users = [
    { id: 1, name: 'Avisheik', email: 'avisheik@gmail.com', phone: '01766666666' },
    { id: 2, name: 'rocky', email: 'rocky@gmail.com', phone: '01766666666' },
    { id: 3, name: 'reena', email: 'reena@gmail.com', phone: '01766666666' },
    { id: 4, name: 'garuda', email: 'garuda@gmail.com', phone: '01766666666' },
    { id: 5, name: 'ramikasen', email: 'ramikasen@gmail.com', phone: '01766666666' },
    { id: 6, name: 'rajendradeshai', email: 'rajendradeshai@gmail.com', phone: '01766666666' },
    { id: 7, name: 'suryavardhar', email: 'suryavardhar@gmail.com', phone: '01766666666' },
]
app.get('/users', (req, res) => {
    res.send(users);
})
app.get('/user/:id', (req, res) => {
    console.log(req.params.id)
    const id = parseInt(req.params.id);
    const user = users.find(u => u.id == id);


    res.send(user);
});

app.get('/fruits', (req, res) => {
    res.send(['mango', 'apple', 'oranges']);
});

app.get('/fruits/mango/fazle', (req, res) => {
    res.send('Juicy Juicy mango')
});
app.post('/user', (req, res) => {
    console.log('request', req.body);
    const user = req.body;
    user.id = users.length + 1;
    users.push(user)
    res.send(user)
})

app.listen(port, () => {
    console.log('listening to port', port);
})