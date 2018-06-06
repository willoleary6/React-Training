import React from 'react';
import HomeworkButton from '../../components/HomeworkButton'

function AddDelete(props){
  /* This component contains the two control buttons which
   * use redux to control the tables.*/
    return (
       <div>
         {
           /*onClick ={this.props.fetchQuote}*/
           /*onClick={this.props.deleteQuote}*/
         }
         <HomeworkButton onClick ={props.fetchQuote}>add Quote</HomeworkButton>
         <HomeworkButton >Delete Selected</HomeworkButton>
       </div>
      )
}
export default AddDelete;
