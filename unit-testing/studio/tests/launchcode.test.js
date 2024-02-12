// launchcode.test.js code:
const launchcode = require('../index.js');

describe("Testing launchcode", function(){

  // Write your unit tests here!
  test("should have a value of nonprofit for organization", function() {
    expect(launchcode.organization).toBe("nonprofit");
  });

  test("should have a value of Jeff for execitive director", function() {
    expect(launchcode.executiveDirector).toBe("Jeff");
  });

  test("should have a value of 100 for percentage cool employees", function() {
    expect(launchcode.percentageCoolEmployees).toBe(100);
  });

  test("programsOffered should contain appropriate vakues", function() {
    expect(launchcode.programsOffered[0]).toBe("Web Development");
    expect(launchcode.programsOffered[1]).toBe("Data Analysis");
    expect(launchcode.programsOffered[2]).toBe("Liftoff");
    expect(launchcode.programsOffered.length).toBe(3);
  });

  test("launchOutput appropriate output", function() {
    expect(launchcode.launchOutput(2)).toBe("Launch!");
    expect(launchcode.launchOutput(3)).toBe("Code!");
    expect(launchcode.launchOutput(5)).toBe("Rocks!");
    expect(launchcode.launchOutput(6)).toBe("LaunchCode!");
    expect(launchcode.launchOutput(15)).toBe("Code Rocks!");
    expect(launchcode.launchOutput(10)).toBe("Launch Rocks!");
    expect(launchcode.launchOutput(30)).toBe("LaunchCode Rocks!");
    expect(launchcode.launchOutput(7)).toBe("Rutabagas! That doesn't work.");
  })

});

// test("should return a custom message when name is specified", function(){
//   expect(hello("Jest")).toBe("Hello, Jest!");
// });

// it("should return a general greeting when name is not specified", function(){
//  expect(hello()).toBe("Hello, World!");
// });
