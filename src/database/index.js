import dotenv from 'dotenv';

dotenv.config();

import Sequelize from "sequelize";
import databaseConfig from '../config/database';
import Aluno from '../models/Aluno';
import User from '../models/User';
import Foto from '../models/Foto';

const models = [Aluno, User, Foto];
const connection = new Sequelize(process.env.DATABASE, process.env.DATABASE_USERNAME, process.env.DATABASE_PASSWORD, {dialect: 'mysql'});

models.forEach(model => model.init(connection));
models.forEach(model => model.associate && model.associate(connection.models));
