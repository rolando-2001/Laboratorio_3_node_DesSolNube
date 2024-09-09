import express from 'express';
import productRouter from '../src/router/router-product.js';
import userRouter from '../src/router/router-users.js';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.use('/api/product', productRouter);

app.use('/api/users', userRouter);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
