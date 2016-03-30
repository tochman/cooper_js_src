describe("Person", function() {

  beforeEach(function() {
    person = new Person({
      gender: 'Male',
      age: 46
    });
  });

  it("should have gender", function() {
    expect(person.gender).toBeDefined();
    expect(person.gender).toBe('Male');
  });

  it("should have age", function() {
    expect(person.age).toBeDefined();
    expect(person.age).toBe(46);
  });

  describe("Calculate results", function() {
    beforeEach(function() {
      spyOn(person, 'getCooperResultsForMales').and.callThrough();
      person.assessCooper(2400);
    });

    it("should return a message", function() {
      expect(person.cooperMessage).toBeDefined();
      expect(person.getCooperResultsForMales).toHaveBeenCalled();
      expect(person.cooperMessage).toBe('Above average');
    });

    describe('Male, 20', function() {
      beforeEach(function() {
        person = new Person({
          gender: 'Male',
          age: 20
        });
      });

      it('1400 m should equal "Poor"', function(){
        person.assessCooper(1400);
        expect(person.cooperMessage).toBe('Poor');
      })

      it('1800 m should equal "Below average"', function(){
        person.assessCooper(1800);
        expect(person.cooperMessage).toBe('Below average');
      })

      it('2300 m should equal "Average"', function(){
        person.assessCooper(2300);
        expect(person.cooperMessage).toBe('Average');
      })

      it('2500 m should equal "Above average"', function(){
        person.assessCooper(2500);
        expect(person.cooperMessage).toBe('Above average');
      })

      it('2800 m should equal "Excellent"', function(){
        person.assessCooper(2800);
        expect(person.cooperMessage).toBe('Excellent');
      })

    });

    describe('Male, 51', function() {
      beforeEach(function() {
        person = new Person({
          gender: 'Male',
          age: 51
        });
      });

      it('1290 m should equal "Poor"', function(){
        person.assessCooper(1290);
        expect(person.cooperMessage).toBe('Poor');
      })

      it('1599 m should equal "Below average"', function(){
        person.assessCooper(1599);
        expect(person.cooperMessage).toBe('Below average');
      })

      it('1999 m should equal "Average"', function(){
        person.assessCooper(1999);
        expect(person.cooperMessage).toBe('Average');
      })

      it('2400 m should equal "Above average"', function(){
        person.assessCooper(2400);
        expect(person.cooperMessage).toBe('Above average');
      })

      it('2401 m should equal "Excellent"', function(){
        person.assessCooper(2401);
        expect(person.cooperMessage).toBe('Excellent');
      })

    });
  });

});
