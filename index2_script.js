var currentIdx = 0;
var my_photo_arr = []
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

function instagram_clone_click(){
    document.getElementById("instagram_clone_content").style.opacity="100%";
    document.getElementById("2F_fan_content").style.opacity="0%";
    document.getElementById("instagram_clone_title").style.color="#D0BB57";
    document.getElementById("2F_fan_title").style.color="white";
}

function f2F_fan_click(){
    document.getElementById("instagram_clone_content").style.opacity="0%";
    document.getElementById("2F_fan_content").style.opacity="100%";
    document.getElementById("instagram_clone_title").style.color="white";
    document.getElementById("2F_fan_title").style.color="#D0BB57";
}

document.getElementById("2F_fan_content").style.opacity="0%";

document.getElementById("instagram_clone_title").addEventListener('click', function(){
    instagram_clone_click()
});
document.getElementById("2F_fan_title").addEventListener('click', function(){
    f2F_fan_click()
});




//------------------------------------