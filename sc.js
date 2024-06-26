const form = document.getElementById('vitamin-calculator');
const resultDiv = document.getElementById('result');

form.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent default form submission

  // Get user input
  const age = parseInt(document.getElementById('age').value);

  // Define reference daily intakes (RDIs) for some key vitamins (adjust as needed)
  const vitaminARDI = {
    'child': 300,  // micrograms per day (mcg) - Adjust for different age groups
    'teen': 600,
    'adult': 900,
    'senior': 1200
  };
  const vitaminDRDI = {
    'child': 400,  // International Units (IU) per day
    'adult': 600,
    'senior': 800
  };

  // Determine base RDIs based on age groups (adjust age ranges and values as needed)
  let vitaminABaseRDI = vitaminARDI['adult'];
  let vitaminDBaseRDI = vitaminDRDI['adult'];
  if (age <= 12) {
    vitaminABaseRDI = vitaminARDI['child'];
    vitaminDBaseRDI = vitaminDRDI['child'];
  } else if (age <= 18) {
    vitaminABaseRDI = vitaminARDI['teen'];
  } else if (age >= 65) {
    vitaminABaseRDI = vitaminARDI['senior'];
    vitaminDBaseRDI = vitaminDRDI['senior'];
  }

  // Display results (example for vitamin A and D, adjust as needed)
  const vitaminAResult = `Your estimated daily Vitamin A needs are approximately ${vitaminABaseRDI} mcg.`;
  const vitaminDResult = `Your estimated daily Vitamin D needs are approximately ${vitaminDBaseRDI} IU.`;

  // Display results in the result div
  resultDiv.innerHTML = `<h3>Vitamin Needs Estimation (Based on Age)</h3>
                          <p>${vitaminAResult}</p>
                          <p>${vitaminDResult}</p>
                          <p>**Disclaimer:** This is a general estimate. Consult a healthcare professional for personalized vitamin recommendations.`;
});
