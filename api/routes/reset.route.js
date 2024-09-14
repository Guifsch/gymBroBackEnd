import express from "express";
import {
  forgotPassword,
  resetPassword,
} from "../controllers/reset.controller.js";

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Password Reset
 *   description: Gerenciamento de Redefinição de Senha
 */

/**
 * @swagger
 * /api/reset/forgot-password:
 *   post:
 *     summary: Envia um e-mail para redefinição de senha
 *     tags: [Password Reset]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 description: E-mail do usuário que deseja redefinir a senha
 *                 example: "usuario@exemplo.com"
 *     responses:
 *       200:
 *         description: E-mail de redefinição enviado com sucesso.
 *       400:
 *         description: Usuário não encontrado.
 *       500:
 *         description: Erro ao enviar o e-mail de redefinição.
 */
router.post('/forgot-password', forgotPassword);

/**
 * @swagger
 * /api/reset/reset-password:
 *   post:
 *     summary: Redefine a senha do usuário
 *     tags: [Password Reset]
 *     parameters:
 *       - in: query
 *         name: token
 *         required: true
 *         schema:
 *           type: string
 *         description: Token de redefinição de senha enviado por e-mail
 *       - in: query
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID do token de redefinição
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               newPassword:
 *                 type: string
 *                 description: Nova senha do usuário
 *                 example: "novaSenhaSegura123"
 *     responses:
 *       200:
 *         description: Senha redefinida com sucesso.
 *       400:
 *         description: Token inválido ou expirado, usuário não encontrado, ou nova senha igual à senha atual.
 *       500:
 *         description: Erro ao redefinir a senha.
 */
router.post('/reset-password', resetPassword);

export default router;
