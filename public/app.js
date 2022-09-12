build();

function build(){
    const navigationbar = document.createElement('div');
    navigationbar.className = 'navbar navbar-expand bg-primary -lg'; //Navigationsbaren 
    app.appendChild(navigationbar);
    
    const right = document.createElement('div'); //Delar här upp hemsidan i två delar för ha en divtagg för textområdena och en för bilderna.
    right.className = 'float-start';
    app.appendChild(right);

    
    const left = document.createElement('div'); //Vänstra sidan med textområden
    left.classname = 'float-end';
    app.appendChild(left);
    
    const titleName = document.createElement('h1'); // Text och färg för h1 taggen i menyn
    titleName.innerHTML = 'Hem';
    titleName.className = 'text-white ms-3';
    navigationbar.appendChild(titleName);

    const titlename = document.createElement('h2'); // Hemsidans titel, svart färg
    titlename.innerHTML = 'Enok Ekelund';
    titlename.className = 'text-black mt-4 ms-5';
    left.appendChild(titlename);


    
  

}


