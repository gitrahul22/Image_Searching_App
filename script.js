const searchform=document.getElementById("srchform");
const searchbox=document.getElementById("srch-box");
const searchresult=document.getElementById("srchresult");
const showmore=document.getElementById("show-more-btn");

let keyword="";
let page=1;

const acceskey='A3UhoN-35HvpVrao0xXeOc2DAqUdvcnCGw7SpZzYEyA';

async function searchImages(){
    console.log("function Called");
    keyword=searchbox.value;
    const url=`https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${acceskey}&per_page=12`;
    const response=await fetch(url);
    // if(response.status==404){
    //     console.log("Not Found");
    // }
    const data=await response.json();
    if(page===1){
        searchresult.innerHTML="";
    }
    console.log(data);
    const results=data.results;
    results.map((result)=>{
        // const image=document.createElement("img");
        // const para=document.createElement("p");
        // para.textContent=result.description;
        // image.src=result.urls.small;
        // const imagelink=document.createElement("a");
        // imagelink.href=result.links.html;
        // imagelink.target="_blank";
        
        // imagelink.appendChild(image);
        // searchresult.appendChild(imagelink);
        // searchresult.appendChild(para);


        const gridItem = document.createElement('div');
        gridItem.className = 'gridcontent';

        const image=document.createElement("img");
        const para=document.createElement("p");
        para.textContent=result.alt_description;
        image.src=result.urls.small;
        const imagelink=document.createElement("a");
        imagelink.href=result.links.html;
        imagelink.target="_blank";
        imagelink.appendChild(image);
        gridItem.appendChild(imagelink);
        gridItem.appendChild(para);

        searchresult.appendChild(gridItem);

    })
    showmore.style.display="block";

}

searchform.addEventListener("submit", (e)=>{
    e.preventDefault();
    page=1;
    searchImages();
})
showmore.addEventListener("click" , ()=>{
    page++;
    console.log(page);
    searchImages();
})
