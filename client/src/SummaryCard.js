import Typography from '@mui/material/Typography';
import "./index.css"

function SummaryCard({subsThisMonth}) {
    const totalMonthPayment = subsThisMonth.map(s => s.monthly_price).reduce((previous, current) => previous + current, 0)

    return (
        <>
            <h2 style={{color: "#2f7ea1", marginTop: "50px"}} className="text">Total spend this month:</h2>
            <h3 style={{color: "#2f7ea1"}} className="text">${totalMonthPayment}</h3>
            {/* <Typography component="h1" variant="h5" color="primary" sx={{fontSize: "4vw"}}>Total spend this month:</Typography>
            <Typography component="h2" variant="h4" color="primary" sx={{fontSize: "4vw"}}>${totalMonthPayment}</Typography> */}
        </>
    )
}

export default SummaryCard;