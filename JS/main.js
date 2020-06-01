function calculateInsurance() {
    console.log("Hey your insurance costs");

    let name = document.getElementById("name").value;
    let age = Number(document.getElementById("age").value);
    let country = document.getElementById("country").value;
    let horsePwr = Number(document.getElementById("horsepower").value);
    let message = document.getElementById("printed");

    let insurance;

    switch (country) {
        case "Austria":
            insurance = horsePwr * 100 / age + 50;
            document.getElementById("printed").textContent = `Hey ${name} your insurance costs is ${Math.round(insurance)}`;

            break
        case "Hungary":
            insurance = horsePwr * 120 / age + 100;
            document.getElementById("printed").textContent = `Hey ${name} your insurance costs is ${Math.round(insurance)}`;

            break
        case "Greece":
            insurance = horsePwr * 150 / (age + 3) + 50;
            document.getElementById("printed").textContent = `Hey ${name} your insurance costs is ${Math.round(insurance)}`;
            break
    }
}

let button = document.getElementById("butn");
button.addEventListener("click", calculateInsurance, false);