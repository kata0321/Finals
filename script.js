document.getElementById("fitness-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const fitnessGoal = document.getElementById("fitness_goal").value;
    const dietaryPreference = document.getElementById("dietary_preference").value;

    fetch('/generate_plans', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            fitness_goal: fitnessGoal,
            dietary_preference: dietaryPreference
        })
    })
        .then(response => response.json())
        .then(data => {
            const resultDiv = document.getElementById("result");
            resultDiv.innerHTML = `
            <h2>Workout Plan</h2><p>${data.workout}</p>
            <h2>Meal Plan</h2><p>${data.meal}</p>
        `;

            // Show feedback form
            document.getElementById("feedback").style.display = "block";
        })
        .catch(error => {
            console.error('Error:', error);
        });
});

document.getElementById("submit-feedback").addEventListener("click", function() {
    const workoutFeedback = document.querySelector('input[name="workout_feedback"]:checked')?.value;
    const mealFeedback = document.querySelector('input[name="meal_feedback"]:checked')?.value;

    if (workoutFeedback && mealFeedback) {
        // Send feedback to backend
        fetch('/submit_feedback', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                workout_feedback: workoutFeedback,
                meal_feedback: mealFeedback
            })
        })
            .then(response => response.json())
            .then(data => {
                alert("Feedback submitted successfully!");
                document.getElementById("feedback").style.display = "none"; // Hide feedback form
            })
            .catch(error => {
                console.error('Error:', error);
            });
    } else {
        alert("Please rate both the workout and meal plans.");
    }
});
