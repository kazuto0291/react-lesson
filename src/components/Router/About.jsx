import React from 'react';

function About(props) {
  console.log(props)
  const { history } = props;
  return (
    <div>
      <h1 onClick={() => {history.goBack();} }>アバウトページです</h1>
    </div>
  );
}

export default About;