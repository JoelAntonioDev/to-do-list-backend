const taskModel = require('../models/taskModel');

exports.listarTarefas = async () => {
  return await taskModel.listarTarefas();
};

exports.criarTarefa = async (taskData) => {
  const { titulo, descricao, user_id } = taskData;
  return await taskModel.criarTarefa(titulo, descricao, user_id);
};

exports.buscarTarefa = async (taskId) => {
    return await taskModel.buscarTarefa(taskId);
};

exports.actualizarTarefa = async(taskData, taskId)=>{
    return await taskModel.actualizarTarefa(taskData, taskId);
};

exports.apagarTarefa = async(taskId)=>{
    return await taskModel.apagarTarefa(taskId);
};

exports.carregarArquivo = async (file, taskId) => {
    const filePath = `uploads/${file.filename}`;
    const fileName = file.originalname;
    const fileExtension = file.mimetype.split("/")[1];

    return await taskModel.carregarArquivo(filePath, fileName, fileExtension, taskId);
};
