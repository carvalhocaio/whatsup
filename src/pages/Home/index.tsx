import { Heading, Stack, StackDivider } from "@chakra-ui/react";
import PhoneNumber from "../../components/PhoneNumber";

export default function Home() {
  return (
    <>
      <Heading size="3xl">What's Up?</Heading>
      <PhoneNumber />
    </>
  );
}
