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
    aboutEnok1.innerHTML = 'Hej jag hegete ajne ';
    aboutEnok1.className = 'text-black w-50 float-start ';
    container.appendChild(aboutEnok1);

    const aboutEnok2 = document.createElement("p") // Textruta 2 om mig själv
    aboutEnok2.innerHTML = 'Enok wakddwadawdwwan adwdwd  dwadw dadwad Enokwadd ddwwaewad ewadwadw  wwdwawad' +
    'dw widwaoiwai iwadwa waiwaid idwad';
    aboutEnok2.className = 'text-black w-50 float-end ';
    container.appendChild(aboutEnok2);

    const aboutEnok3 = document.createElement("p") // Textruta 2 om mig själv
    aboutEnok3.innerHTML = 'Duis pharetra quis sit amet condimentum eget condimentum vitae, sollicitudin commodo urna.' +
    'Duis ultricies orci vel tortor luctus, sed ultricies odio suscipit.';
    aboutEnok3.className = 'text-black w-100 text-center ps-5 ';
    aboutEnok.appendChild(aboutEnok3);

   
    const imagePortraits = document.createElement('div');
    imagePortraits.className = 'w-50'; 
    right.appendChild(imagePortraits);

    const portraitTitle = document.createElement('h2'); // Hemsidans titel, svart färg
    portraitTitle.innerHTML = 'Porträtt';
    portraitTitle.className = 'text-black mt-3  ';
    imagePortraits.appendChild(portraitTitle);

    

  
    



    
  

}


