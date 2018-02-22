// Listen for submit
document.getElementById('converter-form').addEventListener('submit', function(e){
  // Hide results
  document.getElementById('results').style.display = 'none';
  
  // Show loader
  document.getElementById('loading').style.display = 'block';

  setTimeout(calculateResults, 500);

  e.preventDefault();
});

// Calculate Results
function calculateResults(){
  
  console.log('Calculating...');
  
  // UI Vars
  const amount = document.getElementById('amount');
  const sourceCurrency = document.getElementById('sourceCurrency');
  const targetCurrency = document.getElementById('targetCurrency');

  // const principal = parseFloat(amount.value);
  // const calculatedSourceCurrency = parseFloat(sourceCurrency.value) / 100 / 12;
  // const calculatedPayments = parseFloat(years.value) * 12;

  // Compute monthly payment
  // const x = Math.pow(1 + calculatedSourceCurrency, calculatedPayments);
  // const monthly = (principal*x*calculatedSourceCurrency)/(x-1);

  // if(isFinite(monthly)) {
  //   monthlyPayment.value = monthly.toFixed(2);
  //   totalPayment.value = (monthly * calculatedPayments).toFixed(2);
  //   totalSourceCurrency.value = ((monthly * calculatedPayments)-principal).toFixed(2);

    // Show results
    document.getElementById('results').style.display = 'block';

    // Hide loader
    document.getElementById('loading').style.display = 'none';

  // } else {
  //   showError('Please check your numbers');
  // }
}

// Show Error
function showError(error){
  // Hide results
  document.getElementById('results').style.display = 'none';
  
  // Hide loader
  document.getElementById('loading').style.display = 'none';

  // Create a div
  const errorDiv = document.createElement('div');

  // Get elements
  const card = document.querySelector('.card');
  const heading = document.querySelector('.heading');

  // Add class
  errorDiv.className = 'alert alert-danger';

  // Create text node and append to div
  errorDiv.appendChild(document.createTextNode(error));

  // Insert error above heading
  card.insertBefore(errorDiv, heading);

  // Clear error after 3 seconds
  setTimeout(clearError, 3000);
}

// Clear error
function clearError(){
  document.querySelector('.alert').remove();
}