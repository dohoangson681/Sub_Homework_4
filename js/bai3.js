/**
 * Viết chương trình nhập vào 3 số và in ra cách đọc
 */
var number;
function outputBai3(number) {
  number = Number(document.getElementById("inputBai3").value);
  var hangDonVi = Math.floor(number % 10);
  console.log(hangDonVi);
  number /= 10;
  var hangChuc = Math.floor(number % 10);
  console.log(hangChuc);
  number /= 10;
  var hangTram = Math.floor(number % 10);
  console.log(hangTram);

  var text = "";
  text = howToRead(hangTram, hangChuc, hangDonVi);
  console.log(text);
  document.getElementById("result3").innerHTML = text ; 
}
document.getElementById("btnBai3").onclick = outputBai3;
function howToRead(hangTram, hangChuc, hangDonvi) {
  var text = "";
  if (hangChuc == 0 && hangDonvi == 0) {
    switch (hangTram) {
      case hangTram = 1:
        text += "Một trăm" ; 
        break;
      case hangTram = 2:
        text += "Hai trăm" ; 
        break;
      case hangTram = 3:
        text += "Ba trăm" ; 
        break;
      case hangTram = 4:
        text += "Bốn trăm" ; 
        break;
      case hangTram = 5:
        text += "Năm trăm" ; 
        break;
      case hangTram = 6:
        text += "Sáu trăm" ; 
        break;
      case hangTram = 7:
        text += "Bảy trăm" ; 
        break;
      case hangTram = 8:
        text += "Tám trăm" ; 
        break;
      case hangTram = 9:
        text += "Chín trăm" ; 
        break;

      default:
        alert("Số hàng trăm phải lớn hơn 0.") ; 
        break;
    }
  }else {

  
  // cách đọc số hàng trăm
  switch (hangTram) {
    case (hangTram = 1):
      text += "Một trăm ";
      break;
    case (hangTram = 2):
      text += "Hai trăm ";
      break;
    case (hangTram = 3):
      text += "Ba trăm ";
      break;
    case (hangTram = 4):
      text += "Bốn trăm ";
      break;
    case (hangTram = 5):
      text += "Năm trăm ";
      break;
    case (hangTram = 6):
      text += "Sáu trăm ";
      break;
    case (hangTram = 7):
      text += "Bảy trăm ";
      break;
    case (hangTram = 8):
      text += "Tám trăm ";
      break;
    case (hangTram = 9):
      text += "Chín trăm ";
      break;
    default:
      alert("Số hàng trăm phải lớn hơn 0");
      break;
  }
  // cách đọc số hàng chục
  switch (hangChuc) {
    case (hangChuc = 1):
      text += " mười ";
      break;
    case (hangChuc = 2):
      text += " hai mươi ";
      break;
    case (hangChuc = 3):
      text += " ba mươi ";
      break;
    case (hangChuc = 4):
      text += " bốn mươi ";
      break;
    case (hangChuc = 5):
      text += " năm mươi ";
      break;
    case (hangChuc = 6):
      text += " sáu mươi ";
      break;
    case (hangChuc = 7):
      text += " bảy mươi ";
      break;
    case (hangChuc = 8):
      text += " tám mươi";
      break;
    case (hangChuc = 9):
      text += " chín mươi ";
      break;
    default:
      text += " linh ";
      break;
  }
  // cách đọc số hàng đơn vị
  switch (hangDonvi) {
    case (hangDonvi = 1):
      text += "một.";
      break;
    case (hangDonvi = 2):
      text += "hai.";
      break;
    case (hangDonvi = 3):
      text += "ba.";
      break;
    case (hangDonvi = 4):
      text += "bốn.";
      break;
    case (hangDonvi = 5):
      text += "năm.";
      break;
    case (hangDonvi = 6):
      text += "sáu.";
      break;
    case (hangDonvi = 7):
      text += "bảy.";
      break;
    case (hangDonvi = 8):
      text += "tám.";
      break;
    case (hangDonvi = 9):
      text += "chín";
      break;
    default:
      text += "";
      break;
  }
}
  return text;
}
