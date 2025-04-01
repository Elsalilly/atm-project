function atm() {
    let message = parseFloat(
        prompt("Select a choice 1.) See balance 2.) Make a deposit 3.) Make a withdrawal 4.) Get account name 5.) Exit"
        )
    )

    switch (message) {
        case 1: account.getBalance();
        case 2: account.makeDeposit();
        case 3: account.makeWithdrawal();
        case 4: account.getAccountName();
        case 5: account.exit();
    }

};

const account = {
    accountName: "Jane Doe",
    balance: 100,
    getBalance() {
        alert("Your current balance is:" +this.balance);
        atm();
    },

    makeDeposit() {
        let deposit = parseFloat(prompt("How much would you like to deposit?"));
        if (isNaN(deposit) || deposit === "") {
            alert("Error: Please enter a number!");
            makeDeposit();
        } else {
            this.balance += deposit;
            getBalance();
        }
    },

    makeWithdrawal() {
        let withdrawal = parseFloat(prompt("How much would you like to withdrawal"));
        if (isNaN(withdrawal) || withdrawal === "") {
            alert("Error: Please enter a number!");
            makeWithdrawal();
        } else {
            balance -= withdrawal;
            getBalance();
        } 
    },

    getAccountName() {
        let user = parseFloat(prompt("Please enter your username"));
        if (!(user >= 8)) {
            return false;
        }
        if (user === "") {
            return false;
        }
        atm();
    },
    accountError() {
        alert("Error: Please choose a number between 1 - 4");
        atm();
    },
    exit() {
        let leave = confirm("You selected to exit");
        if(leave) {
            window.close();
        } else {
            atm();
        }
    },
}

atm();
/* 
const variableName = 10;
isNaN(variableName);
*/