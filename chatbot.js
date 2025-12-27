function reply(option) {
  let response = "";

  if (option === "courses") {
    response = "We offer Java Full Stack, Python, and Web Development courses.";
  } 
  else if (option === "admission") {
    response = "Admissions are open! Visit our Contact page or call us.";
  } 
  else if (option === "contact") {
    response = "📞 Call us at +91-XXXXXXXXXX or email info@edulearn.com";
  }

  const chatBody = document.getElementById("chat-body");
  const p = document.createElement("p");
  p.textContent = response;
  chatBody.appendChild(p);
}
