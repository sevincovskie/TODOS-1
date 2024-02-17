// ad new task (funksiya add klik edende ise dusmelidir) btn klik edende input metn oxumalidir
  
const tasks = document.querySelector('.tasksBlock'); // qlobal


function addNewTask(element) {
     // console.log(element);
    //1 onceki elementi secmek
    const previousElement = element.previousElementSibling;
    const previousElementValue = previousElement.value;
    // console.log(previousElementValue);
  



    // const tasks = document.querySelector('.tasksBlock');
    const taskView = `
  <div class="input-group mb-3">
     <div class="input-group-prepend">
        <div class="input-group-text">
            <input type="checkbox" aria-label="Checkbox for following text input" onclick ="doneTask(this)">
        </div>
      </div>
      <input type="text" class="form-control" aria-label="Text input with checkbox" value ="${previousElementValue}" disabled>
       <button class="btn btn-outline-danger" type="button" onclick ="deleteTask(this)">Delete</button></div>

  </div>
    `

    tasks.innerHTML += taskView;

   

}






//done task
   // klik olanda cek olub olunmadiginin islediyini bilmek ucun html'e onclik

   //    alert ('done task') // cek etmek ucun alerti yoxlamaq olar
  //   console.log(element);

  // cek olunubsa deyisdirmek mumkun olmasin diseyble arxa plani deyissin rengi deyissin 
  // inputa disayble elave et
 // cek ucun de inputun valideynini bilmeliyik

function doneTask(element) {

  if (element.checked) {
    // console.log(element.parentElement);
    //console.log(element.checked); //true false cek olunub olunmamaq


    element.parentElement.parentElement.nextElementSibling.style.textDecoration ="line-through";
    element.parentElement.parentElement.nextElementSibling.style.background ="green";

  } else{
    element.parentElement.parentElement.nextElementSibling.style.textDecoration ="none";
    element.parentElement.parentElement.nextElementSibling.style.background ="none";

  }


}

//delete task
function deleteTask(element) {
  // console.log(element); // hansi elemente klik etmisemse get o valideyni tap
  //input-group tasks icindedi
  const parentElement = element.parentElement; 
  alert("Are you sure ?")     
  // console.log(parentElement);
  const tasks = document.querySelector('.tasksBlock');// her defe istifade etmek yerine qlobala cixartmaq da olar, elementi silmek ucun
  tasks.removeChild(parentElement);

}
