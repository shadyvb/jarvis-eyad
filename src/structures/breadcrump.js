import React from "react";
import { Navbar, Button, Alignment } from "@blueprintjs/core";
import { useHistory } from "react-router-dom";

const AppBreadcrumb = ({ Component }) => {
  const history = useHistory();
  const goHome = () => history.push("/");
  const goBack = () => history.goBack();

  return (
    <Navbar className="bp3-dark">
      <Navbar.Group align={Alignment.LEFT}>
        <Button className="bp3-minimal" icon="home" onClick={goHome} />
        {history.length > 1 && (
          <Button
            className="bp3-minimal"
            icon="chevron-left"
            onClick={goBack}
          />
        )}
        <Navbar.Divider />
        <Navbar.Heading>Jarvis</Navbar.Heading>
      </Navbar.Group>
      <Navbar.Group align={Alignment.RIGHT}>
        <Button className="bp3-minimal" icon="menu" text={""} />
      </Navbar.Group>
    </Navbar>
  );
};

export default AppBreadcrumb;
