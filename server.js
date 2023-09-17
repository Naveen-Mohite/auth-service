const express = require('express')
const app =express()
const posts = [
    {
        username : 'Naveen',
        title : 'Post 1'

    },
    {
        username : 'Mohite',
        title : 'Post 2'

    },
    {
        username : 'Naveen Mohite',
        title : 'Post 3'

    }
]

app.get('/posts', (req,res) => {
    res.json(posts)

})

app.listen(3000)