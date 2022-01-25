const passes = [
    { // Maurice
        pass: 'd3ad?',
        capsMatter: false,
        link: 'maurice'
    },
    { // Bubly Jr
        pass: `G00dL1L'B0y0`,
        capsMatter: true,
        link: 'bublyjr'
    },
    { // Beachball
        pass: 'deadmeat',
        capsMatter: false,
        link: 'beachball',
    },
    { // Sean + Nuke
        pass: 'nuke',
        capsMatter: false,
        link: 'sean'
    },
    { // Unstore
        pass: '!S7or3',
        capsMatter: true,
        link: 'unstore'
    },
    { // Best Cutter
        pass: 'cardboard!:)',
        capsMatter: false,
        link: 'bestcutter'
    },
    { // SPAM WALL
        pass: '_[[[[["""""hawaii"""""]]]]]_',
        capsMatter: true,
        link: 'spamwall'
    },
    { // Cheese Mafia
        pass: '\u263A\u263A\u263B\u263A\u263A',
        capsMatter: true,
        link: 'cheese'
    },
    { // Gucci / Gucki
        pass: 'Straight Racks on the homies my guy you already know',
        capsMatter: true,
        link: 'gucci'
    },
    { // Foo Water
        pass: 'fox_foofighter',
        capsMatter: false,
        link: 'foowater'
    },
    { // Carti
        pass: 'WLR_VAMP',
        capsMatter: true,
        link: 'carti'
    },
    { // Mon. House
        pass: '*munch* *munch* *munch*',
        capsMatter: true,
        link: 'monsterhouse'
    }
];

let corners = document.getElementsByClassName('corner');
let cornersGot = 0;

function cornerUpdate(corner) {
    corner.onclick = undefined;
    corner.style.background = 'transparent';
    cornersGot++;
    if (cornersGot == 4) {
        document.getElementsByClassName("topmenu")[0].style.top = "0vh";
    }
}

document.addEventListener('keydown', function(e) {
    if (e.key == 'F1') {
        for (let i = 0; i < corners.length; i++) {
            if (corners[i].onclick != undefined) corners[i].style.background = 'rgba(255, 0, 0, 0.25)';
        }
    }
});

document.getElementById('text-input').addEventListener('keydown', function(e) {
    if (e.key == 'Enter') {
        for (let i = 0; i < passes.length; i++) {
            let userInput = passes[i].capsMatter ? document.getElementById('text-input').value : document.getElementById('text-input').value.toLowerCase();
            if (userInput == passes[i].pass) {
                window.location = `pages?p=${passes[i].link}`;
                return; // Is this needed?
            }
        }
    };
});
