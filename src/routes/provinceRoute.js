const express = require('express');
const data = require('../../data/json/full_json_generated_data_vn_units.json');
const _ = require('lodash');
const router = express.Router();


router.get('/', async (req, res) => {
    const provinces = _.map(data, item => ({
        type: item.Type,
        code: item.Code,
        name: item.Name,
        codeName: item.CodeName
    }));

    return res
        .status(200)
        .send({
            statusCode: 200,
            result: provinces
        });
});

module.exports = router;