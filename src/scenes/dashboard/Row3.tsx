import BoxHeader from '@/components/BoxHeader'
import DashboardBox from '@/components/DashboardBox'
import { useGetKpisQuery, useGetProductsQuery, useGetTransactionsQuery } from '@/state/api'
import { useTheme } from '@mui/material'
import { Box } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'
import React from 'react'

type Props = {}

const Row3 = (props: Props) => {
    const { palette } = useTheme();
    const { data: kpiData } = useGetKpisQuery()
    const { data: productData } = useGetProductsQuery()
    const { data: transactionData } = useGetTransactionsQuery()
    // console.log(transactionsData)

    return (
        <>
            <DashboardBox gridArea='g'>
                <BoxHeader title='List of Products' sideText={`${productData?.length} products`} />
                <Box
                    mt='0.5rem' p='0 0.5rem' height='75%' sx={{
                        '& .MuiDataGrid-root': {
                            color: palette.grey[300],
                            border: 'none'
                        }
                    }}
                >

                    <DataGrid 
                    rows={productData || []}
                    columns={productColumns}/>
                </Box>
            </DashboardBox >

            <DashboardBox gridArea='h'></DashboardBox>

            <DashboardBox gridArea='i'></DashboardBox>

            <DashboardBox gridArea='j'></DashboardBox>
        </>
    )
}

export default Row3