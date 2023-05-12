function sendEmail() {
    const name = document.querySelector('input[name="name"]').value;
    const email = document.querySelector('input[name="email"]').value;
    const subject = document.querySelector('input[name="subject"]').value;
    const website = document.querySelector('input[name="website"]').value;
    const message = document.querySelector('textarea[name="message"]').value;

    const body = `Name: ${name}\nEmail: ${email}\nPhone Number: ${subject}\nSubject: ${website}\nMessage: ${message}`;

    Email.send({
      Host: "smtp.gmail.com",
      Username: "zidanmuqtadir@gmail.com",
      Password: "123456.",
      To: "zidanmuqtadir@gmail.com",
      From: email,
      Subject: subject,
      Body: body,
    }).then((message) => alert("Email sent successfully!"));
  }

  document.querySelector(".form").addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent the form from submitting
    sendEmail(); // Call the sendEmail function
  });