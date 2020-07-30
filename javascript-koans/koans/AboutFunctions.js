describe('About Functions', function() {
    it('should declare functions', function() {
        function add(a, b) {
            return a + b;
        }

        expect(add(1, 2)).toBe(FILL_ME_IN);
    });

    it('should know internal variables override outer variables', function() {
        const message = 'Outer';

        function getMessage() {
            return message;
        }

        function overrideMessage() {
            const message = 'Inner';
            return message;
        }

        expect(getMessage()).toBe(FILL_ME_IN);
        expect(overrideMessage()).toBe(FILL_ME_IN);
        expect(message).toBe(FILL_ME_IN);
    });

    it('should have lexical scoping', function() {
        const variable = 'top-level';
        function parentfunction() {
            const variable = 'local';
            function childfunction() {
                return variable;
            }
            return childfunction();
        }
        expect(parentfunction()).toBe(FILL_ME_IN);
    });

    it('should use lexical scoping to synthesise functions', function() {
        function makeMysteryFunction(makerValue) {
            const newFunction = function doMysteriousThing(param) {
                return makerValue + param;
            };
            return newFunction;
        }

        const mysteryFunction3 = makeMysteryFunction(3);
        const mysteryFunction5 = makeMysteryFunction(5);

        expect(mysteryFunction3(10) + mysteryFunction5(5)).toBe(FILL_ME_IN);
    });

    it('should allow extra function arguments', function() {
        function returnFirstArg(firstArg) {
            return firstArg;
        }

        expect(returnFirstArg('first', 'second', 'third')).toBe(FILL_ME_IN);

        function returnSecondArg(firstArg, secondArg) {
            return secondArg;
        }

        expect(returnSecondArg('only give first arg')).toBe(FILL_ME_IN);

        function returnAllArgs() {
            const argsArray = [];
            for (let i = 0; i < arguments.length; i += 1) {
                argsArray.push(arguments[i]);
            }
            return argsArray.join(',');
        }

        expect(returnAllArgs('first', 'second', 'third')).toBe(FILL_ME_IN);
    });

    it('should pass functions as values', function() {
        const appendRules = function(name) {
            return `${name} rules!`;
        };

        const appendDoubleRules = function(name) {
            return `${name} totally rules!`;
        };

        const praiseSinger = { givePraise: appendRules };
        expect(praiseSinger.givePraise('John')).toBe(FILL_ME_IN);

        praiseSinger.givePraise = appendDoubleRules;
        expect(praiseSinger.givePraise('Mary')).toBe(FILL_ME_IN);
    });
});
