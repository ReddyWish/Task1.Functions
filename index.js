// function declaration:

function getName1 (name) {
    return `имя равно ${name}`
}
console.log(getName1('ilya'))


// function expression:

const getName2 = function (name) {
    return `имя равно ${name}`
}
console.log(getName2('ilya'))

// arrow function:

const getName3 = (name) => {
    return `имя равно ${name}`
}
console.log(getName3('ilya'))