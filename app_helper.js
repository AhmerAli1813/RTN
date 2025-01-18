var app_helper = {

    getTodayDate: function () {

        const local = new Date();
        local.setMinutes(local.getMinutes() - local.getTimezoneOffset());
        return local.toJSON().slice(0, 10);


    },
    notify: function (msg, type) {
        if (type == 1) {
            toastr.success(msg, 'Success');

        } if (type == 2) {
            toastr.error(msg, 'Error');

        } if (type == 3) {
            toastr.warning(msg, 'Warning');
        } if (type == 4) {
            toastr.info(msg, 'Info');
        }

    },
    strongPasswordValidation: function (elm) {

        var p = document.getElementById(elm).value,
            errors = [];
        if (p.length < 8) {
            errors.push("Your password must be at least 8 characters");
        }
        if (p.search(/[a-z]/i) < 0) {
            errors.push("Your password must contain at least one letter.");
        }
        if (p.search(/[0-9]/) < 0) {
            errors.push("Your password must contain at least one digit.");
        }
        if (errors.length > 0) {

            this.notify(errors.join("\n"), 2);

            return false;
        }
        return true;


    },
    matchConformPassword: function (p, cp) {

        var p = document.getElementById(p).value;
        var cp = document.getElementById(cp).value;

        if (p != cp) {

            this.notify("Password and confirm password does not match.", 2);
            return false;

        }
        return true;

    },
    isEmail: function (emailAdress) {


        let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        if (emailAdress.match(regex))
            return true;

        else
            return false;


    },
    DecimalFieldValidation: function (element) {
        //var value = $(element).val();
        //if ($.isNumeric(value) && parseFloat(value) >= 0 && parseFloat(value) <= 100) {
        //    $(element).get(0).setCustomValidity('');
        //} else {
        //    $(element).get(0).setCustomValidity("Please enter a valid number between 0 and 100.");
        //}

        var value = $(element).val();
        /*value = value.replace(/[^0-9.]/g, ''); // very close and working fine */
        value = value.replace(/[^0-9.]/g, '');
        value = value.replace(/\.(?=.*\.)/g, '');
        // Allow up to three decimal digits
        value = value.replace(/(\.\d{3})\d+/g, '$1');
        if (value === '' || (parseFloat(value) >= 0 && parseFloat(value) <= 100)) {
            $(element).val(value);
        } else {
            $(element).val($(element).data('lastValid') || '');
        }

        $(element).data('lastValid', $(element).val());
    },
    EnhancedDecimalFieldValidation: function (element) {
        var value = $(element).val();
        value = value.replace(/[^0-9.]/g, '');
        value = value.replace(/\.(?=.*\.)/g, '');
        value = value.replace(/(\.\d{3})\d+/g, '$1');
        //if (value === '' || (parseFloat(value) >= 0 && !/\.\d{3,}/.test(value))) {
        if (value === '' || parseFloat(value) >= 0) {
            $(element).val(value);
        } else {
            $(element).val($(element).data('lastValid') || '');
        }

        $(element).data('lastValid', $(element).val());
    },
    OnlyNumberAndHyphen: function (element) {

        var inputValue = $(element).val();
        var sanitizedValue = '';
        var hyphenCount = 0;

        for (var i = 0; i < inputValue.length; i++) {
            var char = inputValue.charAt(i);
            if (sanitizedValue.length < 12) {
                if (char === '-' && hyphenCount === 0) {
                    sanitizedValue += char;
                    hyphenCount++;
                } else if (/[\d]/.test(char)) {
                    sanitizedValue += char;
                }
            }
        }

        $(element).val(sanitizedValue);
    },
    OnlyNumberAndHyphen20: function (element) {

        var inputValue = $(element).val();
        var sanitizedValue = '';
        var hyphenCount = 0;

        for (var i = 0; i < inputValue.length; i++) {
            var char = inputValue.charAt(i);
            if (sanitizedValue.length < 20) {
                if (char === '-' && hyphenCount === 0) {
                    sanitizedValue += char;
                    hyphenCount++;
                } else if (/[\d]/.test(char)) {
                    sanitizedValue += char;
                }
            }
        }

        $(element).val(sanitizedValue);
    },
    OnlyNumber: function (element) {

        var inputValue = $(element).val();
        var sanitizedValue = '';

        for (var i = 0; i < inputValue.length; i++) {
            var char = inputValue.charAt(i);
            if (sanitizedValue.length < 12) {
                if (/[\d]/.test(char)) {
                    sanitizedValue += char;
                }
            }
        }

        $(element).val(sanitizedValue);
    },
    GetCurrentDate: function () {
        var today = new Date();
        var day = today.getDate();
        var month = today.getMonth() + 1;
        var year = today.getFullYear();

        day = (day < 10) ? '0' + day : day;
        month = (month < 10) ? '0' + month : month;
        var formatted_date = year + '-' + month + '-' + day;
        console.log("Today's date is:", formatted_date);
        return formatted_date;
    },
    PrepareDate: function (date) {
        var today = new Date(date);
        var day = today.getDate();
        var month = today.getMonth() + 1;
        var year = today.getFullYear();

        day = (day < 10) ? '0' + day : day;
        month = (month < 10) ? '0' + month : month;
        var formatted_date = year + '-' + month + '-' + day;
        console.log("Today's date is:", formatted_date);
        return formatted_date;
    },
    EncryptValue: function (value) {
        ajaxHelper.ajaxGet("/Home/Encrypt", { value }, function (data) {
            console.log("Ajaax", data)
            return data;
        }, true, true)
    },
    DecryptValue: function (value) {
        ajaxHelper.ajaxGet("/Home/Decrypt", { value }, function (data) {
            console.log(data);
            return data;
        }, true, true)
    },
    EncryptUrl: function (url, value) {
        return url + this.EncryptValue(value);
    },
    DecryptUrl: function (url, value) {
        return url + this.DecryptValue(value);
    },
    EmptyForm: (Selector) => {
        $(Selector).find("input,Select,textarea").val(null);
    }

}