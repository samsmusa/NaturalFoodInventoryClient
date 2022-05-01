import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { Link } from "react-router-dom";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function CustomizedSnackbars({
  type,
  massage,
  extra,
  link,
  click,
}) {
  console.log(type, massage);
  const [open, setOpen] = React.useState(true);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <Stack spacing={2} sx={{ width: "100%" }}>
      <Snackbar open={open} autoHideDuration={10000} onClose={handleClose}>
        {type === "success" ? (
          <Alert
            onClose={handleClose}
            severity="success"
            sx={{ width: "100%" }}
          >
            {massage}{" "}
            {link && (
              <Link className="text-warning" to={link}>
                {extra}
              </Link>
            )}
            {click && (
              <span
                onClick={click}
                className="text-primary"
                style={{ cursor: "pointer" }}
              >
                {extra}
              </span>
            )}
          </Alert>
        ) : type === "error" ? (
          <Alert severity="error" onClose={handleClose} sx={{ width: "100%" }}>
            {massage}{" "}
            {link && (
              <Link className="text-warning" to={link}>
                {extra}
              </Link>
            )}
            {click && (
              <span
                onClick={click}
                className="text-primary"
                style={{ cursor: "pointer" }}
              >
                {extra}
              </span>
            )}
          </Alert>
        ) : (
          <Alert
            severity="warning"
            onClose={handleClose}
            sx={{ width: "100%" }}
          >
            {massage}{" "}
            {link && (
              <Link className="text-warning" to={link}>
                {extra}
              </Link>
            )}
            {click && (
              <span
                onClick={click}
                className="text-primary"
                style={{ cursor: "pointer" }}
              >
                {extra}
              </span>
            )}
          </Alert>
        )}
      </Snackbar>
    </Stack>
  );
}
