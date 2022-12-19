const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const authRoutes = require("./routes/auth");
const messageRoutes = require("./routes/messages");
const app = express();

require("dotenv").config();

app.use(cors());
app.use(express.json());

// const port =process.env.PORT || 5001
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes)




const PORT = process.env.PORT

mongoose.connect(process.env.MONGO_URL,{ useNewUrlParser: true, useUnifiedTopology: true }
).then(() => console.log('connected to db'),

app.listen(PORT, () => console.log(`Listening at Port ${PORT}`))

)
  .catch((error) => console.log(`${error} did not connect`));
  


