class HelloWorld {
    sayHello(event) {
        return {
            message: 'prod v3',
            input: event,
        };
    }
}
    
module.exports = HelloWorld;