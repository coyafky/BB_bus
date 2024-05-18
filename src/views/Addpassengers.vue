<template>
    <div class="header">
        <goback :route="'/passengermanagement'" />
        <div class="addpassager">
            添加乘车人
        </div>

    </div>
    <div class="container">
        <div class="row">
            <div class="col">
                <el-input class="input_name" v-model="name" style="width: 100%;" placeholder="乘车人姓名，必填" />
            </div>
        </div>
        <div class="row">
            <div class="col">
                <el-select v-model="card_title" placeholder="身份证" size="large" style="width: 100%;">
                    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
                </el-select>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <el-input v-model="id_nums" style="width: 100%;" placeholder="请输入你的证件号" />
            </div>
        </div>
        <div class="row">
            <div class="col">
                <el-select v-model="age_group" placeholder="选择年龄" size="small" style="width: 100%;">
                    <el-option v-for="item in agegroups" :key="item.value" :label="item.label" :value="item.value" />
                </el-select>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <el-button type="primary" @click="submitForm" style="width: 100%;">添加乘车人
                    <IcSubmitDocument />
                </el-button>
            </div>
        </div>
        <div class="rule">
            根据新规，乘车人必须实名乘车<br>
            信息录入交通部数据库，保护乘客个人信息安全
        </div>
    </div>


</template>

<script setup>
import goback from '@/components/goback.vue';
import { ref, provide } from 'vue';
import { IcSubmitDocument } from "@kalimahapps/vue-icons";
import axios from 'axios';
const route = ref('/passengermanagement');

provide('route', route);

const name = ref('');

const card_title = ref('');

const options = ref([
    {
        value: '选项1',
        label: '身份证',
    },
    {
        value: '选项2',
        label: '护照',
    },
    {
        value: '选项3',
        label: '港澳通行证',
    },
    {
        value: '选项4',
        label: '台湾通行证',
    },
    {
        value: '选项5',
        label: '回乡证',
    },
]);

const agegroups = ref([
    {
        value: '选项1',
        label: '成人',
    },
    {
        value: '选项2',
        label: '儿童',
    },
    {
        value: '选项3',
        label: '学生',
    },
    {
        value: '选项4',
        label: '残军',
    },
]);

const id_nums = ref('');

const age_group = ref('');

function submitForm() {
    // 创建一个包含表单数据的对象
    const passengerData = {
        name: name.value,
        card_title: card_title.value,
        id_nums: id_nums.value,
        age_group: age_group.value,
    };

    // 使用Axios发送PUT请求到后端服务器
    axios.put('http://localhost:3000/passengers', passengerData)
    .then(response => {
        console.log('Passenger updated successfully', response.data);
    })
    .catch(error => {
        console.error('Error updating passenger', error);
        if (error.response) {
            // 请求已发出，但服务器用一个状态码进行响应
            console.log('Status:', error.response.status);
            console.log('Data:', error.response.data);
            console.log('Headers:', error.response.headers);
        } else if (error.request) {
            // 请求已发出，但没有收到任何响应
            console.log('Request:', error.request);
        } else {
            // 设置请求时发生了一些错误
            console.log('Error:', error.message);
        }
        console.log('Config:', error.config);
    });
}

</script>


<style scoped>
.header {
    display: flex;

    align-items: center;
    padding: 10px 20px;
    background-color: red;
    border-bottom: 1px solid #f0f0f0;
}

.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
}

.row {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
}

.col {
    width: 100%;
  
}


.el-input, .el-select, .el-button {
    width: 100%;
    max-width: 100%; /* 可以根据需要调整 */
    margin-top: 20px;

}

.rule {
    text-align: center;
    margin-top: 20px;
}

</style>