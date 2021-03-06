(function () {
  var minicolors = angular.module('minicolors', []);

  minicolors.provider('minicolors', function () {
    this.defaults = {
      animationSpeed: 50,
      animationEasing: 'swing',
      change: null,
      changeDelay: 0,
      control: 'hue',
      dataUris: true,
      hide: null,
      hideSpeed: 100,
      inline: false,
      letterCase: 'lowercase',
      opacity: false,
      position: 'bottom left',
      show: null,
      showSpeed: 100,
      theme: 'default'
    };

    this.$get = function () {
      return this;
    };
  });

  minicolors.directive('minicolors', ['$parse', 'minicolors', function ($parse, minicolors) {
    return {
      restrict: 'AC',
      scope: {
        'color': '=ngModel'
      },
      link: function (scope, element, attrs) {
        var options = $parse(attrs.options || '{}')(scope.$parent);
        angular.extend(options, minicolors.defaults);
        options.defaultValue = scope.color;
        if (element.hasClass('minicolors-input')) {
          element.minicolors('destroy');
        }
        element.minicolors(options);
        element.on('change', function () {
          var value = element.val();
          scope.$apply(function () {
            scope.color = value;
          });
        });
      }
    };
  }]);
})();
