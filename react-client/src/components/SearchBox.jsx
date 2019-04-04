import React, {Component} from 'react';

class SearchBox extends Component {
  constructor(props){
    super(props);
    this.state = {
    	value: ''};

    	this.handleChange = this.handleChange.bind(this);
    	this.handleSubmit = this.handleSubmit.bind(this);
    }

  }

   

   handleChange(event) {
    this.setState({value: event.target.value});
  }          

  handleSubmit(event) {
  	alert('A name was submitted: ' + this.state.value);
  	event.preventDefault();
  }    

  render() {
  	return (
  	 <form onSubmit = {this.handleSubmit}>
      <label>
        Search:
      <input type="search" name="name" value={this.state.value} onChange={this.handleChange}  />
      </label>
      <input type="submit" value="Go" placeholder='text' />
    </form>
)
  
  	
     
  	 
  	  
  
  }

}

export default SearchBox