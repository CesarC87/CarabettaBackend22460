const express = require('express')
const cors = require('cors')
const aws = require('aws-sdk')
const app = express()
const PORT = process.env.PORT || 8080 

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors())

aws.config.update({
    region: "us-east-1"
})

const dynamoDB = new aws.DynamoDB.DocumentClient();
const TABLE_NAME = 'articlelist'

const sns = new aws.SNS()

const SNS_TOPIC_ARN = 'arn:aws:sns:us-east-1:436836799512:NotificacionCesar'

app.get('/', (req, res, next) => {
    res.send('Hola desde la raiz')
})

const getProducts = async (params) => {
    try {
        let dynamoData = await dynamoDB.scan(params).promise()
        const items = dynamoData.Items
        while(dynamoData.LastEvaluatedKey){
            params.ExclusiveStartKey = dynamoData.LastEvaluatedKey;
            dynamoData = await dynamoDB.scan(params).promise()
            items.push(...dynamoData.items)
        }
        return items;
    } catch (error) {
        console.log(error)
    }
}

app.get('/api-productos', async (req, res, next) =>{
    try {
        const params = {
            TableName: TABLE_NAME
        }
        const productos = await getProducts(params)
        res.json(productos)
    } catch (error) {
        console.log(error)
    }
})

app.get('/notif', async (req, res, next) => {
    try {
        await sns.publish({
            Message: 'Hola Viteh',
            Subject: 'TOP SECRET',
            TopicArn: SNS_TOPIC_ARN
        })
        res.send('Mensaje enviado')
    } catch (error) {
        console.log(error)
    }    
})

app.listen(PORT, ()=> {
    console.log(`Escuchando en http://localhost:${PORT}`)
})