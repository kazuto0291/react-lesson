import React from 'react';
import Button from '../Button/Button';
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
    const body = this.state.body.trim();
    if (!body) {
      alert('何も入力していません');
      return;
    }

    if (typeof this.props.onSubmit === 'function') {
      this.props.onSubmit(body);
    }

    this.setState({
      body: ''
    });
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
        <Button onClickHandler={this.sendBodyToParent}>コメントする</Button>
      </div>
    )
  }
}




export default Form;