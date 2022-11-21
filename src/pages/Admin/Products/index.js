import { Link, Text } from '@chakra-ui/react'
import { useQuery } from '@tanstack/react-query'
import { useMemo } from 'react'
import { fetchProductList } from '../../../api'
import { Table, Popconfirm } from 'antd'

function AdminProducts() {
  const { isLoading, isError, data, error } = useQuery(['admin:products'], fetchProductList)

  const columns = useMemo(() => {
    return [
      {
        title: 'Title',
        dataIndex: 'title',
        key: 'title',
      },
      {
        title: 'Price',
        dataIndex: 'price',
        key: 'price',
      },
      {
        title: 'Created At',
        dataIndex: 'createdAt',
        key: 'createdAt',
      },
      {
        title: 'Action',
        key: 'action',
        render: (text, record) => (
          <>
            <Link top={`/admin/products/${record._id}`}>Edit</Link>
            <Popconfirm
              title='Are you sure?'
              onConfirm={() => {
                alert('silindi')
              }}
              onCancel={() => console.log('iptal edildi')}
              okText='Yes'
              cancelText='No'
              placement='left'
            >
              <a href='/#' style={{ marginLeft: 10 }}>Delete</a>
            </Popconfirm>
          </>
        )
      }
    ]
  }, [])

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (isError) {
    return <div>Error {error.message}</div>
  }

  console.log(data);
  return (
    <div>
      <Text fontSize='2xl' p='5'>
        Products
      </Text>

      <Table rowKey='_id' dataSource={data} columns={columns} />;
    </div>
  )
}

export default AdminProducts