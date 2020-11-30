// use IIFEs
(function () {
    const form = document.querySelector('form');
    const displayArea = document.querySelector('ul');
    const bookList = JSON.parse(localStorage.getItem('bookList')) || [];

    function showBook() {
        bookList.forEach(item => bookHTML(item));
        console.log('showBook Function');
    }

    function bookHTML(input) {
        displayArea.innerHTML += `<li><span>X</span>${input}</li>`;
    }

    function updateLocalStorage() {
        localStorage.setItem('bookList', JSON.stringify(bookList));
    }


    // Show on the page
    showBook();

    // Listener for add
    form.addEventListener('submit', e => {
        e.preventDefault();
        const bookInput = document.getElementById('bookInput');
        bookHTML(bookInput.value);
        bookList.push(bookInput.value);
        updateLocalStorage(bookInput.value);
        bookInput.value = '';
    })
    // Listener for delete
    displayArea.addEventListener('click', e => {
        if (e.target.tagName !== 'SPAN') { return }
        const li = e.target.parentElement;
        li.remove();
        bookList.splice((bookList.indexOf(li.textContent.slice(0, -1))), 1);
        updateLocalStorage();
    })

})()

