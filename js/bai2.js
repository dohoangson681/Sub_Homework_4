/**
 * Viết chương trình nhập vào tháng năm và in ra xem tháng đó có bn ngày , tính cả năm nhuận
 */
var month ; 
var year ; 
function dateInMonth(month , year) {
    year = Number(document.getElementById("yearBai2").value) ;
    month =  Number(document.getElementById("monthBai2").value) ;
    var dateOfMonth = 0 ;
    if(leapYear(year)){
        if(month == 2){
            dateOfMonth = 29 ; 
        }else if(month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12){
            dateOfMonth = 31 ; 
        }else {
            dateOfMonth = 30 ; 
        }
    }else {
        if(month == 2){
            dateOfMonth = 28 ;
        }else if(month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12){
            dateOfMonth = 31 ;
        }else {
            dateOfMonth = 30 ; 
        }
    }
    document.getElementById("resultBai2").innerHTML = "Tháng " + month + " có " + dateOfMonth + " ngày."
}
document.getElementById("btnBai2").onclick = dateInMonth ; 
function leapYear(year) { 
    if(year % 4 == 0 && year % 100 != 0 ) return true ;
    else return false ; 
}