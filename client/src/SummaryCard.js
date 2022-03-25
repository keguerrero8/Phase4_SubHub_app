import Typography from '@mui/material/Typography';

function SummaryCard({subscriptions}) {
    let date = new Date()
    let day = date.getDate()
    let month = String(date.getMonth()+1).padStart(2, "0");
    let year = date.getFullYear();
    let fullDate = `${month}/${day}/${year}`

    const totalMonthPayment = 
    subscriptions.filter(s => {
        if (s.payment_date <= fullDate) {
            return s.isRecurring === "true" 
        }
        return false
    }
    )
    .map(s => s.monthly_price)
    .reduce((previous, current) => previous + current)


    return (
        <>
            <Typography component="h1" variant="h5" color="primary">Total spend this month:</Typography>
            <Typography component="h2" variant="h4" color="primary" sx={{mt: "10px"}}>${totalMonthPayment}</Typography>
        </>
    )
}

export default SummaryCard;