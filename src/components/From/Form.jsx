import React from 'react';
import './Form.css';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.sendBodyToParent = this.sendBodyToParent.bind(this);
  }

  handleChange(event) {
    const field = event.target.name;  //event.taget.name===body bodyはstateで管理されている
    this.setState({
      [field]:event.target.value    //変数名をプロパティに使いたい場合は[]に入れて使う
    })
  }

  sendBodyToParent() {

  }

  render() {
    return (
      <div>
        <div className="Form-textarea">
          <textarea
            name="body"
            cols="30"
            rows="5"
            value={this.state.body}
            onChange={this.handleChange}
            ></textarea>
        </div>
      </div>
    )
  }
}




export default Form;