const form = document.getElementById('carb-calculator');
const resultDiv = document.getElementById('result');

form.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent default form submission

  // Get user input
  const activityLevel = parseFloat(document.getElementById('activity').value);
  const weight = parseFloat(document.getElementById('weight').value);

  // Define estimated daily calorie needs based on activity level (adjust as needed)
  const calorieNeeds = {
    '1.2': weight * 25,  // Sedentary
    '1.375': weight * 30, // Lightly active
    '1.55': weight * 35,  // Moderately active
    '1.725': weight * 40, // Very active
    '1.9': weight * 45   // Extremely active
  };

  // Calculate estimated daily calorie intake
  const estimatedCalories = calorieNeeds[activityLevel];

  // Recommended carbohydrate intake (adjust as needed) - 40-60% of calories from carbs
  const recommendedCarbsGrams = (estimatedCalories * 0.4) + (estimatedCalories * 0.6);

  // Display results
  const result = `Based on your activity level and weight, your estimated daily carbohydrate needs range from approximately ${recommendedCarbsGrams.toFixed(2)} grams to ${recommendedCarbsGrams * 1.5} grams. 
                  <br> This is a general estimate. Consult a healthcare professional or registered dietitian for personalized dietary advice.`;

  resultDiv.innerHTML = result;
});
