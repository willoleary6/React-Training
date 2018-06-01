

      import React from 'react';
      import {Component} from "react";
      import {connect} from 'react-redux';
      import {bindActionCreators} from 'redux';
      import {fetchQuote,deleteQuote} from "../actions";

      class CheckBox extends Component{
      /* This component contains the two control buttons which
       * use redux to control the tables.*/

      constructor(props){
      super(props);
      //binding functions
      this.handleChangeChk=this.handleChangeChk.bind(this);

    }
        handleChangeChk(e){
         //get a new quote from the server.
         //this.props.fetchQuote();
          console.log('Checked:'+e.target.checked+" "+e.target.id);
    }

    render() {

      return (
        <input type="checkbox" id= '1' onChange={this.handleChangeChk} />
      )
    }

    }
      //getting access to data in the store
      const mapStateToProps = state => (
      {data: state.data,
        deletedData: state.deletedData
      });
      //getting access to functions in the store
      const mapDispatchToProps = dispatch =>
      bindActionCreators({fetchQuote,deleteQuote}, dispatch);
      //connect this component to redux
      export default connect(mapStateToProps, mapDispatchToProps)(CheckBox);

