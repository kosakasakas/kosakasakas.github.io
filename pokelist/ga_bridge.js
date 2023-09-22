
function readCsv(data) {
  var target = '#csv-body';
  var csv = $.csv.toArrays(data);
  var insert = '';
  $(csv).each(function() {
    if (this.length > 0) {
      insert += '<tr>';
      $(this).each(function() {
        insert += '<td>' + this + '</td>';
      });
      insert += '</tr>';
    }
  });
  $(target).append(insert);
}
var csvfile = 'test.csv';
$(function(){
  $.get(csvfile, readCsv, 'text');
});

function readCSVData(filePath, successCallback, failCallback)
{
  $.get( filePath, function(data) {
    var csv = $.csv.toArrays(data, { separator:',', delimiter:'\n' });
    csv.shift();
    successCallback(csv);
  }, 'text')
  .done(function() {
    //alert( "second success" );
  })
  .fail(function() {
    //alert( "error" );
    failCallback();
  })
  .always(function() {
    //alert( "finished" );
  });
}