var styleElement;
var styleContent;
var oldconsole = console;

// /!\ ISOMORPHIC PART BE CAREFUL
if (typeof window === 'object') {
    styleContent = '';
    styleElement = document.createElement('style');
    styleElement.type = 'text/css';
    document.head.appendChild(styleElement);

    console = {
        log: function(message) {
            styleContent += message;
        }
    }
}

const colors = [
    'aliceblue',
    'antiquewhite',
    'aqua',
    'aquamarine',
    'azure',
    'beige',
    'bisque',
    'black',
    'blanchedalmond',
    'blue',
    'blueviolet',
    'brown',
    'burlywood',
    'cadetblue',
    'chartreuse',
    'chocolate',
    'coral',
    'cornflowerblue',
    'cornsilk',
    'crimson',
    'cyan',
    'darkblue',
    'darkcyan',
    'darkgoldenrod',
    'darkgray',
    'darkgreen',
    'darkkhaki',
    'darkmagenta',
    'darkolivegreen',
    'darkorange',
    'darkorchid',
    'darkred',
    'darksalmon',
    'darkseagreen',
    'darkslateblue',
    'darkslategray',
    'darkturquoise',
    'darkviolet',
    'deeppink',
    'deepskyblue',
    'dimgray',
    'dodgerblue',
    'firebrick',
    'floralwhite',
    'forestgreen',
    'fuchsia',
    'gainsboro',
    'ghostwhite',
    'gold',
    'goldenrod',
    'gray',
    'green',
    'greenyellow',
    'honeydew',
    'hotpink',
    'indianred',
    'indigo',
    'ivory',
    'khaki',
    'lavender',
    'lavenderblush',
    'lawngreen',
    'lemonchiffon',
    'lightblue',
    'lightcoral',
    'lightcyan',
    'lightgoldenrodyellow',
    'lightgray',
    'lightgreen',
    'lightpink',
    'lightsalmon',
    'lightseagreen',
    'lightskyblue',
    'lightslategray',
    'lightsteelblue',
    'lightyellow',
    'lime',
    'limegreen',
    'linen',
    'magenta',
    'maroon',
    'mediumaquamarine',
    'mediumblue',
    'mediumorchid',
    'mediumpurple',
    'mediumseagreen',
    'mediumslateblue',
    'mediumspringgreen',
    'mediumturquoise',
    'mediumvioletred',
    'midnightblue',
    'mintcream',
    'mistyrose',
    'moccasin',
    'navajowhite',
    'navy',
    'oldlace',
    'olive',
    'olivedrab',
    'orange',
    'orangered',
    'orchid',
    'palegoldenrod',
    'palegreen',
    'paleturquoise',
    'palevioletred',
    'papayawhip',
    'peachpuff',
    'peru',
    'pink',
    'plum',
    'powderblue',
    'purple',
    'rebeccapurple',
    'red',
    'rosybrown',
    'royalblue',
    'saddlebrown',
    'salmon',
    'sandybrown',
    'seagreen',
    'seashell',
    'sienna',
    'silver',
    'skyblue',
    'slateblue',
    'slategray',
    'snow',
    'springgreen',
    'steelblue',
    'tan',
    'teal',
    'thistle',
    'tomato',
    'turquoise',
    'violet',
    'wheat',
    'white',
    'whitesmoke',
    'yellow',
    'yellowgreen',
];

const borderStyles = [
    'dashed',
    'dotted',
    'double',
    'groove',
    'hidden',
    'inherit',
    'initial',
    'inset',
    'lone',
    'outset',
    'ridge',
    'solid',
];

const sides = [
    'bottom',
    'left',
    'right',
    'top',
];

const borderRadiusSides = [
    'bottom-left',
    'bottom-right',
    'top-left',
    'top-right',
];

const displays = [
    'block',
    'flex',
    'grid',
    'inherit',
    'inline',
    'inline-block',
    'inline-flex',
    'inline-grid',
    'inline-table',
    'list-item',
    'none',
    'run-in',
    'table',
    'table-caption',
    'table-cell',
    'table-column',
    'table-column-group',
    'table-footer-group',
    'table-header-group',
    'table-row',
    'table-row-group',
];


