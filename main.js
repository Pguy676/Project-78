var names=[
"My Father","My Mother","My Sister","Me"
];
var images=[
the family.jpg
];
var i=0;
function family(){
  document.getElementById("one").innerHTML=names[i];
  document.getElementById("family_img").src=images[i];
  i++;
  if(i==4){
    i=0;
  }}