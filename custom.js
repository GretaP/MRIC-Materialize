document.addEventListener('DOMContentLoaded', function() {
    // var instances = M.Sidenav.init(document.querySelectorAll('.sidenav'), options);
    M.ScrollSpy.init(document.querySelectorAll('.scrollspy'));
    M.Modal.init(document.querySelectorAll('.modal'));
    M.Tabs.init(document.querySelectorAll('.tabs'));
});