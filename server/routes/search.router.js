const express = require('express');
const router = express.Router();
const { default: axios } = require('axios');

router.post('/', (req, res) => {
    const searchParam = req.body.search;
    console.log('searchParam: ', searchParam);
    
    axios.get(`https://api.giphy.com/v1/gifs/search?api_key=fO8fbc5HkewBdAG3j9oSfIdDDw51gBrc&q=${searchParam}&limit=5&offset=0&rating=pg-13&lang=en`)
        .then(response => {
            console.log(response.data.data);
            res.send(response.data.data);
        })
        .catch(err => {
            console.log('err in search request');
            res.sendStatus(500);
        });
});

module.exports = router;