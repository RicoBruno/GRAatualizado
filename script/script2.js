const elements2 = document.querySelectorAll('.hidden2');
const imgs1 = document.querySelectorAll('.slides2 img');

const myObserver2 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show');
    }
  });
});

elements2.forEach((element) => {
  myObserver2.observe(element);
});

let imgatual2 = 0;

function mudarimagem2() {
    imgs1[imgatual2].classList.remove('atual');
    imgatual2 = (imgatual2 + 1) % imgs1.length;
    imgs1[imgatual2].classList.add('atual');
}

setInterval(mudarimagem2, 3000);
