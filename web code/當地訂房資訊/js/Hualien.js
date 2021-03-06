(function ($) {
    'use strict';

    const products = [
        {
            id: 1,
            title: "\u7389\u5c71\u7de3",
            score_badge: "7.7",
            score_text: "\u597d",
            score_subtext: "229 \u5247\u7559\u8a00",
            thumbnail: "https://cf.bstatic.com/xdata/images/hotel/max500/119872845.jpg?k=6f31daf2edcc68c05ce08c32a9e6f5ed8c8839394cd79629b22b4243858d1888",
            site: "https://www.booking.com/hotel/tw/yu-shan-yuan.zh-tw.html",
            full_address: "\u82b1\u84ee\u7e23\u5353\u6eaa\u9109\u6e05\u6c34 100 \u4e4b 2 \u865f",
            full_description: "\u7389\u5c71\u7de3\u4f4d\u65bc\u82b1\u84ee\u7e23\u5353\u6eaa\u9109\uff0c\u4eab\u6709\u5c71\u666f\uff0c\u8a2d\u6709\u9910\u5ef3\u3001\u516c\u5171\u4f11\u606f\u5340\u3001\u9ede\u5fc3\u5427\u3001\u82b1\u5712\u548c\u9732\u53f0\u3002\u6c11\u5bbf\u63d0\u4f9b\u514d\u8cbb WiFi\uff0c\u4e26\u9644\u8a2d\u79c1\u4eba\u514d\u8cbb\u505c\u8eca\u5834\u3002<br>\u5468\u908a\u5730\u5340\u9069\u5408\u767b\u5c71\u5065\u884c\u53ca\u9a0e\u81ea\u884c\u8eca\u904a\u89bd\u3002<br>\u6700\u8fd1\u7684\u6a5f\u5834\u662f\u53f0\u6771\u6a5f\u5834\uff0c\u8ddd\u96e2\u7389\u5c71\u7de3 63 \u516c\u91cc\u3002",
            room: "\u5c71\u666f\u96d9\u4eba\u623f",
            price: 1200
        },
        {
            id: 2,
            title: "\u65cf\u8a9e\u5496\u5561\u6c11\u5bbf",
            score_badge: "8.7",
            score_text: "\u5f88\u68d2",
            score_subtext: "42 \u5247\u7559\u8a00",
            thumbnail: "https://cf.bstatic.com/xdata/images/hotel/max500/228048242.jpg?k=14e4b309190429e13e5b0b5b8e0f1a5b0c93e4cfff8186ddbde4c2d3245b5743",
            site: "https://www.booking.com/hotel/tw/zu-yu-ka-pei-min-su-yuli.zh-tw.html",
            full_address: "\u82b1\u84ee\u7e23\u7389\u91cc\u93ae\u5353\u6eaa\u6751\u4e2d\u6b63 6-1 \u865f",
            full_description: "\u65cf\u8a9e\u5496\u5561\u6c11\u5bbf\u4f4d\u65bc\u7389\u91cc\uff0c\u8a2d\u6709\u53f0\u7063\u539f\u4f4f\u6c11\u98a8\u683c\u5ba2\u623f\u548c\u71d2\u70e4\u8a2d\u5099\uff0c\u4e26\u63d0\u4f9b\u5168\u9928\u514d\u8cbb WiFi\u3002<br>\u65cf\u8a9e\u5496\u5561\u6c11\u5bbf\u8ddd\u96e2\u7389\u91cc\u706b\u8eca\u7ad9\u6709 10 \u5206\u9418\u8eca\u7a0b\uff0c\u8ddd\u96e2\u7389\u91cc\u6fd5\u5730\u6709 15 \u5206\u9418\u8eca\u7a0b\u3002<br>\u6bcf\u9593\u5ba2\u623f\u90fd\u8a2d\u6709\u7a7a\u8abf\u548c\u96fb\u8996\uff0c\u90e8\u5206\u5ba2\u623f\u4eab\u6709\u5c71\u666f\u3002\u5171\u7528\u885b\u6d74\u5167\u914d\u6709\u6dcb\u6d74\u8a2d\u5099\u3001\u514d\u8cbb\u76e5\u6d17\u7528\u54c1\u548c\u5439\u98a8\u6a5f\u3002<br>\u6c11\u5bbf\u63d0\u4f9b\u81ea\u884c\u8eca\u51fa\u79df\u670d\u52d9\u3002\u6b64\u5916\uff0c\u8a72\u5730\u5340\u662f\u5065\u884c\u767b\u5c71\u7684\u71b1\u9580\u5730\u9ede\u3002<br>\u5ba2\u4eba\u5165\u4f4f\u671f\u9593\u5747\u4eab\u6709\u6bcf\u65e5\u65e9\u9910\u3002",
            room: "\u5c71\u666f\u96d9\u4eba\u623f\u3001\u7d93\u6fdf\u4e09\u4eba\u623f\u3001\u7d93\u6fdf\u56db\u4eba\u623f",
            price: 2500
        },
        {
            id: 3,
            title: "\u8ff4\u5bb6",
            score_badge: "8.3",
            score_text: "\u975e\u5e38\u597d",
            score_subtext: "539 \u5247\u8a55\u8a9e",
            thumbnail: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/66176241.jpg?k=9b0e67a69778048e41ba3eebc5826b22b25931e5c1fc60761017b1c188a454fa",
            site: "https://www.booking.com/hotel/tw/return-home-b-amp-b.zh-tw.html",
            full_address: "\u82b1\u84ee\u7e23\u7389\u91cc\u93ae\u5927\u540c\u8def 192 \u8def",
            full_description: "Return Home B&B \u4f4d\u5728\u7389\u91cc\u93ae\uff0c\u8a2d\u6709\u5171\u7528\u4f11\u606f\u5ba4\u548c WiFi\uff08\u514d\u8cbb\uff09\u3002<br>Return Home B&B \u8a2d\u6709\u9644\u6dcb\u6d74\u8a2d\u65bd\u7684\u79c1\u4eba\u885b\u6d74\uff0c\u4e26\u63d0\u4f9b\u5e73\u9762\u96fb\u8996\u3001\u62d6\u978b\u548c\u5439\u98a8\u6a5f\u3002\u70ba\u4e86\u8b93\u60a8\u66f4\u52a0\u65b9\u4fbf\uff0c\u4f4f\u5bbf\u53ef\u63d0\u4f9b\u984d\u5916\u6536\u8cbb\u7684\u6bdb\u5dfe\u548c\u5be2\u5177\u3002\u9019\u9593\u4f4f\u5bbf\u7684\u4f4f\u5ba2\u53ef\u4ee5\u4eab\u7528\u55ae\u9ede\u5f0f\u65e9\u9910\u3002<br>Return Home B&B \u63d0\u4f9b\u79df\u8eca\u670d\u52d9\u3002<br>\u6700\u8fd1\u7684\u6a5f\u5834\u662f\u53f0\u6771\u6a5f\u5834\uff0c\u8ddd\u96e2 Return Home B&B 67 \u516c\u91cc\u3002",
            room: "\u96d9\u4eba\u623f\u3001\u6a19\u6e96\u96d9\u4eba\u623f\u3001\u56db\u4eba\u623f\u3001\u6a19\u6e96\u56db\u4eba\u623f",
            price: 1575
        },
        {
            id: 4,
            title: "\u5fa1\u79ae\u8679\u55ac\u6c11\u5bbf",
            score_badge: "8.4",
            score_text: "\u975e\u5e38\u597d",
            score_subtext: "88 \u5247\u8a55\u8a9e",
            thumbnail: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/124632651.jpg?k=e1f40855d1b41dc54c7ca9e8ce3a6a446c7085beaeed45b9e0fae7bdae29a7c9",
            site: "https://www.booking.com/hotel/tw/yu-li-hong-qiao-min-su.zh-tw.html",
            full_address: "\u82b1\u84ee\u7e23\u7389\u91cc\u93ae\u4e2d\u57ce\u91cc\u4ec1\u611b\u8def\u4e00\u6bb5 18 \u5df7 2 \u865f",
            full_description: "Yuli Rainbow Bridge Bed & Breakfast \u4f4d\u65bc\u7389\u91cc\u93ae\uff0c\u4eab\u6709\u5e02\u666f\uff0c\u8a2d\u6709\u514d\u8cbb\u81ea\u884c\u8eca\u79df\u501f\u670d\u52d9\u3001\u5171\u7528\u4f11\u606f\u5ba4\u548c\u82b1\u5712\u3002\u4f4f\u5bbf\u63d0\u4f9b WiFi\uff08\u514d\u8cbb\uff09\u3002<br>Yuli Rainbow Bridge Bed & Breakfast \u8a2d\u6709\u9644\u6dcb\u6d74\u8a2d\u65bd\u7684\u79c1\u4eba\u885b\u6d74\uff0c\u4e26\u63d0\u4f9b\u5e73\u9762\u96fb\u8996\u3001\u5439\u98a8\u6a5f\u548c\u514d\u8cbb\u76e5\u6d17\u7528\u54c1\u3002<br>\u4f4f\u5ba2\u53ef\u4ee5\u5728\u9644\u8fd1\u9a0e\u81ea\u884c\u8eca\u3002<br>\u6700\u8fd1\u7684\u6a5f\u5834\u662f\u53f0\u6771\u6a5f\u5834\uff0c\u8ddd\u96e2\u9019\u9593\u4f4f\u5bbf 67 \u516c\u91cc\u3002",
            room: "\u5c0f\u578b\u96d9\u4eba/\u96d9\u5e8a\u623f\u3001\u5927\u578b\u96d9\u4eba\u623f\u3001\u7d93\u5178\u56db\u4eba\u623f",
            price: 2000
        },
        {
            id: 5,
            title: "\u908a\u754c\u3002\u82b1\u6771",
            score_badge: "9.4",
            score_text: "\u597d\u6975\u4e86",
            score_subtext: "110 \u5247\u8a55\u8a9e",
            thumbnail: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/115551357.jpg?k=57c38cfd94ea9491a5b2404f1b1b8793343c2a60d30f42aa1932ca12186f4f33",
            site: "https://www.booking.com/hotel/tw/bian-jie-hua-dong.zh-tw.html",
            full_address: "\u82b1\u84ee\u7e23\u5bcc\u91cc\u9109\u8eca\u7ad9\u8857\u4e00\u865f",
            full_description: "Fuli Stay \u4f4d\u5728\u5bcc\u91cc\u9109\uff0c\u8a2d\u6709\u9910\u5ef3\uff0c\u63d0\u4f9b WiFi\uff08\u514d\u8cbb\uff09\uff0c\u8ddd\u96e2\u7389\u91cc\u93ae 18 \u516c\u91cc\u3002<br>\u6240\u6709\u623f\u578b\u90fd\u6709\u967d\u53f0\u3001\u7a7a\u8abf\u3001\u5e73\u9762\u96fb\u8996\uff0c\u4ee5\u53ca\u79c1\u4eba\u885b\u6d74\uff0c\u4e26\u63d0\u4f9b\u6dcb\u6d74\u8a2d\u65bd\u548c\u5439\u98a8\u6a5f\u3002<br>Fuli Stay \u7684\u4f4f\u5ba2\u53ef\u4ee5\u4eab\u7528\u4e9e\u6d32\u98a8\u5473\u65e9\u9910\u3002<br>\u9019\u9593\u4f4f\u5bbf\u6709\u9732\u53f0\u3002<br>Fuli Stay \u8ddd\u96e2\u6c60\u4e0a\u9109 8 \u516c\u91cc\uff0c\u8ddd\u96e2\u9e7f\u91ce\u9109 32 \u516c\u91cc\u3002\u6700\u8fd1\u7684\u6a5f\u5834\u662f\u53f0\u6771\u6a5f\u5834\uff0c\u8ddd\u96e2 Fuli Stay 49 \u516c\u91cc\u3002",
            room: "\u96d9\u4eba\u623f\u3001\u5c71\u666f\u96d9\u4eba\u623f\u3001\u56db\u4eba\u623f",
            price: 3000
        },
        {
            id: 6,
            title: "\u96e2\u5bb6\u51fa\u8d70\u6c11\u5bbf",
            score_badge: "9.5",
            score_text: "\u5091\u51fa",
            score_subtext: "336 \u5247\u8a55\u8a9e",
            thumbnail: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/110779303.jpg?k=12ecad965baf2de7ba60b009b2faa0ec5cad402fce57c002e0cb8445180f3225",
            site: "https://www.booking.com/hotel/tw/simple-life.zh-tw.html",
            full_address: "\u82b1\u84ee\u7e23\u7389\u91cc\u93ae\u9577\u826f 181 \u4e4b 3 \u865f",
            full_description: "\u96e2\u5bb6\uff0c\u51fa\u8d70\u4f4d\u65bc\u9577\u826f\u91cc\uff0c\u8ddd\u96e2\u7389\u91cc\u93ae\u7d04 7 \u516c\u91cc\uff0c\u8a2d\u6709\u967d\u5149\u9732\u53f0\u3002\u4f4f\u5bbf\u63d0\u4f9b\u5168\u9928\u514d\u8cbb WiFi\u3002\u9928\u5167\u8a2d\u6709\u514d\u8cbb\u79c1\u4eba\u505c\u8eca\u4f4d\u3002<br>\u5ba2\u623f\u8a2d\u6709\u7a7a\u8abf\u548c\u5e73\u9762\u6709\u7dda\u96fb\u8996\u3002\u6bcf\u9593\u5ba2\u623f\u5747\u914d\u6709\u967d\u53f0\u548c\u79c1\u4eba\u885b\u6d74\u3002\u70ba\u63d0\u4f9b\u8212\u9069\u7684\u4f4f\u5bbf\u9ad4\u9a57\uff0c\u4e5f\u63d0\u4f9b\u62d6\u978b\u3001\u514d\u8cbb\u76e5\u6d17\u7528\u54c1\u548c\u5439\u98a8\u6a5f\u3002<br>\u8a72\u5730\u5340\u662f\u767b\u5c71\u5065\u884c\u7684\u71b1\u9580\u5730\u9ede\u3002",
            room: "\u96d9\u4eba\u623f\u3001\u751f\u614b\u9593\u3001\u52a0\u5927\u96d9\u4eba\u5e8a\u623f\u3001\u5c71\u666f\u7279\u5927\u96d9\u4eba\u5e8a\u623f\u3001\u5bb6\u5ead\u623f",
            price: 2400
        }
    ];

    /* Display All Products in Default Grid */

    $(document).ready(function () {
        showAllItems();
    });

    function showAllItems() {
        /* ?????? Array ??????????????? */
        jsonItems(products);

        /* ?????? Json ??????????????? (XMLHttpRequest: ???????????? HTTP ??????) */
        // $.ajax({
        //     type: 'GET',
        //     url: './json/Hualien.json',
        //     contentType: "application/json",
        //     dataType: 'json',
        //     timeout: 3000,
        //     data: {
        //         format: 'json'
        //     },
        //     error: function (jqXHR, textStatus, errorThrown) {
        //         alert('Error Occurred\n- Status Code: ' + jqXHR.status + ' ' + jqXHR.statusText + '\n- Text Status: ' + textStatus);
        //         console.log(errorThrown);
        //     },
        //     success: function (response) {
        //         jsonItems(response);
        //     }
        // });

        /* ?????? Json ??????????????? (??????????????????) */
        // $.getJSON("./json/Hualien.json", {
        //     format: 'json'
        // }).fail(function (jqXHR, textStatus, errorThrown) {
        //     alert('Error Occurred\n- Status Code: ' + jqXHR.status + ' ' + jqXHR.statusText + '\n- Text Status: ' + textStatus);
        //     console.log(errorThrown);
        // }).done(function (response) {
        //     jsonItems(response);
        // });
    }

    /* Display Filtered Products in Default Grid */

    $("#mySearch").click(function () {
        showItemsFiltered(products);
    });

    function showItemsFiltered(elements) {
        var myInput = $("#myInput").val().toLowerCase().trim();
        var myScore = $("#myScore").val();
        var myPrice = $("#myPrice").val();

        /* ???????????????????????? */
        // var myStartDate = $("#myStartDate").val();
        // var myEndDate = $("#myEndDate").val();
        // var myRoomNum = $("#myRoomNum").val();
        // var myAdultNum = $("#myAdultNum").val();
        // var myChildNum = $("#myChildNum").val();

        let filtered = elements.filter(function (element) {
            if (myPrice) { return element.price >= myPrice.split('-')[0] && element.price <= myPrice.split('-')[1]; }
            return true;
        }).filter(function (element) {
            return element.score_badge >= myScore;
        }).filter(function (element) {
            var searchTxT = element.title + element.full_address + element.room + element.full_description;
            return searchTxT.toLowerCase().includes(myInput);
        });
        jsonItems(filtered);
    }

    /* Display in Default Grid */

    function jsonItems(response) {
        $("#display-products").empty();
        $.each(response, function (index, value) {
            $("#display-products").append(
                '<div class="card"><div class="images"><a href="' +
                value.site +
                '" target="_blank"><img alt="' +
                value.title +
                '"src="' +
                value.thumbnail +
                '"></a></div><div class="product"><h2><b>' +
                value.title +
                '</b></h2><a href="' +
                value.site +
                '#map_opened-hotel_header" target="_blank"><i class="fa fa-map-marker fa-fw" aria-hidden="true"></i>' +
                value.full_address +
                '</a><p><i class="fa fa-bed fa-fw" aria-hidden="true"></i>' +
                value.room +
                '</p><p>' +
                value.full_description +
                '</p></div><div class="booking"><div><a href="' +
                value.site +
                '#tab-reviews" target="_blank"><div class="review-score">' +
                value.score_badge +
                '</div>' +
                value.score_text +
                '<br>' +
                value.score_subtext +
                '</a></div><button class="btn btn-primary review-btn" onclick="location.href=\'' +
                value.site +
                '\'">??????</button></div></div>'
            );
        });
    }

})(jQuery);