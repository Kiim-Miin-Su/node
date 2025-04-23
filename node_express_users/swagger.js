// swagger.js
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

// Swagger 옵션 설정
const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'User API',
            version: '1.0.0',
            description: '사용자 로그인/가입/변경/삭제 API 문서입니다.',
        },
        servers: [
            {
                url: 'http://localhost:3000',
            },
        ],
    },
    apis: ['./routes/*.js'], // Swagger 주석이 있는 파일 경로
};

// Swagger 명세 객체 생성
const swaggerSpec = swaggerJsdoc(options);

// 🔥 app을 인자로 받아 등록하는 함수로 export
module.exports = function (app) {
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};
