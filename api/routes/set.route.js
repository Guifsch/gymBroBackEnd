import express from "express";
import {
  postSet,
  getSet,
  updateSet,
  deleteSets
} from "../controllers/set.controller.js";
import { verifyToken } from "../utils/verifyUser.js";

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Sets
 *   description: Gerenciamento de Grupos de Exercícios
 */

/**
 * @swagger
 * /api/set/sets:
 *   post:
 *     summary: Cria um novo grupo de exercícios
 *     tags: [Sets]
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
 *                 description: Nome do grupo
 *                 example: "Treino de Força"
 *               comment:
 *                 type: string
 *                 description: Comentário sobre o grupo
 *                 example: "Treino focado em força"
 *               selectedItems:
 *                 type: array
 *                 items:
 *                   type: string
 *                 description: IDs dos exercícios selecionados
 *                 example: ["64a5f8d5e3b2c1a1b4d5e6f7", "64a5f8d5e3b2c1a1b4d5e6f8"]
 *               textColor:
 *                 type: string
 *                 description: Cor do texto
 *                 example: "#FFFFFF"
 *               cardColor:
 *                 type: string
 *                 description: Cor do cartão
 *                 example: "#000000"
 *     responses:
 *       201:
 *         description: Grupo criado com sucesso
 *       400:
 *         description: Erro na criação do grupo
 *       401:
 *         description: Token não fornecido ou inválido
 */
router.post("/sets", verifyToken, postSet);

/**
 * @swagger
 * /api/set/sets:
 *   get:
 *     summary: Obtém todos os grupos de exercícios do usuário
 *     tags: [Sets]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de grupos obtida com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                   name:
 *                     type: string
 *                   comment:
 *                     type: string
 *                   selectedItems:
 *                     type: array
 *                     items:
 *                       type: string
 *                   textColor:
 *                     type: string
 *                   cardColor:
 *                     type: string
 *       400:
 *         description: Erro ao obter grupos
 *       401:
 *         description: Token não fornecido ou inválido
 */
router.get("/sets", verifyToken, getSet);

/**
 * @swagger
 * /api/set/update/{id}:
 *   post:
 *     summary: Atualiza um grupo de exercícios existente
 *     tags: [Sets]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID do grupo a ser atualizado
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               comment:
 *                 type: string
 *               selectedItems:
 *                 type: array
 *                 items:
 *                   type: string
 *               textColor:
 *                 type: string
 *               cardColor:
 *                 type: string
 *     responses:
 *       200:
 *         description: Grupo atualizado com sucesso
 *       400:
 *         description: Erro ao atualizar o grupo
 *       401:
 *         description: Token não fornecido ou inválido
 *       404:
 *         description: Grupo não encontrado
 */
router.post("/update/:id", verifyToken, updateSet);

/**
 * @swagger
 * /api/set/delete/{id}:
 *   delete:
 *     summary: Deleta um grupo de exercícios existente
 *     tags: [Sets]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID do grupo a ser deletado
 *     responses:
 *       200:
 *         description: Grupo deletado com sucesso
 *       400:
 *         description: Erro ao deletar grupo
 *       401:
 *         description: Token não fornecido ou inválido
 *       404:
 *         description: Grupo não encontrado
 */
router.delete("/delete/:id", verifyToken, deleteSets);

export default router;
