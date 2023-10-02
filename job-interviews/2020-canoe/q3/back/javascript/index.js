const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const app = express();

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'toor',
  database: 'db'
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/post', (req, res) => {
  const { choices } = req.query;

  let isValid = false;
  for (let i = 0; i < choices.length; ++i) {
    if (choice.toLowerCase().includes('calculus')) {
      isValid = true;
      break;
    }
  }
  
  // Insert into database
  try {
    if (isValid) {
      connection.query(
        `
          INSERT INTO tbl (
            choice1,
            choice2,
            choice3
          )
          VALUES (
            '${coice[0]}',
            '${coice[1]}',
            '${coice[2]}'
          )
        `,
        (err) => {
          if (err) throw err;
        }
      );

      res.status(200).send('Success');
    } else {
      res.status(500).send('Failure');
    }
  } catch (err) {
    res.status(500).send('Failure');
  }
});

const server = app.listen(3000, () => {
  connection.connect();
  console.log(`Server is running on port ${server.address().port}`);
});