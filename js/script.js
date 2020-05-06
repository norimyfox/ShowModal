$(document).ready(function() {

    let $btn = $('.row:eq(1) > div'); // buttons
    let $li = $('ul:eq(2) > li:eq(1)'); //button 
    let $libtn = $btn.add($li); // all buttons btn + li
    let overlay = $('.overlay'); // overlay
    let modal = $('.modal'); //modal window
    let closeModal = $('.modal > button'); //button close window

    //show modal
    $libtn.on('click', () => {
        overlay.fadeIn();
        modal.slideDown();
    });
    //close modal
    closeModal.on('click', () => {
        overlay.fadeOut();
        modal.slideUp();
    });
});
