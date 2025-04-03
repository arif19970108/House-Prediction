// script.js
document.getElementById("priceForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let location = document.getElementById("location").value;
    let sqft = parseFloat(document.getElementById("sqft").value);
    let bedrooms = parseInt(document.getElementById("bedrooms").value);
    let bathrooms = parseInt(document.getElementById("bathrooms").value);
    
    if (isNaN(sqft) || isNaN(bedrooms) || isNaN(bathrooms)) {
        document.getElementById("result").innerText = "Please enter valid values!";
        return;
    }
    
    // Dummy Price Estimation Formula
    let estimatedPrice = (sqft * 50) + (bedrooms * 10000) + (bathrooms * 5000);
    
    document.getElementById("result").innerText = `Estimated Price: $${estimatedPrice.toLocaleString()}`;
});
