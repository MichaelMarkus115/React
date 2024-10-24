import React, { Component } from "react";

class homework extends Component {
  constructor() {
    super();
    this.images = [
      {
        src: "http://loremflickr.com/150/150?random=1",
        alt: "Cat 1",
        text: "This is the first Cat.",
      },
      {
        src: "http://loremflickr.com/150/150?random=2",
        alt: "Cat 2",
        text: "This is the second Cat.",
      },
      {
        src: "http://loremflickr.com/150/150?random=3",
        alt: "Cat 3",
        text: "This is the third Cat.",
      },
    ];
  }

  render() {
    return (
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        {this.images.map((image, index) => (
          <div key={index} style={{ textAlign: "center" }}>
            <img
              src={image.src}
              alt={image.alt}
              style={{ width: "150px", height: "150px" }}
            />
            <p>{image.text}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default homework;



