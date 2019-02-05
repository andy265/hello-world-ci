class HelloWorld {
    sayHello(event) {
        return {
            message: 'prod v2',
            input: event,
        };
    }
}
    
module.exports = HelloWorld;