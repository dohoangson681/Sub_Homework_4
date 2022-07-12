/**
 * Nhập vào ngày tháng năm giả sử hợp lệ
 * in ra ngày tiếp theo hoặc ngày kế tiếp
 */
var date ; 
var month ; 
var year ; 
function nextDate(date , month , year) {
    var nextDate = 0 ; 
    var nextMonth = 0 ; 
    var nextYear = 0 ;
    date = Number(document.getElementById("date").value) ; 
    month = Number(document.getElementById("month").value) ; 
    year = Number(document.getElementById("year").value) ; 
    
    if(leapYear(year)){
        // neu la nam nhuan
            // nhung thang co 31 ngay
        if(month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12 ){
            if(date == 31 && month < 12){
                nextDate = 1 ; 
                nextMonth  = month + 1  ; 
                nextYear = year ; 
            }else if(date == 31 && month == 12 ){
                nextDate = 1 ; 
                nextMonth = 1 ; 
                nextYear = year + 1 ;
            }else{
                nextDate = date + 1 ; 
                nextMonth = month ; 
                nextYear = year ; 
            }
        }else if (month == 4 || month == 6 || month ==9 || month == 11){
            if(date == 30){
                nextDate = 1 ; 
                nextMonth = month + 1 ; 
                nextYear = year ; 
            }else {
                nextDate = date + 1 ; 
                nextMonth = month ; 
                nextYear = year ; 
            }
        }else {
            if(date == 29){
                nextDate = 1 ; 
                nextMonth = 3 ; 
                nextYear = year ; 
            }else {
                nextDate = date + 1 ; 
                nextMonth = month ; 
                nextYear = year ; 
            }
        }
    }else { // truong hop khong phai nam nhuan
        if(month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12) {
            if(date == 31 && month < 12){
                nextDate = 1 ; 
                nextMonth = month + 1 ; 
                nextYear = year ; 
            }else if (date == 31 && month == 12){
                nextDate = 1 ; 
                nextMonth = 1 ; 
                nextYear = year + 1 ; 
            }else {
                nextDate = date + 1 ; 
                nextMonth = month ; 
                nextYear = year ; 
            }
        }else if (month == 4 || month == 6 || month ==9 || month == 11){
            if(date == 30){
                nextDate = 1 ; 
                nextMonth = month + 1 ; 
                nextYear = year ; 
            }else{
                nextDate = date + 1 ; 
                nextMonth = month ; 
                nextYear = year
            }
        }else{
            if(date == 28){
                nextDate = 1 ; 
                nextMonth = month + 1 ; 
                nextYear = year ; 
            }else {
                nextDate = date + 1 ; 
                nextMonth = month ; 
                nextYear = year ; 
            }
        }
    }
    
    document.getElementById("nextDate").innerHTML ="Next Date : " +  nextDate + "/" + nextMonth + "/" + nextYear ; 
}
document.getElementById("btnNextDate").onclick
= nextDate ; 
// ngay truoc do
function prevDate(date , month , year) {
    var prevDate = 0 ; 
    var prevMonth = 0 ; 
    var prevYear = 0 ; 
   
    date  = Number(document.getElementById("date").value) ; 
    month  = Number(document.getElementById("month").value) ;
    year  = Number(document.getElementById("year").value) ;
    console.log(date , month , year ) ;
    if(leapYear(year)){ // truong hop nam nhuan
        if(month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12) {
            if(date == 1 && month == 1){
                prevDate = 31 ; 
                prevMonth = 12 ; 
                prevYear = year - 1 ; 
            }else if (date == 1 && month > 1 && month != 3){
                prevDate = 30 ; 
                prevMonth = month - 1 ; 
                prevYear = year ; 
            }else if(date == 1 && month == 3){
                prevDate = 29 ; 
                prevMonth = 2 ; 
                prevYear = year ; 
            }else {
                prevDate = date - 1 ; 
                prevMonth = month ; 
                prevYear = year ; 
            }
        }else{
            if(date == 1){
                prevDate = 31 ; 
                prevMonth = month - 1; 
                prevYear = year ; 
            }else {
                prevDate = date - 1; 
                prevMonth = month ; 
                prevYear = year ; 
            }
        }
       
    }else { //truong hop nam ko nhuan
        if(month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12) {
            if(date == 1 && month == 1){
                prevDate = 31 ; 
                prevMonth  = 12 ; 
                prevYear = year - 1 ; 
            }else if(date == 1 && month > 1 && month != 3 ){
                prevDate == 31 ; 
                prevMonth = month - 1 ; 
                prevYear = year ; 
            }else if(date == 1 && month == 3){
                prevDate = 28 ; 
                prevMonth = 2 ;
                prevYear = year ; 
            }else {
                prevDate = date - 1 ; 
                prevMonth = month ; 
                prevYear = year ; 
            }
        }else {
            if(date == 1){
                prevDate = 31 ; 
                prevMonth = month - 1;
                prevYear = year ; 
            }else {
                prevDate = date - 1 ; 
                prevMonth = month ; 
                prevYear  = year ; 
            }
        }
    }
    document.getElementById("prevDate").innerHTML = "PrevDate : " + prevDate +"/"+prevMonth +"/"+prevYear ; 
    console.log(prevDate , prevMonth , prevYear) ; 
}
document.getElementById("btnPrevDate").onclick
= prevDate ;
function leapYear(year){
    year = Number(document.getElementById("year").value) ; 
    if(year % 4 == 0 && year % 100 != 0 ) return true ; 
    else return false ; 
}