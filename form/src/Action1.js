import { useState } from "react"

export default function Form () {
    var [form, setForm] = useState({
        firstName: "",
        lastName:"",
        email:"",
        securityQuestion:"",
        securityAnswer:"",
        bio:""
    });

    var [errors, setErrors] = useState({
        firstNameError: "",
        lastNameError:"",
        bioError:""
    });

    var [isDisabled, setIsDisabled] = useState(true);

    var handleFormInput = (e) => {
        var value = e.target.value;
        var name = e.target.name;

        // Validate first name
        if (name === "firstName"){
            if ((value.length < 3 || value.length > 15) && value.length > 0){
                setErrors({...errors,firstNameError:"Length of the first name should be between 3 to 15 letters."})
            }
            else if (value.length > 0 && !value.match(/^[a-zA-Z]+$/)){
                setErrors({...errors,firstNameError:"Name should only contain letters."})              
            }
            else{
                setErrors({...errors,firstNameError:""})  
            }
        }

        // Validate last name
        if (name === "lastName"){
            if ((value.length < 3 || value.length > 15) && value.length > 0){
                setErrors({...errors,lastNameError:"Length of the last name should be between 3 to 15 letters."})
            }
            else if (value.length > 0 && !value.match(/^[a-zA-Z]+$/)){
                setErrors({...errors,lastNameError:"Name should only contain letters."})              
            }
            else{
                setErrors({...errors,lastNameError:""})
            }
        }

        // Validate bio
        if (name === "bio"){
            if (value.length < 15 && value.length > 0){
                setErrors({...errors,bioError:"Length of the bio should be greater than 15 letters."})
            }
            else{
                setErrors({...errors,bioError:""})
            }
        }

        if (errors.firstNameError==="" && errors.lastNameError==="" 
        && errors.bioError==="" && form.securityQuestion!=="Select an option"
        && form.securityAnswer.length > 0 && form.email.length > 0
        && form.firstName.length > 0 && form.bio.length >0 
        && form.lastName.length > 0){
            setIsDisabled(false);
        }
        else{
            setIsDisabled(true);
        }
        setForm({...form,[name]:value});
    };

    var clearForm = () => {
        setForm({
            firstName: "",
            lastName:"",
            email:"",
            securityQuestion:"",
            securityAnswer:"",
            bio:""
        })
        setErrors({
            firstNameError: "",
            lastNameError:"",
            bioError:""
        })
        document.getElementsByName("firstName")[0].value = "";
        document.getElementsByName("lastName")[0].value = "";
        document.getElementsByName("email")[0].value = "";
        document.getElementsByName("securityQuestion")[0].value = "Select an option";
        document.getElementsByName("securityAnswer")[0].value = "";
        document.getElementsByName("bio")[0].value = "";
    };

    var handleSubmit = (e) => {
        console.log("submit")
        e.preventDefault();
        if (!isDisabled){
            console.log(form);
        }
    };

    return (
        <>
        <form onSubmit={handleSubmit}>
            <input type="text" onKeyUp={handleFormInput} name="firstName" placeholder="Enter your First name"></input><br/>
            {errors.firstNameError}<br/>
            <input type="text" onKeyUp={handleFormInput} name="lastName" placeholder="Enter your Last name"></input><br/>
            {errors.lastNameError}<br/>
            <input type="email" onKeyUp={handleFormInput} name="email" placeholder="Enter your Email"></input><br/><br/>
            <select name="securityQuestion" onChange={handleFormInput} required>
                <option value="Select an option">Select an option</option>
                <option value="What is your mother's maiden name?">What is your mother's maiden name?</option>
                <option value="What was the name of your first pet?">What was the name of your first pet?</option>
                <option value="What was the name of your first school?">What was the name of your first school?</option>
            </select><br/><br/>
            <input type="text" onKeyUp={handleFormInput} name="securityAnswer" placeholder="Enter your answer" required></input><br/><br/>
            <textarea type="text" onKeyUp={handleFormInput} name="bio" placeholder="Enter your Bio" rows="5" cols="100"></textarea><br/>
            {errors.bioError}<br/>
            <button type="submit" disabled={isDisabled}>Submit</button>&nbsp;
            <button onClick={clearForm}>Clear</button>
        </form>
        </>
    )
}