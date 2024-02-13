let navData = [
    {
        text: "00 Home",
        url: "/",
    },
    {
        text: "01 Destination",
        url: "/destination",
    },
    {
        text: "02 Crew",
        url: "/crew",
    },
    {
        text: "03 Technology",
        url: "/technology",
    },
];

const body = document.querySelector("body");
body.textContent = "";



async function fetchData(){
    try{
        const response = await fetch("./data/data.json");
        const data = await response.json();
        //console.log(data);
        return data;

    }catch(err){
        console.log("fetch data.json error", err);
    }
}
fetchData();

function addLinkItem(text, url, parent){
    // creare li si a:
    const liElement = document.createElement("li")
    const link = document.createElement("a");
    //setare atribute href:
    link.setAttribute("href", url);
    //adaugare text pe <a>:
    link.textContent = text;

    //adaugare pe parinte:
    liElement.appendChild(link);
    parent.appendChild(liElement);
}

//addLinkItem("00 HomeN", "/", ulElement);
//addLinkItem("01 Destination", "/destination", ulElement);
//addLinkItem("02 Crew", "/crew", ulElement);
//addLinkItem("03 Technology", "/technology", ulElement);

async function initializarePagina(){
    const date = await fetchData();
    console.log(date);
    if(date){
        const navElement = document.createElement("nav");
        const ulElement = document.createElement("ul");

        body.appendChild(navElement);
        navElement.appendChild(ulElement); 

        date.navData.forEach((data)=> addLinkItem(data.text, data.url, ulElement)); //date.navData este un array.
        console.log(date.navData);

        //creare  div parinte, care sa cuprinda: h5, h1, p, button + adaugare text.
    }
};

initializarePagina();

