const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();
const port = 3000;

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/fitness-app", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// Create a schema for feedback
const feedbackSchema = new mongoose.Schema({
    workout_feedback: String,
    meal_feedback: String,
    date: { type: Date, default: Date.now },
});

const Feedback = mongoose.model("Feedback", feedbackSchema);

// Middleware
app.use(bodyParser.json());
app.use(express.static("frontend"));

// Route to handle feedback submission
app.post("/submit_feedback", (req, res) => {
    const { workout_feedback, meal_feedback } = req.body;

    const feedback = new Feedback({
        workout_feedback: workout_feedback,
        meal_feedback: meal_feedback,
    });

    feedback.save()
        .then(() => res.json({ message: "Feedback saved!" }))
        .catch((err) => res.status(400).json({ error: "Error saving feedback" }));
});

// Start server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
