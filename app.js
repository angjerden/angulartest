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
                "img/gem-02.gif"
            ]
        },
        {
            name: 'Bloodstone',
            price: 5.95,
            canPurchase: true,
            soldOut: false,
            images: [
                "img/gem-01.gif"
            ]
        },
        {
            name: 'Zircon',
            price: 3.95,
            canPurchase: true,
            soldOut: false,
            images: [
                "img/gem-06.gif"
            ]
        },
    ];


})();
