function addExpense(){
    let purpose = document.getElementById("purpose").value;
    let amt = document.getElementById("amount").value;
    let day = document.getElementById("date").value;
    let data = localStorage.getItem("expenses");
    if(!data){
        data = []
    }else{
        data = JSON.parse(data);
    }
    let expense = {
        purpose: purpose,
        amt: amt,
        day: day
    };
    data.push(expense);
    localStorage.setItem("expenses",JSON.stringify(data))
    displayExpenses();
    return false;
}
function getBalance(){
    let balance = localStorage.getItem("balance");
    if(!balance){
        balance = 0
    }
    document.getElementById("balance").innerHTML = "Total Income: $"+balance;
    localStorage.setItem("balance", balance);
}
function addToBalance(){
    let balance = prompt("Enter the amount to add to the balance: ");
    if(isNaN(balance)){
        alert("Invalid Amount")
    }else{
        balance = Number(balance)
        old = Number(localStorage.getItem("balance"));
        old += balance;
        localStorage.setItem("balance", old);
        getBalance();
    }
}
function displayExpenses(){
    let data = localStorage.getItem("expenses");
    if(!data) {
        document.getElementById("expenses").innerHTML = "No Expenses yet"
        return;
    }
    let remBalance = Number(localStorage.getItem("balance"));
    data = JSON.parse(data)
    let display = "<table><tr><th>Description</th><th>Amount</th><th>Date Spent</th><tr>";
    for(let i = 0; i < data.length; i++){
        display+="<tr><td>"+data[i].purpose+"</td><td>$"+data[i].amt+"</td><td>"+data[i].day+"</td><tr>";
        remBalance-=data[i].amt;
    }
    display+="<tr><td colspan='3'>Remaining Balance: $"+remBalance+"</td></tr></table>";
    document.getElementById("expenses").innerHTML = display;
}
getBalance();
displayExpenses();

var symbol = document.getElementById("name");
var information = document.getElementById("information");
var date = document.getElementById("date");
var openStock = document.getElementById("open");
var high =document.getElementById("high");
var low =document.getElementById("low");
var closeStock =document.getElementById("close");
var volume =document.getElementById("volume");
  
  fetch('https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY_ADJUSTED&symbol=IBM&apikey=T1VVWT1192YN01FY')
  .then(res => res.json())
  .then((data) => {
  // console.log(data);
  stockContainer(data);

  function stockContainer(data) {
    let dataKeys = Object.keys(data["Weekly Adjusted Time Series"]);
    dataKeys = dataKeys.map(key => new Date(key)).sort()[0].toISOString().split("T")[0];
    //console.log(dataKeys);
    symbol.textContent = "Name: " + data["Meta Data"]["2. Symbol"];
    information.textContent = "Information: " + data["Meta Data"]["1. Information"];
    date.textContent = "Date: " + dataKeys;
    openStock.textContent = "Open: " + data["Weekly Adjusted Time Series"][dataKeys]["1. open"];
    high.textContent = "High: " + data["Weekly Adjusted Time Series"][dataKeys]["2. high"];
    low.textContent = "Low: " + data["Weekly Adjusted Time Series"][dataKeys]["3. low"];
    closeStock.textContent = "Close: " + data["Weekly Adjusted Time Series"][dataKeys]["4. close"];
    volume.textContent = "Volume: " + data["Weekly Adjusted Time Series"][dataKeys]["6. volume"];
  }}
);

var secondSymbol = document.getElementById("name2");
var secondInformation = document.getElementById("information2");
var secondDate = document.getElementById("date2");
var secondOpenStock = document.getElementById("open2");
var secondHigh =document.getElementById("high2");
var secondLow =document.getElementById("low2");
var secondCloseStock =document.getElementById("close2");
var secondVolume =document.getElementById("volume2");

fetch('https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY_ADJUSTED&symbol=TSCO.LON&apikey=T1VVWT1192YN01FY')
  .then(res => res.json())
  .then((data) => {
  console.log(data);
  secondStockContainer(data);

  function secondStockContainer(data) {
    let dataKeys = Object.keys(data["Weekly Adjusted Time Series"]);
    dataKeys = dataKeys.map(key => new Date(key)).sort()[0].toISOString().split("T")[0];
    console.log(dataKeys);
    secondSymbol.textContent = "Name: " + data["Meta Data"]["2. Symbol"];
    secondInformation.textContent = "Information: " + data["Meta Data"]["1. Information"];
    secondDate.textContent = "Date: " + dataKeys;
    secondOpenStock.textContent = "Open: " + data["Weekly Adjusted Time Series"][dataKeys]["1. open"];
    secondHigh.textContent = "High: " + data["Weekly Adjusted Time Series"][dataKeys]["2. high"];
    secondLow.textContent = "Low: " + data["Weekly Adjusted Time Series"][dataKeys]["3. low"];
    secondCloseStock.textContent = "Close: " + data["Weekly Adjusted Time Series"][dataKeys]["4. close"];
    secondVolume.textContent = "Volume: " + data["Weekly Adjusted Time Series"][dataKeys]["6. volume"];
  }}
);