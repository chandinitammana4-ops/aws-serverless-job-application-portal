function submitForm()
{
    let name =
    document.getElementById("name").value;

    let email =
    document.getElementById("email").value;

    let phone =
    document.getElementById("phone").value;

    if(name === "" ||
       email === "" ||
       phone === "")
    {
        alert(
        "Please fill all mandatory fields"
        );
        return;
    }

    alert(
    "Application Submitted Successfully"
    );

    document.getElementById(
    "jobForm"
    ).reset();
}