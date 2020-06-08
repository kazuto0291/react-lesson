import React from 'react';

function About(props) {
  console.log(props)
  const { history } = props;
  const location = props.location;
  const match =props.match;
  console.log(location);
  console.log(match);
  
  return (
    <div>
      <h1 onClick={() => {history.goBack();} }>アバウトページです</h1>
    </div>
  );
}

export default About;