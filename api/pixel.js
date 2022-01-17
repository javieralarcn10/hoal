const express = require("express");
const router = express.Router();

const { Analytics } = require("../db.js");
const { Test } = require("../db_tests.js");

router.get('/', async (req,res)=>{
	const tests = await Test.findAll();
	res.send(tests)
})

router.post('/', async (req, res) => {
    let object = {
            client: req.query.id,
            event: req.query.ev,
            user: req.query.uid,
            mobile: req.query.md,
            timestamp: req.query.ts / 1000,
            url: req.query.dl,
            referrer: req.query.rl
        }
    const analytic = await Analytics.create(object);
    let tests = null;
    if (req.query.ev == 'pageload') {
        tests = await Test.findAll({
            where: {
                page: object.client
            }
        });
    }
    res.send('Data tracked')
})

module.exports = router;