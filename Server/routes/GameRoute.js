const router = require("express").Router();
const Game = require('../model/GameModel');

/*Router to get all Game from db*/
router.get("/", async (req, res) => {

        await Game.find()
        .then(Game => res.send(Game))
        .catch(err => res.status(400).send('Error: ' + err))

});

/*Router to get Game by id from db*/
router.get("/:id", async (req, res) => {

    await Game.findById(req.params.id)
        .then((Game) => res.send(Game))
        .catch(err => res.status(400).send("Error : " + err))
});

/*Router to add get to db*/
router.post('/AddGame', async (req, res) => {

    let game = new Game({
        gameName: req.body.gameName,
        userDescription: req.body.userDescription,
        price: req.body.price,
        imgUrl: req.body.imgUrl,
    });

    try {
        await game.save();
        res.send(game);
      } catch (err) {
        res.status(400).send('Error: ' + err);
      }

});

module.exports = router;
