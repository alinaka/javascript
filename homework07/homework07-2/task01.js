function calc(x){
    var y = 1/x + Math.sqrt(x);
    return y;  
}

describe("check calc y=f(x)", function() {
    
    it("negative", function(){
        var rez = calc(-135);
        expect(rez).toBeNaN();
    });
    
    it("negative", function(){
        var rez = calc(0);
        expect(rez).toBe(Infinity);
    });
    
    it("positive", function(){
        var rez = calc(15);
        expect(rez).toBe(3.939650012874084);
    });
    
});
