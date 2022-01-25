let pageList = [
    'maurice',
    'bublyjr',
    'beachball',
    'sean',
    'unstore',
    'bestcutter',
    'spamwall',
    'cheese',
    'gucci',
    'foowater',
    'carti',
    'monsterhouse',
    'bighomie'
];

function addScript(script) {
	let pageScript = document.createElement('script');
	pageScript.async = false;
	pageScript.src = script;
	document.body.append(pageScript);
}

let pageName = (new URLSearchParams(window.location.search)).get('p');
if (pageName == null || !pageList.includes(pageName)) window.location = "../";

addScript(`scripts/${pageName}.js`);
addScript(`scripts/CONSTRUCT.js`);
