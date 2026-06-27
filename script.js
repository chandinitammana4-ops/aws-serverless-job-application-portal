async function submitForm() {

    const data = {
        fullName: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phoneNumber: document.getElementById("phone").value,
        qualification: document.getElementById("qualification").value,
        experience: document.getElementById("experience").value,
        skills: document.getElementById("skills").value,
        coverLetter: document.getElementById("coverLetter").value
    };

    try {

        const response = await fetch(
            "https://sfpctyt404.execute-api.us-east-1.amazonaws.com/prod/apply",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            }
        );

        const result = await response.text();

        alert("Application Submitted Successfully!");

        console.log(result);

    } catch(error) {

        console.error(error);

        alert("Error submitting application");

    }
}