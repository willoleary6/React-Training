export default function updateTable(data){

  //breaking down the string response from the server into json
  var stringResponse = data.data;

  //last index of '-' is normally the prefix to the author of the quote.
  var quote = stringResponse.substring(0, stringResponse.lastIndexOf("-")).trim();
  //cut the quote out of the unfiltered string.
  stringResponse = stringResponse.substring(stringResponse.lastIndexOf("-") + 1);
  //there is normally a ',' preceding the movie/tv show so we simply cut between the '-' and ','.
  var author = stringResponse.substring(stringResponse.indexOf('-') + 1, stringResponse.indexOf(',')).trim();
  stringResponse = stringResponse.substring(stringResponse.lastIndexOf(",") + 1).trim();
  //whats left is the movie (Generally :P)
  var movie = stringResponse;
  //store variables as json.
  var json = {'quote': quote, 'author': author, 'movie': movie};
  //add json to pre existing list of quotes.
  return json;

}
