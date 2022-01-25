if (pageData.bg != undefined) {
    document.body.style.backgroundImage = `url(./img/${pageData.bg.href})`;
    if (pageData.bg.size != undefined) document.body.style.backgroundSize = `${pageData.bg.size.width} ${pageData.bg.size.height}`;
    if (pageData.bg.norep) document.body.style.backgroundRepeat = 'no-repeat';
}

let backButton = document.createElement('a');
backButton.href = '../';

let backButtonChild = document.createElement('div');
backButtonChild.id = 'backButton';
backButtonChild.innerHTML = '&#60;-';

backButton.append(backButtonChild);

if (pageData.body != undefined) {
    let pageBody = document.createElement('div');
    pageBody.id = 'pageBody';
    pageBody.append(backButton);
    document.body.append(pageBody);

    let titleDiv = document.createElement('div');
    titleDiv.id = 'pageTitle';
    titleDiv.innerHTML = pageData.body.title;
    pageBody.append(titleDiv);

    let paragraphs = document.createElement('div');
    paragraphs.id = 'paragraphs';

    for (let i = 0; i < pageData.body.desc.length; i++) {
        let paraChild = document.createElement('div');

        let paraChildHeader = document.createElement('h1');
        paraChildHeader.innerHTML = pageData.body.desc[i].header;
        paraChild.append(paraChildHeader);
        
        for (let j = 0; j < pageData.body.desc[i].p.length; j++) {
            let paraChildText = document.createElement('p');
            paraChildText.innerHTML = pageData.body.desc[i].p[j];
            paraChild.append(paraChildText);
        }
        
        paragraphs.append(paraChild);
    }
    
    pageBody.append(paragraphs);
} else {
    document.body.append(backButton);
}
