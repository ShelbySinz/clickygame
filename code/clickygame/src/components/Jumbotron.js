import React from "react";

const styles = {
  jumbotronStyle: {
    background: "lightBlue",
    textAlign: "center"
  },
  headingStyle: {
    fontSize: 100
  }
};

function Jumbotron() {
  return (
    <div className="jumbotron"style={styles.jumbotronStyle}>
      <h1>Clicky Game</h1>
      <p>
       Click on an image to earn points! But be careful if you click on the same picture you lose!
      </p>
    </div>
  );
}

export default Jumbotron;
