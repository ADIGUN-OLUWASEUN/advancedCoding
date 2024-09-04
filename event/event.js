// target --- element that triggered the event
//currentTarget --- element the event is assigned to

// bubbling --- a process by which an event propagate up the tree, from the starting element that triggered the event target element and moving up to its ancestors(parent element until it reaches the root of the document(usually the document object))

signUpForm.addEventListener('submit', (e)=>{
    e.preventDefault() // prevent the default action
    let name = nameInp.value
    console.log(name); 
})

divTag.addEventListener('click', (event)=>{
    // console.log(event.type);    
    // console.log(event.target);
    // console.log(event.currentTarget);   
    // console.log('parent');  
})

pTag.addEventListener('click', (e)=>{
    e.stopPropagation()
    console.log('child');
    
})