// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

// Get all like and comment buttons
const likeButtons = document.querySelectorAll('.like');
const commentButtons = document.querySelectorAll('.comment');

// Attach click event listeners to each like and comment button
likeButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Toggle the "liked" state of the button
        button.classList.toggle('liked');
    });
});

commentButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Get the input field and its value
        const input = button.parentNode.querySelector('input[type="text"]');
        const comment = input.value;

        if (comment) {
            // Create a new comment element and append to the comments list
            const commentList = button.parentNode.parentNode.querySelector('.comments');
            const newComment = document.createElement('li');
            newComment.innerText = comment;
            commentList.appendChild(newComment);

            // Clear the input field
            input.value = '';
        }
    });
});