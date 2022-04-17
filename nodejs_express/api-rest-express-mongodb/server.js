import app from './src/app.js';

const port = process.env.PORT || 3000;

// creating local server with express
app.listen(port, () => {
    console.log(`The server is running on http://localhost:${port}`);
});
