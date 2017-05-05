$(document).ready( onReady);

function onReady(){
$('#addAlbumButton').on('click', addAlbum);
$('#outputDiv').on('click', '.remove',  deleteAlbum);
getAlbums();
}
function addAlbum(){
  console.log("addAlbum");
  var objectToSend = {
    artist: $('#artistIN').val(),
    imageUrl: $('#imageUrl').val(),
    name: $('#albumIn').val(),
    releasedYear: $('#yearIn').val()
    };
    console.log('this is objectToSend:', objectToSend);

  $.ajax({
  type: 'POST',
  url: '/albums',
  data: objectToSend,
  success: function (response){
    console.log('back with:', response);
  }//end success
});// end ajax
}// end addAlbum

function getAlbums (){
  $.ajax({
    type: 'GET',
    url: '/albums',
    success: function (response){
      console.log('back with:', response);
      //empty outputDiv
      outputDiv = $('#outputDiv');
      outputDiv.empty();
      for (var i = 0; i < response.length; i++) {
      var cellText = '<div class="col-sm-3"><img src="' + response[i].imageUrl + '"style="width:80%" />';
      cellText += "<p><button class='btn remove' data-id = " + response[i]._id + ">Remove</button></p>";
      cellText += "<p>" +response[i].artist +"</p>";
      cellText += "<p>" +response[i].name + "</p>";
      cellText += "<p>" +response[i].releasedYear + "</p>" + "</div>";


      outputDiv.append(cellText);
      }//end for
    }//end success
  });// end ajax
}// end getAlbums




function deleteAlbum(){


  var albumToDelete= $(this).data('id');
  var objectToDelete = {
    id: albumToDelete
  };
  console.log(objectToDelete);
  $.ajax({
  type: 'DELETE',
  url: '/albums/' + $(this).data('id') ,
  data: objectToDelete,
  success: function (response){
    console.log('back with:', response);
  }//end success
});// end ajax
}// end addAlbum
