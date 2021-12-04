// import PropTypes from 'prop-types';
import React,{ useEffect }  from 'react';


//configure airtable:
const Airtable = require('airtable');

const airtableConfig = {
  apiKey: process.env.REACT_APP_AIRTABLE_USER_KEY,
  baseKey: process.env.REACT_APP_AIRTABLE_BASE_KEY,

};

const base = new Airtable({apiKey: airtableConfig.apiKey})
  .base(airtableConfig.baseKey);



class NewPost extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleChange(event) {

        this.setState({value: event.target.value});
        

    }

    handleSubmit(event) {

        base('Posts').create([
            {
                "fields": {
                    "Body": this.state.value.toString() + " got to milestone 3!",
                    "Author": this.state.value.toString()
                }
            }
        
        ],{typecast:true}, function(err, records) {
            if (err) {
              console.error(err);
              return;
            }
        }
        );
    
        // window.location.reload();

        event.preventDefault();

    }



    render() {
        return (
        <form onSubmit = {this.handleSubmit}>
            <label>
                Author:

                <input type = "text" value = {this.state.value} onChange = {this.handleChange}/>
            </label>
            
            <br></br>

            <input type = "submit" value = "Submit"/>


        </form>
        );

    }


}


// base('Posts').create([
//     {
//         "fields": {
//             "Body": "",
//             "Author": ""
//         }
//     }

// ]);


export default NewPost;
// ReactDOM.render(<NewPost/>)