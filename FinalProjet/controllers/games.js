import {MongoClient} from "mongodb";
const client = new MongoClient("mongodb://127.0.0.1:27017");
await client.connect();
const db = client.db("projectFinal");
const games = db.collection("games");

//Show games
export async function getGames (req, res) 
{
   const myGame = await games.find().toArray();
   res.json(myGame);
};

// Show game by ID
export async function getGame (req, res) 
{
   const myGame = await games.findOne({id: parseInt(req.params.id)});
   res.json(myGame);
}

// create game
export async function creatGames (req, res)  
{
    const newGame = req.body;
    await games.insertOne(newGame);
    res.sendStatus(200);
}

// update a game
export async function updateGame (req, res) 
{
   await games.updateOne
    (
        {id: parseInt(req.params.id)},
            {
                $set:
                {
                    title: req.body.title,
                    editor: req.body.editor,
                    platforms: req.body.platforms,
                    quantity: parseInt(req.body.quantity) 
                }
            }
        );
    res.sendStatus(200);
}

// delete a game
export async function destroyGame(req, res) 
{
    try 
    {
       await games.deleteOne({id: parseInt(req.params.id)});
    } catch (e)
    {
       console.log(e); 
    }
    res.sendStatus(200);
}