document.addEventListener("DOMContentLoaded", function() {

  var candidatesList = document.querySelector('#candidate-list');

  $.ajax({
    url: 'https://bb-election-api.herokuapp.com/',
    method: 'GET',
    data: {},
    dataType: 'json'
  }).done(function(responseData) {
    responseData.candidates.forEach(function(candidate) {
      var candidateItem = document.createElement('li');
      var candidateParagraph = document.createElement('p');

      candidateParagraph.innerText = candidate.name + ": " + candidate.votes;

      candidateItem.append(candidateParagraph);
      candidatesList.append(candidateItem);
    });
  });

});
