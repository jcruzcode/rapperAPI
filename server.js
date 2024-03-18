const express = require('express') // Enable access to Express
const app = express() // Use Express with app
const cors = require('cors')
const PORT = 8000 // Port number for server

app.use(cors())

// Rapper API 
let rappers = {
    '21 savage': {
        'age': 31,
        'birthName': 'Shéyaa Bin Abraham-Joseph',
        'birthdate': '22 October 1992', 
        'birthLocation': 'London, England',
        'origin': 'Atlanta, Georgia',
        'genre': 'hip hop, trap, rap, horrorcore',
        'occupation': 'rapper, songwriter, record producer',
        'yearsActive': '2013-present',
        'labels': 'Epic, Slaughter Gang',
        'children': 3
    },
    'chance the rapper':{
        'age': 30,
        'birthName': 'Chancelor Jonathan Bennett',
        'birthdate': 'April 16, 1993', 
        'birthLocation': 'London, England',
        'origin': 'Chicago, Illinois',
        'genre': 'hip hop, alternative hip hop, r & b',
        'occupation': 'rapper, singer, song writer, record producer, activist, actor, philanthropist',
        'yearsActive': '2011-present',
        'labels': 'none',
        'children': 0
    },
    'unknown':{
        'age': 'unknown',
        'birthName': 'unknown',
        'birthdate': 'unknown', 
        'birthLocation': 'unknown',
        'origin': 'unknown',
        'genre': 'unknown',
        'occupation': 'unknown',
        'yearsActive': 'unknown',
        'labels': 'unknown',
        'children': 'unknown'
    }
}

// GET (READ) request for default page
// app.get(endpoint, callback)
app.get('/', (request, response) => {
    // Respond with index.html file
    // _dirname gives current directory path
    response.sendFile(__dirname + '/index.html')
})


// GET request for Rappers API
app.get('/api/', (request, response) => {
    // Respond with all rappers
    response.json(rappers);
})

// GET request for specific rapper given by name parameter
app.get('/api/:name', (request, response) => {
    // endpoint parameter name in lowercase
    const rapperName = request.params.name.toLowerCase()
    if(rappers[rapperName]){
        // Respond with rapper object if rapperName exists
        response.json(rappers[rapperName])
    }else{
        // Otherwise, respond with unknown rapper object
        response.json(rappers['unknown'])
    }
})

// Listen for requests on PORT
app.listen(process.env.PORT || PORT, () => {
    console.log(`Server running on port ${PORT}`)
})