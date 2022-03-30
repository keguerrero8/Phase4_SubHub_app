import { Typography, Box } from '@mui/material';
import Chart from './Chart';
import SummaryCard from './SummaryCard';
import SubCarousel from './SubCarousel';
import "./index.css"

function Dashboard({ user, subscriptions }) {
    let date = new Date()
    let day = date.getDate()
    let month = String(date.getMonth()+1).padStart(2, "0");
    let year = date.getFullYear();
    let currentDate = `${month}/${day}/${year}`

    const subsThisMonth = subscriptions.filter(s => {
        let isSameMonth = s.payment_date.slice(0,2) === currentDate.slice(0,2) && s.payment_date.slice(6,10) === currentDate.slice(6,10)
        let isRecurring = s.payment_date <= currentDate && s.isRecurring === "true"
        if (isSameMonth || isRecurring) {
            return true
        }
        return false
    })

    return (
        <Box sx={{textAlign: "center", width: "95%", height: "100%", margin: "30px auto"}}>
            <Box sx={{my: "25px"}} >
                <Typography sx={{mb: "5px", fontSize: "6.0vw"}} component="h1" variant="h3">Welcome back, {user.username}</Typography>
            </Box>
            <SummaryCard subsThisMonth={subsThisMonth} />
            {subsThisMonth.length === 0? null: <Chart subsThisMonth={subsThisMonth}/>}
            {subsThisMonth.length >= 5 ? (
                <Box sx={{width: "85%", height: "400px", margin: "30px auto"}}>
                    <SubCarousel subsThisMonth={subsThisMonth} currentDate={currentDate}/>
                </Box>
            ) : null}
        </Box>
    )
}

export default Dashboard