import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import userRoutes from "./routes/user.route.js";
import authRoutes from "./routes/auth.route.js";
import workoutRoutes from "./routes/workout.route.js";
import categoryRoutes from "./routes/category.route.js";
import calendarRoutes from "./routes/calendar.route.js";
import setRoutes from "./routes/set.route.js";
import resetRoutes from "./routes/reset.route.js";
import cookieParser from "cookie-parser";
import swaggerUi from "swagger-ui-express";
import { swaggerDocs, swaggerUiOptions } from "./swaggerConfig.js";

dotenv.config();

const app = express();

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("MongoDB conectado");
    app.listen(3000, (req, res) => {
      console.log(`Servidor rodando na porta: 3000.`);
    });
  })
  .catch((err) => {
    console.log(err, "ERROR");
  });

const allowedOrigins = [
  "https://guifsch.github.io",
  "https://gym-bro-frontend.vercel.app",
  "http://localhost:3000",
];

const corsOptions = {
  origin: (origin, callback) => {
    if (allowedOrigins.includes(origin) || !origin) {
      // Permite a origem se estiver na lista ou se a origem for undefined (por exemplo, requisições feitas no mesmo servidor)
      callback(null, true);
    } else {
      callback(new Error("Não perimitido pelo CORS"));
    }
  },
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization", "X-Requested-With"],
};

// Middleware de CORS
app.use(cors(corsOptions));

// Middleware para tratar solicitações OPTIONS
app.options("*", cors(corsOptions));

// Outros middlewares
app.use(cookieParser()); // Extrai as informações contidas nos cookies e as torna acessíveis para o servidor
app.use(express.json()); // Middleware usado para analisar o corpo das solicitações HTTP com formato JSON

// Configuração do Swagger
app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(swaggerDocs, swaggerUiOptions)
);
//Para acessar a documentação entre em http://localhost:3000/api-docs/

// Suas rotas
app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/workout", workoutRoutes);
app.use("/api/category", categoryRoutes);
app.use("/api/set", setRoutes);
app.use("/api/calendar", calendarRoutes);
app.use("/api/reset", resetRoutes);

// Middleware de tratamento de erros
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  return res.status(statusCode).json({
    success: false,
    error: message,
    statusCode: statusCode,
  });
});

export default app;
