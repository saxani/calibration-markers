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
      to: data.to,
      sender: data.sender,
      subject: data.subject,
      html_body: data.htmlBody,
      text_body: data.textBody,
    }),
  };

  fetch('https://api.smtp2go.com/v3/email/send', options)
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((err) => console.error(err));
}
