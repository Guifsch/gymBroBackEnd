import express from "express";
import {
  postCategorys,
  getCategorys,
  updateCategorys,
  deleteCategorys
} from "../controllers/category.controller.js";
import { verifyToken } from "../utils/verifyUser.js";

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Categories
 *   description: Gerenciamento de Categorias
 */

/**
 * @swagger
 * /api/category/categorys:
 *   post:
 *     summary: Cria uma nova categoria
 *     tags: [Categories]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               categoryItems:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     name:
 *                       type: string
 *                       description: Nome do item da categoria
 *                     description:
 *                       type: string
 *                       description: Descrição do item da categoria
 *     responses:
 *       200:
 *         description: Categoria salva com sucesso
 *       400:
 *         description: Itens vazios ou duplicados não são permitidos
 *       401:
 *         description: Token não fornecido ou inválido
 */
router.post("/categorys", verifyToken, postCategorys);

/**
 * @swagger
 * /api/category/categorys:
 *   get:
 *     summary: Obtém todas as categorias do usuário
 *     tags: [Categories]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de categorias do usuário obtida com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   userId:
 *                     type: string
 *                   categoryItems:
 *                     type: array
 *                     items:
 *                       type: object
 *                       properties:
 *                         name:
 *                           type: string
 *                         description:
 *                           type: string
 *       400:
 *         description: Erro na solicitação
 *       401:
 *         description: Token não fornecido ou inválido
 */
router.get("/categorys", verifyToken, getCategorys);

/**
 * @swagger
 * /api/category/update/{id}:
 *   put:
 *     summary: Atualiza uma categoria existente
 *     tags: [Categories]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID da categoria a ser atualizada
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               categoryItems:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     name:
 *                       type: string
 *                     description:
 *                       type: string
 *     responses:
 *       200:
 *         description: Categoria atualizada com sucesso
 *       400:
 *         description: Erro na solicitação ou itens duplicados
 *       401:
 *         description: Token não fornecido ou inválido
 *       404:
 *         description: Categoria não encontrada
 */
router.put("/update/:id", verifyToken, updateCategorys);

/**
 * @swagger
 * /api/category/categorys/{itemId}/categoryItems/{categoryItemId}:
 *   delete:
 *     summary: Exclui um item de categoria específico
 *     tags: [Categories]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: itemId
 *         required: true
 *         schema:
 *           type: string
 *         description: ID do item de categoria a ser excluído
 *       - in: path
 *         name: categoryItemId
 *         required: true
 *         schema:
 *           type: string
 *         description: ID do item específico dentro da categoria a ser excluído
 *     responses:
 *       200:
 *         description: Exclusão bem-sucedida
 *       400:
 *         description: Erro na solicitação
 *       401:
 *         description: Token não fornecido ou inválido
 *       404:
 *         description: Item não encontrado
 */
router.delete("/categorys/:itemId/categoryItems/:categoryItemId", verifyToken, deleteCategorys);

export default router;
