import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const Header = () => {
  return (
    <div>
      <AppBar position="static" style={{ backgroundColor: "darkblue" }}>
        <Toolbar>
          <Typography variant="h6" color="inherit">
            NASA Photo Of The Day{" "}
            <span role="img" aria-label="rocket">
              🚀
            </span>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
