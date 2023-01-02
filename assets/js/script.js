$(document).ready(function(){
  $('#birth-date').mask('00/00/0000');
  $('#phone-number').mask('00000-00000');
 })

 function showComment() {
  if (document.getElementById('radio3').checked) {
      document.getElementById('ifYes').style.display = 'block';
  }
  else document.getElementById('ifYes').style.display = 'none';

}

function submitForm() {
  // window.location.reload();
  this.validateForm()
  // console.log('Submit clicked')
 }

 function validateFormm() {
  let checkAns = document.getElementsByTagName('input[]:checked');

  if (checkAns != null) {
    this.openForm()
    console.log('all checked')
  } else {
    window.location.reload()
    console.log('some are not checked')
  }
 }

// function validateForm() {
//   console.log('into validateForm function');
// }

 function validateForm() {
  console.log('validateForm');
  var check = true;
    $("input:radio").each(function(){
        var name = $(this).attr("name");
        if($("input:radio[name="+name+"]:checked").length == 0){
            check = false;
        }
    });
    
    if(check){
        // alert('One radio in each group is checked.');
        this.openForm();
        console.log('into if');
    }else{
        alert('Please select one option in each question.');
        console.log('into else');
    }
 }

//  $(document).ready(function(){
//   $('#radioValidate').click(function(){
//       var check = true;
//       $("input:radio").each(function(){
//           var name = $(this).attr("name");
//           if($("input:radio[name="+name+"]:checked").length == 0){
//               check = false;
//           }
//       });
      
//       if(check){
//           alert('One radio in each group is checked.');
//       }else{
//           alert('Please select one option in each question.');
//       }
//   });
// });

function openForm() {
  document.getElementById("popupForm").style.display = "block";
}
function closeForm() {
  document.getElementById("popupForm").style.display = "none";
  window.location.reload();
}
