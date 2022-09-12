build();

function build(){
    const navigationbar = document.createElement('div');
    navigationbar.className = 'navbar navbar-expand bg-primary -lg'; //Navigationsbaren 
    app.appendChild(navigationbar);

    const title = document.createElement('h1'); // Text och färg för h1 taggen i menyn
    title.innerHTML = 'Hem';
    title.className = 'text-white ms-3';
    navigationbar.appendChild(title);





    const left = document.createElement('div'); //Vänstra sidan med textområden
    left.className = 'float-start w-50';
    app.appendChild(left);

    const right = document.createElement('div'); //Delar här upp hemsidan i två delar för ha en divtagg för textområdena och en för bilderna.
    right.className = 'float-start w-50';
    app.appendChild(right);

    
    

    const aboutEnok = document.createElement('div');
    aboutEnok.className = 'w-50'; 
    left.appendChild(aboutEnok);

    const titlename = document.createElement('h2'); // Hemsidans titel, svart färg
    titlename.innerHTML = 'Enok Ekelund';
    titlename.className = 'text-black mt-3 ps-5 ';
    aboutEnok.appendChild(titlename);

    const container = document.createElement('div');
    container.className = 'container w-100 float-start ps-5 ';
    aboutEnok.appendChild(container);

    const aboutEnok1 = document.createElement("p") // Textruta 1 om mig själv
    aboutEnok1.innerHTML = 'Hej jag heter Enok Ekelund och bor skogåsområdet. Jag brukar spela fotboll, träffa kompisar och spela' +
    'datorspel på fritden. Just nu sparar jag till att köpa en egen bil och pluggar till körkortsteorin samtidigt. Min favorit mat är pizza.';
    
    aboutEnok1.className = 'text-black w-50 float-start ';
    container.appendChild(aboutEnok1);

    const aboutEnok2 = document.createElement("p") // Textruta 2 om mig själv
    aboutEnok2.innerHTML = 'Hemma har jag en hund som heter Raffe som jag går ut med ungefär varannan dag och han bits inte, så ofta' +
    'Utöver det så har jag en lillebror som jag bor vägg i vägg med och som är riktigt jobbig från tid till tid. Min favoritfärg är blålila.'
    aboutEnok2.className = 'text-black w-50 float-end ';
    container.appendChild(aboutEnok2);

    const aboutEnok3 = document.createElement("p") // Textruta 2 om mig själv
    aboutEnok3.innerHTML = 'På sommaren jobbade jag på ICA i farsta och gick upp ungefär fem varje dag vilket sög. På tiden jag fick över brukade' +
    'jag och några kompisar dra iväg och bada eller liknande. Framförallt var det flatenbadet som gällde men när vi inte orkade åka' +
    'långt blev det istället drevviken, vilket är ett bad som ligger närmare där vi bor.';
    aboutEnok3.className = 'text-black w-100 text-center ps-5 ';
    aboutEnok.appendChild(aboutEnok3);

   
    const imagePortraits = document.createElement('div');
    imagePortraits.className = 'w-50'; 
    right.appendChild(imagePortraits);

    const portraitTitle = document.createElement('h2'); // Hemsidans titel, svart färg
    portraitTitle.innerHTML = 'Porträtt';
    portraitTitle.className = 'text-black mt-3  ';
    imagePortraits.appendChild(portraitTitle);

    const img1 = document.createElement("img");
    img1.className = 'w-25 h-25 me-3';
    img1.setAttribute('src', 'enok.jpg')
    imagePortraits.appendChild(img1);

    const img2 = document.createElement("img");
    img2.className = 'w-25 h-25';
    img2.setAttribute('src', 'enok1.jpg')
    imagePortraits.appendChild(img2);






  
    



    
  

}


