const elements = document.querySelectorAll('.hidden');
const imgs = document.querySelectorAll('.slides img');

const myObserver = new IntersectionObserver((entries) => {
    console.log(entries);

    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

elements.forEach((element) => myObserver.observe(element));

console.log(imgs);

let imgatual = 0;

function mudarimagem() {
    imgs[imgatual].classList.remove('atual');
    imgatual = (imgatual + 1) % imgs.length;
    imgs[imgatual].classList.add('atual');
}

setInterval(mudarimagem, 3000);
