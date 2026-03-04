const bcryptjs = require('bcryptjs');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert(
        'users',
        [
            {
                nome: 'Luiz 2',
                email: "luiz2@gmail.com",
                password_hash: await bcryptjs.hash('123456', 8),
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                nome: 'Luiz 3',
                email: "luiz3@gmail.com",
                password_hash: await bcryptjs.hash('123456', 8),
                createdAt: new Date(),
                updatedAt: new Date()
            },
        ],
        {});

    },

    async down() {
    }
};
