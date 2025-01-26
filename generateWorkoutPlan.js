function generateWorkoutPlan(goal, feedbacks) {
    let workoutPlan = "Default Plan";

    // If feedback suggests positive results with muscle building
    if (goal === "build_muscle" && feedbacks.some(f => f.workout_feedback === "good")) {
        workoutPlan = "Advanced Strength Training: 5 sets of 6-8 reps";
    } else if (goal === "lose_weight" && feedbacks.some(f => f.workout_feedback === "neutral")) {
        workoutPlan = "Moderate Cardio with Circuit Training";
    }
    return workoutPlan;
}

function generateMealPlan(preference, feedbacks) {
    let mealPlan = "Default Meal Plan";

    // If feedback suggests positive results with vegetarian meals
    if (preference === "vegetarian" && feedbacks.some(f => f.meal_feedback === "good")) {
        mealPlan = "Vegetarian High-Protein Meals: Tofu Stir-fry, Quinoa Salad";
    } else if (preference === "non_vegetarian" && feedbacks.some(f => f.meal_feedback === "neutral")) {
        mealPlan = "Balanced High-Protein Meals: Chicken & Veggies";
    }
    return mealPlan;
}
