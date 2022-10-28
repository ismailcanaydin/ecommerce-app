import { Grid } from "@chakra-ui/react";
import Card from "../../components/Card";
import { useQuery } from '@tanstack/react-query'

export default function Products() {
  const { isLoading, error, data } = useQuery(['repoData'], () =>
    fetch('https://localhost/4000').then(res =>
      res.json()
    )
  )

  if (isLoading) return 'Loading...'

  if (error) return 'An error has occurred: ' + error.message

  console.log("data", data);

  return (
    <div>
      <Grid templateColumns='repeat(3, 1fr)' gap={4}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </Grid>
    </div>
  );
};