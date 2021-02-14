//Group Login JS
//1. Store team number and team members list 
//2. Prompt the user for team Number
//3. If correct
//    1. Ask for first name
//        1. If valid name and present in the list
//            1. Welcome message with full name
//        2. If name is invalid
//            1. Throw error message
//4. If incorrect
//    1. Throw error message 

// Variables
var teamNo = 3;
var teamList = ['Navaneeth Ashok', 'Smitalben Christian', 'Mandela Johnson', 'Catherine Tran', 'Ruth Frogoso'];
var placeholderTeamNoInput = "Example 1";
var placeholderNameInput = "Eg: John";

// User input and logic

var inputTeamNo = prompt("Team Number in integer format", placeholderTeamNoInput);

if (inputTeamNo !== null && inputTeamNo !== "" && inputTeamNo !== placeholderTeamNoInput && inputTeamNo == parseInt(inputTeamNo)) {
    // Validated the input
    console.log("Valid team number input");
    if (teamNo === parseInt(inputTeamNo)) {
        // Verified the team number 
        // Ask for first name
        var inputFirstName = prompt("Please input your first name", placeholderNameInput);
        if (inputFirstName !== null && inputFirstName !== "" && inputFirstName !== placeholderNameInput && isNaN(inputFirstName)) {
            // Validated the input
            console.log("Valid firstname input");
            var flag = 0;
            // Verify whether the name is present in the list
            for (var i = 0; i < teamList.length; i++) {
                if (inputFirstName.toLocaleLowerCase() === teamList[i].split(" ", 1)[0].toLowerCase()) {
                    // Checking whether the input matches any firstname mentioned in the list
                    flag = 1;
                    console.log("User found");
                    // User Found : Allow Access
                    alert("Welcome to the portal " + teamList[i])
                    break;
                }
            }
            if (flag === 0) {
                // Input not matching any name in the list : Deny Access
                console.log("User not found");
                alert("Incorrect firstname : User not found : Access Denied");
                
            }
        } else {
            // Invalid firstname : Deny Access
            console.log("Invalid firstname input");
            alert("Invalid Input : Access Denied");
        }
    } else {
        // Incorrect team number : Deny Access
        console.log("Incorrect team number");
        alert("Incorrect team number : Access Denied");
    }
} else {
    // Invalid team number : Deny Access
    console.log("Invalid team number input");
    alert("Invalid team number : Access Denied");
}

// Fixed Issues
// <floating value between 3-4>, - : Access Allowed
// Fixed: line#23 (inputTeamNo == parseInt(inputTeamNo))

// Testing : Unit testcases
//<teamNo>, <firstName> : <expectedOutput>
//<any integer other than 3>, - : Access Denied
//<floating value between 3-4>, - : Access Denied
//<string>, - : Access Denied
//3, NaVaNeEth : Access allowed
//3, ashok : Acces Denied
//3, 345 : Access Denied