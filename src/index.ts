import express, { json } from 'express'
import employee_router from './routes/employeeRoutes';
import projects_router from './routes/projectRoutes';


const app = express();

app.use(json())

app.use('/employee', employee_router)
app.use('/projects', projects_router)


app.listen(3400, ()=>{
    console.log(`testing testing on 3400` );
    
})


