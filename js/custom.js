$(document).ready(function(){
    $('.js-signup').hide();
    $('.btn-signin').hide();
    $('.btn-signup').click(function(){
        $('.js-signin').hide();
        $('.js-signup').show();
        $('.btn-signin').show();
        $('.btn-signup').hide();

    })
    $('.btn-signin').click(function(){
        $('.btn-signin').hide();
        $('.btn-signup').show();
        $('.js-signin').show();
        $('.js-signup').hide()
    })
})
// $(document).ready(function(){
//     $('.js-signup').show();
//     $('.btn-signup').hide();
//     $('.btn-signin').click(function(){
//         $('.js-signup').show();
//         $('.btn-signin').hide();
//     })
// })
