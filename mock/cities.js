// mock/cities.js
import Mock from 'mockjs';

// 使用Mock.mock方法模拟接口数据
Mock.mock('/api/cities', 'get', {
  'list|10': [{
    'id|+1': 1,
    'name': '@city' // 随机生成城市名
  }]
});