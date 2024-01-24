const express = require("express");
const app = express();
const port = 3000;
const axios = require("axios");
const cors = require("cors")

app.use(express.json());
app.use(cors());



app.get("/User", async (req,res) => {
try{
    const response = await axios.get("https://minmaluserapi20240118093133.azurewebsites.net/User");
    res.json(response.data);
    
}
catch{
    console.log("error")
}
});


app.post("/User", async (req, res) => {

    try{
        let userData = req.body
        const response = await axios.post("https://minmaluserapi20240118093133.azurewebsites.net/User", userData);
        res.json(response.data)
    }
    catch{
        console.log("error")
    }
});


app.get("/User/:id", async (req, res) => {
    try {
        const userId = req.params.id;
        const response = await axios.get(`https://minmaluserapi20240118093133.azurewebsites.net/User/${userId}`);
        res.json(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});


app.delete("/User/:id", async (req, res) => {
    try {
        const userId = req.params.id;
        const response = await axios.delete(`https://minmaluserapi20240118093133.azurewebsites.net/User/${userId}`);
        res.json({ message: 'User deleted successfully', data: response.data });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});


app.put("/User/:id", async (req, res) => {
    try {
        const userId = req.params.id;
        const userData = req.body;
        const response = await axios.put(`https://minmaluserapi20240118093133.azurewebsites.net/User/${userId}`, userData);
        res.json({ message: 'User updated successfully', data: response.data });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.listen(port, () => {
    console.log("port 3000")
    });

   //Con
    localhost:3000/User