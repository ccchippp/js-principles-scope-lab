// Write your solution in this file!
var customerName = 'bob'
var bestCustomer
const leastFavoriteCustomer = 'def bob'

function upperCaseCustomerName() {
    customerName = customerName.toUpperCase()
}

function setBestCustomer() {
    var notBob = 'not ' + customerName.toLowerCase()
    bestCustomer = notBob
}

function overwriteBestCustomer() {
    var maybeBob = 'maybe ' + customerName.toLowerCase()
    bestCustomer = maybeBob
}

function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = leastFavoriteCustomer.toUpperCase()
}