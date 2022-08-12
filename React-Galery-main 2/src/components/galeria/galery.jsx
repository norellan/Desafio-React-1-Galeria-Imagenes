import CardComponent from "./card";
import { Container, Row } from "react-bootstrap";
import React, { Component } from "react";

const GaleryComponent = () => {
  return (
    <Container className="d-flex justify-content-center p-5">
      <Row>
        <div className="col-md-4">
          <CardComponent
            CardTitle="10 tracks to echo in the dark"
            CardSubtitle= "The Kooks"
            CardSrc="https://i.ibb.co/JqZQHTC/the-kooks-10-tracks-to-echo-in-the-dark-portada.jpg"
            CardText="Precio: $12.000"
          />
        </div>

        <div className="col-md-4">
          <CardComponent
            CardTitle="The other side of make believe"
            CardSubtitle= "Interpol"
            CardSrc="https://i.ibb.co/W0KSZqW/interpol-the-other-side-of-make-believe-portada.jpg"
            CardText="Precio: $11.000"
          />
        </div>

        <div className="col-md-4">
          <CardComponent
            CardTitle="Cheat codes - Black Thought"
            CardSubtitle= "Danger Mouse"
            CardSrc="https://i.ibb.co/PjpcBtg/danger-mouse-cheat-codes-con-black-thought-portada.jpg"
            CardText="Precio: $10.000"
          />
        </div>
      </Row>
    </Container>
  );
};

export default GaleryComponent;
