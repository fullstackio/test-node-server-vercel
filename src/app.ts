import express from "express";
// Import routes
import routes from "./Routes/AuthRoutes/auth.routes"; // Adjust the path if your routes file is elsewhere
import corsMiddleware from "./Services/Cors/cors.middleware";

const app = express();

// Body Parsers
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Middlewares
app.use(corsMiddleware);

// Set Main Route
app.use("/api/v2/", routes);

// Default /api/v2 route for health/welcome
app.get("/api/v2", (req, res) => {
  res.json({
    status: "success",
    message: "Welcome to the News Blog OTT API!",
    docs: "/api-docs",
  });
});

export default app;
