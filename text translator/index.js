const select=document.getElementById("myselect");
const hello=document.getElementById("hello");

	async function getlang(){
		const url = 'https://text-translator2.p.rapidapi.com/getLanguages';
		const options = {
			method: 'GET',
			headers: {
				'X-RapidAPI-Key': '1df3f9a904msha4b015231d5ab7fp1d1d25jsne9e2dfc3f394',
				'X-RapidAPI-Host': 'text-translator2.p.rapidapi.com'
			}
		};
		
		
			const response = await fetch(url, options);
			const result = await response.json();
			console.log(result);

			const lang=result.data.languages;
			const populateSelect = (selectElement) => {
                for (let i = 0; i < lang.length; i++) {
                    const option = document.createElement("option");
                    option.text = lang[i].name;
                    option.value = lang[i].code;
                    selectElement.appendChild(option);
                }
            }
			populateSelect(select);
			populateSelect(hello);
	} 
	getlang();


async function get( lang1,lang2,textt){
	const url = 'https://text-translator2.p.rapidapi.com/translate';
const options = {
	method: 'POST',
	headers: {
		'content-type': 'application/x-www-form-urlencoded',
		'X-RapidAPI-Key': '1df3f9a904msha4b015231d5ab7fp1d1d25jsne9e2dfc3f394',
		'X-RapidAPI-Host': 'text-translator2.p.rapidapi.com'
	},
	body: new URLSearchParams({
		source_language: lang1,
		target_language: lang2,
		text: textt
	})
};
	const response = await fetch(url, options);
	const result = await response.json();
	console.log(result);
	
	document.getElementById("lowerbox").innerHTML=result.data.translatedText;


} 


const button=document.getElementById("btn");
button.addEventListener("click",()=>{
	var lang1=select.value;
var lang2=hello.value;
var txt=document.getElementById("mytxt").value;
console.log(lang1);
console.log(lang2);
	get(lang1,lang2,txt);
	
})

