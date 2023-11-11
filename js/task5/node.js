fetch('./words.json')
    .then((response) => response.json())
    .then((json) => {

        const main=document.getElementById("main")

        for(i in json){

            const outer=document.createElement("div")
            const card=document.createElement("div")
            const card_body=document.createElement("div")
            const h=document.createElement("h5")
            const p=document.createElement("p")

            outer.classList.add("col-md-3","my-3")
            card.classList.add("card")
            card_body.classList.add("card-body","text-center")
            h.classList.add("card-title")
            p.classList.add("card-text")

            h.innerHTML=json[i].name
            p.innerHTML="Age: "+json[i].age

            card_body.append(h,p)
            card.appendChild(card_body)
            outer.appendChild(card)
            main.appendChild(outer)

            console.log(json[i].name)
        }

    });
