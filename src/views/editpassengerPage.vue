<template>
    <Header :message="'修改乘车人信息'" />
    <div class="container">


        <div class="list">
            <div class="button_item">
                <button>
                    {{ name }} name
                </button>
            </div>
            <div class="button_item">
                <button>{{ phone }} Phone</button>
            </div>
            <div class="button_item">
                <button> Idnumber</button>
            </div>
            <div class="button_item">
                <button>
                    {{ type }} Type
                </button>
            </div>
        </div>

        <div class="notice">
            温馨提示: 儿童身高超过1.2米需要购买成人票
        </div>

        <div class="edit_button">
            <button>
                <span class="edit_icon">
                    <van-icon name="success" class="edit_van_icon" />
                </span>
                <span>
                    修改乘车人
                </span>
            </button>
        </div>

        <div class="delete_button">
            <button>
                <span class="icon">
                    <van-icon name="minus" class="delete_van_icon" />
                </span>
                <span>
                    删除乘车人
                </span>
            </button>
        </div>
        
    </div>
</template>


<script setup>
import Header from "@/components/Header.vue";
</script>

<style scoped>
.container {

    display: flex;
    flex-direction: column;

    justify-content: flex-start;

}

.list {
    margin-top: 40px;
    display: flex;
    flex-direction: column;

    width: 100%;
    height: auto;
    box-sizing: border-box;
}

.list .button_item {
    margin-top: 10px;
    padding-left: 10px;
    padding-right: 10px;
    width: 100%-10px;
    height: 100%;
    margin-bottom: 10px;
}

.button_item button {

    width: 100%;
    height: 50px;
    padding-left: 10px;

    margin-right: 10px;
    border: 0.4px solid gray;
    border-radius: 5px;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: flex-start;
}

.notice{
    margin-bottom: 35px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding-left: 10px;
    color: #f83600;
}

.edit_button {

    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;
    padding: 10px;
}

.edit_button button {
    width: 100%;
    height: 100%;
    background-image: linear-gradient(to left, #f83600 0%, #f9d423 100%);
    border: none;
    border-radius: 10px;
    color: white;
}

.delete_button {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;
    padding: 10px;

}

.delete_button button {
    width: 100%;
    height: 100%;
    background-image: linear-gradient(to left, #f83600 0%, #f9d423 100%);
    border: none;
    border-radius: 10px;
    color: white;
}
.edit_icon{
    color: white;
    font-weight: bold;
    border: 1px solid white;
    border-radius: 50%;
    margin-right: 5px;
    padding: auto;
}

.icon{
    background-color: red;
    color: white;
    font-weight: bold;
    border-radius: 5%;
    margin-right: 5px
}
.van_iocn{
    padding: 1px;
}
</style>