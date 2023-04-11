<script setup>

</script>
 
<template>
    <div class="w-full h-screen absolute bg-orange-yellow">
        <div class="border-white border-14 rounded-3xl mx-auto mt-32 drop-shadow-2xl flex flex-col bg-yellow-white px-20"
            style="width: 65em; height: 40em;">
            <div class="text-center font-bold text-9xl text-white mt-5"
                style="text-shadow: 5px 5px 5px rgba(0, 0, 0, 25%);">ทายซิ
            </div>

            <div class="text-center mt-36">
                <RouterLink :to="{ name: 'game' }"
                    class="bg-lightblue px-28 py-4 hadow-2xl border-8 rounded-full border-white text-white text-2xl">
                    Let's go
                </RouterLink>
            </div>
            <div class="text-center mt-10">
                <button class="bg-lightred w-80 h-20 shadow-2xl border-8 rounded-full border-white text-white text-2xl">How
                    To Play
                </button>
            </div>


        </div>
    </div>
</template>
 
<style scoped></style>