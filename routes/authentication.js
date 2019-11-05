const express = require('express')

const router = express.Router()

router.get("/", (req, res) =>{
  res.json({
    test: 'test 2'
  })
})

export default router