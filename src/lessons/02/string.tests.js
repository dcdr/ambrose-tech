'use strict';

(function() {
  describe('String', function() {

    it('"betty".myIndexOf("t") is 2', function(){
      expect("betty".myIndexOf("t")).toBe(2);
    });

    it('"gasoline".myIndexOf("line") is 4', function(){
      expect("gasoline".myIndexOf("line")).toBe(4);
    });

    it('"pizza".myIndexOf("pepperoni") is -1', function(){
      expect("pizza".myIndexOf("pepperoni")).toBe(-1);
    });

    it('"pizzazz".mySlice(4,7) is "zaz"', function(){
      expect("pizzazz".mySlice(3,6)).toBe("zaz");
    });

    it('"trap".mySlice(1) is rap', function(){
      expect("trap".mySlice(1)).toBe("rap");
    });

    it('"blizzard".mySlice(1, -4) is liz', function(){
      expect("blizzard".mySlice(1, -4)).toBe("liz");
    });
  });
}())
