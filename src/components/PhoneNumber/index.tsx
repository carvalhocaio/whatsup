import {
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  Heading,
  Input,
  InputGroup,
  InputLeftAddon,
  Stack,
  StackDivider,
} from "@chakra-ui/react";
import { useState, RefObject, ChangeEvent } from "react";
import { useIMask } from "react-imask";
import { ImWhatsapp } from "react-icons/im";
import sendWhatsAppMessage from "../../services/sendWhatsAppMessage";

export default function PhoneNumber() {
  const { ref, setValue } = useIMask({ mask: "(00) 9 0000-0000" });

  const [phoneNumber, setPhoneNumber] = useState("");
  const [buttonState, setButtonState] = useState(true);

  function handlePhoneNumber(event: ChangeEvent<HTMLInputElement>) {
    setPhoneNumber(event.target.value);
    event.target.value.length == 16 && setButtonState(false);
  }

  async function sendMessage(phoneNumber: string) {
    await sendWhatsAppMessage(phoneNumber);
    setValue("");
  }

  return (
    <>
      <Stack divider={<StackDivider />} spacing={4}>
        <Heading size="md" mt={10}>
          Send messages on WhatsApp without saving contact!
        </Heading>
        <FormControl isRequired>
          <FormLabel>Phone number</FormLabel>
          <InputGroup size="lg">
            <InputLeftAddon children="+55" />
            <Input
              focusBorderColor="green.500"
              placeholder="(00) 9 0000-0000"
              onChange={(event) => handlePhoneNumber(event)}
              ref={ref as RefObject<HTMLInputElement>}
              autoFocus
            />
          </InputGroup>
          <FormHelperText>
            Type the cell number to send a message
          </FormHelperText>
        </FormControl>
      </Stack>

      <Button
        disabled={buttonState}
        rightIcon={<ImWhatsapp />}
        colorScheme="whatsapp"
        size="lg"
        mt={5}
        onClick={() => sendMessage(phoneNumber)}
      >
        Send Message
      </Button>
    </>
  );
}
