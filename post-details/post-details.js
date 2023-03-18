const url = new URL(location.href)
const postId = url.searchParams.get('id')
const mainDiv = document.createElement('div')
mainDiv.classList.add('main')
fetch('https://jsonplaceholder.typicode.com/posts/' + postId)
    .then(resolve => resolve.json())
    .then(post => {
        const postDiv = document.createElement('div')
        postDiv.classList.add('post')

        const ids = document.createElement('p')
        ids.innerText = `userId: ${post.userId} postId: ${post.id}`

        const title = document.createElement('h4')
        title.innerText = `${post.title}`

        const body = document.createElement('h4')
        body.innerText = `${post.body}`

        postDiv.append(ids, title, body)
        mainDiv.append(postDiv)

        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
            .then(resolve => resolve.json())
            .then(comments => {
                const comentsDiv = document.createElement('div')
                comentsDiv.classList.add('comments')

                for (const comment of comments) {
                    const comDiv = document.createElement('div')

                    const ids = document.createElement('p')
                    ids.innerText = `User id: ${comment.postId} Comment id: ${comment.id}`

                    const email = document.createElement('p')
                    email.innerText = `${comment.email}`

                    const name = document.createElement('h4')
                    name.innerText = `${comment.name}`
                    const body = document.createElement('h4')
                    body.innerText = `${comment.body}`

                    comDiv.append(ids, email, name, body)
                    comentsDiv.append(comDiv)
                }
                mainDiv.append(comentsDiv)
            })

    })
document.body.append(mainDiv)

