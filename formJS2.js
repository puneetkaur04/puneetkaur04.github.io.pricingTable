// this function starts the validation process - makes sure the user inputed the right information throughout the form 
function validation()
{
    // four variables are declared and initialized 
    var firstName = document.enrollment.fName;
    var lastName = document.enrollment.lName;
    var whatGender = document.enrollment.gender;
    var number = document.enrollment.phoneNumber;

    // doesn't let the user continue to the next field until the function returns a true value
    if(allLettername(firstName))
    {
        // doesn't let the user continue to the next field until the function returns a true value
        if(allLetterlast(lName))
        {
            // doesn't let the user continue to the next field until the function returns a true value
            if(genderselect(gender))
            {
                // doesn't let the user sucessfully submit the form until the function returns a true value
                if(Mobile(phoneNumber))
                {
                }
            }
        }
    }
    return false;
}	

// this function makes sure that the first name inputted by the user was composed of letters  
function allLettername(firstName)
{ 
    // a variable is created and set to all the possible lowercase and upercase letters 
    var letters = /^[A-Za-z]+$/;

    if(firstName.value.length==0)
    {
        // this block of code executes if the user inputted nothing 
        alert('Please enter your first name');
        firstName.focus();
        return false;
    }

    else if(firstName.value.match(letters))
    {
        // returns true if the user's inputted first name was composed of letters 
        return true;
    }
    else
    {
        // this block of code executes if the user inputted anything other than letters (alphabet)
        alert('First name must have alphabet characters only');
        firstName.focus();
        return false;
    }
}

// this function makes sure that the last name inputted by the user was composed of letters  
function allLetterlast(lName)
{ 
    // a variable is created and set to all the possible lowercase and upercase letters 
    var letters = /^[A-Za-z]+$/;

    if(lName.value.length==0)
    {
        // this block of code executes if the user inputted nothing
        alert('Please enter your last name');
        lName.focus();
        return false;
    }
    else if(lName.value.match(letters))
    {
        // returns true if the user's inputted last name was composed of letters 
        return true;	
    }
    else
    {
        // this block of code executes if the user inputted anything other than letters (alphabet)
        alert('Last name must have alphabet characters only');
        lName.focus();
        return false;
    }
    }

    // this function makes sure that the user selected an option
    function genderselect(gender)
    {
    if(gender.value == "Default")
    {
        // this block of code executes if the varible, gender is still set to the default value 
        alert('Please select your gender');
        gender.focus();
        return false;
    }
    else
    {
        return true;
    }
}

// this function makes sure that the phone number inputted by the user was composed of numbers
function Mobile(phoneNumber)
{ 
    // a variable is created and set to all the possible numbers
    var numbers = /^[0-9]+$/;

    if(phoneNumber.value.length==0 )
    {
        // this block of code executes if the user inputted nothing 
        alert('Please enter contact number');
        fName.focus();
        return false;
    }
    else if(phoneNumber.value.length != 10)
    {
        // this block of code executes if the user's inputted number is composed of numbers only 
        alert('Please enter a valid contact number');
        fName.focus();
        return false;

    }
    else if(phoneNumber.value.match(numbers))
    {
        // returns true if the user's inputted phone number was composed of numbers 
        alert('Form Succesfully Submitted');
        window.location.reload();
        return true;
    }
    else
    {
        // this block of code executes if the user inputted anything other than numbers
        alert('Please check your contact number');
        return false;
    }
}