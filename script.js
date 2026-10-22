function addStudent() {
    // Function implementation
    var studentName = document.getElementById('studentName').value;
    var rno = document.getElementById('rno').value;
    var email = document.getElementById('email').value;
    if (studentName && rno && email) {
        document.getElementById('studentList').innerHTML += '<li>' + studentName + ' - ' + rno + ' - ' + email + '</li>';
}else{
    alert('Please fill in all fields before adding a student.');
}
}