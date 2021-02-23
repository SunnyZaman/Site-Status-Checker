const express = require('express')
const Site = require('../models/Site')
const auth = require('../middleware/auth')

const router = express.Router()

router.post('/sites', async (req, res) => {
    // Create a new user
    try {
        const site = new Site(req.body)
        await site.save()
        // const token = await user.generateAuthToken()
        res.status(201).send({ site })
    } catch (error) {
        res.status(400).send(error)
    }
})


// router.get('/users/me', auth, async(req, res) => {
//     // View logged in user profile
//     res.send(req.user)
// })


module.exports = router