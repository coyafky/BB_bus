<template>

    <div class="passenger-card">
        <div class="left">

            <div >
                <HeFilledMan/>
            </div>
            <div>
                冯科雅/
            </div>

            <div>
                身份证号码
            </div>
        </div>

        <div class="right">
            <div>
                成人
            </div>
            <div>
                <button @click="deletePassenger" class="deletePassenger">
                    <ClNoteEdit/>
                </button>
            </div>
        </div>
    </div>

</template>

<script setup>
import { HeFilledMan } from "@kalimahapps/vue-icons";
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { ClNoteEdit } from "@kalimahapps/vue-icons";
const router = useRouter();

function deletePassenger (){
    router.push ('./editpassenger')
}

</script>


<style scoped>
.passenger-card {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-left: 10px;
    padding-right: 10px;
    
    background-color: white;
    height: 50px;
}
.left{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center
   
}
.right{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
}
.right div{
    padding-left: 40px;
}
.deletePassenger{
    background-color: white;
    border: none;
    color: green;
}
</style>