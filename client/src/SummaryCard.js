import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

function SummaryCard({subscriptions}) {
    let date = new Date().toUTCString().slice(5, 16);
    
    const payments = subscriptions.map((subscription) => (
        subscription.monthly_price
    ))
    
    const sum = () => {
        let sum = 0
        for (let i = 0; i < payments.length; i++)
            sum += payments[i]
        return sum
    }
    
    const sumOfSubscriptions = sum()
    

    return (
        <Paper sx={{height: 200, width: "70%", display: "flex", flexDirection: "column", justifyContent: "center", backgroundColor: "#074e7e", color: "white"}}>
            <Typography component="h1" variant="h5">Total Monthly Spend:</Typography>
            <Typography component="h2" variant="h4" sx={{mt: "5px", mb: "5px"}}>${sumOfSubscriptions}</Typography>
            <Typography component="h2" variant="subtitle1">As of {date}</Typography>
        </Paper>
    )
}

export default SummaryCard;