
const topics = ["Tickets", "Campus Tour", "Academy Enrollment", "Membership"];

const populateTopics = () => {
  const topicSelect = document.getElementById("topic");
  topicSelect.innerHTML = '<option value="" selected disabled>Select Topic For Your Message</option>';
  topics.forEach(topic => {
    const option = document.createElement("option");
    option.value = topic;
    option.textContent = topic;
    topicSelect.appendChild(option);
  });
};

populateTopics();




const handleForm = () => {
  // Collect data from the form fields
  const topic = document.getElementById('topic').value;
  const description = document.getElementById('description').value;
  const firstName = document.getElementById('firstName').value;
  const lastName = document.getElementById('lastName').value;
  const email = document.getElementById('email').value;

  // Format the alert message
  const alertMessage = `
    Your Message was recieved, we shall get back to you, Thank you ${firstName + ' ' + lastName}!

    --------------------------- Message ---------------------------
    Topic: ${topic}
    Your Message: ${description}
    First Name: ${firstName}
    Last Name: ${lastName}
    Email: ${email}
  `;

  //construct an object
  const formData = {
    topic: topic,
    description: description,
    firstName: firstName,
    lastName: lastName,
    email: email,
  };

  //save to local storage
  saveMessage(email, formData);
  
  // Display the alert
  alert(alertMessage);
};



const saveMessage = (email, data) =>{
  localStorage.setItem(email, JSON.stringify(data));
}



//handling form submission
const messageForm = document.getElementById("messageForm");
messageForm.addEventListener("submit", (event) => {
  event.preventDefault();
  handleForm();
  messageForm.reset();
});


