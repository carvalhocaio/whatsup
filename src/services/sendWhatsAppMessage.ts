export default function sendWhatsAppMessage(cellNumber: string) {
  cellNumber = cellNumber.replace("(", "").replace(")", "").replace(" ", "");
  const url = `https://api.whatsapp.com/send?phone=55${cellNumber}`;
  window.open(url, "_blank").focus();
}
