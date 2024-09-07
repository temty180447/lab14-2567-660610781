import { Text } from '@mantine/core';
import { FooterProps } from "@lib/types";

export default function Footer({ year, name, studentId }: FooterProps) {
  return (
    <div>
      <Text c="dimmed" > Copyright © {year} {name} {studentId} </Text>
    </div>
  );
}