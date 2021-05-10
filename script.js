// api url
 let pin= '226006';
function Pinvalue(){
         pin = document.getElementById("pin").value;
        console.log(pin);
}

function HandleEvent()
{
const api_url =
    `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=${pin}&date=10-05-2021`;

// Defining async function
page = document.getElementById("demo");
console.log(page.firstChild)
while (page.firstChild) {
    page.removeChild(page.firstChild);
}


async function getapi(url) {

    // Storing response
    const response = await fetch(url);

    // Storing data in form of JSON
    var data = await response.json();
    console.log(data);
    // if (response) {
    //     hideloader();
    // }
    show(data);
}
// Calling that async function
getapi(api_url);

// Function to hide the loader
function hideloader() {
    document.getElementById('loading').style.display = 'none';
}
// Function to define innerHTML for HTML table
function show(data) {

//console.log(data.session);
 let main = document.getElementsByTagName('body')[0];
main.appendChild(page);
  listdata = document.createElement("ul");
  page.appendChild(listdata);
    for(let p in data.sessions)
    {
        console.log(data.sessions[p]);
        for( x in data.sessions[p])
        {
            item = document.createElement("li");
            item.innerHTML = x + ':-  ' + data.sessions[p][x];
            listdata.appendChild(item);
        }
       let el = document.createElement("HR");
       //el.setAttribute("width","100px");
       el.style.color = "black";
       console.log(el)
     listdata.appendChild(el);
    }

    // Setting innerHTML as tab variable
   // document.getElementById("employees").innerHTML = tab;
}
}
