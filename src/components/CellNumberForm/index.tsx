import { useState, forwardRef } from "react";
import { Button, Input } from "@mui/material";
import { styled } from "@mui/material/styles";
import SendIcon from "@mui/icons-material/Send";
import { IMaskInput } from "react-imask";
import sendWhatsAppMessage from "../../services/sendWhatsAppMessage";

interface Props {
  onChange: (event: { target: { name: string; value: string } }) => void;
  name: string;
}

const TextMaskCustom = forwardRef<HTMLElement, Props>(function TextMaskCustom(
  props,
  _
) {
  const { onChange, ...other } = props;
  return (
    <IMaskInput
      {...other}
      mask="(00) 000000000"
      onAccept={(value: any) =>
        onChange({ target: { name: props.name, value } })
      }
      overwrite
    />
  );
});

const TextField = styled(Input)({
  "& .MuiInputBase-input": {
    borderRadius: 4,
    border: "1px solid",
    padding: "16.5px 14px",
  },
});

export default function CellNumberForm() {
  const [cellNumber, setCellNumber] = useState("");

  async function sendMessage(cellNumber: string) {
    await sendWhatsAppMessage(cellNumber);
    setCellNumber("");
  }

  return (
    <>
      <TextField
        id="formatted-text-mask-input"
        placeholder="Cell number"
        type="numeric"
        disableUnderline
        required
        fullWidth
        autoFocus
        inputComponent={TextMaskCustom as any}
        value={cellNumber}
        onChange={(event) => setCellNumber(event.target.value)}
      />

      <p>Type the cell number to send a message</p>

      <Button
        color="success"
        variant="contained"
        disableElevation
        size="large"
        startIcon={<SendIcon />}
        onClick={() => sendMessage(cellNumber)}
      >
        Send Message
      </Button>
    </>
  );
}
