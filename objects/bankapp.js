class Bank{
     users={
        1000:{accno:1000,personName:"ram",balance:5000,password:"userone",transaction:[{creditTransactions:[]},{debitTransactions:[]}]},
        1001:{accno:1001,personName:"ravi",balance:7000,password:"usertwo",transaction:[{creditTransactions:[]},{debitTransactions:[]}]},
        1002:{accno:1002,personName:"raju",balance:8000,password:"userthree",transaction:[{creditTransactions:[]},{debitTransactions:[]}]},
        1003:{accno:1003,personName:"vivek",balance:15000,password:"userfour",transaction:[{creditTransactions:[]},{debitTransactions:[]}]},
    
    }
    session={}
    validateAccountnumber(acno){
        return acno in this.users?true:false
    }
    authenticate(acno,password){
        if (this.validateAccountnumber(acno) ) {
            let pwd=this.users[acno].password
            if (pwd==password) {
               console.log("access granted"); 
               this.session["user"]=acno
            }
            else{
                console.log("invalid password");
            }
            
        }
        else{
            console.log("invalid account number");
        }
    }
    getBalance(acno){
        return this.users[acno].balance
    }
    balanceEnquiry(){
        if ("user" in this.session) {
            let loggedUser=this.session["user"]
            console.log(this.getBalance(loggedUser));
            
        }
        else{
            console.log("You must login ");
        }
    }
    loginRequired(){
        return "user" in this.session?true:false
    }
    loggedUser(){
        if (this.loginRequired) {
            return this.session["user"]
        }
    }
    fundTransfer(to_acno,amount){
        if (this.loginRequired()) {
           let loggedUser=this.session["user"] 
           if (this.validateAccountnumber(to_acno)) {
              let curBal=this.getBalance(loggedUser)
              if (amount>curBal) {
                  console.log("insufficient balance");
              }
              else{
                  console.log("transaction completed");
              }
           }
           else{
               console.log("invalid account number");
           }
        }
        else{
            console.log("you must login");
        }
    }
    getdebitTransactions(){
        let user=this.loggedUser();
        this.users[user].transaction.debitTransactions.forEach(t=>console.log(t))
    }
    getcreditTransactions(){
        let user=this.loggedUser()
        this.users[user].transaction.debitTransactions.forEach(t=>console.log(t))
    }

    
}
var bank =new Bank()
// console.log(bank.validateAccountnumber(1000));
bank.authenticate(1000,"userone")
bank.balanceEnquiry()
bank.fundTransfer(1000,3000)
bank.getcreditTransactions()
bank.getdebitTransactions()