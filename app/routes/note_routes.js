module.exports = (app, db) => {
    app.post("/notes", (req, res) => {
        const note = {
            text: req.body.view,
            title: req.body.title
        };

        console.log("db: " + db);

        db.collection('notes')
            .insert(note, (err, result) => {
                res.send(result);
            });
    })
};