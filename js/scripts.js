function PlacesList(){
  this.places = [];
  this.currentId = 0;
}
PlacesList.prototype.addPlace = function(place){
  place.id = this.assignId()
  this.places.push(place);
}
PlacesList.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}


function Place(location, landmark, timeOfYear){
  this.location = location;
  this.landmark = landmark; 
  this.timeOfYear = timeOfYear;
  }




  var placeList = new PlacesList();

  function displayPlacesDetails(placesListToDisplay) {
    var detailsList = $("ul#places");
    var htmlForLocationInfo = "";
    placesListToDisplay.places.forEach(function(place) {
      htmlForLocationInfo += "<li id=" + place.id + ">" + place.location + " " + place.landmark + " " + place.timeOfYear + "</li>";
    });
    detailsList.html(htmlForLocationInfo);
  }
$(document).ready(function() {
  $("#user-places").submit(function(event) {
    event.preventDefault();
    var location = $("input#location").val();
    var landmark = $("input#landmark").val();
    var timeOfYear = $("input#time-of-year").val();
    var newPlace = new Place(location, landmark, timeOfYear)
    placeList.addPlace(newPlace);
    displayPlacesDetails(placeList);
  
  
    
  })
})