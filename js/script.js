$("form").validate({
    rules: {
        name: {
            required: true,
        },

        email: {
            required: true,
        },
        message: {
            required: true,
        }
    },
    messages: {
        name: {
            required: 'Please enter your name',
        },

        email: {
            required: 'Please enter your email',
        },
        message: {
            required: 'Please enter your message',
        }
    }
});

// portfolio
$('.portfolio button').click(function (e) {
    // xóa active ra khỏi button đang active
    $('.portfolio button.active').removeClass('active');

    // active button được click
    $(this).addClass('active');

    const dataValue = $(this).attr('data');
    // lấy 8 divs (cột)
    const allDivs = $('.portfolio .row > div');
    if (dataValue == 'all') {
        allDivs.show();
        // không cho chạy xuống code bên dưới
        return;
    }

    // lấy cột tương ứng với button được click
    const showDivs = $(`.portfolio .row > div[data=${dataValue}]`);
    const hideDivs = allDivs.not(showDivs);
    showDivs.show();//display:block;
    hideDivs.hide();//display:none
});

// menu xổ xuống
// jqScroll
// window là biến có sẵn trong js, chứa cửa sổ trình duyệt
$(window).scroll(function () {
    // $(window).scrollTop(): khoảng cách top của cửa sổ trình duyệt so với top trên cùng của trang web.
    // console.log($(window).scrollTop());

    // $('#portfolio').offset().top: khoảng cách top của portfolio so với top trên cùng của trang web
    // console.log($('#portfolio').offset().top);
    if ($(window).scrollTop() >= $('#portfolio').offset().top) {
        $('.navbar').addClass('fixed-top');
        $('header').addClass('dummy-padding-top');
    }
    else {
        $('.navbar').removeClass('fixed-top');
        $('header').removeClass('dummy-padding-top');
    }
});




