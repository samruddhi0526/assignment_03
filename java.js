function validateForm() {
    const fullName = document.getElementById("fullName").value;
    const mobile = document.getElementById("mobile").value;
    const aadhar = document.getElementById("aadhar").value;
    const panCard = document.getElementById("panCard").value;
    const dob = document.getElementById("dob").value;

    const mobileRegex = /^[6-9]\d{9}$/;
    const aadharRegex = /^\d{12}$/;
    const panRegex = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;

    console.log("Full Name:", fullName); 
    console.log("Mobile:", mobile);
    console.log("Aadhar:", aadhar);
    console.log("PAN Card:", panCard);
    console.log("Date of Birth:", dob);

    if (!mobileRegex.test(mobile)) {
        alert("Invalid mobile number");
        console.log("Validation failed: Invalid mobile number"); 
        return false;
    }

    if (!aadharRegex.test(aadhar)) {
        alert("Invalid Aadhar number");
        console.log("Validation failed: Invalid Aadhar number");
        return false;
    }

    if (!panRegex.test(panCard)) {
        alert("Invalid PAN Card number");
        console.log("Validation failed: Invalid PAN Card number");
        return false;
    }

   
    let subject1 = parseInt(document.getElementById("subject1").value);
    let subject2 = parseInt(document.getElementById("subject2").value);
    let subject3 = parseInt(document.getElementById("subject3").value);
    let subject4 = parseInt(document.getElementById("subject4").value);
    let subject5 = parseInt(document.getElementById("subject5").value);
    let subject6 = parseInt(document.getElementById("subject6").value);

    console.log("Subject 1:", subject1); 
    console.log("Subject 2:", subject2);
    console.log("Subject 3:", subject3);
    console.log("Subject 4:", subject4);
    console.log("Subject 5:", subject5);
    console.log("Subject 6:", subject6);

    let totalMarks = subject1 + subject2 + subject3 + subject4 + subject5 + subject6;
    let percentage = (totalMarks / 600) * 100;

    console.log("Total Marks:", totalMarks);
    console.log("Percentage:", percentage);

    document.getElementById("percentageDisplay").textContent = "Percentage: " + percentage.toFixed(2) + "%";

    alert("Form submitted successfully! Percentage: " + percentage.toFixed(2) + "%");
    console.log("Form submitted successfully"); 
    return true;
}