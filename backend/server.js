import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import path from 'path';
import userRouter from './routers/userRouter.js';
import homeMenuCardRouter from './routers/homeMenuCardRouter.js';
import menuPageCardRouter from './routers/menuPageCardRouter.js';
import burgerRouter from './routers/menuRouters/burgerRouter.js';
import snackRouter from './routers/menuRouters/snackRouter.js';
import appetizerRouter from './routers/menuRouters/appetizerRouter.js';
import mainmenuRouter from './routers/menuRouters/mainmenuRouter.js';
import seafoodRouter from './routers/menuRouters/seafoodRouter.js';
import pizzaRouter from './routers/menuRouters/pizzaRouter.js';
import cocktailRouter from './routers/menuRouters/cocktailRouter.js';
import dessertRouter from './routers/menuRouters/dessertRouter.js';
import orderRouter from './routers/OrderRouter.js';
import uploadRouter from './routers/uploadRouter.js';

dotenv.config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//add our data to local mongo database
mongoose.connect(process.env.MONGODB_URL);

app.use('/api/uploads', uploadRouter);

// for menu cards
app.use('/api/users', userRouter);

app.use('/api/homemenucards', homeMenuCardRouter);

app.use('/api/menupagecards', menuPageCardRouter);

// for menu items
app.use('/api/burger', burgerRouter);

app.use('/api/snacks', snackRouter);

app.use('/api/appetizer', appetizerRouter);

app.use('/api/mainmenu', mainmenuRouter);

app.use('/api/seafood', seafoodRouter);

app.use('/api/pizza', pizzaRouter);

app.use('/api/cocktail', cocktailRouter);

app.use('/api/dessert', dessertRouter);

app.use('/api/orders', orderRouter);

app.get('/api/config/paypal', (req, res) => {
  res.send(process.env.PAYPAL_CLIENT_ID || 'sb');
});

const __dirname = path.resolve();
app.use('/uploads', express.static(path.join(__dirname, '/uploads')));

app.use(express.static(path.join(__dirname, '/frontend/build')));
app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, '/frontend/build/index.html'))
);

//shows the error message if email is duplicated in the sever
app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server at http://localhost:${port}`);
});
