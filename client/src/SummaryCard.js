import Typography from '@mui/material/Typography';

function SummaryCard({subsThisMonth}) {
    const totalMonthPayment = subsThisMonth.map(s => s.monthly_price).reduce((previous, current) => previous + current, 0)

    return (
        <>
            <Typography component="h1" variant="h5" color="primary" sx={{fontSize: "4.5vw"}}>Total spend this month:</Typography>
            <Typography component="h2" variant="h4" color="primary" sx={{fontSize: "4.5vw"}}>${totalMonthPayment}</Typography>
        </>
    )
}

export default SummaryCard;