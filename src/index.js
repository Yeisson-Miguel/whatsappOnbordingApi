const express = require('express');
const dotenv = require('dotenv');
const whatsAppRouter = require('./routes/whatsappRoutes');

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001; 

app.use(express.json());

app.use("/whatsappOnbording", whatsAppRouter);

app.listen(PORT, () => {
    console.log(`App run in port: ${PORT}`);
});
