<template>
  <div>
    <div class="RiceBloodCakeContainer">
        <div class="RiceBloodCakeImgBigContainer">
            <p class="RiceBloodCakeImgText">『米血糕』可說是最具台灣代表性的特色小吃，以台灣在地的傳統滋味，現在創新製程，成功讓米血糕更安全及美味，甚至外銷國際，伴隨著其他各式鍋物料理，讓火鍋料理更具特色！也傳達出對台灣土地深刻的情感。</p>
        </div>
        <div class="RiceBloodCakeLinkContainer">
            <div class="RiceBloodCakeLink">
                <div class="RiceBloodCakeLinkImgContainer">
                    <img src="@/assets/ProductImg/RiceBloodCakeImg/FamilySize.png" alt="" class="RiceBloodCakeLinkImg">
                </div>
                <div class="RiceBloodCakeLinkTextContainer">
                    <p>家庭包</p>
                    <button>More</button>
                </div>
            </div>
            <div class="RiceBloodCakeLink">
                <div class="RiceBloodCakeLinkImgContainer">
                    <img src="@/assets/ProductImg/RiceBloodCakeImg/Kanto.png" alt="" class="RiceBloodCakeLinkImg">
                </div>
                <div class="RiceBloodCakeLinkTextContainer">
                    <p>關東煮</p>
                    <button>More</button>
                </div>
            </div>
            <div class="RiceBloodCakeLink">
                <div class="RiceBloodCakeLinkImgContainer">
                    <img src="@/assets/ProductImg/RiceBloodCakeImg/BusinessSize.png" alt="" class="RiceBloodCakeLinkImg">
                </div>
                <div class="RiceBloodCakeLinkTextContainer">
                    <p>業務包</p>
                    <button>More</button>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    mounted() {
        this.$store.commit('UPDATESECONDBREADCRUMB', this.$router.currentRoute)
        console.log(this.$router);
    }
}
</script>

<style scoped>
.RiceBloodCakeContainer{
    display: flex;
    flex-direction: column;
    align-items: center;
}
.RiceBloodCakeImgBigContainer{
    width: 100%;
    height: 300px;

    border-radius: 30px;
    background: linear-gradient(180deg, #FFFFFF00 50%, #000000 100%) , url('@/assets/ProductImg/RiceBloodCakeImg/Big.png');
    background-size: cover;
    background-position: center center;

    box-shadow: 0px 3px 10px #464646C9;

    position: relative;
}
.RiceBloodCakeImgText{
    width: 50%;
    color: white;
    position: absolute;
    right: 1rem;
    bottom: 1rem;
}
.RiceBloodCakeLinkContainer{
    display: flex;
    gap: 4rem;
    justify-content: space-between;

    margin: 4rem 0 0;
}
.RiceBloodCakeLink{
    display: flex;
    gap: 15px;
    flex-direction: column;
    align-items: center;
    padding: 1.5rem;

    border-radius: 30px;
    box-shadow: 0px 5px 10px #B4B4B4;

    cursor: pointer;
}

.RiceBloodCakeLinkImgContainer{
    width: 100%;
    aspect-ratio: 1.2 / 1;
    border-radius: 20px;

    overflow: hidden;
}
.RiceBloodCakeLinkImg{
    width: 100%;
}
.RiceBloodCakeLinkImg:hover{
    transform: scale(1.1, 1.1);
    transition-duration: .3s;
}
.RiceBloodCakeLinkTextContainer{
    display: flex;
    align-items: center;
    gap: .5rem;
}
.RiceBloodCakeLinkTextContainer > p{
    font-weight: bold;
    font-size: 18px;
    letter-spacing: 1px;
}
.RiceBloodCakeLinkTextContainer > button{
    background-color: #F4DB82;
    border: none;
    border-radius: 50px;
    padding: .2rem .8rem;

    cursor: pointer;
}
.RiceBloodCakeLinkTextContainer > button:hover{
    transform: scale(1.2, 1.2);
    transition-duration: .3s;
}
</style>