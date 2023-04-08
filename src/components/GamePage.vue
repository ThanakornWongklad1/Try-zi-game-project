<script setup>
import { ref } from 'vue'

const lines = 9
const lists = ref([1234, 4567, 6789, 2587])
</script>
 
<template>
    <div class="w-full h-screen absolute bg-orange-yellow">
        <!-- content space -->
        <div class="border-white border-14 rounded-3xl mx-auto mt-8 drop-shadow-2xl flex flex-col bg-yellow-white"
            style="width: 65em; height: 40em;">
            <div class="text-center font-bold text-7xl text-white mt-3">ทายซิ</div>
            <div class="flex justify-between mx-48 text-white text-xl mt-3">
                <div>Your Guess</div>
                <div>Correct Answer</div>
                <div>Correct Position</div>
            </div>

            <div v-for="line in lines" class="sticky z-0">
                <div class=" mx-auto text-xl mt-4 h-9 rounded-xl flex justify-between px-28 bg-yellow-light"
                    style="width: 40em;">
                </div>
            </div>
            <div v-for="list in lists" class="z-10">
                <div>{{ list }}</div>
            </div>


        </div>

        <!-- input space -->
        <div class="text-center mt-10">
            <input type="number" class="text-center pl-16 font-semibold text-3xl h-16 bg-white rounded-xl" 
                style="width: 22em; letter-spacing: 2em;">
        </div>

        <!-- button space -->
        <div class="flex flex-col">
            <div class="flex mx-auto mt-4">
                <button class="text-xl w-24 h-16 rounded-lg shadow-xl mx-2 bg-yellow-dark">1</button>
                <button class="text-xl w-24 h-16 rounded-lg shadow-xl mx-2 bg-yellow-dark">2</button>
                <button class="text-xl w-24 h-16 rounded-lg shadow-xl mx-2 bg-yellow-dark">3</button>
                <button class="text-xl w-24 h-16 rounded-lg shadow-xl mx-2 bg-yellow-dark">4</button>
                <button class="text-xl w-24 h-16 rounded-lg shadow-xl mx-2 bg-yellow-dark">5</button>
                <button class="text-xl text-white w-24 h-16 rounded-lg shadow-xl mx-2 bg-lightred">delete</button>
            </div>
            <div class="flex mx-auto mt-4">
                <div class="flex mx-auto">
                    <button class="text-xl w-24 h-16 rounded-lg shadow-xl mx-2 bg-yellow-dark">6</button>
                    <button class="text-xl w-24 h-16 rounded-lg shadow-xl mx-2 bg-yellow-dark">7</button>
                    <button class="text-xl w-24 h-16 rounded-lg shadow-xl mx-2 bg-yellow-dark">8</button>
                    <button class="text-xl w-24 h-16 rounded-lg shadow-xl mx-2 bg-yellow-dark">9</button>
                    <button class="text-xl text-white w-24 h-16 rounded-lg shadow-xl mx-2 bg-lightblue">Add</button>
                </div>
            </div>
        </div>

    </div>
</template>
 
<style scoped>
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}
</style>