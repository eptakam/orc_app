const fileSelector = $('input');
const start = $('button');
const progress = $('.progress');
const img = $('img');
const textarea = $('#textarea');




$(document).ready(function() {
// first show image on upload
  fileSelector.change(function() {
    // upload the first selected file
    let file = $(this)[0].files[0];

    // create a URL for the upload image
    let imgUrl = window.URL.createObjectURL(new Blob([file], {type: 'image/jpg'}));
    console.log(imgUrl);

    // set the image source to the uploaded image
    img.attr('src', imgUrl);
  });
});
