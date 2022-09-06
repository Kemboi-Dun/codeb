<template>
    <div class="contact-wrapper">
        <div class="contact-title">
            Contact Us
        </div>
        <div class="contact-items">
            <div class="contact-card-cont">
                <div class="contact-items">
<div class="contact-card-title">
Email
</div>
<div class="contact-card-item">
    codebuffers@gmail.com
</div>
        </div>


            <div class="contact-items">
                <div class="contact-card-title">
                Phone
</div>
<div class="contact-card-item">
    +254 0170 7735
</div>
            </div>

<div class="contact-items">
    <div class="contact-card-title">
    Github
</div>
<div class="contact-card-item">
    CodeBuffers_
</div>
</div>

<!-- <div class="contact-items">
    <div class="contact-card-title">
    Twitter
</div>
<div class="contact-card-item">
    @code_buffers
</div>
</div> -->

<div class="contact-items">
    <div class="contact-card-title">
    Address
</div>
<div class="contact-card-item">
    Thika, Kiambu Kenya
</div>
</div>
</div>
        </div>
    </div>
</template>

<style scoped>
.contact-wrapper{
    color:#181818;
    
}
.contact-title{
    font-size:100px;
    font-weight:700;
    line-height:180px;
    text-decoration: underline 12px solid #181818;
    text-underline-offset: 10px;
    margin: 0 5%;
}
.contact-card-cont{
display: flex;
 flex-wrap: wrap;
  width:60%;
  gap:44px;
  margin: 2% auto;
  align-items: center;
  justify-content: space-between;
}
.contact-card-title{
    margin: 6% 0;
    text-transform: capitalize;
    font-weight:500;
    font-size: 24px;
    line-height:36px;
    text-decoration: underline 4px solid #181818;
}
.contact-card-item{
    font-size:24px;
    font-weight: 400;
    line-height: 36px;
    width:250px;
  
}
.contact-items{
    display: grid;
}
</style>