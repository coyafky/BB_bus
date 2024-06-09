import axios from 'axios';

class Database {
  constructor() {
    this.baseUrl = 'http://localhost:3000';
  }

  // 获取所有城市
  async getAllCities() {
    try {
      const response = await axios.get(`${this.baseUrl}/cities`);
      return response.data;
    } catch (error) {
      console.error('Error fetching cities:', error);
      return [];
    }
  }

  // 获取所有用户
  async getAllUsers() {
    try {
      const response = await axios.get(`${this.baseUrl}/users`);
      return response.data;
    } catch (error) {
      console.error('Error fetching users:', error);
      return [];
    }
  }

  // 根据城市ID获取城市信息
  async getCityById(id) {
    try {
      const response = await axios.get(`${this.baseUrl}/cities/${id}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching city:', error);
      return null;
    }
  }

  // 根据用户ID获取用户信息
  async getUserById(id) {
    try {
      const response = await axios.get(`${this.baseUrl}/users/${id}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching user:', error);
      return null;
    }
  }

  // 添加新城市
  async addCity(newCity) {
    try {
      const response = await axios.post(`${this.baseUrl}/cities`, newCity);
      return response.data;
    } catch (error) {
      console.error('Error adding city:', error);
      return null;
    }
  }

  // 添加新用户
  async addUser(newUser) {
    try {
      const response = await axios.post(`${this.baseUrl}/users`, newUser);
      return response.data;
    } catch (error) {
      console.error('Error adding user:', error);
      return null;
    }
  }

  // 更新城市信息
  async updateCity(id, updatedCity) {
    try {
      const response = await axios.put(`${this.baseUrl}/cities/${id}`, updatedCity);
      return response.data;
    } catch (error) {
      console.error('Error updating city:', error);
      return null;
    }
  }

  // 更新用户信息
  async updateUser(id, updatedUser) {
    try {
      const response = await axios.put(`${this.baseUrl}/users/${id}`, updatedUser);
      return response.data;
    } catch (error) {
      console.error('Error updating user:', error);
      return null;
    }
  }

  // 删除城市
  async deleteCity(id) {
    try {
      const response = await axios.delete(`${this.baseUrl}/cities/${id}`);
      return response.data;
    } catch (error) {
      console.error('Error deleting city:', error);
      return null;
    }
  }

  // 删除用户
  async deleteUser(id) {
    try {
      const response = await axios.delete(`${this.baseUrl}/users/${id}`);
      return response.data;
    } catch (error) {
      console.error('Error deleting user:', error);
      return null;
    }
  }
  async getPickupPointsByCityName(cityName) {
    try {
      // 首先获取所有城市
      const cities = await this.getAllCities();

      // 查找城市名对应的城市ID
      const city = cities.find(city => city.name === cityName);

      if (!city) {
        console.error(`City with name ${cityName} not found.`);
        return null;
      }

      // 使用城市ID获取上车点信息
      return city.pickupPoints;
    } catch (error) {
      console.error('Error fetching pickup points:', error);
      return null;
    }
  }
}

// 使用示例
const db = new Database();
db.addCity({ id: '11', name: '测试城市' })
  .then(city => console.log('Added city:', city))
  .catch(error => console.error('Error adding city:', error));