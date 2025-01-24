// script.js
document.getElementById('certificate-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const certificateId = document.getElementById('certificate-id').value;
    const certificatePassword = document.getElementById('certificate-password').value;

    // Simulated data for validation
    const validCertificates = {
        '12345': 'password123',
        '67890': 'password456'
    };

    const validationMessage = document.getElementById('validation-message');

    if (validCertificates[certificateId] === certificatePassword) {
        validationMessage.textContent = "Certificate is valid!";
        validationMessage.style.color = 'green';
    } else {
        validationMessage.textContent = "Invalid certificate ID or password.";
        validationMessage.style.color = 'red';
    }
});
 // Disable right-click menu
    document.addEventListener("contextmenu", (event) => {
      event.preventDefault();
  
    });

    // Disable common developer tool shortcuts
    document.addEventListener("keydown", (event) => {
      if (
        (event.ctrlKey && event.shiftKey && (event.key === "I" || event.key === "J" || event.key === "C")) || // Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+Shift+C
        (event.ctrlKey && event.key === "U") || // Ctrl+U (View Source)
        event.key === "F12" // F12
      ) {
        event.preventDefault();
   
      }
    });

