$(document).ready(function() { 
       var allPanels = $('.lista_definicao > dd').hide();

          $('.lista_definicao > dt > a').click(function( e ) {
            e.preventDefault();
            //allPanels.stop().slideUp("fast");
            $(this).parent().next('dd').stop().slideToggle("fast");
            $(this).toggleClass("setinha");
            $(this).parent('dt').toggleClass("clicado");
          });		
          		
    });		