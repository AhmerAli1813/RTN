// <reference path="ati_common.js" />

var ajaxHelper = {
    allXhrRequests: [],
    ajaxPost: function (url, jsonData, successFunc, isAsync) {

        var xhr = $.ajax({
            type: 'POST',
            url: url,
            datatype: 'application/json',
            //contentType: 'application/json; charset=utf-8',
            async: isAsync,
            data: jsonData,
            cache: false,
            success: function (data) {

                successFunc(data);
            },
            error: function (exception) {
                var msg = `Experience Issue: Internal server Error`;
                app_helper.notify(msg, 4);
                console.error(exception);
            }
        }).done(function (data) {

            //ajaxHelper.isSessionExpired(data);
            //if (ajaxHelper.isSessionExpired(data)) {
            //    ajaxHelper.redirectToSessionExpiredPage();
            //    return;
            //}
            //else {
            //    /*successFunc(data);*/
            //}
        });
        return xhr;
    },
    isSessionExpired: function (data) {

        if (data && typeof (data) == "string" && data.indexOf("Login") > -1) {
            window.location.href = "/Login/Index";
        }
        else {

        }

    },
    redirectToSessionExpiredPage: function () {
        /*window.location.href = window.location.protocol + "//" + window.location.host + "/Login/LoginExpireAlert";*/
        //ati_common.showModal("mdlSessionExpire");
        window.location.href = "/Login/Index";
    },
    
    ajaxGet: function (url,data, successFunc, isPopup, isAsync) {
        var xhr = $.ajax({
            type: 'GET',
            async: isAsync,
            url: url,
            data: data,
            datatype: 'application/json',
            cache: false,
            success: function (data) {
                successFunc(data);
            },
            error: function (jqXHR, exception) {
                var msg = `Experience Issue: Internal Server Error`;
                ajaxHelper.notify(msg, 4);
                console.error(jqXHR, exception);
            }
        });
        return xhr;
    },
    ajaxGetHtml: function (url, successFunc, isPopup, isAsync, successParam) {
        $.get(url, function (data) {
            return data;
        }).done(function (data) {
            successFunc(data);
        }).fail(function (e, v) {
        });
    },
    ajaxGetJsonAndExtraParam: function (url, successFunc, isPopup, isAsync, successParam) {
        var xhr = $.ajax({
            type: 'GET',
            async: isAsync,
            url: url,
            datatype: 'json',
            cache: false,
            success: function (data) {
                successFunc(data, successParam);
            },
            error: function (jqXHR, exception) {
                var msg = `Experience Issue: Internal Server Error`;
                ajaxHelper.notify(msg, 4);
                console.error(jqXHR, exception);

            }
        });
        return xhr;
    },
    ajaxPostFileData: function (url, fileData, successFunc, isPopup, isAsync) {
        var xhr = $.ajax({
            url: url,
            type: "POST",
            contentType: false, // Not to set any content header  
            processData: false, // Not to process data  
            async: isAsync,
            data: fileData,
            success: function (data) {
                successFunc(data);
            },
            error: function (jqXHR, exception) {
                var msg = `Experience Issue: Internal Server Error`;
                ajaxHelper.notify(msg, 4);
                console.error(jqXHR, exception);

            }
        });
        return xhr;
    },
    ajaxPostImage: function (url, formdata, successFunc) {
        var xhr = new XMLHttpRequest();
        xhr.open('POST', url);
        xhr.send(formdata);
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
                var picGuid = xhr.responseText.replace('"', '');
                picGuid = picGuid.substr(0, picGuid.indexOf('"'));
                successFunc(picGuid);
            }
        };
    }
};

