import React from "react";
import "./styles.css";

const myHOCFunction = (MyComponent) => {
    return class extends MyComponent {
      render() {
        if (this.props.author) {
          return <MyComponent {...this.props} />;
        } else {
          return (
            <div className="UserInfo">
              <h3>There are no authors at this time</h3>
            </div>
          );
        }
      }
    };
  };
  
  export default myHOCFunction;