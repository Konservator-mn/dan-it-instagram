module.exports = function (modelName) {
    return require(`./Wrap/${modelName}`);
};