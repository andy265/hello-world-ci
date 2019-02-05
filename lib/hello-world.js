class HelloWorld {
    sayHello(event) {
        return {
            message: 'prod v5',
            input: event,
        };
    }
}
    
module.exports = HelloWorld;