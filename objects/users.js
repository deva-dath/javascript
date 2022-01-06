var users={
    1000:{accno:1000,personName:"ram",balance:5000,password:"userone",transaction:[{creditTransactions:[]},{debitTransactions:[]}]},
    1001:{accno:1001,personName:"ravi",balance:7000,password:"usertwo",transaction:[{creditTransactions:[]},{debitTransactions:[]}]},
    1002:{accno:1002,personName:"raju",balance:8000,password:"userthree",transaction:[{creditTransactions:[]},{debitTransactions:[]}]},
    1003:{accno:1003,personName:"vivek",balance:15000,password:"userfour",transaction:[{creditTransactions:[]},{debitTransactions:[]}]},

}
// details of 1003
// console.log(users[1003]);

// check if 1005 exists
// console.log("1005" in users);

// authenticate
function authenticate(ac_num,password) {
    // check account num
    if (ac_num in users) {
        // check password
        let pwd=users[ac_num].password
        if (pwd==password) {
            return 1
        }
        else{
        return -1
        }
    }
    else{
        return 0
    }
}
// console.log(authenticate(1002,"usertwo"));

// fundtransfer
function validateAccountnumber(acno) {
   return acno in users?true:false; 
}
function fundTransfer(from_acno,to_acno,amount) {
    if (validateAccountnumber(from_acno)&&validateAccountnumber(to_acno)) {
        let oldBal=users[from_acno].balance;
        if (amount>oldBal) {
            console.log("Insufficient funds");
        }else{
            oldBal=oldBal-amount;
            users[from_acno].balance=oldBal;
            users[to_acno].balance+=amount;
            var from =balanceEnquiry(from_acno)
            console.log(`your account ${1001} has been debbited by Rs${amount},the available balance is ${from}`);
            var to= balanceEnquiry(to_acno)
            console.log(`your account ${1002} has been creditted by Rs${amount},the available balance is ${to}`);
            let crTrans={from:from_acno,amount:amount,balance:to}
            let dbTrans={to:to_acno,amount:amount,balance:from}
            users[from_acno].transaction[1].debitTransactions.push(dbTrans)
            users[to_acno].transaction[0].creditTransactions.push(crTrans)
            console.log(users[from_acno].transaction[1]);
            console.log(users[to_acno].transaction[0]);
        }
    } else {
        console.log("invalid accounts");
    }
    
    
}


// balance printing if account exists
function balanceEnquiry(acno) {
    if (validateAccountnumber(acno)) {
        return(users[acno].balance);
    }
}
// console.log(balanceEnquiry("1001"));
fundTransfer("1001","1002",4000);