const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const siteSchema = mongoose.Schema({
    url: {
        type: String,
        required: true,
        trim: true
    },
    tokens: [{
        token: {
            type: String,
            required: true
        }
    }]
})
siteSchema.methods.generateAuthToken = async function() {
    // Generate an auth token for the site
    const site = this
    const token = jwt.sign({_id: site._id}, process.env.JWT_KEY)
    site.tokens = site.tokens.concat({token})
    await site.save()
    return token
}

const Site = mongoose.model('Site', siteSchema)

module.exports = Site