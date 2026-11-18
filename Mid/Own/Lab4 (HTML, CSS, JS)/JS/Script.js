console.log("Connected to SAHAYATA Volunteer Portal");

let x = 10;
var y = 20;
console.log("Sum: ", x+y);

//case 1
var a = "AIUB";
var a;
console.log(a);

//case 2
var a = "AIUB";
var a = "NSU";
console.log(a);

//case 3
let b = "AIUB";
let b1 = "NSU";
console.log(b);
console.log(b1);

let c = 3.14;
let d = 0.3;
let e = c+d;
console.log(e);
let f = 0.1 + 0.2;
console.log(f);

let car1 = "VOLVO";
let car2 = 'Mazda';
console.log(car1);
console.log(car2);
console.log(car1.length);
console.log(car1.toLowerCase());
console.log(car1.slice(0,3));
console.log(car1.indexOf("V"));
console.log(car1.indexOf("V")+"!");

function collect_data()
{
    let validname = collect_name();
    let validemail = validateEmail();

    
    return false;
}

function collect_name()
{
    let VName = document.getElementById("VolunteerName").value.trim();
    let VError = document.getElementById("ErrorText");
    
    if(VName === "")
    {
        VError.innerHTML = "Enter The Name";
        return false;
    }

    if(VName.length < 6)
    {
        VError.innerHTML = "Name Must Be atleast 6 Char";
        return false; 
    }
    else {
        VError.innerHTML = "" + VName;
        console.log(VName);
    } 
    return true;
}

function validateEmail()
{
    let Email = document.getElementById("VolunteerEmail").value.trim();
    let Error = document.getElementById("EmailError");
    let Expression = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if(Email === "")
    {
        Error.innerHTML = "Please Enter The Email";
        return false;
    } 
    else if(!Expression.test(Email))
    {
        Error.innerHTML = "Please Enter The Email Again";
        return false;
    }
    else {
        let safeEmail = Email.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
        Error.innerHTML = "Volunteer Email: " + safeEmail;
        return true;
    }
}

function ValidGender()
{

}

function validDepartment()
{

}