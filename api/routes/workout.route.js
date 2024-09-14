import express from "express";
import {
  deleteWorkouts,
  getWorkouts,
  postWorkouts,
  updateWorkouts,
  getWorkout
} from "../controllers/workout.controller.js";
import { verifyToken } from "../utils/verifyUser.js";

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Workouts
 *   description: Gerenciamento de Treinos
 */

/**
 * @swagger
 * /api/workout/workouts:
 *   post:
 *     summary: Cria um novo treino
 *     tags: [Workouts]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: Nome do treino
 *                 example: "Supino"
 *               rep:
 *                 type: integer
 *                 description: Número de repetições
 *                 example: 10
 *               weight:
 *                 type: number
 *                 description: Peso utilizado
 *                 example: 70
 *               serie:
 *                 type: integer
 *                 description: Número de séries
 *                 example: 3
 *               category:
 *                 type: string
 *                 description: Categoria do treino
 *                 example: "Peito"
 *               exercisePicture:
 *                 type: string
 *                 description: URL da imagem do exercício
 *                 example: "http://example.com/picture.png"
 *               comment:
 *                 type: string
 *                 description: Comentário sobre o treino
 *                 example: "Foco na execução correta"
 *     responses:
 *       201:
 *         description: Treino salvo com sucesso
 *       400:
 *         description: Campos obrigatórios não preenchidos ou erro na validação
 *       401:
 *         description: Token não fornecido ou inválido
 */
router.post("/workouts", verifyToken, postWorkouts);

/**
 * @swagger
 * /api/workout/workouts:
 *   get:
 *     summary: Obtém todos os treinos do usuário
 *     tags: [Workouts]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de treinos obtida com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 workouts:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: string
 *                       name:
 *                         type: string
 *                       rep:
 *                         type: integer
 *                       weight:
 *                         type: number
 *                       serie:
 *                         type: integer
 *                       category:
 *                         type: string
 *                       exercisePicture:
 *                         type: string
 *                       comment:
 *                         type: string
 *       400:
 *         description: Erro ao obter treinos
 *       401:
 *         description: Token não fornecido ou inválido
 */
router.get("/workouts", verifyToken, getWorkouts);

/**
 * @swagger
 * /api/workout/workout/{id}:
 *   get:
 *     summary: Obtém um treino específico
 *     tags: [Workouts]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID do treino a ser obtido
 *     responses:
 *       200:
 *         description: Treino obtido com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 workout:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: string
 *                     name:
 *                       type: string
 *                     rep:
 *                       type: integer
 *                     weight:
 *                       type: number
 *                     serie:
 *                       type: integer
 *                     category:
 *                       type: string
 *                     exercisePicture:
 *                       type: string
 *                     comment:
 *                       type: string
 *       400:
 *         description: Erro ao obter treino
 *       401:
 *         description: Token não fornecido ou inválido
 *       404:
 *         description: Treino não encontrado
 */
router.get("/workout/:id", verifyToken, getWorkout);

/**
 * @swagger
 * /api/workout/workouts/{id}:
 *   delete:
 *     summary: Deleta um treino existente
 *     tags: [Workouts]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID do treino a ser deletado
 *     responses:
 *       200:
 *         description: Treino deletado com sucesso
 *       400:
 *         description: Erro ao deletar treino
 *       401:
 *         description: Token não fornecido ou inválido
 *       404:
 *         description: Treino não encontrado
 */
router.delete("/workouts/:id", verifyToken, deleteWorkouts);

/**
 * @swagger
 * /api/workout/update/{id}:
 *   post:
 *     summary: Atualiza um treino existente
 *     tags: [Workouts]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID do treino a ser atualizado
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               rep:
 *                 type: integer
 *               weight:
 *                 type: number
 *               serie:
 *                 type: integer
 *               category:
 *                 type: string
 *               exercisePicture:
 *                 type: string
 *               comment:
 *                 type: string
 *     responses:
 *       200:
 *         description: Treino atualizado com sucesso
 *       400:
 *         description: Erro ao atualizar o treino
 *       401:
 *         description: Token não fornecido ou inválido
 *       404:
 *         description: Treino não encontrado
 */
router.post("/update/:id", verifyToken, updateWorkouts);

export default router;
