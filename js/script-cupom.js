$(".show").on("click", function(){
          $(this).next(".mask").addClass("active");
        });
        function closeModal(){
          $(".mask").removeClass("active");
        }
        $(".close, .mask").on("click", function(){
          closeModal();
        });