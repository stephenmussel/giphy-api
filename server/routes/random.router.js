const express = require('express');
const router = express.Router();
const { default: axios } = require('axios');

router.get('/', (req, res) => {
    axios.get(`https://api.giphy.com/v1/gifs/random?api_key=${process.env.GIPHY_API_KEY}&limit=1&tag=dog&rating=pg-13`)
        .then(response => {
            res.send(response.data);
        })
        .catch(err => {
            console.log('err in fetching from giphy API: ', err);
            res.sendStatus(500);
            
        })
})

module.exports = router;
