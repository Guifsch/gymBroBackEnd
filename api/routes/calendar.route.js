import express from "express";
import {
  getCalendar,
  postCalendar,
} from "../controllers/calendar.controller.js";
import { verifyToken } from "../utils/verifyUser.js";

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Calendar
 *   description: Gerenciamento de Calendário
 */

/**
 * @swagger
 * /api/calendar/calendar:
 *   post:
 *     summary: Cria ou atualiza o calendário do usuário
 *     tags: [Calendar]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               calendarItems:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     name:
 *                       type: string
 *                     start:
 *                       type: string
 *                       format: date-time
 *                     comment:
 *                       type: string
 *                     textColor:
 *                       type: string
 *                     cardColor:
 *                       type: string
 *                     selectedItems:
 *                       type: array
 *                       items:
 *                         type: string
 *     responses:
 *       201:
 *         description: Calendário criado com sucesso
 *       200:
 *         description: Calendário atualizado com sucesso
 *       400:
 *         description: Erro na solicitação
 *       401:
 *         description: Token não fornecido ou inválido
 */
router.post("/calendar", verifyToken, postCalendar);

/**
 * @swagger
 * /api/calendar/calendar:
 *   get:
 *     summary: Obtém o calendário do usuário
 *     tags: [Calendar]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Calendário do usuário obtido com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   userId:
 *                     type: string
 *                   calendarItems:
 *                     type: array
 *                     items:
 *                       type: object
 *                       properties:
 *                         name:
 *                           type: string
 *                         start:
 *                           type: string
 *                           format: date-time
 *                         comment:
 *                           type: string
 *                         textColor:
 *                           type: string
 *                         cardColor:
 *                           type: string
 *                         selectedItems:
 *                           type: array
 *                           items:
 *                             type: string
 *       400:
 *         description: Erro na solicitação
 *       401:
 *         description: Token não fornecido ou inválido
 */
router.get("/calendar", verifyToken, getCalendar);

export default router;
