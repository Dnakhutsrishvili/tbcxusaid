import data from './courses-data.json' assert { type: "json" };

const Courses={
    courses:document.querySelector(".courses-grid"),
  
    renderCourses:function(){
    data.courses.forEach(course => {
    let courseContainer=document.createElement("div");
    courseContainer.classList.add("course-container");
    let courseImg=document.createElement("img");
    let courseTitle=document.createElement("h5");
    let courseAvailability=document.createElement("p");
    let courseDetails=document.createElement("p");
    courseDetails.className="course-details";
    courseDetails.innerHTML="კურსის დეტალები";
    let courseDetailsCont=document.createElement("div");
    courseDetailsCont.className="details-container";
    let courseSvgContainer=document.createElement("div");
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
    courseDetailsCont.appendChild(courseSvgContainer);
    courseDetailsCont.appendChild(courseDetails);
    courseSvgContainer.innerHTML=courseSvg;
        });
    }

};

const Questions={
    questionContainer:document.querySelector(".question-container"),
    
    renderQuestions:function(){
        let title=document.createElement("h2");
        title.innerHTML="ხშირად დასმული კითხვები";
        let questionParent=document.createElement("div");
        questionParent.className="question-parent";

        let svgCodeDown='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path class="arrowDown" d="M8.14644661,10.1464466 C8.34170876,9.95118446 8.65829124,9.95118446 8.85355339,10.1464466 L12.4989857,13.7981758 L16.1502401,10.1464466 C16.3455022,9.95118446 16.6620847,9.95118446 16.8573469,10.1464466 C17.052609,10.3417088 17.052609,10.6582912 16.8573469,10.8535534 L12.4989857,15.2123894 L8.14644661,10.8535534 C7.95118446,10.6582912 7.95118446,10.3417088 8.14644661,10.1464466 Z"></path></svg>'
        let svgCodUp='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path class="arrowUp" d="M8.14644661,14.858836 C7.95118446,14.6635739 7.95118446,14.3469914 8.14644661,14.1517292 L12.4989857,9.79289322 L16.8573469,14.1517292 C17.052609,14.3469914 17.052609,14.6635739 16.8573469,14.858836 C16.6620847,15.0540981 16.3455022,15.0540981 16.1502401,14.858836 L12.4989857,11.2071068 L8.85355339,14.858836 C8.65829124,15.0540981 8.34170876,15.0540981 8.14644661,14.858836 Z"></path></svg>'
        
        let headers = document.querySelectorAll('.headers');
        let svgs = document.querySelectorAll('.svg-cont');
        
        for (var i=0; i<headers.length; i++) {
                svgs[i].innerHTML=svgCodeDown;
                headers[i].addEventListener('click', toggleDisplay);
            }

        function toggleDisplay() {
            if(this.childNodes[3].innerHTML==svgCodeDown){
                this.childNodes[3].innerHTML=svgCodUp;
            }else{
                this.childNodes[3].innerHTML=svgCodeDown;
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

const Carousel={
    carouselContainer:document.querySelector(".carousel-container"),

    renderCarousel:function(){
 
        let imgUrls=[
    ["https://static.wixstatic.com/media/93e8a3_a356bb7d201f4f47870683655e9e4120~mv2.png/v1/fill/w_492,h_148,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Asset%204_2x_edited.png",
    "https://static.wixstatic.com/media/93e8a3_eaf33552ffd5463e96a5f776dda00111~mv2.png/v1/fill/w_482,h_160,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/White%20horiz.png",
    "https://static.wixstatic.com/media/93e8a3_ae4ade72135b4c7eaa531290232fe5aa~mv2.png/v1/fill/w_500,h_90,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/93e8a3_ae4ade72135b4c7eaa531290232fe5aa~mv2.png"
      ],
      [
        "https://static.wixstatic.com/media/93e8a3_b595f31239344928802dd7135813e17c~mv2.png/v1/fill/w_496,h_142,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Tegeta%20logo%20geo.png",
        "https://static.wixstatic.com/media/93e8a3_aca86c1c067d4f8585c3c2cb1b0a0178~mv2.png/v1/fill/w_374,h_128,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/93e8a3_aca86c1c067d4f8585c3c2cb1b0a0178~mv2.png",
        "https://static.wixstatic.com/media/93e8a3_b6ed8fb2602e4670bc83d1fd4a7d9283~mv2.png/v1/fill/w_624,h_190,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/MicrosoftTeams-image%20(9).png"
    ],
    [
        "",
        "https://static.wixstatic.com/media/93e8a3_ef7860c1a2854f1c8fc20f867ffa30ab~mv2.png/v1/fill/w_464,h_130,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/UFC%20GEO%20PNG_edited.png",
        "" ]]

        
    let image, carouselSegment;
    
    let currentSlide=1
    imgUrls[0].forEach((url)=>{
        carouselSegment=document.createElement("div");
        carouselSegment.className="carousel-segment"
        image=document.createElement("img");
        image.className="carousel-image"
        image.setAttribute("src",url)
        carouselSegment.appendChild(image)
        this.carouselContainer.appendChild(carouselSegment)
})

setInterval(()=>{
    if(currentSlide<imgUrls.length){

    imgUrls[currentSlide].forEach((url,index)=>{
    
        let images=document.querySelectorAll(".carousel-image");
        let slides=document.querySelectorAll(".carousel-segment")
    
        if(url==""){
            images[index].style.display = 'none';
        }else{
            images[index].setAttribute("src",url);
            images[index].style.display = 'block';
        }
    })
    currentSlide++;
            }else{
        currentSlide=0;
            }
},5000) 
    }
}


Courses.renderCourses();
Questions.renderQuestions();
Carousel.renderCarousel();

