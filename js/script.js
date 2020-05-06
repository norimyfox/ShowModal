$(document).ready(function() {

    let $btn = $('.row:eq(1) > div'); // Кнопки "выбрать тур" и "консультация"
    let $li = $('ul:eq(2) > li:eq(1)'); //Кнопка "Расписание туров"
    let $libtn = $btn.add($li); //Смесь кнопок
    let overlay = $('.overlay'); //Подложка
    let modal = $('.modal');
    let closeModal = $('.modal > button');

    $libtn.on('click', () => {
        overlay.fadeIn();
        modal.slideDown();
    });
    closeModal.on('click', () => {
        overlay.fadeOut();
        modal.slideUp();
    });
});

// console.log(li);
// $(document).on('click', 'li', function(e) {
//     e.preventDefault();
//     console.log(e.target);
//     console.log(this);
// });