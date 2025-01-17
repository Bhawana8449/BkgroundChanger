// Change the background color when the button is clicked
document.getElementById('changeColorBtn').addEventListener('click', function() {
    const colors = ['#FF5733', '#33FF57', '#3357FF', '#FFD700', '#8A2BE2'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
});
