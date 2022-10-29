import { Grid } from "@chakra-ui/react";
import Card from "../../components/Card";
import { useQuery } from '@tanstack/react-query'

export default function Products() {
  const { isLoading, error, data } = useQuery(['products'], () =>
    fetch('http://localhost:4000/product').then(res =>
      res.json()
    )
  )

  if (isLoading) return 'Loading...'

  if (error) return 'An error has occurred: ' + error.message

  console.log("data", data);

  return (
    <div>
      <Grid templateColumns='repeat(3, 1fr)' gap={4}>
        {data.map((item, key) => (
          <Card key={key} item={item} />
        ))}
      </Grid>
    </div>
  );
};