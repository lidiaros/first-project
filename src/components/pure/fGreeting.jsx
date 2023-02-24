import React, { useState } from "react";
import PropTypes from "prop-types";

const FGreeting = (props) => {
  const [age, setage] = useState(21);

  return (
    <div>
      <h1>Hola{props.name} desde FGreeting</h1>
      {/* <h2>Mi edad es: {this.state.age}</h2>
      <div>
        <button onClick={this.birthday}>Suma un año de vida</button>
      </div> */}
    </div>
  );
};

FGreeting.propTypes = {
  name: PropTypes.string,
};

export default FGreeting;
