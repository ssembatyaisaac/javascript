const express = require('express')
const app = express()
const formidable = require('formidable')

app.get('/', (req, res) => {
  
})

app.post('/submit-form', (req, res) => {
  new formidable.IncomingForm()
})



app.post('/submit-form', (req, res) => {
  new formidable.IncomingForm().parse(req, (err, fields, files) => {
    if (err) {
      console.error('Error', err)
      throw err
    }
    console.log('Fields', fields)
    console.log('Files', files)
    for (const file of Object.entries(files)) {
      console.log(file)
    }
  })
})

app.listen(2000);