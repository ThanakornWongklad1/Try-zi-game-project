<script setup>
import { ref } from 'vue';
import { randomedNumber } from '../composable/randomNumber.js'

const emits = defineEmits('status')

const props = defineProps({
    arrList: { // is a list
        type: Array,
        required: true
    },
    prepareNumber: {
        type: Array,
        required: true
    }
})

const gameStatus = ref('')

// for add prepare number into array e.g.[1,2,3,4]
const addPrepareNumber = (number) => {
    gameStatus.value = ''
    if (!props.prepareNumber.includes(number) && gameStatus.value != 'win') {
        if (props.prepareNumber.length <= 3) {
            props.prepareNumber.push(number)
        }
    }
}

// for delete prepare number space
const deletePrepareNumber = () => {
    props.prepareNumber.pop()
}

console.log(randomedNumber)


const counter = ref(0)
let correctNum = ref(0)
let correctPos = ref(0)

const addNumber = (prepare) => {
    if (props.arrList[8][0] == 0 && gameStatus.value != 'win') {
        gameStatus.value = ''
        // for add prepare number into array list  e.g.[1,2,3,4] -> 1234
        if (props.prepareNumber.length == 4) {
            props.arrList[counter.value][0] = prepare?.join('')
            for (let i = 0; i <= 3; i++) {
                props.prepareNumber.shift()
            }

            correctNum.value = 0
            correctPos.value = 0

            for (let i = 0; i <= 3; i++) {
                // check answer if got a exists number in randomed number it will be increase correct number
                if ((String(randomedNumber).indexOf(props.arrList[counter.value][0]?.slice(i, i + 1))) != -1) {
                    correctNum.value++
                }
                //check position of answer if answer is the right position
                if (String(randomedNumber).indexOf(props.arrList[counter.value][0]?.slice(i, i + 1)) == i) {
                    correctPos.value++
                    // console.log(correctPos.value)
                }
            }
            props.arrList[counter.value][1] = correctNum.value
            props.arrList[counter.value][2] = correctPos.value


            //win check
            if (props.arrList[counter.value][1] == 4 && props.arrList[counter.value][2] == 4) {
                gameStatus.value = 'win'
                console.log(gameStatus.value)
            }

            //lose check
            if (props.arrList[8][0] != 0) {
                if (props.arrList[counter.value][1] != 4 || props.arrList[counter.value][2] != 4)
                    gameStatus.value = 'lose'
                console.log(gameStatus.value)
            }

            counter.value++


        }
    }

}

</script>
 
<template>
    <div class="flex flex-col">
        <div class="flex mx-auto mt-4">
            <button class="text-xl w-24 h-16 rounded-2xl shadow-xl hover:bg-opacity-80  mx-1 bg-yellow-dark"
                @click="addPrepareNumber(1)">1</button>
            <button class="text-xl w-24 h-16 rounded-2xl shadow-xl hover:bg-opacity-80  mx-1 bg-yellow-dark"
                @click="addPrepareNumber(2)">2</button>
            <button class="text-xl w-24 h-16 rounded-2xl shadow-xl hover:bg-opacity-80  mx-1 bg-yellow-dark"
                @click="addPrepareNumber(3)">3</button>
            <button class="text-xl w-24 h-16 rounded-2xl shadow-xl hover:bg-opacity-80  mx-1 bg-yellow-dark"
                @click="addPrepareNumber(4)">4</button>
            <button class="text-xl w-24 h-16 rounded-2xl shadow-xl hover:bg-opacity-80  mx-1 bg-yellow-dark"
                @click="addPrepareNumber(5)">5</button>
            <button class="text-xl text-white w-24 h-16 rounded-2xl hover:bg-opacity-80   shadow-xl mx-1 bg-lightred"
                @click="deletePrepareNumber()">delete</button>
        </div>
        <div class="flex mx-auto mt-2">
            <div class="flex mx-auto">
                <button class="text-xl w-24 h-16 rounded-2xl shadow-xl hover:bg-opacity-80  mx-1 bg-yellow-dark"
                    @click="addPrepareNumber(6)">6</button>
                <button class="text-xl w-24 h-16 rounded-2xl shadow-xl hover:bg-opacity-80  mx-1 bg-yellow-dark"
                    @click="addPrepareNumber(7)">7</button>
                <button class="text-xl w-24 h-16 rounded-2xl shadow-xl hover:bg-opacity-80  mx-1 bg-yellow-dark"
                    @click="addPrepareNumber(8)">8</button>
                <button class="text-xl w-24 h-16 rounded-2xl shadow-xl hover:bg-opacity-80  mx-1 bg-yellow-dark"
                    @click="addPrepareNumber(9)">9</button>
                <button class="text-xl text-white w-24 h-16 rounded-2xl hover:bg-opacity-80 shadow-xl mx-1 bg-lightblue"
                    @click="addNumber(prepareNumber), $emit('status', gameStatus)">Add</button>
            </div>
        </div>
    </div>
</template>
 
<style scoped></style>