const emStep = 0.01;
const emNbDigits = 2;
const pxWidths = Array.from({ length: 1000 }, (v, k) => k);
const emWidths = Array.from({ length: 50 }, (v, k) => {
    return Array.from({ length: 1 / emStep }, (v, k) => k * emStep);
}).reduce((widths, subWidths, index) => widths.concat(subWidths.map(width => index + width)), []);

function emToPartialClassname(width) {
    return ('' + width.toFixed(emNbDigits)).replace('.', '-dot-');
}

colors.map(color => {
    console.log(`.color-${color} { color: ${color}; }`);
    console.log(`.background-color-${color} { background-color: ${color}; }`);
    console.log(`.border-color-${color} { border-color: ${color}; }`);
});

borderStyles.map(borderStyle => {
    console.log(`.border-style-${borderStyle} { border-style: ${borderStyle}; }`);
});

pxWidths.slice(0, 30).map(width => {
    console.log(`.border-width-${width}px { border-width: ${width}px; }`);
    console.log(`.border-radius-${width}px { border-radius: ${width}px; }`);
});

emWidths.slice(0, 30 / emStep).map(width => {
    console.log(`.border-width-${emToPartialClassname(width)}em { border-width: ${width.toFixed(emNbDigits)}em; }`);
    console.log(`.border-radius-${emToPartialClassname(width)}em { border-radius: ${width.toFixed(emNbDigits)}em; }`);
});

// margins
pxWidths.map(width => {
    console.log(`.margin-${width}px { margin: ${width}px; }`);

    sides.map(side => {
        console.log(`.margin-${side}-${width}px { margin-${side}: ${width}px; }`);
    });
});

emWidths.map(width => {
    console.log(`.margin-${emToPartialClassname(width)}em { margin: ${width.toFixed(emNbDigits)}em; }`);

    sides.map(side => {
        console.log(`.margin-${side}-${emToPartialClassname(width)}em { margin-${side}: ${width.toFixed(emNbDigits)}em; }`);
    });
});

// paddings
pxWidths.map(width => {
    console.log(`.padding-${width}px { padding: ${width}px; }`);

    sides.map(side => {
        console.log(`.padding-${side}-${width}px { padding-${side}: ${width}px; }`);
    });
});

emWidths.map(width => {
    console.log(`.padding-${emToPartialClassname(width)}em { padding: ${width.toFixed(emNbDigits)}em; }`);

    sides.map(side => {
        console.log(`.padding-${side}-${emToPartialClassname(width)}em { padding-${side}: ${width.toFixed(emNbDigits)}em; }`);
    });
});

sides.map(side => {
    colors.map(color => {
        console.log(`.border-${side}-color-${color} { border-${side}-color: ${color}; }`);
    });

    borderStyles.map(borderStyle => {
        console.log(`.border-${side}-style-${borderStyle} { border-${side}-style: ${borderStyle}; }`);
    });

    pxWidths.slice(0, 30).map(width => {
        console.log(`.border-${side}-width-${width}px { border-${side}-width: ${width}px; }`);
    });

    emWidths.slice(0, 30 / emStep).map(width => {
        console.log(`.border-${side}-width-${emToPartialClassname(width)}em { border-${side}-width: ${width.toFixed(emNbDigits)}em; }`);
    });
});

borderRadiusSides.map(borderRadiusSide => {
    pxWidths.slice(0, 30).map(width => {
        console.log(`.border-${borderRadiusSide}-radius-${width}px { border-${borderRadiusSide}-radius: ${width}px; }`);
    });

    emWidths.slice(0, 30 / emStep).map(width => {
        console.log(`.border-${borderRadiusSide}-radius-${emToPartialClassname(width)}em { border-${borderRadiusSide}-radius: ${width.toFixed(emNbDigits)}em; }`);
    });
});

displays.map(display => {
    console.log(`.display-${display} { display: ${display}; }`);
});

if (typeof window === 'object') {
    styleElement.appendChild(document.createTextNode(styleContent.replace(/;/g, ' !important;')));
    console = oldconsole;
    console.log('Universal CSS generation complete. You\'re good to go');
}
