(function ($) {
    'use strict';

    const products = [
        {
            id: 1,
            title: "\u9054\u82ad\u51f1\u82b1\u5712\u6c11\u5bbf",
            score_badge: "8.9",
            score_text: "\u5f88\u68d2",
            score_subtext: "283 \u5247\u8a55\u8a9e",
            thumbnail: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/144922067.jpg?k=617c9aa8188728b9d17ca4adf7ce5223b964191102a1603ef242cf583a5ec519",
            site: "https://www.booking.com/hotel/tw/da-ba-kai-hua-yuan-min-su.zh-tw.html",
            full_address: "\u5357\u6295\u7e23\u4fe1\u7fa9\u9109\u671b\u548c\u5df7 15-8 \u865f",
            full_description: "\u9054\u82ad\u51f1\u82b1\u5712\u6c11\u5bbf\u4f4d\u65bc\u5357\u6295\u7e23\u4fe1\u7fa9\u9109\u5e03\u8fb2\u65cf\u671b\u9109\u90e8\u843d\u5167\uff0c\u5750\u64c1\u7389\u5c71\u548c\u661f\u7a7a\u7f8e\u666f\u3002<br>\u9054\u82ad\u51f1\u82b1\u5712\u6c11\u5bbf\u8ddd\u96e2\u963f\u91cc\u5c71 23 \u516c\u91cc\uff0c\u8ddd\u96e2\u5609\u7fa9\u5e02 46 \u516c\u91cc\uff0c\u8ddd\u96e2\u6749\u6797\u6eaa\u68ee\u6797\u751f\u614b\u6e21\u5047\u5712\u5340 79 \u516c\u91cc\u3002\u6700\u8fd1\u7684\u6a5f\u5834\u662f\u53f0\u4e2d\u6e05\u6cc9\u5d17\u6a5f\u5834\uff0c\u8ddd\u96e2 78 \u516c\u91cc\u3002\u6c11\u5bbf\u8ddd\u96e2\u77e5\u540d\u7684\u6771\u57d4\u6eab\u6cc9 10 \u516c\u91cc\u3002<br>\u6bcf\u9593\u5ba2\u623f\u5747\u64c1\u6709\u7c21\u55ae\u800c\u4e7e\u6de8\u7684\u88dd\u98fe\uff0c\u4e26\u8a2d\u6709\u967d\u53f0\u548c\u98a8\u6247\u3002\u5ba2\u4eba\u53ef\u5728\u967d\u53f0\u4e0a\u4e00\u908a\u653e\u9b06\u8eab\u5fc3\uff0c\u4e00\u908a\u6b23\u8cde\u53f0\u7063\u6700\u9ad8\u5cf0\u7389\u5c71\u7684\u7f8e\u666f\u3002\u6d74\u5ba4\u5167\u914d\u6709\u6dcb\u6d74\u8a2d\u65bd\u3001\u514d\u8cbb\u76e5\u6d17\u7528\u54c1\u548c\u5439\u98a8\u6a5f\u3002<br>\u5165\u4f4f\u9054\u82ad\u51f1\u82b1\u5712\u6c11\u5bbf\u7684\u5ba2\u4eba\u53ef\u62dc\u8a2a\u671b\u9109\u90e8\u843d\u3001\u7375\u4eba\u53e4\u9053\u548c\u5343\u6b72\u540a\u6a4b\uff0c\u5ea6\u904e\u60a0\u9592\u6642\u5149\u3002",
            room: "\u96d9\u4eba\u623f\u3001\u56db\u4eba\u623f",
            price: 2400
        },
        {
            id: 2,
            title: "\u6eaa\u982d\u5927\u9580\u524d\u65b9-\u6eaa\u982d\u76db\u8ed2\u68ee\u6797\u6703\u9928-\u5099\u6709\u5c08\u5c6c\u505c\u8eca\u5834",
            score_badge: "8.7",
            score_text: "\u5f88\u68d2",
            score_subtext: "500 \u5247\u8a55\u8a9e",
            thumbnail: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/228438290.jpg?k=1480c6a757ec38810fbed36de758fcbe3c1912c439bdc44fee5bcf8d8b65b106",
            site: "https://www.booking.com/hotel/tw/xi-tou-yao-guai-cun-qian-xi-tou-sheng-xuan-sen-lin-hui-guan.zh-tw.html",
            full_address: "\u5357\u6295\u7e23\u9e7f\u8c37\u8208\u7522\u8def 22-12 \u865f",
            full_description: "\u6eaa\u982d\u5996\u602a\u6751\u524d-\u6eaa\u982d\u76db\u8ed2\u68ee\u6797\u6703\u9928\u4f4d\u65bc\u6eaa\u982d\u68ee\u6797\u904a\u6a02\u5340\u65b0\u5927\u9580\u5c0d\u9762\uff0c\u8a2d\u6709\u967d\u5149\u9732\u53f0\uff0c\u53ef\u4e00\u89bd\u7f8e\u9e97\u5c71\u666f\u3002\u6703\u9928\u5167\u8a2d\u6709\u514d\u8cbb\u79c1\u4eba\u505c\u8eca\u5834\u3002<br>\u90e8\u5206\u5ba2\u623f\u8a2d\u6709\u5e36\u71b1\u6c34\u6d74\u7f38\u7684\u7368\u7acb\u885b\u6d74\u9593\uff0c\u5176\u4ed6\u5ba2\u623f\u5247\u63d0\u4f9b\u62d6\u978b\u548c\u514d\u8cbb\u76e5\u6d17\u7528\u54c1\u3002\u90e8\u5206\u5ba2\u623f\u8a2d\u6709\u9732\u53f0\u6216\u967d\u53f0\u3002\u9928\u5167\u5404\u8655\u5747\u63d0\u4f9b\u514d\u8cbb\u7121\u7dda\u7db2\u8def\u670d\u52d9\u3002\u623f\u5167\u8a2d\u6709\u96fb\u8996\u3002<br>\u4f4f\u5bbf\u63d0\u4f9b\u514d\u8cbb\u63a5\u99c1\u670d\u52d9\u3002<br>\u4f4f\u5bbf\u8ddd\u96e2\u6eaa\u982d\u81ea\u7136\u6559\u80b2\u5712\u5340 200 \u516c\u5c3a\uff0c\u8ddd\u96e2\u5fd8\u6182\u68ee\u6797\u5247\u662f 15 \u516c\u91cc\u3002\u53f0\u4e2d\u6e05\u6cc9\u5ca1\u6a5f\u5834\u8ddd\u96e2\u98ef\u5e97 67 \u516c\u91cc\u3002",
            room: "\u96d9\u4eba\u623f\u3001\u8c6a\u83ef\u96d9\u4eba\u623f\u3001\u96d9\u5e8a\u623f\u3001\u5c71\u666f\u96d9\u5e8a\u623f\u3001\u56db\u4eba\u623f\u3001\u5c71\u666f\u56db\u4eba\u623f\u3001\u6a19\u6e96\u5bb6\u5ead\u623f\u3001\u5c71\u666f\u5bb6\u5ead\u623f",
            price: 2288
        },
        {
            id: 3,
            title: "\u5357\u6295\u6eaa\u982d\u5c1a\u7df9\u6703\u9928(\u6c11\u5bbf)",
            score_badge: "8.3",
            score_text: "\u975e\u5e38\u597d",
            score_subtext: "117 \u5247\u8a55\u8a9e",
            thumbnail: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/111572843.jpg?k=f32ec6fb236befcdf9c79ed07ef5304957c1d6053c8409c04d5b10b9f7701420",
            site: "https://www.booking.com/hotel/tw/shang-ti-min-su.zh-tw.html",
            full_address: "\u5357\u6295\u7e23\u9e7f\u8c37\u8208\u7522\u8def 10 \u4e4b 2 \u865f",
            full_description: "\u6eaa\u982d\u5c1a\u7df9\u6703\u9928\u6c11\u5bbf\u4f4d\u65bc\u9e7f\u8c37\uff0c\u9928\u5167\u63d0\u4f9b\u514d\u8cbb WiFi\u3002<br>\u5ba2\u623f\u5747\u914d\u6709\u5e73\u9762\u96fb\u8996\u548c\u6c34\u58fa\uff0c\u79c1\u4eba\u885b\u6d74\u5167\u9644\u6dcb\u6d74\u8a2d\u65bd\u3002\u70ba\u4e86\u5ba2\u4eba\u65c5\u9014\u7684\u8212\u9069\uff0c\u4e5f\u5099\u6709\u62d6\u978b\u3001\u514d\u8cbb\u76e5\u6d17\u7528\u54c1\u548c\u5439\u98a8\u6a5f\u3002<br>\u9928\u5167\u63d0\u4f9b\u7968\u5238\u670d\u52d9\u3002<br>\u6eaa\u982d\u5c1a\u7df9\u6703\u9928\u6c11\u5bbf\u8ddd\u96e2\u6eaa\u982d\u81ea\u7136\u6559\u80b2\u5712\u5340 700 \u516c\u5c3a\uff0c\u8ddd\u96e2\u5fd8\u6182\u68ee\u6797 18 \u516c\u91cc\u3002\u6700\u8fd1\u7684\u6a5f\u5834\u662f\u53f0\u4e2d\u6e05\u6cc9\u5d17\u6a5f\u5834\uff0c\u8ddd\u96e2 67 \u516c\u91cc\u3002",
            room: "\u6a19\u6e96\u96d9\u4eba\u623f\u3001\u57fa\u672c\u56db\u4eba\u623f \uff0d 2\u540d\u6210\u4eba\uff0b2\u540d\u5152\u7ae5\u3001\u7d93\u6fdf\u56db\u4eba\u623f\u3001\u5bb6\u5ead\u623f \uff0d 4\u540d\u6210\u4eba",
            price: 2499
        },
        {
            id: 4,
            title: "\u6eaa\u982d\u66fc\u9640\u9109\u6c11\u5bbf",
            score_badge: "8.3",
            score_text: "\u975e\u5e38\u597d",
            score_subtext: "837 \u5247\u8a55\u8a9e",
            thumbnail: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/170605348.jpg?k=8c4a8d43f511ef2e8e5c9aae9db8b7d2072da4af5f0e294542655264e24e7e6f",
            site: "https://www.booking.com/hotel/tw/man-tuo-xiang-min-su.zh-tw.html",
            full_address: "\u5357\u6295\u7e23\u9e7f\u8c37\u8208\u7522\u8def 1-15 \u865f",
            full_description: "Hsitou Man Tuo Xiang Homestay \u4f4d\u65bc\u9e7f\u8c37\uff0c\u63d0\u4f9b\u7a7a\u8abf\u548c WiFi\uff08\u514d\u8cbb\uff09\uff0c\u4eab\u5c71\u666f\uff0c\u8ddd\u96e2\u6eaa\u982d\u81ea\u7136\u6559\u80b2\u5712\u5340 1 \u516c\u91cc\uff0c\u8ddd\u96e2\u5fd8\u6182\u68ee\u6797 14 \u516c\u91cc\u3002<br>Hsitou Man Tuo Xiang Homestay \u8a2d\u6709\u9644\u6dcb\u6d74\u8a2d\u65bd\u7684\u79c1\u4eba\u885b\u6d74\uff0c\u4e26\u63d0\u4f9b\u5e73\u9762\u96fb\u8996\u3001\u62d6\u978b\u548c\u5439\u98a8\u6a5f\u3002<br>\u9019\u9593\u4f4f\u5bbf\u7684\u4f4f\u5ba2\u53ef\u4ee5\u4eab\u7528\u55ae\u9ede\u5f0f\u65e9\u9910\u3002<br>Hsitou Man Tuo Xiang Homestay \u8ddd\u96e2\u6749\u6797\u6eaa\u68ee\u6797\u751f\u614b\u6e21\u5047\u5712\u5340 17 \u516c\u91cc\u3002\u6700\u8fd1\u7684\u6a5f\u5834\u662f\u81fa\u4e2d\u570b\u969b\u6a5f\u5834\uff0c\u8ddd\u96e2 Hsitou Man Tuo Xiang Homestay 68 \u516c\u91cc\u3002",
            room: "\u5c0f\u578b\u96d9\u4eba\u623f\u3001\u96d9\u4eba\u623f\u3001\u8c6a\u83ef\u96d9\u4eba\u623f\u3001\u6a19\u6e96\u4e09\u4eba\u623f\u3001\u56db\u4eba\u623f\u3001\u8c6a\u83ef\u56db\u4eba\u623f\u3001\u5c71\u666f\u5bb6\u5ead\u623f\u3001\u5bb6\u5ead\u623f\u3001\u5957\u623f",
            price: 1900
        },
        {
            id: 5,
            title: "\u65b0\u666f\u5b8f\u6e21\u5047\u6751",
            score_badge: "8.7",
            score_text: "\u5f88\u68d2",
            score_subtext: "229 \u5247\u8a55\u8a9e",
            thumbnail: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/288338827.jpg?k=93b51d873d7f27c221ac7c10b0f651775e8fae8ef544a04f1d0a14426493f203",
            site: "https://www.booking.com/hotel/tw/xin-jing-hong-du-jia-cun.zh-tw.html",
            full_address: "\u5357\u6295\u7e23\u9e7f\u8c37\u8208\u7522\u8def 11 \u4e4b 2 \u865f",
            full_description: "Sin Ging Hong Resort \u4f4d\u65bc\u5357\u6295\u7e23\u7684\u9e7f\u8c37\uff0c\u9760\u8fd1\u6eaa\u982d\u81ea\u7136\u6559\u80b2\u5712\u5340\uff0c\u63d0\u4f9b WiFi\uff08\u514d\u8cbb\uff09\u548c\u514d\u8cbb\u79c1\u4eba\u505c\u8eca\u4f4d\u3002\u4f4f\u5ba2\u53ef\u4ee5\u4f7f\u7528\u71b1\u6c34\u6309\u6469\u6c60\u3002<br>Sin Ging Hong Resort \u8a2d\u6709\u9644\u71b1\u6c34\u6309\u6469\u6c60\u7684\u79c1\u4eba\u885b\u6d74\uff0c\u4e26\u63d0\u4f9b\u5e73\u9762\u96fb\u8996\u3001\u62d6\u978b\u548c\u5439\u98a8\u6a5f\u3002<br>\u9019\u9593\u4f4f\u5bbf\u7684\u4f4f\u5ba2\u53ef\u4ee5\u4eab\u7528\u55ae\u9ede\u5f0f\u6216\u7f8e\u5f0f\u65e9\u9910\u3002<br>\u4f4f\u5ba2\u9084\u53ef\u4ee5\u5728\u5171\u7528\u4f11\u606f\u5ba4\u653e\u9b06\u8eab\u5fc3\u3002<br>Sin Ging Hong Resort \u8ddd\u96e2\u5fd8\u6182\u68ee\u6797 13 \u516c\u91cc\uff0c\u8ddd\u96e2\u6749\u6797\u6eaa\u68ee\u6797\u751f\u614b\u6e21\u5047\u5712\u5340 16 \u516c\u91cc\u3002\u6700\u8fd1\u7684\u6a5f\u5834\u662f\u81fa\u4e2d\u570b\u969b\u6a5f\u5834\uff0c\u8ddd\u96e2 Sin Ging Hong Resort 67 \u516c\u91cc\u3002",
            room: "\u96d9\u4eba\u623f\u3001\u96d9\u5e8a\u623f\u3001\u5c71\u666f\u96d9\u4eba\u623f\u3001\u5c71\u666f\u96d9\u5e8a\u623f\u3001\u5c71\u666f\u7279\u5927\u96d9\u4eba\u623f\u3001\u56db\u4eba\u623f\u3001\u5c71\u666f\u56db\u4eba\u623f",
            price: 3380
        },
        {
            id: 6,
            title: "\u6eaa\u982d\u8056\u99ac\u6d1b\u6c11\u5bbf",
            score_badge: "8.3",
            score_text: "\u975e\u5e38\u597d",
            score_subtext: "190 \u5247\u8a55\u8a9e",
            thumbnail: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/322612286.jpg?k=54e1381c1655b40a4f635fad0b94650c8f438383611c517609e90c27d341d456",
            site: "https://www.booking.com/hotel/tw/xi-tou-sheng-ma-luo-min-su.zh-tw.html",
            full_address: "\u5357\u6295\u7e23\u9e7f\u8c37\u8208\u7522\u8def 22-38 \u865f",
            full_description: "Saint Malo Homestay \u4f4d\u5728\u5357\u6295\u7e23\u7684\u9e7f\u8c37\uff0c\u9760\u8fd1\u6eaa\u982d\u81ea\u7136\u6559\u80b2\u5712\u5340\uff0c\u63d0\u4f9b WiFi\uff08\u514d\u8cbb\uff09\u548c\u514d\u8cbb\u79c1\u4eba\u505c\u8eca\u4f4d\u3002<br>\u6bcf\u500b\u623f\u578b\u90fd\u8a2d\u6709\u79c1\u4eba\u885b\u6d74\u548c\u6dcb\u6d74\u8a2d\u65bd\u3001\u7a7a\u8abf\u3001\u5e73\u9762\u96fb\u8996\u4ee5\u53ca\u51b0\u7bb1\u3002<br>Saint Malo Homestay \u7684\u4f4f\u5ba2\u53ef\u4ee5\u4eab\u7528\u6b50\u9678\u5f0f\u6216\u4e9e\u6d32\u98a8\u5473\u65e9\u9910\u3002<br>\u9019\u9593\u4f4f\u5bbf\u8ddd\u96e2\u5fd8\u6182\u68ee\u6797 13 \u516c\u91cc\uff0c\u8ddd\u96e2\u6749\u6797\u6eaa\u68ee\u6797\u751f\u614b\u6e21\u5047\u5712\u5340 17 \u516c\u91cc\u3002\u6700\u8fd1\u7684\u6a5f\u5834\u662f\u81fa\u4e2d\u570b\u969b\u6a5f\u5834\uff0c\u8ddd\u96e2 Saint Malo Homestay 67 \u516c\u91cc\u3002",
            room: "\u96d9\u4eba\u623f\u3001\u6a19\u6e96\u96d9\u4eba\u623f\u3001\u7d93\u6fdf\u96d9\u4eba\u623f\u3001\u56db\u4eba\u623f\u3001\u8212\u9069\u56db\u4eba\u623f\u3001\u6a19\u6e96\u5bb6\u5ead\u623f\u3001\u8c6a\u83ef\u5bb6\u5ead\u623f",
            price: 1800
        },
        {
            id: 7,
            title: "\u807d\u6fe4\u5712\u5c71\u838a",
            score_badge: "8.7",
            score_text: "\u5f88\u68d2",
            score_subtext: "224 \u5247\u8a55\u8a9e",
            thumbnail: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/37571093.jpg?k=d80c814c1a62589e5bc6f11fb69671ffd918db94c98c8e9bf9d037f27f268823",
            site: "https://www.booking.com/hotel/tw/tingtau-villa.zh-tw.html",
            full_address: "\u5357\u6295\u7e23\u9e7f\u8c37\u548c\u96c5\u6751\u611b\u9109\u8def 1-12 \u865f",
            full_description: "\u807d\u6fe4\u5712\u5c71\u838a\u4f4d\u65bc\u84ca\u9b31\u5c71\u6797\u5167\uff0c\u5730\u9ede\u4fbf\u5229\uff0c\u8ddd\u96e2\u5357\u6295\u7e23\u9e7f\u8c37\u93ae\u7684\u6eaa\u982d\u68ee\u6797\u904a\u6a02\u5340 6 \u5206\u9418\u8eca\u7a0b\u3002\u9644\u8a2d\u514d\u8cbb\u505c\u8eca\u5834\uff0c\u5168\u9928\u63d0\u4f9b\u514d\u8cbb WiFi\u3002<br>\u5ba2\u623f\u92ea\u6709\u6728\u5730\u677f\uff0c\u88dd\u6709\u7a7a\u8abf\uff0c\u914d\u5099\u96fb\u71b1\u6c34\u58fa\u3001\u8fa6\u516c\u684c\u548c\u6709\u7dda\u96fb\u8996\u3002\u53e6\u9644\u8a2d\u79c1\u4eba\u885b\u6d74\uff0c\u5167\u6709\u5439\u98a8\u6a5f\u3001\u6dcb\u6d74\u8a2d\u5099\u548c\u514d\u8cbb\u76e5\u6d17\u7528\u54c1\u3002<br>\u807d\u6fe4\u5712\u5c71\u838a\u56db\u5468\u74b0\u7e5e\u7da0\u610f\u76ce\u7136\u7684\u7f8e\u9e97\u82b1\u5712\uff0c\u8a2d\u6709\u89c0\u5149\u65c5\u904a\u6ac3\u53f0\uff0c\u53ef\u5354\u52a9\u5ba2\u4eba\u5b89\u6392\u89c0\u5149\u65c5\u904a\u4e8b\u5b9c\u3002\u4e5f\u63d0\u4f9b\u884c\u674e\u5bc4\u5b58\u670d\u52d9\u3002<br>\u5c71\u838a\u9644\u8a2d\u9910\u5ef3\uff0c\u5ba2\u4eba\u53ef\u65bc\u6b64\u4eab\u7528\u5404\u7a2e\u7576\u5730\u7f8e\u98df\u3002<br>\u807d\u6fe4\u5712\u5c71\u838a\u8ddd\u96e2\u6eaa\u982d\u516c\u8eca\u7ad9\u548c\u77e5\u540d\u7684\u6eaa\u982d\u5996\u602a\u6751 6 \u5206\u9418\u8eca\u7a0b\u3002 \u958b\u8eca 1 \u5c0f\u6642\u5167\u53ef\u62b5\u9054\u7f8e\u9e97\u7684\u65e5\u6708\u6f6d\u3002",
            room: "\u55ae\u4eba\u623f\u3001\u8212\u9069\u96d9\u4eba\u623f\u3001\u8c6a\u83ef\u5e8a\u623f\u3001\u5962\u83ef\u5957\u623f\u3001\u9ad8\u7d1a\u8c6a\u83ef\u56db\u4eba\u9593\u3001\u9ad8\u7d1a\u5957\u623f",
            price: 2325
        },
        {
            id: 8,
            title: "\u6eaa\u982d\u5e03\u62c9\u683c\u6c11\u5bbf",
            score_badge: "8.8",
            score_text: "\u5f88\u68d2",
            score_subtext: "488 \u5247\u8a55\u8a9e",
            thumbnail: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/117598926.jpg?k=00693b80bf6d434d90c47bcf7fc12f77dabfe33460279169632592558714bbd4",
            site: "https://www.booking.com/hotel/tw/xi-tou-bu-la-ge-du-jia-cun.zh-tw.html",
            full_address: "\u5357\u6295\u7e23\u9e7f\u8c37\u8208\u7522\u8def 6 \u4e4b 12 \u865f",
            full_description: "\u6eaa\u982d\u5e03\u62c9\u683c\u6c11\u5bbf\u4f4d\u65bc\u9e7f\u8c37\u9109\uff0c\u8ddd\u96e2\u6eaa\u982d\u81ea\u7136\u6559\u80b2\u5712\u5340\u7d04 700 \u516c\u5c3a\uff0c\u5168\u9928\u63d0\u4f9b\u514d\u8cbb WiFi\u3002<br>\u5ba2\u623f\u5747\u8a2d\u6709\u7a7a\u8abf\u3001\u5e73\u9762\u6709\u7dda\u96fb\u8996\u3001\u71b1\u6c34\u58fa\u548c\u79c1\u4eba\u885b\u6d74\uff0c\u53e6\u5099\u6709\u62d6\u978b\u548c\u514d\u8cbb\u76e5\u6d17\u7528\u54c1\uff0c\u63d0\u4f9b\u5ba2\u4eba\u8212\u9069\u7684\u4f4f\u5bbf\u9ad4\u9a57\u3002\u90e8\u5206\u5ba2\u623f\u8a2d\u6709\u4f11\u606f\u5340\uff0c\u4f9b\u5ba2\u4eba\u653e\u9b06\u4f11\u61a9\u3002<br>\u6c11\u5bbf\u8ddd\u96e2\u5fd8\u6182\u68ee\u6797\u7d04 18 \u516c\u91cc\uff0c\u8ddd\u96e2\u6749\u6797\u6eaa\u68ee\u6797\u751f\u614b\u6e21\u5047\u5712\u5340\u7d04 20 \u516c\u91cc\uff0c\u8ddd\u96e2\u53f0\u4e2d\u6e05\u6cc9\u5d17\u6a5f\u5834\u7d04 67 \u516c\u91cc\u3002",
            room: "\u6a19\u6e96\u96d9\u4eba\u623f\u3001\u8c6a\u83ef\u4e09\u4eba\u623f\u3001\u6a19\u6e96\u56db\u4eba\u623f\u3001\u7d93\u5178\u56db\u4eba\u623f\u3001\u9ad8\u7d1a\u56db\u4eba\u623f",
            price: 2340
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
        //     url: './json/Nantou.json',
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
        // $.getJSON("./json/Nantou.json", {
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