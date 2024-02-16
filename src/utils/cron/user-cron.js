const cron = require('node-cron');
const cronSchedule = '* * * * * * * *';
let data = 1;
const user = [
    {
       "-id":"65c5f57ffcb1cc00ba972677",
       "firstName":"Amit",
       "email":"amit@gmail.com",
       "password":"test@123",
       "startTime":"2024-02-09T13:34:00"
   }
]
// const cronJob = cron.schedule(cronSchedule, () => {
//     console.log("number: ", data);
//     data += 1;
// });
const cronJob = cron.schedule(cronSchedule, () => {
    const currentDate = new Date();
    const formattedDateTime = currentDate.toISOString().replace(/\.\d{3}Z$/, '');    
    // console.log(`Date and Time: ${formattedDateTime}, Number: ${data}`);
    data += 1; 
    
    if(formattedDateTime == user[0].startTime){
        console.log("party time")
    }
});
cronJob.start();
