<template>
    <Header :message="'添加乘车人'"></Header>
    <div class="container">
        <div class="row">
            <div class="col">
                <el-input class="input_name" v-model="name" style="width: 100%;" placeholder="乘车人姓名，必填">
                </el-input>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <el-select v-model="card_title" placeholder="身份证" size="large" style="width: 100%;">
                    <el-option v-for="item in options" :key="item.value" :label="item.label"
                        :value="item.value"></el-option>
                </el-select>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <el-input v-model="id_nums" style="width: 100%;" placeholder="证件号必填">
                </el-input>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <el-select v-model="age_group" placeholder="成人" size="big" style="width: 100%;">
                    <el-option v-for="item in agegroups" :key="item.value" :label="item.label"
                        :value="item.value"></el-option>
                </el-select>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <el-button class="button_submit" @click="submitForm" style="width: 100%;"> <IcSubmitDocument />添加乘车人
                   
                </el-button>
            </div>
        </div>

        <div class="rule">
            根据交通部规定，乘客乘车必须填写实名信息！<br>
            信息录入交通部数据库，保护乘客个人信息安全
        </div>
        
    </div>
  
</template>

<script setup>
import { ref } from 'vue';
import { IcSubmitDocument } from "@kalimahapps/vue-icons";
import Header from '@/components/Header.vue';
import axios from 'axios';
import { PassengerInformation } from '@/utils/passenger';

const name = ref('');
const card_title = ref('');
const id_nums = ref('');
const age_group = ref('');

const options = ref([
    { value: '选项1', label: '身份证' },
    { value: '选项2', label: '护照' },
    { value: '选项3', label: '港澳通行证' },
    { value: '选项4', label: '台湾通行证' },
    { value: '选项5', label: '回乡证' },
]);
const agegroups = ref([
    { value: '选项1', label: '成人' },
    { value: '选项2', label: '儿童' },
]);

const submitForm = async () => {
    try {
        // 提交表单的时候把值修改 options 
        const selectedCardTitle = options.value.find(option => option.value === card_title.value);
        const selectedAgeGroup = agegroups.value.find(option => option.value === age_group.value);


        const passengerData = {
   
            name: name.value,
            id_type: selectedCardTitle ? selectedCardTitle.label : '', // 获取选中的身份证类型的 label
            id_nums: id_nums.value,
            age_group: selectedAgeGroup ? selectedAgeGroup.label : '', // 获取选中的年龄组的 label
        };
        await axios.post("http://localhost:3000/users", passengerData);
        // 页面跳转，并添加参数
     
        console.log("Form submitted successfully");
        

    } catch (error) {
        console.error("Error submitting form:", error);
    }
};

</script>


<style scoped>


.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
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


.el-input,
.el-select,
.el-button {
    width: 100%;
    max-width: 100%;
    /* 可以根据需要调整 */
    margin-top: 20px;

}

.button_submit {
    width: 100%;
  height:100%;
  background-image: linear-gradient(to left, #f83600 0%, #f9d423 100%);
  border: none;
  border-radius: 10px;
  color: white;
  
}

.rule {
    text-align: flex-start;
    align-self: start;
    font-size: 17px;
    color: red;
    margin-top: 50px;
}

.el-input__wrapper {
    border-radius: 10px;
}

.el-select-dropdown__item {
    font-size: 14px;
}

.el-select-dropdown__item.selected {
    font-weight: bold;
    margin-top: 20px;
}
</style>