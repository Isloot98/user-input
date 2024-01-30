import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());

app.use(express.json());


app.post('/messages', (req, res) => {
//request.body is where the information sent from the client to the server is
res.status(200).json(req.body)
})

app.listen('6060', () => {
    console.log('Server running on port 6060');
});
