$(document).ready(() => {

   
    //DatePicker Js  Start here cd:By Ahmer-Ali
    //how to use
    //Create input elements with the class "datepicker-input" that you want to associate with datepickers.
    //Introduction
    //The data - dateStart and data - dateEnd attributes are custom attributes that can be used to configure the start and end dates for datepicker components in your HTML form.
    //These attributes work in conjunction with the provided initialization code to set specific date ranges for datepickers.

    //    data - dateStart Attribute
    //The data - dateStart attribute is used to specify the start date for the datepicker.
    //It accepts the following values:
    //"Current": Sets the start date to the current date.
    //Specific Date(e.g., "01/01/2023"): Sets the start date to the specified date.
    //Empty or Not Present: Defaults to null.
    //    data - dateEnd Attribute
    //The data - dateEnd attribute is used to specify the end date for the datepicker.
    //It accepts the same values as data - dateStart:
    //"Current": Sets the end date to the current date.
    //Specific Date(e.g., "31/12/2023"): Sets the end date to the specified date.
    //Empty or Not Present: Defaults to null.
    //Use in Html
    //call Like these
    //<div style=" position: relative;">
    //    <input type="text" name="YourDate" class="form-control datepicker-input " autocomplete="off" data-dateStart="Current"ata-dateend="29/02/2024" placeholder="dd/mm/yyyy" id="YourDate">
    //    <span class="input-group-addon "><i class="fa fa-calendar m-0 p-0"></i></span>

    //</div>
    $(".datepicker-input").each(function () {
        var idAttributeValue = $(this).attr("id");
        var startDateValue = $(this).data("datestart");
        var endDateValue = $(this).data("dateend");

        // If startDateValue is not specified or is "Current", set it to the current date
        if (!startDateValue) {
            startDateValue = null;
        } else if (startDateValue.toLowerCase() === "current") {
            startDateValue = new Date();
        } else {
            // Parse the date string manually to handle "dd/mm/yyyy" format
            var StartDateParts = startDateValue.split("/");
            startDateValue = new Date(StartDateParts[2], StartDateParts[1] - 1, StartDateParts[0]);
        }

        // end date 
        if (!endDateValue) {
            endDateValue = null;
        } else if (endDateValue.toLowerCase() === "current") {
            endDateValue = new Date();
        } else {
            // Parse the date string manually to handle "dd/mm/yyyy" format
            var endDateParts = endDateValue.split("/");
            endDateValue = new Date(endDateParts[2], endDateParts[1] - 1, endDateParts[0]);
        }

        $("#" + idAttributeValue).datepicker({
            format: "dd/mm/yyyy",
            autoclose: true,
            todayBtn: "linked",
            todayHighlight: true,
            forceParse: true,
            startDate: startDateValue,
            endDate: endDateValue,
        });
    });
    /*DatePicker End here js*/
    //call Like these
    //<div style=" position: relative;">
    //    <input type="text" name="YourDate" class="form-control datetimepicker-input " autocomplete="off" data-dateStart="Current"ata-dateend="29/02/2024" placeholder="dd/mm/yyyy" id="YourDate">
    //    <span class="input-group-addon "><i class="fa fa-calendar m-0 p-0"></i></span>

    //</div>
    /*DatePickerTime Start here js*/
    $(".datetimepicker-input").each(function () {
        var idAttributeValue = $(this).attr("id");
        var startDateValue = $(this).data("datestart");
        var endDateValue = $(this).data("dateend");

        // If startDateValue is not specified or is "Current", set it to the current date
        if (!startDateValue) {
            startDateValue = null;
        } else if (startDateValue.toLowerCase() === "current") {
            startDateValue = moment();
        } else {
            // Parse the date string manually to handle "dd/mm/yyyy" format
            var StartDateParts = startDateValue.split("/");
            startDateValue = moment(StartDateParts[2] + "-" + StartDateParts[1] + "-" + StartDateParts[0]);
        }

        // end date 
        if (!endDateValue) {
            endDateValue = null;
        } else if (endDateValue.toLowerCase() === "current") {
            endDateValue = moment();
        } else {
            // Parse the date string manually to handle "dd/mm/yyyy" format
            var endDateParts = endDateValue.split("/");
            endDateValue = moment(endDateParts[2] + "-" + endDateParts[1] + "-" + endDateParts[0]);
        }

        $("#" + idAttributeValue).bootstrapMaterialDatePicker({
            format: "DD/MM/YYYY HH:mm", // Date and time format
            minDate: startDateValue,
            maxDate: endDateValue
        });

        $('.dtp > .padder').css({
            'background-color': 'orange' // Change to the color you desire
        });
    });
    /*DatePickerTime End here js*/
    $('.dropdown').on('click', function () {
        var icon = $(this).find(".svg-inline--fa.arrow");

        icon.hasClass("fa-angle-down") ? icon.removeClass("fa-angle-down").addClass("fa-angle-up") : icon.removeClass("fa-angle-up").addClass("fa-angle-down");

        var dropdownId = $(this).data('dropdown');
        $('#' + dropdownId).toggleClass('hide');
    });
});

