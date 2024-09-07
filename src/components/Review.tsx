import { Group, Title, Text, Divider, Rating } from '@mantine/core';
import { ReviewProps } from '@lib/types';
export default function Review({id, name, rating, comment} :ReviewProps) {
  return (
    <div>
    <Divider my="sm" />
    
    <Group justify="center" ta="center">
        <Title order={4}> {name} </Title>
        <Rating value={rating} readOnly />
    </Group>

      <Text c="dimmed" fz={15.2} ta="center" >{comment}</Text>
    </div>
  )
}