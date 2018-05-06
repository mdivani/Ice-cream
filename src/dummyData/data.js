const flavorVanilla = {
    name: 'Vanilla',
    options: [
    'vanilla bean', 
    'old time vanilla', 
    'butter brickle',
    'black Rasperry marble',
    'cookie dough', 
    'heath bar',
    'heaven',
    'Oatmeal raisin cookie dough'
]
}

const flavorChocolate = {
    name: 'Chocolate',
    options: [
     'bittersweet',
     'chocolate', 
     'chocolate almond' ,
     'Chocolate chip' ,
     'Chocolate cinamon' ,
     'Chocolate cinamon chip', 
     'malt ball'
    ]
}

const flavorCoffe = {
    name: 'Coffe',
    options: [
    'coffe ', 
    'coffe almond fludge', 
    'coffe kahlua krunch' ,
    'koffe kruncg' ,
    'irish coffe & choc chip' ,
    'mud pie'
]
}

const flavorNuts = {
    name: 'Nuts',
    options: [
        'black walnut',
        'nutter pecan',
        'macadamia nut',
        'maplenut' ,
        'pistachio' ,
        'toasted almond'
        ]
}

export const flavors = [
    flavorVanilla,
    flavorChocolate,
    flavorCoffe,
    flavorNuts
];

export const userData = {
    credits: 3,
    flavors: [
            {
            flavor: 'vanilla bean',
            selected: 0
        },
        {
            flavor: 'bittersweet',
            selected: 0
        },
        {
            flavor: 'old time vanilla',
            selected: 0
        },
        {
            flavor: 'black walnut',
            selected: 0
        },
        {
            flavor: 'coffe almond fludge',
            selected: 0
        }
    ]
}