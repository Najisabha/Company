import '../sass/style.scss';
// import '@laylazi/bootstrap-rtl/dist/js/bootstrap.min.js';
// import '@laylazi/bootstrap-rtl/dist/css/bootstrap-rtl.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import 'jquery/dist/jquery.js';
import 'popper.js/dist/popper.min';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '@fortawesome/fontawesome-free/js/all.min.js';

$(function(){
    $('.thumbnali2').hover(function(){
        $(this).find('.project-category').hide();
        $(this).find('.caption2').slideDown(250);
    }
    , function(){
        $(this).find('.caption2').slideUp(250);
        $(this).find('.project-category').show();
    });
});
// copy right 
let copyRight = document.getElementById('copy-right');
let date = new Date();
copyRight.innerHTML = date.getFullYear();
