const init = ()=>{
    document.addEventListener('submit',(e)=>{
        e.preventDefault();
        //let input = e.target.children[1]
        //console.log( e.target.children[1].value)
        let input = document.querySelector('#searchByID').value
        //console.log(input)
        fetch(`http://localhost:3000/movies/${input}`)
        .then(res=>res.json())
        .then(dt=>{
            const title = document.querySelector('section#movieDetails h4');
            const summary = document.querySelector('section#movieDetails p');
            title.innerText=dt.title
            summary.innerText = dt.summary;

        })


    })

}
document.addEventListener('DOMContentLoaded',init)