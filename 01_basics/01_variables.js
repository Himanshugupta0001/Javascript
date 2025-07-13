const accountId = 114455
let accountEmail = "himanshu@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

// accountId = 6 // not allowed
accountEmail = "hc@hw.com"
accountPassword = "365466"
accountCity = "delhi"

console.log(accountId)

/*
    Prefer not to use var 
    because of issue in block scope and functional sc
*/

console.table([accountId, accountCity, accountPassword, accountCity, accountState])