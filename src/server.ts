import * as express from "express";

const app = express();
const port = 8000;
const APIKey : string = "LzTXBJmLN4rwuxnGHGebiOG5agtjS4kSxHYgXTT5";
app.use(express.json());
const router = express.Router();
router.get('/test', (req, res) => res.send('Hello world !'));
app.use('/', router);

app.listen(port, () => {
    console.log(`Test backend is running on port ${port}`);
});

router.get('/router', function(req, res){
    const data = res.get("https://api.nasa.gov/mars-photos/api/v1/rovers?api_key=LzTXBJmLN4rwuxnGHGebiOG5agtjS4kSxHYgXTT5");
    console.log(data);
    res.send(data);

})