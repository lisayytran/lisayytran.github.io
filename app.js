document.getElementById('submit').addEventListener('click', function() {
    // Correct answers
    const correctAnswers = ['A', 'C', 'B', 'A', 'A'];
    
    // Get user answers
    const userAnswers = [
        document.querySelector('input[name="q1"]:checked'),
        document.querySelector('input[name="q2"]:checked'),
        document.querySelector('input[name="q3"]:checked'),
        document.querySelector('input[name="q4"]:checked'),
        document.querySelector('input[name="q5"]:checked')
    ];

    let score = 0;
    let unanswered = false;

    // Check if all questions are answered
    for (let i = 0; i < userAnswers.length; i++) {
        if (userAnswers[i] === null) {
            unanswered = true;
            break;
        } else if (userAnswers[i].value === correctAnswers[i]) {
            score++;
        }
    }

    // Display the result
    const resultDiv = document.getElementById('results');
    if (unanswered) {
        resultDiv.textContent = 'Please answer all questions!';
        resultDiv.style.color = 'red';
    } else {
        resultDiv.textContent = `You scored ${score} out of 5!`;
        resultDiv.style.color = score >= 3 ? 'green' : 'orange';
    }
});


function openNav() {
    document.getElementById("sidebar").style.width = "250px"; // Sidebar expands to 250px
}

function closeNav() {
    document.getElementById("sidebar").style.width = "0"; // Sidebar collapses back to 0
}

const hoverWord = document.querySelector(".hover-word");
    const imageContainer = document.getElementById("image-container");
    const hoverImage = document.getElementById("hover-image");

    hoverWord.addEventListener("mouseenter", function(event) {
        // Get the image path from the data-img attribute
        const imgPath = hoverWord.getAttribute("data-img");

        // Set the image source
        hoverImage.src = imgPath;

        // Position the image container
        const rect = hoverWord.getBoundingClientRect();
        imageContainer.style.top = rect.bottom + window.scrollY + "px";
        imageContainer.style.left = rect.left + window.scrollX + "px";

        // Show the image container
        imageContainer.style.display = "block";
    });

    hoverWord.addEventListener("mouseleave", function() {
        // Hide the image container when the mouse leaves
        imageContainer.style.display = "none";
    });