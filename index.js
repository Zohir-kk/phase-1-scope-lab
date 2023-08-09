// Write your solution in this file!
var customerName ='bob'
const leastFavoriteCustomer = 'Milo'
function upperCaseCustomerName() {
    customerName = customerName.toUpperCase('bob')
}

//how to access a global scope variable from a function?
////how to declare a global variable from inside a function?
//how to overwrite a var declared in global scope?

function setBestCustomer() {
    bestCustomer = 'not bob'
}

function overwriteBestCustomer(newbestCustomer) {
   bestCustomer=newbestCustomer
}

function changeLeastFavoriteCustomer(newleastFavoritCustomer) {
    leastFavoriteCustomer = newleastFavoritCustomer
}
console.log(changeLeastFavoriteCustomer("Lilya"));