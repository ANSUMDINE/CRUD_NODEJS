import {MongoClient} from "mongodb";
const client = new MongoClient("mongodb://127.0.0.1:27017");
await client.connect();
const db = client.db("projectFinal");
const customers = db.collection("customers");

// show customers
export async function getCustomers (req, res) 
{
   const myCustomer = await customers.find().toArray();
   res.json(myCustomer);
};

// show customers by ID
export async function getCustomer (req, res) 
{
   const myCustomer = await customers.findOne({id: parseInt(req.params.id)});
   res.json(myCustomer);
}

// create customer
export async function creatCustomers (req, res)  
{
    const newCustomer = req.body;
    await customers.insertOne(newCustomer);
    res.sendStatus(200);
}

// update a customer
export async function updateCustomer (req, res) 
{
   await customers.updateOne
    (
        {id: parseInt(req.params.id)},
            {
                $set:
                {
                    name: req.body.name,
                    firstName: req.body.firstName,
                    dateOfBirth: new Date(req.body.dateOfBirth),
                    adress: req.body.adress,
                    phoneNumber: req.body.phoneNumber,
                    points: parseInt(req.body.points)
                }
            }
        );
    res.sendStatus(200);
}

// delete customer
export async function destroyCustomer(req, res) 
{
    try 
    {
       await customers.deleteOne({id: parseInt(req.params.id)});
    } catch (e)
    {
       console.log(e); 
    }
    res.sendStatus(200);
}