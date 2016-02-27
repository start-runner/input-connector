export default (input) => () => {
    return function inputConnector() {
        return Promise.resolve(input);
    };
};
