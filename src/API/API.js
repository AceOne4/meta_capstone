// Function to fetch available reservation times for the provided date
function fetchAPI(date) {
  // Simulate fetching data from a server
  return new Promise((resolve, reject) => {
    // Assuming data is fetched successfully
    const availableTimes = [
      "17:00",
      "18:00",
      "19:00",
      "20:00",
      "21:00",
      "22:00",
    ];
    resolve(availableTimes);
  });
}

// Function to submit booking form data
function submitAPI(formData) {
  // Simulate submitting data to a server
  return new Promise((resolve, reject) => {
    // Assuming data is submitted successfully
    const isSuccess = true;
    resolve(isSuccess);
  });
}

export { fetchAPI, submitAPI };
