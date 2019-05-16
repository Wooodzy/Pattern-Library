function openForm() {
    document.getElementById("myForm").style.display = "block";
        }

    function closeForm() {
    document.getElementById("myForm").style.display = "none";
    }

    $( "li" ).click(function() {
        $(this).addClass( "active" );
        $(this).siblings().removeClass("active");
      });
      
      $( "li" ).first().addClass( "active" );
      
          $(function() {
              $("#menu-button").click(function(){
                  $("#mobile-nav").toggle( 'display' );          
              });
          });