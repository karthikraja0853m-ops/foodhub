let currentWalletBalance = 0;

function checkLiveDeals() {
    let dish = document.getElementById('dishInput').value;
    if (dish.trim() === "") {
        alert("Please enter a food item first!");
        return;
    }
    // Reveals the pricing comparison cards
    document.getElementById('dealsContainer').style.display = "flex";
}

function addRewardMoney(cashbackValue) {
    currentWalletBalance += cashbackValue;
    // Updates balance instantly on user viewport
    document.getElementById('cashbackBalance').innerText = "₹" + currentWalletBalance;
    alert("🎉 Cashback Tracked! ₹" + cashbackValue + " will be credited to your balance upon checkout confirmation.");
}