(function() {
    var app = angular.module('gemStore', []);

    app.controller('StoreController', function() {
        this.products = gems;
    });

    app.controller('TabController', function(){
        this.tab = 1;

        this.setTab = function(tab) {
            this.tab = tab;
        };

        this.isSet = function(tab) {
            return this.tab === tab;
        };
    });

    var gems = [
        {   name: 'Azurite',
            description: "Some gems have hidden qualities beyond their luster, beyond their shine... Azurite is one of those gems.",
            shine: 8,
            price: 2.95,
            canPurchase: true,
            soldOut: false,
            images: [
                "img/gem-02.gif",
                "img/gem-05.gif",
                "img/gem-09.gif"
            ]
        },
        {
            name: 'Bloodstone',
            description: "Origin of the Bloodstone is unknown, hence its low value. It has a very high shine and 12 sides, however.",
            shine: 9,
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
            description: "Zircon is our most coveted and sought after gem. You will pay much to be the proud owner of this gorgeous and high shine gem.",
            shine: 70,
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
