(function ($) {
    'use strict';

    const products = [
        {
            id: 1,
            title: "\u5bf6\u4f86\u5c71\u6fa4\u5c45Villa",
            score_badge: "8.8",
            score_text: "\u5f88\u68d2",
            score_subtext: "213 \u5247\u8a55\u8a9e",
            thumbnail: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/160577599.jpg?k=9154112cbfa0d51595342302e4c823836000bc1c776383c728276c00f0ee02da",
            site: "https://www.booking.com/hotel/tw/bao-lai-shan-ze-ju-villahui-guan.zh-tw.html",
            full_address: "\u9ad8\u96c4\u5e02\u516d\u9f9c\u5340\u4e2d\u6b63\u8def 90 \u865f",
            full_description: "Shanze Bora villa \u4f4d\u5728\u516d\u9f9c\u5340\uff0c\u63d0\u4f9b WiFi\uff08\u514d\u8cbb\uff09\u3001\u514d\u8cbb\u81ea\u884c\u8eca\u79df\u501f\u670d\u52d9\u548c\u82b1\u5712\u3002\u4f4f\u5bbf\u8a2d\u6709 SPA \u6d74\u7f38\u3002<br>\u6240\u6709\u623f\u578b\u90fd\u6709\u6236\u5916\u4f11\u606f\u5340\u3001\u7a7a\u8abf\u3001\u5e73\u9762\u96fb\u8996\uff0c\u4ee5\u53ca\u79c1\u4eba\u885b\u6d74\uff0c\u4e26\u63d0\u4f9b\u6dcb\u6d74\u8a2d\u65bd\u548c\u5439\u98a8\u6a5f\u3002\u4f4f\u5bbf\u63d0\u4f9b\u51b0\u7bb1\u548c\u96fb\u71b1\u6c34\u58fa\u3002<br>Shanze Bora villa \u6bcf\u5929\u4f9b\u61c9\u81ea\u52a9\u5f0f\u65e9\u9910\u3002<br>\u9019\u9593\u4f4f\u5bbf\u6709\u6eab\u6cc9\u6d74\u6c60\u3002<br>\u6700\u8fd1\u7684\u6a5f\u5834\u662f\u53f0\u5357\u6a5f\u5834\uff0c\u8ddd\u96e2 Shanze Bora villa 54 \u516c\u91cc\u3002",
            room: "\u6a19\u6e96\u96d9\u4eba\u623f\u3001\u52a0\u5927\u96d9\u4eba\u5e8a\u623f\u3001\u5c0f\u6728\u5c4b",
            price: 4980
        },
        {
            id: 2,
            title: "\u85cf\u9752\u8c37 \u838a\u5712Valley Statt Manor",
            score_badge: "9.4",
            score_text: "\u597d\u6975\u4e86",
            score_subtext: "121 \u5247\u8a55\u8a9e",
            thumbnail: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/264815108.jpg?k=8530e48b535a8fe09a1a5a8f5a4c21806173e59bd98f70e35cc1b2f1d97cdfae",
            site: "https://www.booking.com/hotel/tw/cang-qing-gu-du-jia-zhuang-yuan.zh-tw.html",
            full_address: "\u9ad8\u96c4\u5e02\u516d\u9f9c\u5340\u548c\u5e73\u8def 130-72 \u865f",
            full_description: "\u85cf\u9752\u8c37\u838a\u5712Valley Statt Manor \u4f4d\u65bc\u516d\u9f9c\u5340\uff0c\u4eab\u6709\u6cb3\u666f\uff0c\u8a2d\u6709\u9910\u5ef3\u3001\u5171\u7528\u4f11\u606f\u5ba4\u3001\u82b1\u5712\u548c\u9732\u53f0\u3002\u85cf\u9752\u8c37\u838a\u5712Valley Statt Manor \u63d0\u4f9b WiFi \u548c\u514d\u8cbb\u79c1\u4eba\u505c\u8eca\u4f4d\u3002<br>\u6bcf\u500b\u623f\u578b\u90fd\u63d0\u4f9b\u9644\u6dcb\u6d74\u8a2d\u65bd\u3001\u5439\u98a8\u6a5f\u548c\u514d\u8cbb\u76e5\u6d17\u7528\u54c1\u7684\u79c1\u4eba\u885b\u6d74\u3002<br>\u9019\u9593\u4f4f\u5bbf\u63d0\u4f9b\u55ae\u9ede\u5f0f\u6216\u7f8e\u5f0f\u65e9\u9910\u3002<br>\u6700\u8fd1\u7684\u6a5f\u5834\u662f\u53f0\u5357\u6a5f\u5834\uff0c\u8ddd\u96e2\u85cf\u9752\u8c37\u838a\u5712Valley Statt Manor 48 \u516c\u91cc\u3002\u4f4f\u5bbf\u63d0\u4f9b\u4ed8\u8cbb\u6a5f\u5834\u63a5\u99c1\u670d\u52d9\u3002",
            room: "\u96d9\u4eba\u623f/\u96d9\u4eba\u5e8a\u623f\u3001\u56db\u4eba\u623f",
            price: 4999
        },
        {
            id: 3,
            title: "\u9999\u8549\u8207\u9ed1\u81a0\u4e09\u5408\u9662",
            score_badge: "9.4",
            score_text: "\u597d\u6975\u4e86",
            score_subtext: "101 \u5247\u8a55\u8a9e",
            thumbnail: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/94795952.jpg?k=fc4a7f736a2184012ef35ac9232c499042e5f8b952fb1e78b057ddd80a4adf31",
            site: "https://www.booking.com/hotel/tw/yellow-and-black-guest-house.zh-tw.html",
            full_address: "\u9ad8\u96c4\u5e02\u7f8e\u6fc3\u5340\u8208\u9686\u4e00\u8857 112 \u5df7 34 \u865f",
            full_description: "Yellow And Black Guest House \u4f4d\u65bc\u7f8e\u6fc3\u5340\uff0c\u8a2d\u6709\u9910\u5ef3\u3001\u82b1\u5712\u548c WiFi\uff08\u514d\u8cbb\uff09\uff0c\u8ddd\u96e2\u7f8e\u6fc3\u6e56 1.9 \u516c\u91cc\uff0c\u8ddd\u96e2\u65d7\u5c71\u5b54\u5edf 14 \u516c\u91cc\u3002<br>Yellow And Black Guest House \u7684\u6bcf\u9593\u5ba2\u623f\u90fd\u6709\u7a7a\u8abf\u548c\u79c1\u4eba\u885b\u6d74\u3002<br>\u9019\u9593\u4f4f\u5bbf\u6bcf\u500b\u65e9\u4e0a\u4f9b\u61c9\u4e9e\u6d32\u98a8\u5473\u65e9\u9910\u3002<br>Yellow And Black Guest House \u8ddd\u96e2\u5927\u6d25\u7011\u5e03 21 \u516c\u91cc\uff0c\u8ddd\u96e2 38 \u9ad8\u5730\uff0838 Highland\uff09 26 \u516c\u91cc\u3002\u6700\u8fd1\u7684\u6a5f\u5834\u662f\u53f0\u5357\u6a5f\u5834\uff0c\u8ddd\u96e2 Yellow And Black Guest House 37 \u516c\u91cc\u3002",
            room: "\u96d9\u4eba\u623f\u3001\u96d9\u5e8a\u623f\u3001\u9802\u7d1a\u56db\u4eba\u623f\u3001\u5bb6\u5ead\u623f",
            price: 4800
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
        //     url: './json/Kaohsiung.json',
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
        // $.getJSON("./json/Kaohsiung.json", {
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