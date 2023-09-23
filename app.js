// في ملف JavaScript منفصل أو بالجزء السفلي من ملف HTML
document.addEventListener("DOMContentLoaded", function () {
    const body = document.body;
    const backgroundColors = ["#f2f2f2", "#e0e0e0", "#d1d1d1"];
    let currentColorIndex = 0;

    function changeBackgroundColor() {
        body.style.backgroundColor = backgroundColors[currentColorIndex];
        currentColorIndex = (currentColorIndex + 1) % backgroundColors.length;
    }

    // قم بتغيير لون الخلفية كل ثانية
    setInterval(changeBackgroundColor, 1000);
});
