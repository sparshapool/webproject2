$(document).ready(function () {
    $('#registrationForm').on('submit', function (e) {
        const name = $('#name').val();
        const email = $('#email').val();
        const phone = $('#phone').val();
        const dob = $('#dob').val();

        if (!name || !email || !phone || !dob) {
            alert('All fields are required!');
            e.preventDefault();
        }
    });
});
