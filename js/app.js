const courses = document.querySelector('#courses-list');

loadEventListeners();

function loadEventListeners() {
    courses.addEventListener('click', buyCourse);
}

function buyCourse(e) {
    e.preventDefault();
    console.log(e.target);
    alert('course')
    if (e.target.classList.contains('add-to-cart')) {
        const course = e.target.parentElement.parentElement;
        getCourseInfo(course);
    }
}

function getCourseInfo(course) {

    const courseInfo = {
        image: course.querySelector('img').src,
        title: course.querySelector('h4').textContent,
        price: course.querySelector('.price span').textContent,
        id: course.querySelector('a').getAttribute('data-id')
    }
    console.log(courseInfo);
}


