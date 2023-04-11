<script setup>
import { ref } from 'vue'
import AddAnswer from './AddAnswer.vue'
import { randomedNumber } from '../composable/randomNumber.js'

let prepareNumber = ref([])
const lists = ref([[0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0]])


const gameStatus = ref()
const setGameStatus = (status) => {
    if (status === 'win') {
        gameStatus.value = status
    } else if (status === 'lose') {
        gameStatus.value = status
    }
}

const reloadPage = () => {
    window.location.reload()
}



</script>
 
<template>
    <div class="w-full h-screen absolute bg-orange-yellow">

        <div v-if="gameStatus === 'win'" class="flex justify-center ">
            <div class="card bg-base-100 shadow-2xl absolute z-10 mt-40" style="width: 30em;">
                <figure class="px-10 pt-10">
                    <img src="../../image/success.png" alt="Shoes" class="rounded-xl" />
                </figure>
                <div class="card-body items-center text-center">
                    <h2 class="card-title text-2xl">Congratulations!</h2>
                    <p class="text-xl mt-5">Every thing successfully,</p>
                    <p class="text-xl">Congratulations!</p>
                    <div class="card-actions mt-5">
                        <button class="btn btn-primary" @click="reloadPage">Play again!</button>
                    </div>
                </div>
            </div>
        </div>
        <div v-if="gameStatus === 'lose'" class="flex justify-center ">
            <div class="card bg-base-100 shadow-2xl absolute z-10 mt-32 " style="width: 30em;">
                <figure class="px-10 pt-10">
                    <img src="../../image/ohno2.png" alt="Shoes" class="rounded-xl" />
                </figure>
                <div class="card-body items-center text-center">
                    <h2 class="card-title text-2xl">Oh No...</h2>
                    <p class="text-xl mt-5">Something went wrong</p>
                    <p class="text-xl">the correct answer is {{ randomedNumber }}</p>
                    <div class="card-actions mt-5">
                        <button class="btn btn-primary" @click="reloadPage">Play again!</button>
                    </div>
                </div>
            </div>
        </div>

        <!-- content space -->
        <div class="border-white border-14 rounded-3xl mx-auto mt-8 drop-shadow-2xl flex flex-col bg-yellow-white px-20"
            style="width: 65em; height: 40em;">
            <div class="text-center font-bold text-7xl text-white mt-3">ทายซิ</div>

            <!-- header -->
            <div class="flex mt-5 justify-center">
                <div class="text-white text-lg font-semibold mx-20">Your Guess</div>
                <div class="text-white text-lg font-semibold mx-20">Correct Number</div>
                <div class="text-white text-lg font-semibold mx-20">Correct Position</div>
            </div>

            <!-- content -->
            <div class="flex justify-center" v-for="(list, index) in lists">
                <div class="flex bg-yellow-light mt-4 rounded-2xl w-full h-9" v-if="index <= 8"
                    :class="index == 8 ? 'bg-yellow-plus' : ''">
                    <div class="text-xl mx-auto mt-1" v-if="list[0] !== 0">{{ list[0] }}</div>
                    <div class="text-xl mx-auto mt-1" v-if="list[0] !== 0">{{ list[1] }}</div>
                    <div class="text-xl mx-auto mt-1" v-if="list[0] !== 0">{{ list[2] }}</div>
                </div>
            </div>
        </div>

        <!-- show number space -->
        <div class="mt-10 h-16 bg-white rounded-xl mx-auto flex" style="width: 40em;">
            <p class="ml-36 font-semibold text-3xl pt-3 " style="letter-spacing: 3em;">
                {{ prepareNumber.join('') }}</p>
        </div>

        <!-- button space -->
        <AddAnswer :arr-list="lists" :prepare-number="prepareNumber" @status="setGameStatus" />
        <!-- <button class="bg-white p-10">check</button> -->

    </div>
</template>
 
<style scoped></style>