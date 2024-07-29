const apiKey = 'tTPoLoXghRzZIb0h8xoAhA==3JZX6HuYYpo6BUr0';
const apiUrl = `https://api.api-ninjas.com/v1/quotes`;
let authorName=document.querySelector('.author')
let tag = document.querySelector('.tag')
let quote=document.getElementsByTagName('q')
const generateBtn=document.querySelector('.generate-btn')
const copyBtn=document.querySelector('.copy-btn')

let featchData=async()=>{
await fetch(apiUrl, {
  headers: {
    'X-Api-Key': apiKey
  }
})
  .then(response => {
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    console.log(data);
    authorName.textContent=data[0].author 
    quote.item(0).textContent=data[0].quote   
    tag.innerHTML=data[0].category
  })
  .catch(error => {
    console.error('Error:', error);
  });
}
featchData()
let generateReQuote=()=>{
   featchData();

}
let copyQuote=async()=>{
 await navigator.clipboard.writeText(quote.textContent)
 alert('Quote copied ')  
 
}


generateBtn.addEventListener('click',  generateReQuote)
copyBtn.addEventListener('click', copyQuote)