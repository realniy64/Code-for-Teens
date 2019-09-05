function нямкаНаХеллоуин() {
    let вкусняшки = ['KitKat', 'Skittles'];
    console.log(вкусняшки)
    вкусняшки.push('Snickers')
    console.log(вкусняшки)
    вкусняшки.push('Nuts'); вкусняшки.push('Bounty');
    console.log(вкусняшки)
    вкусняшки.push('M&M`s');
    console.log(вкусняшки)
    console.log("ХОЧУ ЕСТЬ, ГАЛЯЯЯЯ НЕСИ " + вкусняшки.pop() + '!');
    вкусняшки.push('Starburst');
    вкусняшки.pop('KitKat', 'Snickers', 'M&M`s', 'Bounty');
    вкусняшки = вкусняшки.sort()
    console.log(вкусняшки)
} 