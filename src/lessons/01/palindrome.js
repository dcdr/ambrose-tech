angular.module('main', []).controller('PalindromeController', function() {
  var vm = this;
  vm.palindrome = '';
  vm.isPalindrome = function() {
    var begin = 0;
    var end = vm.palindrome.length;
    while (begin < end) {
      if (vm.palindrome[begin++] != vm.palindrome[end--]) return false;
    }
    return true;
  };
});
