import 'dotenv/config';

export default function sendEmail(data) {
  const options = {
    method: 'POST',
    headers: {
      accept: 'application/json',
      'Content-Type': 'application/json',
      'X-Smtp2go-Api-Key': process.env.SMTP2GO_API_KEY,
    },
    body: JSON.stringify({
      to: ['Jane Jones <saxani@gmail.com>'],
      sender: 'John Smith <shaun@pharmad.ca>',
      subject: 'My Test Email',
      html_body: '<h1>Test <img src="cid:mypicture.jpg" /></h1>',
      text_body: 'Test',
    }),
  };

  fetch('https://api.smtp2go.com/v3/email/send', options)
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((err) => console.error(err));
}
