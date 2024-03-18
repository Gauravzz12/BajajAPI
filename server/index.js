const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

let response = {};

app.post('/bfhl', (req, res) => {
    try {
        const data = req.body;

        const user_id = data.user_id || "gaurav_thakur"; 
        const email = data.email || "gaurav1291.be21@chitkarauniversity.edu.in";
        const roll_number = data.roll_number || "2111981291";
        const odd_numbers = [];
        const even_numbers = [];
        const alphabets = [];

        data.data.forEach(element => {
            if (typeof element === 'string' && isNaN(element)) {
                alphabets.push(element.toUpperCase());
            } else if (!isNaN(element)) {
                if (parseInt(element) % 2 === 0) {
                    even_numbers.push(element);
                } else {
                    odd_numbers.push(element);
                }
            }
        });

        response = {
            is_success: true,
            user_id: user_id,
            email: email,
            roll_number: roll_number,
            odd_numbers: odd_numbers,
            even_numbers: even_numbers,
            alphabets: alphabets
        };

        res.json(response);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
