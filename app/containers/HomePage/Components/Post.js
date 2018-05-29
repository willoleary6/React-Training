import React, {Component} from 'react';
import Table from  './Table.js';
class Post extends Component{
  constructor(props){
    super(props);
    this.state = {
      posts :[],
      headers: ['Quote','Author','Show/Movie'],
      tableData:[]
    }
    //binding functions
    this.updateTable=this.updateTable.bind(this);
    this.fetchQuote=this.fetchQuote.bind(this);
  }
  componentWillMount(){
    //call fetch quote at the start of the life cycle so we have a quote loaded up.
    this.fetchQuote();
  }
  fetchQuote(){
    fetch('http://ne-dev-pegasus-quotes.azurewebsites.net/api/values')
    //since we get a promise element, we must first resolve it.
      .then((response) => {
        return response.text();
      })
      //once resolves we store it in the posts state
      .then(data =>  this.setState({posts: data}));
  }
  updateTable(){
    //breaking down the string response from the server into json
    var stringResponse = this.state.posts.toString();
    //last index of '-' is normally the prefix to the author of the quote.
    var quote = stringResponse.substring(0,stringResponse.lastIndexOf("-")).trim();
    //cut the quote out of the unfiltered string.
    stringResponse = stringResponse.substring(stringResponse.lastIndexOf("-")+1);
    //there is normally a ',' preceding the movie/tv show so we simply cut between the '-' and ','.
    var author = stringResponse.substring(stringResponse.indexOf('-')+1,stringResponse.indexOf(',')).trim();
    stringResponse = stringResponse.substring(stringResponse.lastIndexOf(",")+1).trim();
    //whats left is the movie (Generally :P)
    var movie = stringResponse;
    //store variables as json.
    var json =  {'quote':quote,'author':author,'movie':movie};
    //add json to pre existing list of quotes.
    var newJson = this.state.tableData.slice();
    newJson.push(json);
    this.setState({tableData: newJson});
    //call fetch qoute again so if user calls this function again, we have a quote loaded up.
    this.fetchQuote();
  }
  render(){
    return(
      <div>
        {
          <button onClick = {this.updateTable}><b>Add</b> (Temporary while I figure out redux)</button>
        }
        {
          <Table
            title ="Add Table"
            headers = {this.state.headers}
            tableData={this.state.tableData}
          />
          /*<Table
          title="Delete Table"
          info={sampleData}/>
        */}

      </div>
    );
  }
}

export default Post;
