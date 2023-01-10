export default function sendWhatsAppMessage(phoneNumber: string) {
  phoneNumber = phoneNumber
    .replace("(", "")
    .replace(")", "")
    .replace("-", "")
    .replace(/\s/g, ""); // remove all spaces

  const url = `https://api.whatsapp.com/send?phone=55${phoneNumber}`;
  window.open(url, "_blank").focus();
}
