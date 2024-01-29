// plugin start
new fullpage('#fullpage', {
	//options here
	autoScrolling:true,
    navigation: true,
    navigationTooltips: ['صفحه نخست','اتاق خبر', 'ارز','سکه و طلا','بورس','خودرو داخلی','خودرو خارجی','ارز دیجیتال','بازار جهانی','تحلیل روز','کانال دیده بان پول','سمینارهای آموزشی','درباره ما','تماس با ما'],
    showActiveTooltip: true,
});
// plugin end


//modal login start
function btnlog() {
  document.getElementById("div-login").style.display='block';
}

function closeModal() {
  document.getElementById('div-login').style.display='none';
}

var modal = document.getElementById('div-login');
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
      modal.style.display = "none";
  }
}
// modal login end


// responsive nav start
$(document).ready(function(){
    $('.hamburger-icon').click(function(){
        $('#mySidepanel').toggle("slow");
       
    })
})
function openNav(x) {
    x.classList.toggle("change");
}
// responsive nav end

//dropdown btn responsive side-panel start
$(document).ready(function(){
    $("#dropdown-btn1").click(function(){
      $("#container1").slideToggle("slow");
    });
  
    $("#dropdown-btn2").click(function(){
      $("#container2").slideToggle("slow");
    });
  
    $("#dropdown-btn3").click(function(){
      $("#container3").slideToggle("slow");
    });
  
    $("#dropdown-btn4").click(function(){
      $("#container4").slideToggle("slow");
    });

    $("#dropdown-btn5").click(function(){
        $("#container5").slideToggle("slow");
    });

    $("#dropdown-btn6").click(function(){
        $("#container6").slideToggle("slow");
    });
   
});
// dropdown btn responsive side-panel end