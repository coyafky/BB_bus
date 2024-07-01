import express from 'express';
import { MongoClient } from 'mongodb';
import cors from 'cors';

const app = express();
const port = 3000;

// 启用 CORS 中间件
app.use(cors());

const uri = 'mongodb://localhost:27017'; // MongoDB 连接字符串
const client = new MongoClient(uri);

app.get('/cities', async (req, res) => {
  try {
    await client.connect();
    const database = client.db('Bus_Project'); // 替换为你的数据库名称
    const collection = database.collection('city'); // 替换为你的集合名称

    const query = {}; // 你可以根据需要添加查询条件
    const options = {}; // 你可以根据需要添加查询选项

    const cursor = collection.find(query, options);
    const result = await cursor.toArray();

    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  } finally {
    await client.close();
  }
});

app.get('/routes', async (req, res) => {
  try {
    await client.connect();
    const database = client.db('Bus_Project'); // 替换为你的数据库名称
    const collection = database.collection('route'); // 替换为你的集合名称

    let query = {};

    const options = {}; // 你可以根据需要添加查询选项

    const cursor = collection.find(query, options);
    const result = await cursor.toArray();

    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  } finally {
    await client.close();
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});