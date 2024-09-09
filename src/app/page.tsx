"use client";
import { Container, Text, Title, Rating, Space, Textarea, Button, Divider, Group, Pagination} from "@mantine/core";
import Footer from "@components/Footer";
import Review from "@components/Review";
import { Reviews } from "@lib/review";

export default function Home() {
  return (
    <Container size="600px">
      <Title order={2}>Food Review 🍕</Title>

      <Space h="xs" />

      <Title order={4}>Your rating</Title>
      <Rating defaultValue={0} size="lg" />

      <Space h="lg" />

      <Textarea
      rows={3}
      label="Your review"
      placeholder="Do you enjoy eating?"
      />
      <Space h="xs" />
      <Button variant="filled" color="orange">Submit Review</Button>

      {Reviews.map((review) => (
        <Review key={review.id} {...review} />
      ))}


      <Group justify="center" mt="sm" >
            <Pagination total={20} color="orange"/>
      </Group>
      

      <Text ta="center" my="sm">
      <Footer year="2024" name="Phetmongkhon Rungrat" studentId="660610781" />
      </Text>

    </Container>
  );
}