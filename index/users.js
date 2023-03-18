// зробити файл index.html
// з ендпоінту http://jsonplaceholder.typicode.com/users отримати всіх користувачів
//     вивести їх id + name списком та додати посилання з href = user-details.html?id=XXX (замість ХХХ - айді юзера)

fetch('http://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
        const mainDiv = document.createElement('div')
        mainDiv.classList.add('users')
        for (const user of users) {
            const userDiv = document.createElement('div')
            userDiv.classList.add('user')
            const h3 = document.createElement('h3')
            h3.innerText = `${user.id} ${user.name}`
            const aUser = document.createElement('a')
            aUser.innerText = 'link' + user.id
            aUser.href = '../user-details/user-details.html?id='+JSON.stringify(user.id)
            userDiv.append(h3,aUser)
            mainDiv.append(userDiv)
        }
        document.body.append(mainDiv)
    })

// при кліку на посилання перехід на відповідну сторінку, на якій буде вся інформація про користувача (всі 15 полів) отримана через додатковий запит (https://jsonplaceholder.typicode.com/users/XXX   ХХХ - айді користувача)
