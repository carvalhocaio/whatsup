import { memo, useCallback } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();
  const goHome = useCallback(() => {
    navigate("/");
  }, []);

  return (
    <>
      <h1>Not Found!</h1>
      <h2>Go back to home page</h2>

      <Button
        color="success"
        variant="outlined"
        disableElevation
        size="large"
        onClick={goHome}
      >
        Click Here
      </Button>
    </>
  );
}

export default memo(NotFound);
