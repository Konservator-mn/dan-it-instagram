module.exports = function () {
    const exportingObject = {};
    for (let i = 0, length = arguments.length; i<length; ++i){
        Object.defineProperties(exportingObject, {
            [arguments[i].name] : {
                get: ()=>arguments[i],
                configurable: false,
                editable: false
            },

        });
    }
    return exportingObject;
};