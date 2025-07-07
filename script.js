function bmicalculator() {
    let weight = parseFloat(document.getElementById("W1").value);
    let height = parseFloat(document.getElementById("H1").value);
    let result = document.getElementById("re");

    if (!weight || !height || height <= 0) {
        result.innerText = "Please enter valid numbers";
        result.style.color = "#ffc107";
        return;
    }

    let bmi = weight / (height * height);
    bmi = bmi.toFixed(2);

    let message = "";
    let color = "";

    if (bmi < 18.5) {
        message = `Underweight: BMI = ${bmi}`;
        color = "#ff9800"; // Orange
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        message = `Normal: BMI = ${bmi}`;
        color = "#4caf50"; // Green
    } else {
        message = `Overweight: BMI = ${bmi}`;
        color = "#f44336"; // Red
    }

    // Set text and color
    result.innerText = message;
    result.style.color = color;

    // Animate the result
    result.classList.remove("fade");
    void result.offsetWidth; // trigger reflow
    result.classList.add("fade");

    // Optional: Play a click sound
    const audio = new Audio("https://cdn.pixabay.com/audio/2023/03/20/audio_95e78bcf80.mp3");
    audio.volume = 0.3;
    audio.play();
}
