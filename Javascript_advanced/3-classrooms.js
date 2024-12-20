function createClassRoom(numbersOfStudents) {
    function studentSeat(seat) {
        return function() {
            return seat;
        };
    };

    var students = [];
    for (var i = 0; i < numbersOfStudents; i++) {
        students[i] = studentSeat(i + 1);
    }
    return students;
};

let classRoom = createClassRoom(10);

console.log(classRoom[0]());
console.log(classRoom[3]());
console.log(classRoom[9]());
