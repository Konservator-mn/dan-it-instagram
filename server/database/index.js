module.exports = function (modelName) {
    return require(`./Controller/${modelName}`);
};