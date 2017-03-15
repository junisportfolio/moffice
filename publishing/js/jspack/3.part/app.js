<<<<<<< HEAD
var __$ = {
  api: "",
  img: "",
  error: function(errorObject) {
    console.log("%c" + errorObject.status + "%c%s\n", "border-radius: 50px; color: white; background: red; padding: 5px; line-height: 30px; margin-right: 5px", "color: red", errorObject.statusText, errorObject.responseJSON || errorObject.responseText);
  },
  get: function(url, query, success) {
    let that = this;

    $.ajax({
      method: "GET",
      url: that.api + url + query,
      cache: false,
      xhrFields: {
        withCredentials: true
      },
      success: success,
      error: that.error
    });
  },
  post: function(url, formData, success) {
    let that = this;

    $.ajax({
      method: "POST",
      url: that.api + url,
      data: formData,
      cache: false,
      xhrFields: {
        withCredentials: true
      },
      success: success,
      error: that.error
    });
  },
  put: function(url, formData, success) {
    let that = this;

    $.ajax({
      method: "PUT",
      url: that.api + url,
      data: formData,
      cache: false,
      xhrFields: {
        withCredentials: true
      },
      success: success,
      error: that.error
    });
  },
  delete: function(url, success) {
    let that = this;

    $.ajax({
      method: "DELETE",
      url: that.api + url,
      cache: false,
      xhrFields: {
        withCredentials: true
      },
      success: success,
      error: that.error
    });
  }
=======
"use strict";



$(function(){



});
>>>>>>> 29b0ce9cc4ecda1cdabeaba5b32d346d5dbc8f85
