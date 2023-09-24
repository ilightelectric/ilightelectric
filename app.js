// في ملف JavaScript منفصل أو بالجزء السفلي من ملف HTML
document.addEventListener("DOMContentLoaded", function () {
    const body = document.body;
    const backgroundColors = ["#8EFF00", "#0BBFDC", "#54D2E6"];
    let currentColorIndex = 0;

    function changeBackgroundColor() {
        body.style.backgroundColor = backgroundColors[currentColorIndex];
        currentColorIndex = (currentColorIndex + 1) % backgroundColors.length;
    }

    // قم بتغيير لون الخلفية كل ثانية
    setInterval(changeBackgroundColor, 1000);
});
