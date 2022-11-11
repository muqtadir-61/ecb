
// 95b6a658-7626-4f1f-92d9-e4ca55d61852
// 06f21466-dc79-4e81-a262-f82099648d92



function sendmail() {
  window.Email.send({
    SecureToken: "27fc0428-7c02-4482-8eef-f6bed29753c6",
    To: "zidanmuqtadir@gmail.com",
    From: document.getElementsByName("email")[0].value,
    Subject: "Coustomer Query From Linkedsage.com",
    // Subject: `${
    //   document.getElementsByName("name")[0].value
    // } Via Deshifarmer.com.bd ${document.getElementsByName("phone")[0].value} ${
    //   document.getElementsByName("email")[0].value
    // }`,
    Body: document.getElementsByName("message")[0].value,
  }).then((message) => {
    if (message === "OK") {
      document.getElementById("js-contact-btn").innerHTML = "Sent Sucessful";
    } else {
      document.getElementById("js-contact-btn").innerHTML = "Try Later";
    }
  });
}
