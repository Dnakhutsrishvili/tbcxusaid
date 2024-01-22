import data from './courses-data.json' assert { type: "json" };
console.log(data);

const Courses={
    courses:document.querySelector(".courses-grid"),
  
    renderCourses:function(){
    data.courses.forEach(element => {
    let courseContainer=document.createElement("div");
    courseContainer.classList.add("course-container")
    let courseImg=document.createElement("img");
    let courseTitle=document.createElement("h5");
    let courseAvailability=document.createElement("p");
    courseImg.setAttribute("src",element.imgUrl)
    courseImg.setAttribute("alt",element.courseTitle)
    courseTitle.innerHTML=element.courseName
    element.available?courseAvailability.innerHTML="":courseAvailability.innerHTML="რეგისტრაცია დასრულებულია"
    this.courses.appendChild(courseContainer);
    courseContainer.appendChild(courseImg)
    courseContainer.appendChild(courseTitle)
    courseContainer.appendChild(courseAvailability)
        });
    }

}

Courses.renderCourses()

