var currentIdx = 0;
var my_photo_arr = [];
my_photo_arr[0] = "my_photo1";
my_photo_arr[1] = "my_photo2";
my_photo_arr[2] = "my_photo3";

// my_photo_arr.forEach(element =>
//     document.getElementById(element).style.borderRadius = "10px");

document.getElementById("my_photo2").style.opacity="0%";
document.getElementById("my_photo3").style.opacity="0%";

function prev_btn(){
    //console.log("prev");
    document.getElementById(my_photo_arr[currentIdx]).style.opacity="0%";
    if(currentIdx == 0){
        currentIdx = 2;
    }else{
        currentIdx -= 1;
    }
    document.getElementById(my_photo_arr[currentIdx]).style.opacity="100%";
}

function next_btn(){
    //console.log("next");
    document.getElementById(my_photo_arr[currentIdx]).style.opacity="0%";
    if(currentIdx == 2){
        currentIdx = 0;
    }else{
        currentIdx += 1;
    }
    document.getElementById(my_photo_arr[currentIdx]).style.opacity="100%";
}

playConsole = setInterval(function(){
    next_btn()
},3000);

//----------portfolio
function term_project_click(){
    document.getElementById("term_project_content").style.opacity="100%";
    document.getElementById("capstone_design_content").style.opacity="0%";
    document.getElementById("term_project_title").style.color="#D0BB57";
    document.getElementById("capstone_design_title").style.color="white";
    document.getElementById("term_project_title").style.fontSize="2em";
    document.getElementById("capstone_design_title").style.fontSize="1em";
}

function capstone_design_click(){
    document.getElementById("term_project_content").style.opacity="0%";
    document.getElementById("capstone_design_content").style.opacity="100%";
    document.getElementById("term_project_title").style.color="white";
    document.getElementById("capstone_design_title").style.color="#D0BB57";
    document.getElementById("term_project_title").style.fontSize="1em";
    document.getElementById("capstone_design_title").style.fontSize="2em";
}

document.getElementById("capstone_design_content").style.opacity="0%";

document.getElementById("term_project_title").addEventListener('click', function(){
    term_project_click()
});
document.getElementById("capstone_design_title").addEventListener('click', function(){
    capstone_design_click()
});

//----------------------------------

//-----------toy project

// function instagram_clone_click(){
//     document.getElementById("instagram_clone_content").style.opacity="100%";
//     document.getElementById("2F_fan_content").style.opacity="0%";
//     document.getElementById("instagram_clone_title").style.color="#D0BB57";
//     document.getElementById("2F_fan_title").style.color="white";
// }

// function f2F_fan_click(){
//     document.getElementById("instagram_clone_content").style.opacity="0%";
//     document.getElementById("2F_fan_content").style.opacity="100%";
//     document.getElementById("instagram_clone_title").style.color="white";
//     document.getElementById("2F_fan_title").style.color="#D0BB57";
// }

// document.getElementById("2F_fan_content").style.opacity="0%";

// document.getElementById("instagram_clone_title").addEventListener('click', function(){
//     instagram_clone_click()
// });
// document.getElementById("2F_fan_title").addEventListener('click', function(){
//     f2F_fan_click()
// });




//------------------------------------

//Main=0, About Me=1, Project=2, Personality=3, Others=4
// var pageArr = ["main", "about_me", "project", "personality", "others"];
// var currentPage = 0;
// var changedPage = 0;
// var beforePosition = 0;
// var mainUrl = window.location.href;

// document.addEventListener('scroll', function(){
//     var afterPosition = document.documentElement.scrollTop;

//     if(Math.abs(afterPosition - beforePosition) > 500){
//         if(beforePosition < afterPosition){ //아래로 스크롤 상태
//             if(changedPage == 4){ //최대 스크롤한 상태
//                 return;
//             }else{
//                 changedPage += 1;
//                 // console.log(pageArr[changedPage]);
//                 this.location.replace(mainUrl + '#' + pageArr[changedPage]);
//                 // console.log(document.getElementById("index_container").children[changedPage]);
//             }
//         }else if(beforePosition > afterPosition){//위로 스크롤 상태
//             if(changedPage == 0){
//                 return;
//             }else{
//                 changedPage -= 1;
//                 console.log(pageArr[changedPage]);
//             }
//         }else if(beforePosition == afterPosition){ //아무것도 안한상태

//         }
//         beforePosition = afterPosition;
//         currentPage = changedPage;
//     }
// });

window.addEventListener("wheel", function(e){
    e.preventDefault();
},{passive : false});

var mHtml = ("html");
var page = 1;


mHtml.animate({scrollTop : 0},10);

$(window).on("wheel", function(e) {
    if(mHtml.is(":animated")) return;
    if(e.originalEvent.deltaY > 0) {
        if(page == 4) return;
        page++;
    } else if(e.originalEvent.deltaY < 0) {
        if(page == 1) return;
        page--;
    }
    var posTop =(page-1) * $(window).height();
    mHtml.animate({scrollTop : posTop});
})