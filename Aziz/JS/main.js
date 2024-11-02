function calculateScore() {
    let score = 0;
  
    const quizForm = document.getElementById('quizForm');
  
    // Get answers
    const q1 = quizForm.q1.value;
    const q2 = quizForm.q2.value;
    const q3 = quizForm.q3.value;
  
    // Add score based on correct answers (values set in the form)
    if (q1 === "1") score++;
    if (q2 === "1") score++;
    if (q3 === "1") score++;
  
    // Show score in an alert
    alert("Your score is: " + score + "/3");
  }
  