import React from "react";
import { Card } from "react-bootstrap";

const Final = ({ values }) => {

    //destructuring the object from values
  const { agentbanner,agentlogo,displayname,age,email } = values;
  return (
    <>
      <Card style={{ marginTop: 100, textAlign: "center" }}>
        <Card.Body>
        <img src={agentbanner} />
        <img src={agentlogo}/>
          <p>
            <strong>Age :</strong> {age}{" "}
          </p>
          <p>
            <strong>Email :</strong> {email}{" "}
          </p>
        </Card.Body>
      </Card>
    </>
  );
};

export default Final;
