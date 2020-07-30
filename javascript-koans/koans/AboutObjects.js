describe('About Objects', function() {
    describe('Properties', function() {
        let megalomaniac;

        beforeEach(function() {
            megalomaniac = { mastermind: 'Joker', henchwoman: 'Harley' };
        });

        it('should confirm objects are collections of properties', function() {
            expect(megalomaniac.mastermind).toBe(FILL_ME_IN);
        });

        it('should confirm that properties are case sensitive', function() {
            expect(megalomaniac.henchwoman).toBe(FILL_ME_IN);
            expect(megalomaniac.henchWoman).toBe(FILL_ME_IN);
        });
    });

    it('should know properties that are functions act like methods', function() {
        const megalomaniac = {
            mastermind: 'Brain',
            henchman: 'Pinky',
            battleCry(noOfBrains) {
                return `They are ${this.henchman} and the${Array(noOfBrains + 1).join(` ${this.mastermind}`)}`;
            },
        };

        const battleCry = megalomaniac.battleCry(4);
        expect(FILL_ME_IN).toMatch(battleCry);
    });

    it("should confirm that when a function is attached to an object, 'this' refers to the object", function() {
        const currentDate = new Date();
        const currentYear = currentDate.getFullYear();
        const megalomaniac = {
            mastermind: 'James Wood',
            henchman: 'Adam West',
            birthYear: 1970,
            calculateAge() {
                return currentYear - this.birthYear;
            },
        };

        expect(currentYear).toBe(FILL_ME_IN);
        expect(megalomaniac.calculateAge()).toBe(FILL_ME_IN);
    });

    describe("'in' keyword", function() {
        let megalomaniac;
        beforeEach(function() {
            megalomaniac = {
                mastermind: 'The Monarch',
                henchwoman: 'Dr Girlfriend',
                theBomb: true,
            };
        });

        it('should have the bomb', function() {
            const hasBomb = 'theBomb' in megalomaniac;

            expect(hasBomb).toBe(FILL_ME_IN);
        });

        it('should not have the detonator however', function() {
            const hasDetonator = 'theDetonator' in megalomaniac;

            expect(hasDetonator).toBe(FILL_ME_IN);
        });
    });

    it('should know that properties can be added and deleted', function() {
        const megalomaniac = { mastermind: 'Agent Smith', henchman: 'Agent Smith' };

        expect('secretary' in megalomaniac).toBe(FILL_ME_IN);

        megalomaniac.secretary = 'Agent Smith';
        expect('secretary' in megalomaniac).toBe(FILL_ME_IN);

        delete megalomaniac.henchman;
        expect('henchman' in megalomaniac).toBe(FILL_ME_IN);
    });

    it('should use prototype to add to all objects', function() {
        function Circle(radius) {
            this.radius = radius;
        }

        const simpleCircle = new Circle(10);
        const colouredCircle = new Circle(5);
        colouredCircle.colour = 'red';

        expect(simpleCircle.colour).toBe(FILL_ME_IN);
        expect(colouredCircle.colour).toBe(FILL_ME_IN);

        Circle.prototype.describe = function() {
            return `This circle has a radius of: ${this.radius}`;
        };

        expect(simpleCircle.describe()).toBe(FILL_ME_IN);
        expect(colouredCircle.describe()).toBe(FILL_ME_IN);
    });
});
