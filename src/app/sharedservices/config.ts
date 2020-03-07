//const fixedURI='http://localhost:3000'
const fixedURI='https://office-expense.herokuapp.com'
export const configUrls={
    loginURL: fixedURI + '/login',
    getCategoiesURL : fixedURI + '/getcategories',
    addExpense:fixedURI + '/addexpense',
    getAllExpenseURL:fixedURI + '/get-expense-list',
    deleteExpenseURL:fixedURI + '/delete-record',
    updateExpenseURL:fixedURI + '/update-expense',
    filterExpenseURL:fixedURI + '/find-expense',
    filterByCatURL:fixedURI + '/search-category'
    //filterByCatURL:'http://localhost:3000/search-category'
}