import { Box, Button, Flex, Grid } from "@chakra-ui/react";
import Card from "../../components/Card";
import { useInfiniteQuery } from '@tanstack/react-query'
import { fetchProductList } from "../../api.js"
import React from "react";

export default function Products() {
  const { data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery(
    ['products'],
    fetchProductList,
    {
      getNextPageParam: (lastGroup, allGroups) => {
        const morePageExist = lastGroup?.length === 9;
        if (!morePageExist) {
          return;
        }

        return allGroups.length + 1;
      },
    }
  );

  if (status === 'loading') return 'Loading...'

  if (status === 'error') return 'An error has occurred: ' + error.message

  return (
    <div>
      <Grid templateColumns='repeat(3, 1fr)' gap={4}>
        {/* {data.map((item, key) => (
          <Card key={key} item={item} />
        ))} */}

        {data.pages.map((group, i) => (
          <React.Fragment key={i}>
            {group.map((item) => (
              <Box w="100%" key={item._id}>
                <Card item={item} />
              </Box>
            ))}
          </React.Fragment>
        ))}
      </Grid>

      <Flex mt='10' justifyContent='center'>
        <Button
          onClick={() => fetchNextPage()}
          isLoading={isFetchingNextPage}
          disabled={!hasNextPage || isFetchingNextPage}
        >
          {isFetchingNextPage
            ? 'Loading more...'
            : hasNextPage
              ? 'Load More'
              : 'Nothing more to load'}
        </Button>
        <div>{isFetching && !isFetchingNextPage ? 'Fetching...' : null}</div>
      </Flex>
    </div>
  );
};