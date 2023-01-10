import { Button, Heading } from "@chakra-ui/react";
import { memo, useCallback } from "react";
import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();
  const goHome = useCallback(() => {
    navigate("/");
  }, []);

  return (
    <>
      <Heading size="3xl">Ops! Not Found!</Heading>
      <Button
        m={10}
        size="lg"
        variant="link"
        colorScheme="whatsapp"
        onClick={goHome}
      >
        Click here to back home page
      </Button>
    </>
  );
}

export default memo(NotFound);
