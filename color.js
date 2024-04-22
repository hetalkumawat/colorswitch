const buttons = document.querySelectorAll('.divs');
const body = document.querySelector('body');
const ref= document.querySelectorAll('.refr');

buttons.forEach(function(button){
    console.log(button);
    button.addEventListener('click', function(e){
        console.log(e)
        console.log(e.target)
        if(e.target.id === "1"){
            body.style.backgroundColor = "#FFAEBC";
        }
        if(e.target.id === "2"){
            body.style.backgroundColor = "#A0E7E5";
        }
        if(e.target.id === "3"){
            body.style.backgroundColor = "#B4F8C8";
        }
        if(e.target.id === "4"){
            body.style.backgroundColor = "#FBE7C6";
        }
        
        
    })
})
// ref.forEach(function(refresh){
//     console.log(refresh);
//     refresh.addEventListener('click', function(f){
//         console.log(f)
//         console.log(f.target)
//         if(f.target.id === "refr"){
//             body.style.backgroundColor = "white";
//         }}
//     )})
for (let i = 0; i < ref.length; i++) {
    const refresh = ref[i];
    console.log(refresh);
    refresh.addEventListener('click', function(f) {
        console.log(f);
        console.log(f.target);
        if (f.target.id === "refr") {
            body.style.backgroundColor = "white";
        }
    });
}