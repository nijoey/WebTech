"use strict";
/*jshint browser:true*/
/*globals $*/
/*jshint unused:false*/

function callData() {
    $.ajax({
        url: "http://localhost:3000/actors",
        type: "GET",
        dataType: "json",
        success: function(data) {
            $.each(data, function(i, interation) {
                var htm = "";
                htm += "<div class=\"mdl-list__item\">" +
                    "<span class=\"mdl-list__item-primary-content\">" +
                    "<i class=\"material-icons mdl-list__item-avatar\">person\"</i>" +
                    "<span>" + interation.name + "</span>" +
                    "<span hidden>" + interation.id + "</span>" +
                    "<span id=\"star_property\" hidden>" + interation.starred + "</span>" +
                    "</span>";
                if (interation.starred === true) {
                    htm += "<a class=\"mdl-list__item-secondary-action\"><i id=\"" + interation.id + "\" onclick=\"isStarred(" + interation.id + ",'" + interation.name + "'," + interation.starred + ")\" class=\"material-icons\">star</i></a></div>";
                }
                else {
                    htm += "<a class=\"mdl-list__item-secondary-action\" ><i id=\"" + interation.id + "\"  onclick=\"isStarred(" + interation.id + ",'" + interation.name + "'," + interation.starred + ")\" class=\"material-icons\">star_border</i></a></div>";
                }
                $("#main_list").append(htm);
            });
        },
        error: function(xhr, ajaxOptions, thrownError) {
	    console.log("xhr "+xhr+"ajaxOptions "+ajaxOptions+"thrownError "+thrownError);
            window.alert("There was some problem with the server. Please try again");
        }
    });
}

$(document).ready(function() {
    callData();
});



function isStarred(userId, userName, status) {

    var newStatus = status;
    if (status === true) {
        newStatus = false;
    }
    else {
        newStatus = true;
    }
    $.ajax({
        url: "http://localhost:3000/actors/" + userId,
        type: "PUT",
        dataType: "json",
        data: { "name": userName.toString(), "starred": newStatus.toString() },
        success: function(data) {

            if (newStatus === true) {
                $("#" + data.id)[0].parentNode.parentNode.children[1].children[0].innerHTML = "star";
            }
            else {
                $("#" + data.id)[0].parentNode.parentNode.children[1].children[0].innerHTML = "star_border";
            }
            $("#main_list").html("");
            callData();
        },
        error: function(thrownError) {
	    console.log("thrownError "+thrownError);
            window.alert("There was some problem with the server. Please try again");
        }
    });
}

function saveRecord() {
    var name1 = $("#aName").val();
    if (name1 === "" || name1 === null) {
        window.alert("Enter name");
    }
    else {
        $.ajax({
            url: "http://localhost:3000/actors",
            type: "POST",
            data: JSON.stringify({ "name": name1.toString(), "starred": false.toString() }),
            contentType: "application/json",
            dataType: "json",
            success: function() {
                console.log("Successful Insert");
            },
            error: function(thrownError) {
		console.log("thrownError "+thrownError);
		window.alert("There was some problem with the server. Please try again");
            }
        });
    }
}
