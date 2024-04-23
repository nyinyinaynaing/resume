let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');


menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');


        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};
function updateTime() {
    var currentDate = new Date();

    var currentYear = currentDate.getFullYear();
    var currentDateStr = currentDate.toDateString();
    var currentHours = currentDate.getHours();
    var currentMinutes = currentDate.getMinutes();
    var currentSeconds = currentDate.getSeconds();
    var amPM = currentHours >= 12 ? 'PM' : 'AM';
    currentHours = currentHours % 12;
    currentHours = currentHours ? currentHours : 12; // Handle midnight (0 hours)
    var currentTimeStr = currentHours + ':' + currentMinutes + ': ' + currentSeconds + ' ' + amPM;

    var dateTimeString = "Current year: " + currentYear + ", Date: " + currentDateStr + ", Malaysia Time: " + currentTimeStr;

    document.getElementById("currentYear").innerHTML = dateTimeString;
}

// Call updateTime every second to update the time
setInterval(updateTime, 1000);

