export default function convertQuoteToJSON(quoteReceived){
  //breaking down the string response from the server into json
  var stringResponse =quoteReceived;
  //console.log(stringResponse.match(/(^.*)-(.*)?,(.*)?/)[0]);
  // last index of '-' is normally the prefix to the author of the quote.
  var quote = stringResponse.match(/(^.*)-(.*)?,(.*)?/)[1];
  //there is normally a ',' preceding the movie/tv show so we simply cut between the '-' and ','.
  var author = stringResponse.match(/(^.*)-(.*)?,(.*)?/)[2];

  //whats left is the movie (Generally :P)
  var movie = stringResponse.match(/(^.*)-(.*)?,(.*)?/)[3];

  //store variables as json.
  var json = {'id':new Date().getTime(),'quote': quote.trim(), 'author': author.trim(), 'movie': movie.trim()};
  //add json to pre existing list of quotes.
  return json;

}
