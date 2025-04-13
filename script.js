 const buttons = document.querySelectorAll('.button');
        // console.log(buttons)
        const body = document.querySelector("body")
        // console.log(body)
        buttons.forEach(function(button) {
            console.log(button)
            button.addEventListener('click', function(e) {
                console.log(e)
                console.log(e.target)
                if(e.target.id == "lightblue"){
                    document.body.style.backgroundColor = e.target.id
                }
                if(e.target.id == "beige"){
                    document.body.style.backgroundColor = e.target.id
                }
                if(e.target.id == "palegreen"){
                    document.body.style.backgroundColor = e.target.id
                }
                if(e.target.id == "gray"){
                    document.body.style.backgroundColor = e.target.id
                }
                if(e.target.id == "coral"){
                    document.body.style.backgroundColor = e.target.id
                }
            })
        })
