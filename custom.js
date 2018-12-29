
//initialize sidenav
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    // var instances = M.Sidenav.init(elems, options);
});

//Initialize tabs
$(document).ready(function(){
    $('.tabs').tabs();
});


// scrollspy.  to add: close sidebar after click, decide if home will be scrolled or a refresh, decide if center is ideal

// document.addEventListener('DOMContentLoaded', function() {
//     var elems = document.querySelectorAll('.scrollspy');
//     var instances = M.ScrollSpy.init(elems, options);
// });

$(document).ready(function(){
    $('.scrollspy').scrollSpy();
});