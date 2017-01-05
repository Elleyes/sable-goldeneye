function clicky(i) {
    var it = document.getElementById(i);
    it.contentEditable = 'true';
    it.addEventListener('keypress', function(e) {
        var key = e.which || e.keyCode;
        if (key === 13) {
            it.setAttribute("contentEditable", "false")
            // making an ajax/fetch request to /api/todo/modify
            // how to pass that value in fetch request
        }
    })
}
