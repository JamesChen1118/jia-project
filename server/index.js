/* eslint-env node */
import express from "express";
import connectDB from "./config/db.js";
import routes from "./routes/index.js";

const app = express();

connectDB();
app.use(express.json());
app.use('/', routes);

const startServer = async () => {
    let port = process.env.PORT || 6001;
    let isPortAvailable = false;

    while (!isPortAvailable) {
        try {
            await new Promise((resolve, reject) => {
                const server = app.listen(port)
                    .once('listening', () => {
                        console.log(`Server is running on port ${port}`);
                        isPortAvailable = true;
                        resolve();
                    })
                    .once('error', (err) => {
                        if (err.code === 'EADDRINUSE') {
                            console.log(`Port ${port} is busy, trying ${port + 1}...`);
                            port++;
                            server.close();
                            resolve();
                        } else {
                            reject(err);
                        }
                    });
            });
        } catch (error) {
            console.error('Failed to start server:', error);
            process.exit(1);
        }
    }
};

startServer();
