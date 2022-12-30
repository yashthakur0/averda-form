$(document).ready(function(){
  $('#birth-date').mask('00/00/0000');
  $('#phone-number').mask('0000-0000');
 })

 function submit() {
  window.location.reload();
 }

 function showComment() {
  if (document.getElementById('radio3').checked) {
      document.getElementById('ifYes').style.display = 'block';
  }
  else document.getElementById('ifYes').style.display = 'none';

}
