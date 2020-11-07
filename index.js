const sizeForm = document.querySelector("#sizeForm");

sizeForm.addEventListener("submit", sizeFormSubmit);

var xhr = new XMLHttpRequest;
xhr.open('get','lk.svg',true);
xhr.onreadystatechange = function(){
  if (xhr.readyState != 4) return;
  var svg = xhr.responseXML.documentElement;
  svg.setAttribute("id","dsid");
  //svg = document.importNode(svg,true); // surprisingly optional in these browsers
  document.getElementById("p1").appendChild(svg); 
};
xhr.send();

function sizeFormSubmit(event) {
  event.preventDefault();
  const sizeOptionInput = sizeForm.querySelector("input[name='sizeOptions']:checked");
  if(sizeOptionInput) {
    const val = sizeOptionInput.value;
    console.log(val) 
    document.getElementById("dsid").setAttribute("transform", "scale("+val+")"); 
    sizeForm.reset();
  }
}