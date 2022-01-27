import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";



class Box extends React.Component {
  render() {
    return (
      <div className="box col-sm-3 col-6">
        <span
          className="material-icons"
          style={{ color: this.props.color, fontSize: 100 }}
        >
          {this.props.icon}
        </span>
        <p>
          {this.props.value} {this.props.unit}
        </p>
        {this.props.icon === "local_drink" ? null : (
          <input type="range"
                  min={this.props.min}
                  max={this.props.max}
                  value={this.props.value}
                  onChange={this.props.onChange}
          />
        )}
        
      </div>
    );
  }
}

export default Box;
