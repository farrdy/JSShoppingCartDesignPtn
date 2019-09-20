const courses = document.querySelector('#courses-list'),
    shoppingCartContent = document.querySelector('#cart-content tbody'),
    clearCartBtn = document.querySelector('#clear-cart');

loadEventListeners();

function loadEventListeners() {
    courses.addEventListener('click', buyCourse);
    shoppingCartContent.addEventListener('click', removeCourse);
    clearCartBtn.addEventListener('click', clearCart);
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

    addIntoCart(courseInfo);
    //console.log(courseInfo);
}
//insrt into shopping cart

function addIntoCart(course) {

    const row = document.createElement('tr');
    row.innerHTML = `
    <tr>
    <td> <img src="${course.image}"></td>
    <td>${course.title}</td>
    <td>${course.price}</td>
    <td><a href ="#" class="remove" data-id="${course.id}">X</td>
    </tr>
    `
    //add into the shoppingcart
    shoppingCartContent.appendChild(row);
    saveIntoStorage(course);
}

//add courss into localstorage
function saveIntoStorage(course) {
    let courses = getCoursesFromStorage();

    courses.push(course);
    //since storage only saves strings 
    localStorage.setItem('courses', JSON.stringify(courses));

}

//Get contents from local storage
function getCoursesFromStorage() {

    let courses;

    if (localStorage.getItem('courses') === null) {
        courses = [];
    }
    else {

        courses = JSON.parse(localStorage.getItem('courses'));
    }
    return courses;
}

function removeCourse(e) {

    if (e.target.classList.contains('remove')) {

        e.target.parentElement.parentElement.remove();

    }
}

function clearCart() {

    //shoppingCartContent.innerHTML = '';
    shoppingCartContent.removeChild(shoppingCartContent.firstChild);
}

