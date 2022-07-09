document.querySelector("button").addEventListener("click", money);

function money () {
     var date = document.getElementById("date").value; 
     var desc = document.getElementById("desc").value;
     var incExp = document.getElementById("incExp").value;
     var amnt = document.getElementById("amnt").value;

     var array = ["Income", "Expense"];


     if (date === "") {
        alert("Please choose a date for the transaction") ;
     }
     if (desc === "") {
        alert("Please enter a description");
     }
     if (incExp === "") {
        alert("Please choose income or expense");
     }
     if (amnt === "") {
        alert("Please enter the amount of the transaction");
     }
     else {
        const ledger = document.createElement("div");
        ledger.classList.add("lineItemOne");

        const ledgerOne = document.createElement("input");
        ledgerOne.setAttribute("type", "date");
        ledger.appendChild(ledgerOne);

        const ledgerTwo = document.createElement("input");
        ledgerTwo.placeholder = "description"
        ledger.appendChild(ledgerTwo);

        const ledgerThree = document.createElement("input");
        ledgerThree.id = "incExp";
        // ledgerThree.setAttribute("type", "option");



        ledger.appendChild(ledgerThree);

        for (var i = 0; i < array.length; i++) {
            var option =document.createElement("option");
            option.value = array[i];
            option.text = array[i];
            ledgerThree.appendChild(option);
        }




        const ledgerFour = document.createElement("input");
        ledgerFour.placeholder = "amount"
        ledger.appendChild(ledgerFour);

        document.querySelector("body").appendChild(ledger);
     };

};