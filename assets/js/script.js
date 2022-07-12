document.querySelector("button").addEventListener("click", money);

// --- adding event to press 'enter' and update balance as substitution for above ----

// const input = document.getElementById("balance");

// input.addEventListener("keyup", function(e) {
//    if (e.keycode === 13) {  
//       alert("This works");  


//    }
// });
// var input = document.getElementById("balance");
// input.addEventListener("keyup", function(e) {
//   if (e.keycode === 13) {
//    //  event.preventDefault();
//    //  document.getElementById("balance").click();
//   }
// });

// ---- None of the above worked so I have added an 'Update Balance' button in its stead ---

const ledgerIdCounter = 0;

function money() {
   var date = document.getElementById("date").value;
   var desc = document.getElementById("desc").value;
   var incExp = document.getElementById("incExp").value;
   var amnt = document.getElementById("amnt").value;
   // console.log(incExp);

   var array = ["Income/Expense", "Income", "Expense"];


   if (date === "") {
      alert("Please choose a date for the transaction");
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
      ledger.setAttribute("data-ledger-id", ledgerIdCounter);
      console.log(ledger);

      const ledgerOne = document.createElement("input");      
      ledgerOne.classList.add("container"); 
       
      // ---This sets the date container --- why is it not sized correctly?? --- 
      ledgerOne.setAttribute("type", "date",);
      // ledgerOne.setAttribute("data-date", dateIdCounter);
   //  --- working on this at the moment ----
      // const 


      ledger.appendChild(ledgerOne);

      const ledgerTwo = document.createElement("input");
      ledgerTwo.classList.add("container");
      ledgerTwo.setAttribute("type", "text");
      ledgerTwo.placeholder = "description"
      ledger.appendChild(ledgerTwo);

      const ledgerThree = document.createElement("select");
      ledgerThree.classList.add("container");
      ledgerThree.class = "incExp";
      // ledgerThree.setAttribute("type", "option");


      for (var i = 0; i < array.length; i++) {
         var option = document.createElement("option");
         option.value = array[i];
         option.text = array[i];
         ledgerThree.appendChild(option);
      }
      //   console.log(ledgerThree);
      ledger.appendChild(ledgerThree);




      const ledgerFour = document.createElement("input");
      ledgerFour.classList.add("container");
      ledgerFour.placeholder = "amount"
      ledger.appendChild(ledgerFour);

      const ledgerFive = document.createElement("input");
      ledgerFive.classList.add("container");
      ledgerFive.setAttribute("readonly", "text");
      // ledgerFive.innerHTML = "Balance"
      ledger.appendChild(ledgerFive);


      // dateIdCounter++;
      document.querySelector("body").appendChild(ledger);
      console.log(ledger);

      let ledgerDataObj = ledgerIdCounter;

      ledgerDataObj.id = ledgerIdCounter;
      // ledger.push(ledgerDataObj);
      ledgerIdCounter++;
   };

   saveLedger();

};

function newBal() {


}

var saveLedger = function () {
   localStorage.Storage.setItem("ledger", JSON.stringify(ledger));
}

