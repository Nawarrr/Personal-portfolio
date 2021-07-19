
let theme = localStorage.getItem('theme')

if(theme == null){
	setTheme('light')
}else{
	setTheme(theme)
}
let themeDots = document.getElementsByClassName('theme-dot')

for (var i=0 ; themeDots.length >i ; i++) {
    themeDots[i].addEventListener('click', function(){
        let mode = this.dataset.mode;
        console.log('clicked' , mode);
        setTheme(mode);
})
}

function setTheme(mode) {
	if(mode === 'white'){
		document.getElementById('theme-style').href = "styles/default.css" ;
	}

	if(mode === 'blue'){
		document.getElementById('theme-style').href = "styles/blue.css" ;
	}

	if(mode === 'light-blue'){
		document.getElementById('theme-style').href = "styles/light-blue.css" ;
	}

	if(mode === 'purple'){
		document.getElementById('theme-style').href = "styles/purple.css" ;
	}

	localStorage.setItem('theme', mode)
    }
