import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"
import 'dotenv/config.js'
import userRouter from "./routes/userRoutes.js";
import eduRouter from "./routes/eduRoutes.js";
import careerRouter from "./routes/careerRoutes.js";
import skillRouter from "./routes/skillRoutes.js";
// import fileRouter from "./routes/fileRoutes.js";
import portfolioRouter from "./routes/portfolioRoutes.js";
import expRouter from "./routes/expRoutes.js";
import path from "path";
import prefRouter from "./routes/prefRoutes.js";



//app config
const app = express()
const port = 4000

//middleware
app.use(express.json())
app.use(cors())

//db connection
connectDB();

// Serve static files from the "uploads" directory
// app.use("/uploads", express.static(path.join(process.cwd(), "uploads")));

//Routes
app.use("/api/users", userRouter);
app.use("/api/education", eduRouter);
app.use("/api/career", careerRouter);
app.use("/api/skills", skillRouter);
// app.use("/", fileRouter);
app.use("/api/portfolio", portfolioRouter);
app.use("/api/experiences", expRouter);
app.use("/api/preference", prefRouter);

// app.use("/api/files",fileRouter);

app.get("/",(req,res)=>{
    res.send("API Working")
})

app.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`);  
})