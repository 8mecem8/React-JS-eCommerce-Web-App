import React,{useState} from 'react'


// Material UI
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';



/* Custom Css */
import useStyles from './OrdersTableStyles'



//Main import components
import ContentRow from './TableContent/ContentRow';




function OrdersTable({userOrders}) 
{
    const sty = useStyles()
    
    {/*------------------------ Function's main Loading state ------------------------*/}

    const [enterPageLoading, setEnterPageLoading] = useState(false);
    

return (
<>   
    <TableContainer component={Paper} sx={{mb:2}}>
        <Typography variant='h3' textAlign="center" fontWeight="500" sx={{mx:"auto",my:3}}>Order History Information</Typography>
        <Table aria-label="collapsible table">

            <TableHead sx={{backgroundColor:"#e1efff"}}>
            <TableRow>
                <TableCell />
                <TableCell >Order Title</TableCell>
                <TableCell align="right">Order Date</TableCell>
                <TableCell align="right">Total Price</TableCell>
                <TableCell align="right">Order Status</TableCell>
                <TableCell align="right">Shipping</TableCell>
            </TableRow>
            </TableHead>

            <TableBody>
                {userOrders?.map((order,i)=>{return(<> <ContentRow arg={order} />  </>)})}
            </TableBody>

        </Table>
    </TableContainer>
</> 
)
}

export default OrdersTable
