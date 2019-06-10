describe('next', function(){
    it('next(2) es 3', function() {
        expect(next(2)).toEqual(3);
    });

    it('next(3) es 4', function() {
        expect(next(3)).toEqual(4);
    });

    it('next(3) es 5', function() {
        expect(next(2)).toEqual(5);
    });
});