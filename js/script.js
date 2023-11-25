var btn = document.querySelectorAll("#copy-translate")
 

 btn.forEach(function(bt){
  bt.onclick=function(){
 
    alert("تم نسخ النص يسطا")

}

 })



var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
  return new bootstrap.Popover(popoverTriggerEl)
})

