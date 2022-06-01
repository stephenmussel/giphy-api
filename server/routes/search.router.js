const express = require('express');
const router = express.Router();
const { default: axios } = require('axios');

// router is a post so search string can be received
router.post('/', (req, res) => {
    const searchParam = req.body.search;
    console.log('searchParam: ', searchParam);

    const limitParam = req.body.limit;
    console.log('limitParam: ', limitParam);

    const ratingParam = req.body.rating;
    console.log('ratingParam: ', ratingParam);
    
    axios.get(`https://api.giphy.com/v1/gifs/search?api_key=${process.env.GIPHY_API_KEY}&q=${searchParam}&limit=${limitParam}&offset=0&rating=${ratingParam}-13&lang=en`)
        .then(response => {
            console.log(response.data.data);
            res.send(response.data.data);
        })
        .catch(err => {
            console.log('err in search request: ', err);
            res.sendStatus(500);
        });
});

module.exports = router;