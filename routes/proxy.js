const express = require('express');
const router = express.Router();
const { steamApiKey } = require('../config.json');

router.get('/GetPlayerAchievements', async (req, res) => {
    const response = await fetch(`https://api.steampowered.com/ISteamUserStats/GetPlayerAchievements/v0001/?appid=${req.query.appid}&key=${steamApiKey}&steamid=${req.query.steamid}&l=en`);
    const json = await response.json();
    res.send(json);
});

router.get('/GetSchemaForGame', async (req, res) => {
    const response = await fetch(`https://api.steampowered.com/ISteamUserStats/GetSchemaForGame/v0002/?key=${steamApiKey}&appid=${req.query.appid}&l=english`);
    const json = await response.json();
    res.send(json);
});

module.exports = router;