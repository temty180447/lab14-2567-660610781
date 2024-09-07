import { Button, Modal, Stack, Text } from "@mantine/core";
import { TermsAndConditionsProps } from "@lib/types";
export default function TermsAndConditions({
  opened,
  close,
}: TermsAndConditionsProps) {
  return (
    <Modal opened={opened} onClose={close} title="Terms and conditions">
      <Text color="dimmed">   
        1. Some long terms and conditions ...
        <br />
        2. Some long terms and conditions ...
        <br />
        3. Some long terms and conditions ...
      </Text>
      <Stack align="center" mt="sm">
        <Button onClick={close}>Confirm</Button>
      </Stack>
    </Modal>
  );
}