/* Filename: app.js
Student's name : Ngo Tran Manh Hiep.
Student ID: 301121528.
Web app name: http://localhost:3000
Date: 26nd Oct 2021 */
console.log('Goes to the client side.');

if(getTitle == "Book List")
{
    let deleteButtons = document.querySelectorAll('.btn-danger');
        
    for(button of deleteButtons)
    {
        button.addEventListener('click', (event)=>{
            if(!confirm("Are you sure?")) 
            {
                event.preventDefault();
            }
        });
    }
}