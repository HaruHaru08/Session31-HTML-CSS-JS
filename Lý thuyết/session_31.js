//id
// console.dir(document);
let h1=document.getElementById("demo-id");
// console.log(h1);
// //class
// let list=document.getElementsByClassName("demo-class");
// console.log(list);

// //Truy cập và lấy ra thẻ i (phần tử tại vị trí 2)
// console.log(list[2]);
// //Làm việc với toàn bộ phần tử HTML trong List
// for (let i = 0; i < list.length; i++) {
//     console.log(list[i]);
// }

// //TagName
// let tagList=document.getElementsByTagName("div");
// console.log(tagList);
//
let iTag=document.getElementsByClassName("demo-class")[3];
console.dir(iTag);
//Kiểm soát content-nội dung
console.log(iTag.innerHTML);
console.log(iTag.innerText);
console.log(iTag.textContent);
let p=document.getElementById("demo-inner");
console.log(p.innerHTML);
console.log(p.innerText);
console.log(p.textContent);
p.textContent="Jello World";
p.innerText="ABC!@#$";
p.innerHTML=`
<span>1</span>
<u>123</u>
<i>321</i>
`;
//id
console.log(p.id);///"demo-inner"
//style
console.log(p.style);
//Tạo kiểu hình tròn
p.style.width="200px";
p.style.height="200px";
p.style.borderRadius="50%"
p.style.backgroundColor="pink";
p.style.color="while";
p.style.border="10px solid black";
p.style.fontSize="20px";
p.style.textAlign="center";
p.style.lineHeight="200px";
//
let abbr=document.getElementsByClassName("class-01")[0];
console.log(abbr);

//Kiểm soát danh sách class của thẻ abbr
console.log(abbr.classList);
abbr.classList.add("circle");
abbr.classList.remove("circle");

//.parentElement
console.log(abbr.parentElement.parentElement.children[0]);
//.children
//Create
let element=document.createElement("p");
element.innerText="Hello World";
document.body.appendChild(element);
document.getElementById("container").appendChild(element);
document.getElementById("container").remove();
h1.onclick=function(){
    console.log("ĐỒ Ngu");
}