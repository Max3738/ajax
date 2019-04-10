class PostUI{
    constructor() {
        this._container = document.querySelector(".posts-wrapper");

    }
    addPost(post){
        const template = PostUI._createTemplate(post);

        this._container.insertAdjacentHTML("beforeend",template)
    }
    showEmptyMsg() {
        this._container.insertAdjacentHTML("beforeend", PostUI._emtyContainerTemplate());
    }

    static _createTemplate({id,name,username,email}) {
        return `
        <div class="card mt-3">
            <div class="card-body">
                <h5 class="card-title">${id}</h5>
                <p class="card-name">${name}</p>
               <div class="inform d-none">
                <p class="card-username">${username}</p>
                <p class="card-email">${email}</p>
               
                </div>
            </div>
        </div>
        `
    }

   static _emtyContainerTemplate() {
       return `<div class="alert alert-info">Нет постов</div>`
   }

}


function generatePosts(posts){
    const ui = new PostUI();
    if (!posts.length) return ui.showEmptyMsg();
    posts.forEach(post => ui.addPost(post));
}

const http = new CustomHttp();
const apiUrl = "https://jsonplaceholder.typicode.com";
http.get(`${apiUrl}/users`, (res)=> {
    generatePosts(res);
});
let inform1 = document.getElementsByClassName("card-name");
let inform2 = document.getElementsByClassName("container");

let inform = document.getElementsByClassName("inform");


// for ( i = 0 ; i < inform.length-1; i++){
//     inform[i].addEventListener("click", ()=>{
//         if (inform[i].className ==="inform d-none") inform[i].className ="inform";
//      else inform[i].className ="inform d-none";
//     });
// }
document.querySelector(".posts-wrapper").addEventListener("click", e => {
    if (e.target.classList.contains("card-name") && e.target.nextElementSibling.className ==="inform") e.target.nextElementSibling.className ="inform d-none";
    else if(e.target.classList.contains("card-name") && e.target.nextElementSibling.className ==="inform d-none")  {
        e.target.nextElementSibling.classList.toggle("d-none");
    }
  });



