function getAge(dateString) {
    let today = new Date();
    let birthDate = new Date(dateString);

    let m = today.getMonth() - birthDate.getMonth();
    let age
    if (m <= 0) {
        age = today.getFullYear() - birthDate.getFullYear() - 1;
    } else { age = today.getFullYear() - birthDate.getFullYear(); }

    console.log("age", age)

    age = age * 12 + m;
    return age;
}
const result = getAge('07-11-1996')
console.log("month", result)