import data from './courses-data.json' assert { type: "json" };
console.log(data);

const Courses={
    courses:document.querySelector(".courses-grid"),
  
    renderCourses:function(){
    data.courses.forEach(course => {
    let courseContainer=document.createElement("div");
    courseContainer.classList.add("course-container")
    let courseImg=document.createElement("img");
    let courseTitle=document.createElement("h5");
    let courseAvailability=document.createElement("p");
    let courseDetails=document.createElement("p");
    courseDetails.className="course-details"
    courseDetails.innerHTML="კურსის დეტალები";
    let courseDetailsCont=document.createElement("div");
    courseDetailsCont.className="details-container";


    let courseSvgContainer=document.createElement("div")
    let courseSvg='<svg class="course-svg" preserveAspectRatio="xMidYMid meet" data-bbox="1.833 2.667 13.334 10.666" xmlns="http://www.w3.org/2000/svg" viewBox="1.833 2.667 13.334 10.666" height="16" width="17" data-type="color" role="presentation" aria-hidden="true"><g><path fill="#00AEEF" d="m10.3 2.867 4.667 4.666a.645.645 0 0 1 0 .934L10.3 13.133a.644.644 0 0 1-.933 0 .644.644 0 0 1 0-.933L12.9 8.667H2.5c-.4 0-.667-.267-.667-.667s.267-.667.667-.667h10.4L9.367 3.8a.605.605 0 0 1-.2-.467c0-.2.066-.333.2-.466a.644.644 0 0 1 .933 0Z" data-color="1"></path></g></svg>'
    courseImg.setAttribute("src",course.imgUrl);
    courseImg.setAttribute("alt",course.courseName);
    courseTitle.innerHTML=course.courseName;
    course.available?courseAvailability.innerHTML="":courseAvailability.innerHTML="რეგისტრაცია დასრულებულია";
    this.courses.appendChild(courseContainer);
    courseContainer.appendChild(courseImg);
    courseContainer.appendChild(courseTitle);
    courseContainer.appendChild(courseAvailability);
    courseContainer.appendChild(courseDetailsCont);
    courseDetailsCont.appendChild(courseSvgContainer)

    courseDetailsCont.appendChild(courseDetails)
    courseSvgContainer.innerHTML=courseSvg;
        });
    }

};

const Questions={
    questionContainer:document.querySelector(".question-container"),
    

    renderQuestions:function(){
        let title=document.createElement("h2");
        title.innerHTML="ხშირად დასმული კითხვები"
        let questionParent=document.createElement("div");
        questionParent.className="question-parent";


        let svgCodeDown='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path class="arrowDown" d="M8.14644661,10.1464466 C8.34170876,9.95118446 8.65829124,9.95118446 8.85355339,10.1464466 L12.4989857,13.7981758 L16.1502401,10.1464466 C16.3455022,9.95118446 16.6620847,9.95118446 16.8573469,10.1464466 C17.052609,10.3417088 17.052609,10.6582912 16.8573469,10.8535534 L12.4989857,15.2123894 L8.14644661,10.8535534 C7.95118446,10.6582912 7.95118446,10.3417088 8.14644661,10.1464466 Z"></path></svg>'
        let svgCodUp='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path class="arrowUp" d="M8.14644661,14.858836 C7.95118446,14.6635739 7.95118446,14.3469914 8.14644661,14.1517292 L12.4989857,9.79289322 L16.8573469,14.1517292 C17.052609,14.3469914 17.052609,14.6635739 16.8573469,14.858836 C16.6620847,15.0540981 16.3455022,15.0540981 16.1502401,14.858836 L12.4989857,11.2071068 L8.85355339,14.858836 C8.65829124,15.0540981 8.34170876,15.0540981 8.14644661,14.858836 Z"></path></svg>'
        
        
        let headers = document.querySelectorAll('.headers');
        let svgs = document.querySelectorAll('.svg-cont');
        
        console.log(headers)
        
        
        for (var i=0; i<headers.length; i++) {
                svgs[i].innerHTML=svgCodeDown;
        
                headers[i].addEventListener('click', toggleDisplay);
            }
        
        function toggleDisplay() {
            if(this.childNodes[3].innerHTML==svgCodeDown){
            this.childNodes[3].innerHTML=svgCodUp
        }else{
            this.childNodes[3].innerHTML=svgCodeDown
        }
            if (this.parentNode.classList.contains('current-item')) {
        
        
                var currentlyDisplayed = document.querySelectorAll('.current-item');
         
        
        
                for (var e=0; e<currentlyDisplayed.length; e++) {
        
                    currentlyDisplayed[e].classList.remove('current-item');
                    svgs[e].innerHTML=svgCodeDown;
                }
        
            } else {
           
        
                this.closest('.item').classList.add('current-item');
        
            }
        }

    }


}


Courses.renderCourses();
Questions.renderQuestions();


