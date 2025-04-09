
const account = {
    accountName: "Jane Doe",
    balance: 100,

    //function to display current balance
    getBalance() {
        alert("Your current balance is: $" +this.balance);
        atm();
    },
    //function to deposit money to account
    makeDeposit() {
        let deposit = parseFloat(prompt("How much would you like to deposit?"));
        if (isNaN(deposit) || deposit <= 0) {
            alert("Error: Please enter a number!");
            this.makeDeposit();
        } else {
            this.balance += deposit;
            this.getBalance();
        }
    },
    //function to withdrawal money from account
    makeWithdrawal() {
        let withdrawal = parseFloat(prompt("How much would you like to withdrawal"));
        if (isNaN(withdrawal) || withdrawal <= 0) {
            alert("Error: Please enter a number!");
            this.makeWithdrawal();
        } else {
            this.balance -= withdrawal;
            this.getBalance();
        } 
    },
    //function to show the account name
    getAccountName() {
        alert("Account Holder: " + this.accountName);
        atm();
    },
    //function for invalid option
    accountError() {
        alert("Error: Please choose a number between 1 - 4");
        atm();
    },
     //function to exit account
    exit() {
        let leave = confirm("Are you sur you want to exit?");
        if(leave) {
            alert("Goodbye, see you next time!");
            return;
        } else {
            atm();
        }
    },
}

function atm() {
    let message = parseFloat(
        prompt(
            "Select a choice 1.) See balance 2.) Make a deposit 3.) Make a withdrawal 4.) Get account name 5.) Exit"
        )
    )

    switch (message) {
        case 1: 
            account.getBalance();
            break;
        case 2: 
            account.makeDeposit();
            break;
        case 3: 
            account.makeWithdrawal();
            break;

        case 4: 
            account.getAccountName();
            break;
        case 5: 
            account.exit();
            break;
    }

};

atm();
