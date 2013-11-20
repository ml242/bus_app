describe("a bus", function(){

  var bus, passenger, passenger2;


  beforeEach(function(){
    bus = new Bus();
    passenger = { name: "Levon Helm"};
    passenger2 = { name: "Yoko"};
  });

  it("is empty", function(){
    var bus = new Bus();
    expect(bus.isEmpty()).toBe(true);
  });
  it("accepts a passenger", function(){
    var bus = new Bus();
    bus.add(passenger);
    expect(bus.isEmpty()).not.toBe(true);
  });
  it("returns true if it contains specific passenger", function() {
    bus.add(passenger);
    bus.add(passenger2);
    expect(bus.contains(passenger)).toBe(true);
    expect(bus.contains(passenger2)).toBe(true);
  });
  it("accepts multiple passengers", function() {
    bus.add(passenger);
    expect(bus.getSize()).toBe(1);
    bus.add(passenger2);
    expect(bus.getSize()).toBeGreaterThan(1);
  });
  it("won't accept the same passenger twice", function(){
    bus.add(passenger);
    expect(bus.getSize()).toBe(1);
    var test = function(){
      bus.add(passenger);
    };
    expect(test).toThrow();
    expect(bus.getSize()).toBeLessThan(2);
    });
});
