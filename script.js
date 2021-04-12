let div = document.getElementById("enter list title");
let title = document.getElementById("BoardTitle");
let titleInput = document.getElementById("titleInput");
let todoInput = document.getElementById("todo input");
let categoryInput = document.getElementById("category input");
let listOfCategories = document.getElementById("list of categories");

function SetTitle(button)
{
    document.getElementById("body").style.display = "initial";
    title.querySelector("h1").innerHTML = titleInput.value;
    titleInput.value = (""); //erases text typed in input box

    titleInput.style.display = "none";
    button.style.display = "none";
}

todoInput.addEventListener("change", () =>
    {
        let p = document.createElement("p");
        p.innerHTML = todoInput.value;
        p.setAttribute("contentEditable", "true");
        div.appendChild(p);
        todoInput.value = ("");
    })

    categoryInput.addEventListener("change", () =>
    {
        let card = document.createElement("div");
        let title = document.createElement("h2");
        title.setAttribute("contentEditable", "true"); //enables editing of text at any time after creation
        let div = document.createElement("div");
        let input = document.createElement("input");

        input.addEventListener("change", ()=>{
            let p = document.createElement("p");
            p.innerHTML = input.value;
            p.setAttribute("contentEditable", "true");
            div.appendChild(p);
            input.value = ("");
        })

        title.innerHTML = categoryInput.value;
        categoryInput.value = ("");

        card.appendChild(title);
        card.appendChild(div);
        card.appendChild(input);
        listOfCategories.append(card);
    })

