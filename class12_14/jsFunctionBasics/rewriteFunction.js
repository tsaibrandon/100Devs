function checkAge(age) {
    return (age > 18) ? true : confirm("Did parents allow you?")
}

function checkAgeAgain(age) {
    return (age > 18) || confirm("Did parents allow you?")
}