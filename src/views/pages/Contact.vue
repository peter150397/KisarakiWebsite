<template>
    <div class="columnCenterContainer">
        <h1 class="pageTitle">聯絡我們</h1>
        <p class="ContactSubTitle">品質是公司根本，服務是公司生命<br>發揚傳統美食、穩健踏實、積極創新、誠信正直</p>
        <div class="ContactContainer">
            <div class="companyInfoContainer">
                <h2>如記食品有限公司</h2>
                <div>
                    <img src="@/assets/ContactImg/office.png" alt="">
                    <p>16455131</p>
                </div>
                <div>
                    <img src="@/assets/ContactImg/location.png" alt="">
                    <p>911屏東縣竹田鄉糶糴村南進路11號</p>
                </div>
                <div>
                    <img src="@/assets/ContactImg/telephone.png" alt="">
                    <p>08-771 0088</p>
                </div>
                <div>
                    <img src="@/assets/ContactImg/printer.png" alt="">
                    <p>08-771 1122</p>
                </div>
                <div>
                    <img src="@/assets/ContactImg/email.png" alt="">
                    <p>kisaraki@flno1.com.tw / rja@flno1.com.tw</p>
                </div>
            </div>
            <div class="formContainer">
                <div>
                    <h2>聯絡我們</h2>
                    <form action="" id="ContactForm">
                        <table>
                            <tr>
                                <td style="width: 2%;"><p>*</p></td>
                                <td style="width: 20%;"><label for="buyerName">姓名</label></td>
                                <td><input name="buyerName" type="name" placeholder="請輸入姓名" id="buyerName" form="ContactForm" required></td>
                            </tr>
                            <tr>
                                <td><p>*</p></td>
                                <td><label for="buyerCellphone">手機</label></td>
                                <td><input name="buyerCellphone" type="tel" placeholder="請輸入手機" id="buyerCellphone" form="ContactForm" required></td>
                            </tr>
                            <tr>
                                <td><p>*</p></td>
                                <td><label for="buyerEmail">電子信箱</label></td>
                                <td><input name="buyerEmail" type="email" placeholder="請輸入電子信箱" id="buyerEmail" form="ContactForm" required></td>
                            </tr>
                            <tr>
                                <td><p></p></td>
                                <td><label for="buyerComp">統編</label></td>
                                <td><input name="buyerComp" type="text" placeholder="請輸入統編" id="buyerComp" form="ContactForm"></td>
                            </tr>
                            <tr>
                                <td><p>*</p></td>
                                <td><label for="buyerAddr">地址</label></td>
                                <td><input name="buyerAddr" type="text" placeholder="請輸入地址" id="buyerAddr" form="ContactForm" required></td>
                            </tr>
                            <tr>
                                <td><p>*</p></td>
                                <td><label for="Topic">詢問主題</label></td>
                                <td>
                                    <select name="topic" id="topic" form="ContactForm" required>
                                        <option value="">請選擇主題分類</option>
                                        <option value="Cooperation">異業合作</option>
                                        <option value="ProductProblem">產品問題</option>
                                        <option value="Purchase">採購諮詢</option>
                                        <option value="Other">其他問題</option>
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <td><p>*</p></td>
                                <td><p>內容</p></td>
                                <td><textarea name="content" id="content" form="ContactForm" required></textarea></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td></td>
                                <td class="buttonGroup">
                                    <input type="reset" value="取消" form="ContactForm" class="resetbutton button">
                                    <input type="submit" value="確認" form="ContactForm" class="submitbutton button">
                                </td>
                            </tr>
                        </table>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    mounted() {
        this.$store.commit('GETCURRENTPAGEROUTE', { name: '聯絡我們', index: 0, path: '/Contact' })
        this.$store.commit('GETCURRENTPAGEROUTE', { name: '', index: 1, path: '' })
        this.$store.commit('GETCURRENTPAGEROUTE', { name: '', index: 2, path: '' })
        this.$store.commit('GETCURRENTPAGEROUTE', { name: '', index: 3, path: '' })
    },
}
</script>

<style scoped>
.ContactSubTitle {
    margin: 2rem 0;
    text-align: center;
}

.ContactContainer {
    width: 100%;
    height: 730px;
    display: flex;
    justify-content: flex-end;
    align-items: center;

    position: relative;

    margin-bottom: 6rem;
}

.companyInfoContainer {
    width: 48%;
    height: 75%;
    padding: 3.5rem;

    display: flex;
    gap: 2rem;
    flex-direction: column;

    background: url('@/assets/ContactImg/Bg1.png'), linear-gradient(323deg, #6CF6C0 0%, #D5FECB 100%);
    background-repeat: no-repeat;
    background-position: 170% 170%;
    background-size: 380px 380px, auto;

    border-radius: 40px;
    box-shadow: 0px 3px 10px #47B286;

    position: absolute;
    left: 0;
}

.companyInfoContainer>div {
    display: flex;
    gap: 1rem;
    align-items: center;
}

.companyInfoContainer>div>img {
    height: 24px;
}

.formContainer {
    width: 90%;
    height: 100%;

    background: url('@/assets/ContactImg/Bg2.png');
    background-position: center center;
    box-shadow: 0px 3px 10px #C0CCDD;
    border-radius: 40px;
}
.formContainer > div{
    width: 48%;
    height: 75%;
    position: absolute;
    right: 0;
    top: 12.5%;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

table{
    width: calc(100% - 3.5rem);
    border-collapse: collapse;
}

td{
    padding: .5rem 0;
}

tr > td:first-child{
    color: red;
}
input, select, textarea {
    height: 2rem;
    padding: .3rem;
    border: solid 1px #A0A0A0;
    border-radius: 10px;
    font-size: 1rem;
}
select , textarea , #buyerAddr{
    display: block;
    width: 100%;
}

textarea{
    resize: none;
    height: 154px;
    padding: 1rem;
}

tr:nth-child(7){
    vertical-align: top;
}

.buttonGroup{
    text-align: end;
}

.buttonGroup > .submitbutton{
    background-color: #71CC86;
    color: white;
    border: solid 1px #71CC86;

    margin-left: 1rem;

    padding: .3rem 1.3rem;
    cursor: pointer;
}
.buttonGroup > .submitbutton:hover{
    background-color: #59a16a;
    border: solid 1px #59a16a;

    transition-duration: 300ms;
}
.buttonGroup > .resetbutton{
    background-color: transparent;
    padding: .3rem 1.3rem;
    cursor: pointer;
}
.buttonGroup > .resetbutton:hover{
    background-color: #A0A0A0;
    color: white;
    
    transition-duration: 300ms;
}

@media (max-width: 1022px){
    .ContactContainer{
        height: auto;
    }
    .companyInfoContainer{
        display: none;
    }
    .formContainer{
        width: 100%;
        height: auto;
        background: none;
        box-shadow: none;
        border-radius: 0;
    }
    .formContainer > div{
        position: static;
        width: 100%;
        height: auto;
    }
    .formContainer > div > h2{
        display: none;
    }
    table{
        width: 100%;
    }
    input, select, textarea{
        height: auto;
        width: 100%;
    }
    .buttonGroup > *{
        width: 80px;
    }
}
</style>