import swaggerJsDoc from "swagger-jsdoc";

// Configuração do Swagger
const swaggerOptions = {
  swaggerDefinition: {
    openapi: "3.0.0", // Define a versão do OpenAPI
    info: {
      title: "API Documentation", // Título da documentação da API
      version: "1.0.0", // Versão da API
      description: "Documentação da API Mern GymBro", // Descrição da API
      contact: {
        name: "Guilherme de Freitas Schwingel",
      },
    },
    servers: [
      {
        url: "https://gymbrobackend.onrender.com",
      },
      {
        url: "http://localhost:3000",
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
      schemas: {
        User: {
          type: "object",
          properties: {
            id: {
              type: "string",
              description: "ID do usuário",
              example: "615c27c3c7f6c9d1e8f0d9b9",
            },
            username: {
              type: "string",
              description: "Nome de usuário",
              example: "johndoe",
            },
            email: {
              type: "string",
              description: "Email do usuário",
              example: "johndoe@example.com",
            },
            password: {
              type: "string",
              description: "Senha do usuário",
              example: "senha123",
            },
            profilePicture: {
              type: "string",
              description: "URL da foto de perfil",
              example:
                "https://t4.ftcdn.net/jpg/00/64/67/27/360_F_64672736_U5kpdGs9keUll8CRQ3p3YaEv2M6qkVY5.jpg",
            },
            createdAt: {
              type: "string",
              format: "date-time",
              description: "Data de criação do usuário",
              example: "2024-09-14T14:52:39.083Z",
            },
            updatedAt: {
              type: "string",
              format: "date-time",
              description: "Data de atualização do usuário",
              example: "2024-09-14T14:52:39.083Z",
            },
          },
          required: ["username", "email", "password"],
        },
        CalendarItems: {
          type: "object",
          properties: {
            name: {
              type: "string",
              description: "Nome do item do calendário",
              example: "Treino de Corrida",
            },
            start: {
              type: "string",
              format: "date-time",
              description: "Data de início do item do calendário",
              example: "2024-09-14T09:00:00.000Z",
            },
            comment: {
              type: "string",
              description: "Comentário sobre o item do calendário",
              example: "Treino matinal de corrida",
            },
            textColor: {
              type: "string",
              description: "Cor do texto do item do calendário",
              example: "#FFFFFF",
            },
            cardColor: {
              type: "string",
              description: "Cor do cartão do item do calendário",
              example: "#FF5733",
            },
            selectedItems: {
              type: "array",
              items: {
                type: "string",
                description: "ID do exercício selecionado",
                example: "615c27c3c7f6c9d1e8f0d9b9",
              },
            },
          },
          required: ["name", "start", "selectedItems"],
        },
        Calendar: {
          type: "object",
          properties: {
            userId: {
              type: "string",
              description: "ID do usuário associado ao calendário",
              example: "615c27c3c7f6c9d1e8f0d9b9",
            },
            calendarItems: {
              type: "array",
              items: {
                $ref: "#/components/schemas/CalendarItems",
              },
            },
            createdAt: {
              type: "string",
              format: "date-time",
              description: "Data de criação do calendário",
              example: "2024-09-14T14:52:39.083Z",
            },
            updatedAt: {
              type: "string",
              format: "date-time",
              description: "Data de atualização do calendário",
              example: "2024-09-14T14:52:39.083Z",
            },
          },
          required: ["userId", "calendarItems"],
        },
        CategoryItems: {
          type: "object",
          properties: {
            name: {
              type: "string",
              description: "Nome do item da categoria",
              example: "Exercício de Cardio",
            },
          },
          required: ["name"],
        },
        Category: {
          type: "object",
          properties: {
            userId: {
              type: "string",
              description: "ID do usuário associado à categoria",
              example: "615c27c3c7f6c9d1e8f0d9b9",
            },
            categoryItems: {
              type: "array",
              items: {
                $ref: "#/components/schemas/CategoryItems",
              },
            },
            createdAt: {
              type: "string",
              format: "date-time",
              description: "Data de criação da categoria",
              example: "2024-09-14T14:52:39.083Z",
            },
            updatedAt: {
              type: "string",
              format: "date-time",
              description: "Data de atualização da categoria",
              example: "2024-09-14T14:52:39.083Z",
            },
          },
          required: ["userId", "categoryItems"],
        },
        Set: {
          type: "object",
          properties: {
            userId: {
              type: "string",
              description: "ID do usuário associado ao grupo de exercícios",
              example: "615c27c3c7f6c9d1e8f0d9b9",
            },
            name: {
              type: "string",
              description: "Nome do grupo de exercícios",
              example: "Treino de Força",
            },
            comment: {
              type: "string",
              description: "Comentário sobre o grupo de exercícios",
              example: "Grupo de exercícios focado em força",
            },
            textColor: {
              type: "string",
              description: "Cor do texto do grupo de exercícios",
              example: "#FFFFFF",
            },
            cardColor: {
              type: "string",
              description: "Cor do cartão do grupo de exercícios",
              example: "#FF5733",
            },
            selectedItems: {
              type: "array",
              items: {
                type: "string",
                description:
                  "ID de um exercício selecionado (referência ao modelo Workout)",
                example: "615c27c3c7f6c9d1e8f0d9b9",
              },
            },
            createdAt: {
              type: "string",
              format: "date-time",
              description: "Data de criação do grupo de exercícios",
              example: "2024-09-14T14:52:39.083Z",
            },
            updatedAt: {
              type: "string",
              format: "date-time",
              description: "Data de atualização do grupo de exercícios",
              example: "2024-09-14T14:52:39.083Z",
            },
          },
          required: ["userId", "name", "selectedItems"],
        },
        Category: {
          type: "object",
          properties: {
            name: {
              type: "string",
              description: "Nome da categoria do treino",
              example: "Cardio",
            },
          },
          required: ["name"],
        },
        Workout: {
          type: "object",
          properties: {
            userId: {
              type: "string",
              description: "ID do usuário associado ao treino",
              example: "615c27c3c7f6c9d1e8f0d9b9",
            },
            name: {
              type: "string",
              description: "Nome do treino",
              example: "Supino",
            },
            rep: {
              type: "string",
              description: "Número de repetições",
              example: "10",
            },
            weight: {
              type: "string",
              description: "Peso utilizado no treino",
              example: "70kg",
            },
            serie: {
              type: "string",
              description: "Número de séries",
              example: "3",
            },
            category: {
              type: "array",
              items: {
                $ref: "#/components/schemas/Category",
              },
            },
            exercisePicture: {
              type: "string",
              description: "URL da imagem do exercício",
              example: "http://example.com/picture.png",
            },
            comment: {
              type: "string",
              description: "Comentário sobre o treino",
              example: "Foco na execução correta",
            },
          },
          required: ["userId", "name", "rep", "weight", "serie", "category"],
        },
      },
    },
  },
  apis: ["./api/routes/*.js"], // Caminho para os arquivos onde o Swagger deve procurar pelas definições de API
};

// Gera a documentação Swagger
const swaggerDocs = swaggerJsDoc(swaggerOptions);

// Configurações personalizadas para o Swagger UI
const swaggerUiOptions = {
  customSiteTitle: "Documentação da API Mern GymBro", // Título personalizado para a aba do navegador
  customCssUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.15.5/swagger-ui.min.css", // URL do CSS do Swagger UI a partir de um CDN
  customCss: `
  .swagger-ui .opblock-summary-path-description-wrapper {
    align-items: center;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
    gap: 0px 10px;
    padding: 0px 10px; }
`,
};

// Exporta as configurações do Swagger
export { swaggerDocs, swaggerUiOptions };
