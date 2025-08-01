fetch("http://localhost:5000/api/data")
  .then((response) => response.json())
  .then((data) => {
    document.getElementById("name").textContent = data.name;
    document.getElementById("referral").textContent = data.referralCode;
    document.getElementById("donations").textContent = data.donations;
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });
