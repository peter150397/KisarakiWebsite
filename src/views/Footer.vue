<template>
    <footer>
        <div class="corporationInfo">
            <img src="@/assets/FooterImg/logo.png" alt="" class="FooterLogo">
            <div>
                <p>電話：08-771 0088</p>
                <p>傳真：08-771 1122</p>
                <p>地址：911屏東縣竹田鄉糶糴村南進路11號</p>
                <p>電子郵件：kisaraki@flno1.com.tw , rja@flno1.com.tw</p>
            </div>
            <p>© 2023 如記食品有限公司 All rights reserved.</p>
            <div class="FooterIconGroup">
                <a href="https://www.youtube.com/@kisaraki-food"><img src="@/assets/FooterImg/youtube.png" alt=""></a>
                <a href="https://www.facebook.com/kisaraki1982"><img src="@/assets/FooterImg/facebook.png" alt=""></a>
                <a href="https://line.me/R/ti/p/@405jczdl"><img src="@/assets/FooterImg/line.png" alt=""></a>
                <a href="https://www.instagram.com/kisaraki_food/"><img src="@/assets/FooterImg/instagram.png" alt=""></a>
            </div>
        </div>
        <div class="fotterLinkGroup">
            <div class="linkItem">
                <h3>我們的理念</h3>
                <router-link to="/">關於如記</router-link>
                <router-link to="/">相關媒體報導</router-link>
                <router-link to="/">人才招募</router-link>
            </div>
            <div class="linkItem">
                <h3>商業服務</h3>
                <router-link to="/">企業採購</router-link>
                <router-link to="/">業務用型錄</router-link>
                <router-link to="/">服務據點</router-link>
                <router-link to="/">Global Site</router-link>
            </div>
            <div class="linkItem">
                <h3>會員相關</h3>
                <router-link to="/">訂單管理</router-link>
                <router-link to="/">會員權益與等級</router-link>
                <router-link to="/">會員條款</router-link>
                <router-link to="/">隱私權聲明</router-link>
            </div>
            <div class="linkItem">
                <h3>常見問題</h3>
                <router-link to="/">產品相關</router-link>
                <router-link to="/">購物相關</router-link>
                <router-link to="/">會員相關</router-link>
                <router-link to="/">網站操作</router-link>
                <router-link to="/">聯絡我們</router-link>
            </div>
        </div>
    </footer>
</template>

<script>
export default {

}
</script>

<style scoped>
footer {
    background-color: #B4B4B4;
    color: white;
    padding: 2rem 0;

    display: flex;
    justify-content: space-around;

    font-size: 14px;

    width: 100%;
}

.corporationInfo {
    display: flex;
    gap: 20px;
    flex-direction: column;
    align-items: flex-start;
    flex: 0 0 auto;
}

.FooterLogo {
    width: 200px;
}

.FooterIconGroup {
    display: flex;
    gap: 20px;
}

.FooterIconGroup img {
    height: 30px;
}

.fotterLinkGroup {
    display: grid;
    grid-template-columns: repeat(4 , 1fr);
    margin-left: 1rem;
    flex: 0 0 auto;
}

.linkItem {
    display: flex;
    gap: 1rem;
    flex-direction: column;
}

.linkItem>h3 {
    margin-bottom: .5rem;
}

.linkItem>a {
    color: white;
    padding-left: 10px;
    border-left: solid 1px white;
    margin-left: 10px;
    font-weight: normal;
}
.linkItem>a:hover{
    color: #FFD86F;
    transition-duration: 300ms;
    border-left: solid 1px #FFD86F;
}
@media (max-width: 853px) {
    footer{
        flex-direction: column;
        padding: 2rem;
    }
    .corporationInfo{
        align-items: center;
        margin-bottom: 2rem;
    }
    .corporationInfo p{
        text-align: center;
    }
    .fotterLinkGroup{
        margin: 0;
    }
}
</style>