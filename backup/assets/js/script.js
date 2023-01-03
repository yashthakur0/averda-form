 function showComment(radioButtonId, questionIndex) {
  if (document.getElementById(radioButtonId).checked) {
      document.getElementById('ifYes_' + questionIndex).style.display = 'block';
  }
  else document.getElementById('ifYes_' + questionIndex).style.display = 'none';

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

function openForm() {
  // document.getElementById("popupForm").style.display = "block";
  $('.wrapper').fadeIn(500);
    $('.popup-box').removeClass('transform-out').addClass('transform-in');
}
function closeForm() {
  document.getElementById("popupForm").style.display = "none";
  window.location.reload();
}

$(document).ready(function() {
  $('.popup-button').click(function(e) {
    

    e.preventDefault();
  });

  $('.popup-close').click(function(e) {
    $('.wrapper').fadeOut(500);
    $('.popup-box').removeClass('transform-in').addClass('transform-out');

    e.preventDefault();
  });
});