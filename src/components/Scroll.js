import React from 'react';

const Scroll = (props) => {
  return (
    <div style={{ overflow: 'scroll', border: '3px solid black', maxWidth: "1450px", margin: '0 auto', height: '550px' }}>
      {props.children}
    </div>
  );
};

export default Scroll;