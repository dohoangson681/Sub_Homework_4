/**
 * Kiểm tra sinh viên nào xa trường nhất
 */
var firstStudent ; 
var firstPostX , firstPostY ;
var secondStudent ; 
var secondPostX , secondPostY ;
var thirdStudent ; 
var thirdPostX , thirdPostY ;
var schoolPosX , schoolPosY ; 
function check(firstStudent , firstPostX , firstPostY , secondStudent , secondPostX , secondPostY , thirdStudent , thirdPostX , thirdPostY){
    firstStudent = document.getElementById("firstStudent").value ; 
    secondStudent = document.getElementById("secondStudent").value ; 
    thirdStudent = document.getElementById("thirdStudent").value ; 
    firstPostX = Number(document.getElementById("firstPosX").value) ; 
    firstPostY = Number(document.getElementById("firstPosY").value) ; 
    secondPostX = Number(document.getElementById("secondPosX").value) ; 
    secondPostY = Number(document.getElementById("secondPosY").value) ; 
    thirdPostX = Number(document.getElementById("thirdPosX").value) ; 
    thirdPostY = Number(document.getElementById("thirdPosY").value) ; 
    schoolPosX = Number(document.getElementById("schoolPosX").value) ;
    schoolPosY = Number(document.getElementById("schoolPosY").value) ;
    var distanceFirst = distance(firstPostX , firstPostY , schoolPosX , schoolPosY  ) ; 
    var distanceSecond = distance(secondPostX , secondPostY , schoolPosX , schoolPosY) ;
    var distanceThird = distance(thirdPostX , thirdPostY , schoolPosX , schoolPosY) ;
    if(distanceFirst == distanceSecond && distanceFirst == distanceThird){
        document.getElementById("resultBai4").innerHTML = "Các bạn xa trường như nhau."
         
    }else if(distanceFirst > distanceSecond && distanceFirst > distanceThird ){
        document.getElementById("resultBai4").innerHTML = "Sinh viên xa trường nhất là " + firstStudent ; 
        
    }else if (distanceSecond > distanceFirst && distanceSecond > distanceThird){
        document.getElementById("resultBai4").innerHTML = "Sinh viên xa trường nhất là " + secondStudent ;
        
    }else if(distanceFirst == distanceSecond &&  distanceFirst > distanceThird){
        document.getElementById("resultBai4").innerHTML = "Sinh viên xa trường nhất là " + firstStudent + " và " + secondStudent ;

    }else if(distanceFirst == distanceThird &&  distanceFirst > distanceSecond){
        document.getElementById("resultBai4").innerHTML = "Sinh viên xa trường nhất là " + firstStudent + " và " + thirdStudent ;

    }else if(distanceSecond == distanceThird &&  distanceSecond > distanceFirst){
        document.getElementById("resultBai4").innerHTML = "Sinh viên xa trường nhất là " + secondStudent + " và " + thirdStudent ;

    }else {
        document.getElementById("resultBai4").innerHTML = "Sinh viên xa trường nhất là " + thirdStudent ;
        
    }
    console.log(distanceFirst , distanceSecond , distanceThird) ; 
    

}
document.getElementById("btnBai4").onclick = check ; 
function distance(xSV , ySV , xSh , ySh) {
    return Math.sqrt(Math.pow(xSV - xSh , 2) + Math.pow(ySV - ySh , 2)) ; 
}