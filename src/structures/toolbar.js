import React from "react";
import { Toolbar, ToolbarButton, Icon, BackButton } from "react-onsenui";
import { useHistory, useLocation } from "react-router-dom";

const AppToolbar = () => {
  const history = useHistory();
  const location = useLocation();

  return (
    <Toolbar>
      <div className="center">Jarvis</div>
      <div className="left">
        {history.length > 1 && (
          <BackButton onClick={history.goBack}></BackButton>
        )}
        {history.length <= 1 && location.path !== "/" && (
          <ToolbarButton>
            <Icon
              icon="ion-navicon, material:md-menu"
              onClick={() => history.push("/")}
            >
              Home
            </Icon>
          </ToolbarButton>
        )}
      </div>
      <div className="right">
        <ToolbarButton>
          <Icon icon="ion-navicon, material:md-menu"></Icon>
        </ToolbarButton>
      </div>
    </Toolbar>
  );
};

export default AppToolbar;
