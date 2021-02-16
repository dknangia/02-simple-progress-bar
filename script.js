var btnPreviuos = document.getElementById("previous");
var btnNext = document.getElementById("next");
var pointers = document.querySelectorAll('.pointer');
var progressBar = document.getElementById("progress-bar");

var currentActive = 1;

btnPreviuos.addEventListener("click", () => {
    currentActive--;
    if (currentActive < 1) {
        currentActive = 1;
    }

    updateProgressBar();
});


btnNext.addEventListener("click", () => {
    currentActive++;
    if (currentActive > pointers.length) {
        currentActive = pointers.length;
    }

    updateProgressBar();

});

function updateProgressBar() {
    console.log(currentActive);

    pointers.forEach((point, index) => {
        if (index < currentActive) {
            point.classList.add('active');
        } else {
            point.classList.remove('active');
        }
    });

    var progressBarLength = (currentActive - 1) / (pointers.length - 1) * 100 + '%';
    progressBar.style.width = progressBarLength;
    if (currentActive == 1) {
        btnPreviuos.disabled = true;
    } else if (currentActive === pointers.length) {
        btnNext.disabled = true;
    }
    else {
        btnNext.disabled = false;
        btnPreviuos.disabled = false;
    }

}