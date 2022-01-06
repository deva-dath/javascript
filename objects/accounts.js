var accounts = [
    {
      acno: 1000, ac_type: "savings", balance: 5000, transactions: [
        { to: 1001, amount: 500, note: "ebill", method: "g-pay" },
        { to: 1002, amount: 600, note: "geto", method: "neft" },
        { to: 1003, amount: 100, note: "erchrge", method: "phone-pay" }
      ]
    },
    {
      acno: 1001, ac_type: "savings", balance: 6000, transactions: [
        { to: 1000, amount: 1000, note: "emi", method: "phone-pay" },
        { to: 1002, amount: 500, note: "geto", method: "neft" },
        { to: 1003, amount: 100, note: "erchrge", method: "phone-pay" }
  
      ]
    },
    {
      acno: 1002, ac_type: "current", balance: 8000, transactions: [
        { to: 1000, amount: 1000, note: "emi", method: "phone-pay" },
        { to: 1001, amount: 5000, note: "geto", method: "neft" },
        { to: 1003, amount: 100, note: "erchrge", method: "phone-pay" }
  
      ]
    },
    {
      acno: 1003, ac_type: "current", balance: 16000, transactions: [
        { to: 1000, amount: 1000, note: "emi", method: "phone-pay" },
        { to: 1002, amount: 500, note: "geto", method: "neft" },
        { to: 1001, amount: 100, note: "erchrge", method: "phone-pay" }
  
      ]
    },
  
  ]
//   total number of accounts
//   console.log(accounts.length);

//   print all users with savings account
// accounts.filter(data=>data.ac_type="savings").forEach(num=>console.log(num.acno))
// accounts.map(data=>data.ac_type=="savings").forEach(num=>console.log(num.acno))

// print bal of accnt number 1000
// var balanceOfThousand= accounts.find(data=>data.ac="1000").balance
// console.log(balanceOfThousand);

// gpay transactions
// accounts.map(data=>data.transactions).flat().filter(transaction=>transaction.method=="g-pay").forEach(t=>console.log(t))


// print credit transactions of 1002
// accounts.map(data=>data.transactions).flat().filter(cred=>cred.to==1002).forEach(t=>console.log(t))

// print highest balance account details
// var highBalance= accounts.sort((a1,a2)=>a2.balance-a1.balance)
// console.log(highBalance[0]);


// print transaction history 
// var creditHistory= accounts.map(data=>data.transactions).flat().filter(his=>his.to==1002)
// console.log(creditHistory);
// var debitHistory= accounts.find(data=>data.acno==1002).transactions
// console.log(debitHistory);
// var transactionHistory={"creditHistory":creditHistory,"debitHistory":debitHistory}
// console.log(transactionHistory);