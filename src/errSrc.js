module.exports = function($interval){
  return {
    restrict: 'A',
    link: function($scope, $element, $attrs) {
      var originalSrc = $attrs.src
      var intervalHandle = undefined
      $element.bind('error', function() {
        $attrs.$set('src', $attrs.errSrc)
        $interval.cancel(intervalHandle)
        intervalHandle = $interval(function() {
          $attrs.$set('src', originalSrc)
        }, 1000)
      })
      $scope.$on('$destroy', function() {
        $interval.cancel(intervalHandle)
      })
    }
  }
}
