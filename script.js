let div = document.getElementById("enter list title");
let title = document.getElementById("BoardTitle");
let titleInput = document.getElementById("titleInput");
let todoInput = document.getElementById("todo input");
let categoryInput = document.getElementById("category input");
let listOfCategories = document.getElementById("list of categories");

function SetTitle(button)
{
    document.getElementById("body").style.display = "flex"; //setting title of trelloboard
    title.querySelector("h1").innerHTML = titleInput.value;
    titleInput.value = (""); //erases text typed in input box

    titleInput.style.display = "none";
    button.style.display = "none";
}

todoInput.addEventListener("change", () => //add things to the first 'todos' list only
    {
        let p = document.createElement("p");
        p.innerHTML = todoInput.value;
        p.setAttribute("contentEditable", "true");
        div.appendChild(p);
        todoInput.value = ("");
    })

    categoryInput.addEventListener("change", () => // new custom categories as added by user
    {
        let card = document.createElement("div");
        let title = document.createElement("h2");
        title.setAttribute("contentEditable", "true"); //enables editing of text at any time after creation
        let div = document.createElement("div");
        let input = document.createElement("input");

        input.addEventListener("change", ()=>{ //inputs added to a new custom category
            let p = document.createElement("p");
            p.innerHTML = input.value;
            p.setAttribute("contentEditable", "true");
            div.appendChild(p);
            input.value = ("");
        })

        title.innerHTML = categoryInput.value; //after creating new custom category give its card a title
        categoryInput.value = ("");
        card.classList.add("cardcategory") //ads class when creating a new card category

        card.appendChild(title); //appending makes the new card show on the screen - create element then append to make it appear
        card.appendChild(div);
        card.appendChild(input);
        listOfCategories.append(card);
    })

