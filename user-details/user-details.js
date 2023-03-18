let url = new URL(location.href)
const id = url.searchParams.get('id')
// при кліку на посилання перехід на відповідну сторінку, на якій буде вся інформація про користувача (всі 15 полів) отримана через додатковий запит (https://jsonplaceholder.typicode.com/users/XXX   ХХХ - айді користувача)
fetch('https://jsonplaceholder.typicode.com/users/' + id)
    .then(response => response.json())
    .then(user => {
        const mainDiv = document.createElement('div')
        mainDiv.classList.add('main-div')

        const userDiv = document.createElement('div')
        userDiv.classList.add('about-user')

        const name = document.createElement('h3')
        name.innerText = `Id: ${user.id} Name: ${user.name}`

        const username = document.createElement('h3')
        username.innerText = `Username: ${user.username}`

        const p = document.createElement('p')
        p.innerText = `Email: ${user.email}`

        const address = document.createElement('address')

        const addressP = document.createElement('p')
        addressP.innerText = `Address: ${user.address.street} ${user.address.suite} ${user.address.city} ${user.address.zipcode}`

        const geoP = document.createElement('p')
        geoP.innerText = `Geo: ${user.address.geo.lat} ${user.address.geo.lng}`
        address.append(addressP, geoP)

        const phone = document.createElement('p')
        phone.innerText = `Phone: ${user.phone}`

        const website = document.createElement('p')
        website.innerText = `Website: ${user.website}`

        const company = document.createElement('p')
        company.innerText = `Company name: ${user.company.name} `

        const catchPharse = document.createElement('p')
        catchPharse.innerText = `Catch Pharse: ${user.company.catchPhrase}`

        const bs = document.createElement('p')
        bs.innerText = `Bs: ${user.company.bs}`


        const btnPost = document.createElement('button')
        btnPost.innerText = 'post of current user'

        btnPost.onclick = function (ev) {
            ev.preventDefault()
            fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
                .then(resolve => resolve.json())
                .then(post => {
                    const postDiv = document.createElement('div')
                    postDiv.classList.add('main-post')
                    for (const postElement of post) {
                        const div = document.createElement('div')
                        const p = document.createElement('p')
                        p.innerText = `${postElement.title}`

                        const a = document.createElement('a')
                        a.innerText = 'Link to the post'
                        a.href = '../post-details/post-details.html?id='+JSON.stringify(postElement.id)

                        div.append(p,a)
                        postDiv.append(div)
                    }
                    mainDiv.append(postDiv)

                })
        }

        userDiv.append(name, username, p, address, phone, website, company, catchPharse, bs)
        mainDiv.append(userDiv,btnPost)
        document.body.append(mainDiv)
    })


