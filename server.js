require('dotenv').config()
const express = require('express')

const app = express()
const Bundler = require('parcel-bundler')
// const bundler = new Bundler('src/index.html')
const PORT = process.env.PORT || 3000
// const Airtable = require('airtable')

// const airtable = new Airtable({
//     apiKey: process.env.keyHSjNEZkvwn7nwN
// })
// const airtable = new Airtable({ apiKey: 'YOUR_API_KEY' }).base('appeFKyoBps7ZIvzV');

// var Airtable = require('airtable');



// var base = new Airtable({ apiKey: 'keyHSjNEZkvwn7nwN' }).base('appeFKyoBps7ZIvzV');

// base('stockTable').find('recQkddffWZ5r37JI', function (err, record) {
//     if (err) { console.error(err); return; }
//     console.log(record);
// });
var Airtable = require('airtable');
// var base = new Airtable({apiKey: 'keyHSjNEZkvwn7nwN'}).base('appeFKyoBps7ZIvzV');

// base('stockTable').select({
//     // Selecting the first 3 records in Grid view:
//     maxRecords: 29,
//     view: "Grid view"
// }).eachPage(function page(records, fetchNextPage) {
//     // This function (`page`) will get called for each page of records.

//     records.forEach(function(record) {
//         console.log('Retrieved', record);
//     });

//     // To fetch the next page of records, call `fetchNextPage`.
//     // If there are more records, `page` will get called again.
//     // If there are no more records, `done` will get called.
//     fetchNextPage();

// }, function done(err) {
//     if (err) { console.error(err); return; }
// });



// base('stockTable').find('recQkddffWZ5r37JI', function(err, record) {
//     if (err) { console.error(err); return; }
//     console.log(record);
// });
app.post('/data', function (req, res) {
	console.log(req.body.a);
});
app.get('/data', async (req, res) => {
    var base = new Airtable({ apiKey: 'keyHSjNEZkvwn7nwN' }).base('appeFKyoBps7ZIvzV');

    console.log("server side post"+req.params.id);
    // var data=[];

    base('stockTable').select({
        // Selecting the first 3 records in Grid view:
        maxRecords: 30,
        view: "Grid view"
    }).eachPage(function page(records, fetchNextPage) {
        // This function (`page`) will get called for each page of records.
        res.json(records.map((c) => c.fields))
        records.forEach(function (record) {
            console.log('Retrieved', record);

        });

        fetchNextPage();

    }, function done(err) {
        if (err) { console.error(err); return; }
    });

    // .base(process.env.BASE)
    // .table(process.env.TABLE)
    // .list()

    // res.send(data)
})

// app.use(bundler.middleware())

app.listen(PORT, () => {
    console.log(`listening on http://localhost:${PORT}`)
})