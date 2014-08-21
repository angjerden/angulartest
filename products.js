(function() {
    var app = angular.module('store-directives', []);

    app.directive('productGallery', function () {
        return {
            restrict: 'E',
            templateUrl: 'product-gallery.html',
            controller: function() {
                this.current = 0;

                this.setCurrent = function(current) {
                    this.current = current || 0;
                };
            },
            controllerAs: 'gallery'
        };
    });

    app.directive('productTabs', function() {
        return {
            restrict: 'E',
            templateUrl: 'product-tabs.html',
            controller: function(){
                this.tab = 1;

                this.setTab = function(tab) {
                    this.tab = tab;
                };

                this.isSet = function(tab) {
                    return this.tab === tab;
                };
            },
            controllerAs: 'tab'
        };
    });

    app.directive('productDescription', function() {
        return {
            restrict: 'E',
            templateUrl: 'product-description.html'
        };
    });

    app.directive('productSpecs', function() {
        return {
            restrict: 'A',
            templateUrl: 'product-specs.html'
        };
    });

    app.directive('productReviews', function() {
        return {
            restrict: 'E',
            templateUrl: 'product-reviews.html'
        }
    });

})();