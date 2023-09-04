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
                    class="bg-lightblue hover:bg-lightblue-hover px-28 py-4 hadow-2xl border-8 rounded-full border-white text-white text-xl">
                    LET'S GO
                </RouterLink>
            </div>
            <div class="text-center mt-10">

                <button class="btn bg-lightred hover:bg-lightred-hover w-80 h-20 shadow-2xl border-8 rounded-full border-white text-white font-normal text-xl" onclick="my_modal_1.showModal()">How To Play</button>
                <dialog id="my_modal_1" class="modal">
                    <div class="modal-box border-white border-10 bg-orange-yellow text-white">
                        <h3 class="font-bold text-xl">How to play ?</h3>
                        <p class="py-4">ตัวเกมจะสุ่มตัวเลขที่ไม่ซ้ำกันมา 4 ตัว โดยเกมจะให้ผู้เล่นหาตัวเลขที่เกมสุ่มมาให้ครบ
                            และตำแหน่งของตัวเลขต้องถูกต้อง ซึ่งจะมีโอกาสให้ลอง 9 ครั้ง
                            เมื่อผู้เล่นทำเงื่อนไขทั้งหมดได้ครบจะชนะ หากผู้เล่นไม่สามารถหาตัวเลขได้ครบ
                            หรือตำแหน่งของตัวเลขไม่ถูกต้อง เกมจะจบลลงและผู้เล่นจะแพ้</p>
                        <div class="modal-action">
                            <form method="dialog">
                                <button class="btn bg-yellow-white border-0 hover:bg-yellow-plus">I got it!</button>
                            </form>
                        </div>
                    </div>
                </dialog>
            </div>


        </div>
    </div>
</template>
 
<style scoped></style>