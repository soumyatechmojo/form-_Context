import { useRef, useState } from "react"


export default function UnControlledForm () {
    var firstName = useRef("");
    var lastName = useRef("");
    var email = useRef("");
    var securityQuestion = useRef("");
    var securityAnswer = useRef("");
    var bio = useRef("");
    
    var [errors, setErrors] = useState({
        firstNameError: "",
        lastNameError:"",
        bioError:""
    })

    var clearForm = () => {
        firstName.current.value= "";
        lastName.current.value= "";
        email.current.value= "";
        securityQuestion.current.value= "";
        securityAnswer.current.value= "";
        bio.current.value= "";
        document.getElementsByName("firstName")[0].value = "";
        document.getElementsByName("lastName")[0].value = "";
        document.getElementsByName("email")[0].value = "";
        document.getElementsByName("securityQuestion")[0].value = "Select an option";
        document.getElementsByName("securityAnswer")[0].value = "";
        document.getElementsByName("bio")[0].value = "";
    }
  
    var handleSubmit = (e) => {
        e.preventDefault();

        var validFirstName = false;
        var validLastName = false;
        var validBio = false;
        var validEmail = false;
        var validSecQues = false;
        var validSecAns = false;
        var copyErrors = {...errors};
        
        //validate firstname
        if ((firstName.current.value.length < 3 || firstName.current.value.length > 15) && firstName.current.value.length > 0){
            copyErrors.firstNameError = "Length of the first name should be between 3 to 15 letters.";
        }
        else if (firstName.current.value.length > 0 && !firstName.current.value.match(/^[a-zA-Z]+$/)){
            copyErrors.firstNameError = "Name should only contain letters.";          
        }
        else{
            copyErrors.firstNameError = "";
            if (firstName.current.value.length > 0 ){
                validFirstName = true;
            }
        }

        //validate lastname
        if ((lastName.current.value.length < 3 || lastName.current.value.length > 15) && lastName.current.value.length > 0){
            copyErrors.lastNameError = "Length of the last name should be between 3 to 15 letters.";
        }
        else if (lastName.current.value.length > 0 && !lastName.current.value.match(/^[a-zA-Z]+$/)){
            copyErrors.lastNameError = "Name should only contain letters.";            
        }
        else{
            copyErrors.lastNameError = ""
            if (lastName.current.value.length > 0 ){
                validLastName = true;
            }
        }

        // Validate bio
        if (bio.current.value.length < 15 && bio.current.value.length > 0){
            copyErrors.bioError = "Length of the bio should be greater than 15 letters.";
        }
        else{
            copyErrors.bioError = "";
            if (bio.current.value.length > 0 ){
                validBio = true;
            }
        }

        // Validate email
        if (email.current.value.length > 0 ){
            validEmail = true;
        }


        // Validate secret question
        if (securityQuestion.current.value !== "Select an option" ){
            validSecQues = true;
        }


        // Validate secret answer
        if (securityAnswer.current.value.length > 0 ){
            validSecAns = true;
        }

        setErrors({...copyErrors});
        if (validBio && validEmail && validFirstName && validLastName && validSecAns && validSecQues){
            var form = {"email":email.current.value, 
                        "bio":bio.current.value, 
                        "first name":firstName.current.value,
                        "last name":lastName.current.value,
                        "Secret question":securityQuestion.current.value,
                        "Secret answer":securityAnswer.current.value}

            console.log(form)
        }
    }

    return (
        <>
        <form onSubmit={handleSubmit}>
            <input type="text" ref={firstName} name="firstName" placeholder="Enter your First name"></input><br/>
            {errors.firstNameError}<br/>
            <input type="text" ref={lastName} name="lastName" placeholder="Enter your Last name"></input><br/>
            {errors.lastNameError}<br/>
            <input type="email" ref={email} name="email" placeholder="Enter your Email"></input><br/>
            <select name="securityQuestion" ref={securityQuestion} required>
                <option value="Select an option">Select an option</option>
                <option value="What is your mother's maiden name?">What is your mother's maiden name?</option>
                <option value="What was the name of your first pet?">What was the name of your first pet?</option>
                <option value="What was the name of your first school?">What was the name of your first school?</option>
            </select><br/><br/>
            <input type="text" ref={securityAnswer} name="securityAnswer" placeholder="Enter your answer" required></input><br/><br/>
            <textarea type="text" ref={bio} name="bio" placeholder="Enter your Bio" rows="5" cols="100"></textarea><br/>
            {errors.bioError}<br/>
            <button type="submit">Submit</button>&nbsp;
            <button onClick={clearForm}>Clear</button>
        </form>
        </>
    )
}