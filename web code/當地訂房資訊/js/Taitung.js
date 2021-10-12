(function ($) {
    'use strict';

    const products = [
        {
            id: 1,
            title: "\u9054\u9b6f\u5a1c\u65af\u53f0\u6771\u9e7f\u9cf4\u5c0f\u7bc9",
            score_badge: "7.2",
            score_text: "\u597d",
            score_subtext: "52 \u5247\u8a55\u8a9e",
            thumbnail: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/110225681.jpg?k=9ed7f082fc296fffa64b648594378fa7cdee2ee992f3cc4a97613db0eeec7685",
            site: "https://www.booking.com/hotel/tw/dalunas-homestay.zh-tw.html",
            full_address: "\u53f0\u6771\u7e23\u5ef6\u5e73\u9109\u6607\u5e73\u8def 201-5 \u865f",
            full_description: "Dalunas Homestay \u4f4d\u5728\u5ef6\u5e73\u9109\uff0c\u63d0\u4f9b\u7a7a\u8abf\u4f4f\u5bbf\u3002\u4f4f\u5bbf\u8a2d\u6709\u9644\u70e4\u8089\u8a2d\u5099\u7684\u82b1\u5712\uff0c\u958b\u653e\u4f4f\u5ba2\u4f7f\u7528\u3002\u9928\u5167\u63d0\u4f9b\u79c1\u4eba\u505c\u8eca\u4f4d\u3002<br>\u4f4f\u5bbf\u4e5f\u63d0\u4f9b\u5fae\u6ce2\u7210\u3001\u51b0\u7bb1\u3001\u7210\u5b50\u548c\u96fb\u71b1\u6c34\u58fa\u3002<br>Dalunas Homestay \u7684\u4f4f\u5ba2\u53ef\u4ee5\u4eab\u7528\u7f8e\u5f0f\u65e9\u9910\u3002<br>\u9019\u9593\u4f4f\u5bbf\u8ddd\u96e2\u53f0\u6771\u5e02 23 \u516c\u91cc\u3002\u6700\u8fd1\u7684\u6a5f\u5834\u662f\u53f0\u6771\u6a5f\u5834\uff0c\u8ddd\u96e2 Dalunas Homestay 18 \u516c\u91cc\u3002",
            room: "\u55ae\u4eba\u623f\u3001\u96d9\u4eba\u623f\u3001\u96d9\u5e8a\u623f\u3001\u5bb6\u5ead\u5957\u623f",
            price: 1600
        },
        {
            id: 2,
            title: "\u5b9c\u8208\u5712\u6c11\u5bbf",
            score_badge: "9.6",
            score_text: "\u5091\u51fa",
            score_subtext: "41 \u5247\u8a55\u8a9e",
            thumbnail: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/99428723.jpg?k=d54479835524d361828049dd0f2e6db62e778bca3b8c22793592425808d73216",
            site: "https://www.booking.com/hotel/tw/eshine-homestay.zh-tw.html",
            full_address: "\u53f0\u6771\u7e23\u5ef6\u5e73\u9109\u6843\u6e90\u6751\u6607\u5e73\u8def 6-1 \u865f",
            full_description: "Eshine Homestay \u4f4d\u65bc\u5ef6\u5e73\u9109\uff0c\u63d0\u4f9b WiFi\uff08\u514d\u8cbb\uff09\uff0c\u4e14\u4f4f\u5bbf\u53ef\u4eab\u5712\u666f\uff0c\u8a2d\u6709\u9910\u5ef3\u3001\u5171\u7528\u4f11\u606f\u5ba4\u548c\u82b1\u5712\u3002\u9019\u9593\u6c11\u5bbf\u8a2d\u6709\u514d\u8cbb\u79c1\u4eba\u505c\u8eca\u4f4d\u3002\u4f4f\u5ba2\u53ef\u4ee5\u5728\u9644\u8fd1\u5730\u5340\u5065\u884c\u3001\u9a0e\u81ea\u884c\u8eca\u548c\u6253\u649e\u7403\u3002<br>\u9019\u9593\u7a7a\u8abf\u6c11\u5bbf\u8a2d\u6709\u7c21\u6613\u5eda\u623f\u3001\u5ea7\u4f4d\u5340\uff0c\u4ee5\u53ca\u9644\u85cd\u5149\u64ad\u653e\u6a5f\u7684\u6709\u7dda\u983b\u9053\u5e73\u9762\u96fb\u8996\u3002\u4f4f\u5bbf\u63d0\u4f9b\u6bdb\u5dfe\u548c\u5be2\u5177\u3002<br>Eshine Homestay \u63d0\u4f9b\u7f8e\u5f0f\u6216\u4e9e\u6d32\u98a8\u5473\u65e9\u9910\u3002<br>24 \u5c0f\u6642\u6ac3\u6aaf\u670d\u52d9\u670d\u52d9\u4eba\u54e1\u6703\u8b1b\u82f1\u8a9e\u548c\u4e2d\u6587\uff0c\u53ef\u96a8\u6642\u70ba\u4f4f\u5ba2\u63d0\u4f9b\u5354\u52a9\u3002<br>\u9019\u9593\u4f4f\u5bbf\u6709\u9732\u53f0\u3002<br>Eshine Homestay \u8ddd\u96e2\u53f0\u6771\u5e02 22 \u516c\u91cc\u3002\u6700\u8fd1\u7684\u6a5f\u5834\u662f\u53f0\u6771\u6a5f\u5834\uff0c\u8ddd\u96e2 Eshine Homestay 17 \u516c\u91cc\u3002\u4f4f\u5bbf\u63d0\u4f9b\u4ed8\u8cbb\u6a5f\u5834\u63a5\u99c1\u670d\u52d9\u3002",
            room: "\u5c71\u666f\u96d9\u4eba\u623f\u3001\u56db\u4eba\u623f\u3001\u5bb6\u5ead\u5957\u623f",
            price: 10500
        },
        {
            id: 3,
            title: "ONE TAITUNG\u6c11\u5bbf",
            score_badge: "9.5",
            score_text: "\u5091\u51fa",
            score_subtext: "63 \u5247\u8a55\u8a9e",
            thumbnail: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/179078229.jpg?k=f42baafcc259c4b649c6d5c73af9891e6564c1472d090d5cc35c78a1014ca77c",
            site: "https://www.booking.com/hotel/tw/one-taitungmin-su.zh-tw.html",
            full_address: "\u53f0\u6771\u7e23\u5ef6\u5e73\u9109\u6607\u5e73\u8def 192-8 \u865f",
            full_description: "One Taitung \u4f4d\u5728\u5ef6\u5e73\u9109\uff0c\u63d0\u4f9b WiFi\uff08\u514d\u8cbb\uff09\u4ee5\u53ca\u9644\u70e4\u8089\u8a2d\u5099\u7684\u82b1\u5712\uff0c\u4eab\u6709\u5712\u666f\u3002<br>\u6240\u6709\u623f\u578b\u90fd\u6709\u6236\u5916\u4f11\u606f\u5340\u3001\u7a7a\u8abf\u3001\u5e73\u9762\u96fb\u8996\uff0c\u4ee5\u53ca\u79c1\u4eba\u885b\u6d74\uff0c\u4e26\u63d0\u4f9b\u6dcb\u6d74\u8a2d\u65bd\u548c\u62d6\u978b\u3002\u4f4f\u5bbf\u4e5f\u63d0\u4f9b\u5fae\u6ce2\u7210\u3001\u51b0\u7bb1\u548c\u96fb\u71b1\u6c34\u58fa\u3002<br>ONE TAITUNG \u7684\u4f4f\u5ba2\u53ef\u4ee5\u4eab\u7528\u7f8e\u5f0f\u65e9\u9910\u3002<br>\u9019\u9593\u4f4f\u5bbf\u6709\u9732\u53f0\u3002<br>One Taitung \u8ddd\u96e2\u53f0\u6771\u5e02 23 \u516c\u91cc\u3002\u6700\u8fd1\u7684\u6a5f\u5834\u662f\u53f0\u6771\u6a5f\u5834\uff0c\u8ddd\u96e2 ONE TAITUNG 17 \u516c\u91cc\u3002",
            room: "\u96d9\u4eba\u623f\u3001\u8c6a\u83ef\u96d9\u4eba\u623f\u3001\u9802\u7d1a\u56db\u4eba\u623f",
            price: 2400
        },
        {
            id: 4,
            title: "\u4f2f\u6717\u4e09\u865f\u6c11\u5bbf",
            score_badge: "9.3",
            score_text: "\u597d\u6975\u4e86",
            score_subtext: "137 \u5247\u8a55\u8a9e",
            thumbnail: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/115759435.jpg?k=4adf594dac2a39490d81d9ed1de161d2ac42dff696766b5794d74fb15da76a93",
            site: "https://www.booking.com/hotel/tw/bo-lang-san-hao-min-su.zh-tw.html",
            full_address: "\u53f0\u6771\u6c60\u4e0a\u9109\u9326\u5712\u6751\u65b0\u958b\u5712 3 \u4e4b 1 \u865f",
            full_description: "Brown No.3 B&B \u8a2d\u6709\u81ea\u884c\u8eca\u514d\u8cbb\u79df\u501f\u670d\u52d9\u3001\u82b1\u5712\u4ee5\u53ca\u9644\u9732\u53f0\u548c WiFi\uff08\u514d\u8cbb\uff09\u7684\u7a7a\u8abf\u4f4f\u5bbf\uff0c\u8ddd\u96e2\u4f2f\u6717\u5927\u9053 80 \u516c\u5c3a\u3002\u9928\u5167\u63d0\u4f9b\u79c1\u4eba\u505c\u8eca\u4f4d\u3002<br>\u6240\u6709\u623f\u578b\u5747\u6709\u5ea7\u4f4d\u5340\u3001\u6709\u7dda\u983b\u9053\u5e73\u9762\u96fb\u8996\uff0c\u79c1\u4eba\u885b\u6d74\u6709\u6dcb\u6d74\u8a2d\u65bd\uff0c\u4e14\u9644\u5439\u98a8\u6a5f\u3002\u4f4f\u5bbf\u4e5f\u63d0\u4f9b\u51b0\u7bb1\u548c\u96fb\u71b1\u6c34\u58fa\u3002<br>Brown No.3 B&B \u6bcf\u5929\u65e9\u4e0a\u63d0\u4f9b\u81ea\u52a9\u5f0f\u548c\u4e9e\u6d32\u98a8\u5473\u65e9\u9910\u5169\u7a2e\u9078\u64c7\u3002<br>\u6700\u8fd1\u7684\u6a5f\u5834\u662f\u53f0\u6771\u6a5f\u5834\uff0c\u8ddd\u96e2\u9019\u9593\u4f4f\u5bbf 40 \u516c\u91cc\u3002",
            room: "\u6a19\u6e96\u96d9\u4eba\u623f\u3001\u56db\u4eba\u623f",
            price: 2770
        },
        {
            id: 5,
            title: "\u539f\u4f86\u5bbf B&B",
            score_badge: "9.2",
            score_text: "\u597d\u6975\u4e86",
            score_subtext: "347 \u5247\u8a55\u8a9e",
            thumbnail: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/94246408.jpg?k=f4af77309fe1df102e03fc41b702c7c239059ebf0fe8da32969c0eebc565c779",
            site: "https://www.booking.com/hotel/tw/original-house-b-amp-b.zh-tw.html",
            full_address: "\u53f0\u6771\u7e23\u6c60\u4e0a\u9109\u4e2d\u83ef\u8def 59 \u865f",
            full_description: "\u539f\u4f86\u5bbf B&B \u4f4d\u65bc\u6c60\u4e0a\uff0c\u8ddd\u96e2\u6c60\u4e0a\u706b\u8eca\u7ad9 7 \u5206\u9418\u6b65\u884c\u8def\u7a0b\uff0c\u5ba2\u623f\u7686\u63d0\u4f9b\u7a7a\u8abf\u548c\u514d\u8cbb WiFi\u3002<br>\u6bcf\u9593\u5ba2\u623f\u7686\u914d\u6709\u6709\u7dda\u96fb\u8996\uff0c\u90e8\u5206\u5ba2\u623f\u8a2d\u6709\u9732\u53f0\u6216\u967d\u53f0\u3002\u623f\u5167\u4e5f\u8a2d\u6709\u9644\u6d74\u7f38\u6216\u6dcb\u6d74\u7684\u79c1\u4eba\u885b\u6d74\uff0c\u53e6\u5099\u6709\u62d6\u978b\u3001\u514d\u8cbb\u76e5\u6d17\u7528\u54c1\u548c\u5439\u98a8\u6a5f\u3002<br>\u9928\u5167\u8a2d\u6709\u516c\u5171\u4f11\u606f\u5ba4\u3002",
            room: "\u96d9\u4eba\u623f\u3001\u5927\u578b\u96d9\u4eba\u623f\u3001\u8c6a\u83ef\u96d9\u4eba\u623f",
            price: 2400
        }
    ];

    /* Display All Products in Default Grid */

    $(document).ready(function () {
        showAllItems();
    });

    function showAllItems() {
        /* 讀取 Array 資料到網站 */
        jsonItems(products);

        /* 讀取 Json 資料到網站 (XMLHttpRequest: 後臺發送 HTTP 請求) */
        // $.ajax({
        //     type: 'GET',
        //     url: './json/Taitung.json',
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

        /* 讀取 Json 資料到網站 (遠端資料讀取) */
        // $.getJSON("./json/Taitung.json", {
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

        /* 未有資料可作查詢 */
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
                '\'">訂房</button></div></div>'
            );
        });
    }

})(jQuery);