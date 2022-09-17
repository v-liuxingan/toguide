(function($, window, undefined){
    var id = '推荐'
    var classes = 'text-gray'

    console.log($('.main-content #' + id + '').html());
    var $1 = $('.main-content').find('.row').eq(0);
    $.ajax({
        url: "/assets/data/常用推荐/config.json",
        type: "GET",
        dataType: "json",
        success:
            function (data) {
                data['elements'].forEach(appendData)

            }
    })

    function appendData(e) {//'https://dribbble.com/'
        if (e.title === '' || e.title === null) {
            return;
        }
        if (e.img === '') {
            if (e.url.toString().endsWith('/')) {
                e.img=e.url+'favicon.ico';
            }else {
                e.img=e.url+'/favicon.ico';
            }
        }
        $1.append(
            '                <div class="col-sm-3">\n' +
            '                    <div class="xe-widget xe-conversations box2 label-info" onclick="window.open(\''+e.url+'\', \'_blank\')" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="https://dribbble.com/">\n' +
            '                        <div class="xe-comment-entry">\n' +
            '                            <a class="xe-user-img">\n' +
            '                                <img src=\"'+e.img+'\" class="lozad img-circle" width="40">\n' +
            '                            </a>\n' +
            '                            <div class="xe-comment">\n' +
            '                                <a href="#" class="xe-user-name overflowClip_1">\n' +
            '                                    <strong>' + e.title + '</strong>\n' +
            '                                </a>\n' +
            '                                <p class="overflowClip_2">' + e.desc + '</p>\n' +
            '                            </div>\n' +
            '                        </div>\n' +
            '                    </div>\n' +
            '                </div>'
        );
    };
})(jQuery, window);

