'use strict';

(function() {
  describe('Array', function() {

    it('["one", "two", "three"].myIndexOf("two") is 1', function(){
      expect(["one", "two", "three"].myIndexOf("two")).toBe(1);
    });

    it('[1, 2, 3].myIndexOf(2) is 1', function(){
      expect([1, 2, 3].myIndexOf(2)).toBe(1);
    });

    it('[1, 2, 3].myIndexOf(4) is -1', function(){
      expect([1, 2, 3].myIndexOf(4)).toBe(-1);
    });

    it('[1, 2, 3].myReverse() is [3, 2, 1]', function(){
      expect([1, 2, 3].myReverse()).toBe([3, 2, 1]);
    });

    it('[1, 2, 3, 4].myReverse()', function(){
      expect([1, 2, 3, 4].myReverse()).toBe([4, 3, 2, 1]);
    });
  });
}())
