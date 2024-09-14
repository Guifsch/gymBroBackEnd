import express from "express";
import {
  signup,
  signin,
  google,
  signout,
} from "../controllers/auth.controller.js";

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Auth
 *   description: Rotas de autenticação
 */

/**
 * @swagger
 * /api/auth/signup:
 *   post:
 *     summary: Cria um novo usuário
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *                 description: Nome de usuário
 *                 example: "johndoe"
 *               email:
 *                 type: string
 *                 description: Email do usuário
 *                 example: "johndoe@example.com"
 *               password:
 *                 type: string
 *                 description: Senha do usuário
 *                 example: "password123"
 *     responses:
 *       201:
 *         description: Usuário criado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Usuário criado com sucesso"
 *       400:
 *         description: Erro na solicitação
 *       401:
 *         description: Campos obrigatórios não preenchidos
 *       500:
 *         description: Erro ao criar usuário
 */
router.post("/signup", signup);

/**
 * @swagger
 * /api/auth/signin:
 *   post:
 *     summary: Faz login de um usuário existente
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 description: Email do usuário
 *                 example: "johndoe@example.com"
 *               password:
 *                 type: string
 *                 description: Senha do usuário
 *                 example: "password123"
 *     responses:
 *       200:
 *         description: Login bem-sucedido
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   description: ID do usuário
 *                 username:
 *                   type: string
 *                   description: Nome de usuário
 *                 email:
 *                   type: string
 *                   description: Email do usuário
 *       401:
 *         description: Credenciais inválidas
 *       404:
 *         description: Usuário não encontrado
 */
router.post("/signin", signin);

/**
 * @swagger
 * /api/auth/google:
 *   post:
 *     summary: Autentica o usuário via Google
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 description: Email da conta Google
 *                 example: "johndoe@gmail.com"
 *               name:
 *                 type: string
 *                 description: Nome do usuário Google
 *                 example: "John Doe"
 *               photo:
 *                 type: string
 *                 description: URL da foto do usuário Google
 *                 example: "http://example.com/photo.jpg"
 *     responses:
 *       200:
 *         description: Autenticação via Google bem-sucedida
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   description: ID do usuário
 *                 username:
 *                   type: string
 *                   description: Nome de usuário
 *                 email:
 *                   type: string
 *                   description: Email do usuário
 *       400:
 *         description: Erro na solicitação
 */
router.post("/google", google);

/**
 * @swagger
 * /api/auth/signout:
 *   get:
 *     summary: Faz logout do usuário
 *     tags: [Auth]
 *     responses:
 *       200:
 *         description: Logout bem-sucedido
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Desconectado com sucesso!"
 *       400:
 *         description: Erro ao tentar desconectar
 */
router.get("/signout", signout);

export default router;
