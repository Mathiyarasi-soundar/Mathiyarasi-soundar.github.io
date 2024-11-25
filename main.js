let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark')
    navbar.classList.toggle('active')
}

let sections = document.querySelectorAll('section')
let navLinks = document.querySelectorAll('header nav a')

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active')
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active')
            })
        }
    })
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active')
};

const typed = new Typed('.multiple-text', {
    strings: ['Frontend Developer', 'React Developer', 'Web Designer'],
    typeSpeed: 70,
    backSpeed: 70,
    backdelay: 1000,
    loop: true,
});


function sendMessage() {
    let section = document.getElementById('contact');
    (function () {
        emailjs.init("aGz1YEBP3ZChzBzZw");
    })();

    var serviceID = "service_th9an5k";
    var templateID = "template_zokwxsp";

    var params = {
        sendername: document.querySelector('#name').value,
        senderemail: document.querySelector('#email').value,
        subject: document.querySelector('#subject').value,
        sendernumber: document.querySelector('#number').value,
        message: document.querySelector('#message').value,

    };

    emailjs.send(serviceID, templateID, params)
        .then(res => {
            alert('Thank You , ' + params['sendername'] + '! Your message has been sent.');
        })
        .catch();
}
