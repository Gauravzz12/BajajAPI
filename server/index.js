const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post('/bfhl', (req, res) => {
    try {
        let inputArray = req.body.array;
        let evenNumbers = inputArray.filter(item => typeof item === 'number' && item % 2 === 0);
        let oddNumbers = inputArray.filter(item => typeof item === 'number' && item % 2 !== 0);
        let alphabets = inputArray.filter(item => typeof item === 'string').map(item => item.toUpperCase());

        let fullName = req.body.fullName;
        let dob = req.body.dob;
        let userId = `${fullName}_${dob}`;

        res.json({
            user_id: userId,
            is_success: true,
            emailId: req.body.emailId,
            collegeRollNumber: req.body.collegeRollNumber,
            evenNumbers: evenNumbers,
            oddNumbers: oddNumbers,
            alphabets: alphabets
        });
    } catch (error) {
        res.json({
            is_success: false,
            message: error.message
        });
    }
});
app.get('/', (req, res) => {
    console.log('Hello World');
});

const port =  3000;
app.listen(port, () => console.log(`Server is running on port ${port}`));