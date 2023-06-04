const iphoneBtnPlus =document.getElementById("iphone-btn-plus")
iphoneBtnPlus.addEventListener("click",function(){
    let iphoneNumber=document.getElementById('iphone-number');
    let iphoneNumberInt=parseInt(iphoneNumber.value)

    let newIphoneNumber=iphoneNumberInt+1
    iphoneNumber.value=newIphoneNumber



    let iphonePrice=document.getElementById('iphonePrice')
    let iphonePriceInt=parseInt(iphonePrice.innerText)
    iphonePrice.innerText=1219*iphoneNumber.value
    console.log(iphonePrice)
})
const caseBtnPlus = document.getElementById('iphoneCase')
caseBtnPlus.addEventListener("click",function(){
    let iphoneNumber=document.getElementById('case-number');
    let iphoneNumberInt=parseInt(iphoneNumber.value)

    let newIphoneNumber=iphoneNumberInt+1
    iphoneNumber.value=newIphoneNumber


    let iphonePrice=document.getElementById('casePrice')
    let iphonePriceInt=parseInt(iphonePrice.innerText)
    iphonePrice.innerText=1219*iphoneNumber.value
    console.log(iphonePrice)
})
const iphoneBtnMinus = document.getElementById("iphone-btn-minus")
iphoneBtnMinus.addEventListener("click",function(){
    let iphoneNumber=document.getElementById('iphone-number');
    let iphoneNumberInt=parseInt(iphoneNumber.value)

    let newIphoneNumber=iphoneNumberInt-1
    iphoneNumber.value=newIphoneNumber
    if(iphoneNumber.value<0){iphoneNumber.value=0}


    let iphonePrice=document.getElementById('iphonePrice')
    let iphonePriceInt=parseInt(iphonePrice.innerText)
    iphonePrice.innerText=1219*iphoneNumber.value
    console.log(iphonePrice)


})
const caseBtnMinus= document.getElementById("case-btn-minus")
caseBtnMinus.addEventListener("click",function(){
    let iphoneNumber=document.getElementById('case-number');
    let iphoneNumberInt=parseInt(iphoneNumber.value)

    let newIphoneNumber=iphoneNumberInt-1
    iphoneNumber.value=newIphoneNumber
    if(iphoneNumber.value<0){iphoneNumber.value=0}


    let iphonePrice=document.getElementById('casePrice')
    let iphonePriceInt=parseInt(iphonePrice.innerText)
    iphonePrice.innerText=1219*iphoneNumber.value
    console.log(iphonePrice)
})



////////////////////////////////////////////////////////////////////////////////


let subTotal=document.getElementById(subTotal).innerText
subTotal.innerText=document.getElementById('iphonePrice').innerText*document.getElementById('casePrice').innerText
