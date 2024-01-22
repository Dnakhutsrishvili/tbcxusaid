import data from './courses-data.json' assert { type: "json" };
console.log(data);

const Courses={
    courses:document.querySelector(".courses-grid"),
    svg:document.querySelector("#svg"),
  
    renderCourses:function(){
        console.log(this.svg)
    data.courses.forEach(element => {
    let courseContainer=document.createElement("div");
    courseContainer.classList.add("course-container")
    let courseImg=document.createElement("img");
    let courseTitle=document.createElement("h5");
    let courseAvailability=document.createElement("p");
    courseImg.setAttribute("src",element.imgUrl);
    courseImg.setAttribute("alt",element.courseTitle);
    courseTitle.innerHTML=element.courseName;
    element.available?courseAvailability.innerHTML="":courseAvailability.innerHTML="რეგისტრაცია დასრულებულია";
    this.courses.appendChild(courseContainer);
    courseContainer.appendChild(courseImg);
    courseContainer.appendChild(courseTitle);
    courseContainer.appendChild(courseAvailability);
    courseContainer.appendChild(Courses.svg);
        });
    }

};

Courses.renderCourses();
