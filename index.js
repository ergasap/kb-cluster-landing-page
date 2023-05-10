import express from 'express';
import { engine } from 'express-handlebars';

const app = express();
const port = 8080;

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('home');
});

app.get("/static", (req, res) => {
    res.render("static");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});