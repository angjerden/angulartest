(function() {
    var app = angular.module('gemStore', []);

    app.controller('StoreController', function() {
        this.products = gems;
    })

    var gems = [
        {   name: 'Azurite',
            price: 2.95,
            canPurchase: true,
            soldOut: false,
            images: [

            ]
        },
        {
            name: 'Bloodstone',
            price: 5.95,
            canPurchase: true,
            soldOut: false,
            images: [
                "img/gem-01.gif",
                "img/gem-03.gif",
                "img/gem-04.gif"
            ]
        },
        {
            name: 'Zircon',
            price: 3.95,
            canPurchase: true,
            soldOut: false,
            images: [
                "img/gem-06.gif",
                "img/gem-07.gif",
                "img/gem-08.gif"
            ]
        },
    ];


})();
