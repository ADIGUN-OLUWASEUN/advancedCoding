const convertBTN = document.querySelector('.btn');
const fromSelect = document.querySelector('.fromSelect');
const toSelect = document.querySelector('.toSelect');
const selectedFields = document.querySelectorAll('.form-select')
const apiKey = 'b3c19523c59df037e0e5d088' //api key


convertBTN.addEventListener('click', getConversion)

fetch(`https://v6.exchangerate-api.com/v6/${apiKey}/codes`)
.then((res)=>{
    if (res.ok){
       res.json()
       .then((data)=>{
            const supportedCodes = data['supported_codes']
            selectedFields.forEach((selectedField)=>{
                supportedCodes.forEach((supportedCode)=>{
                    const actualCode = supportedCode[0]
                    selectedField.innerHTML += `<option value = '${actualCode}'>${actualCode}</option>`
                })
            })
       }) 
    }
})
.catch(()=>{
    console.log(err);
    
})

async function getConversion(){
    const baseCurrency = fromSelect.value
    const targetCurrency = toSelect.value
    const amount = amountINP.value

    try {
        const res = await fetch(`https://v6.exchangerate-api.com/v6/${apiKey}/pair/${baseCurrency}/${targetCurrency}/${amount}`)
        // const res = await fetch('https://v6.exchangerate-api.com/v6/b3c19523c59df037e0e5d088/codes')
        const data = await res.json()
        const result = data['conversion_result']

        resultDisplay.innerHTML = `Result : ${amount} ${baseCurrency} to ${result} ${targetCurrency}`
    } catch (error) {
        console.log(error);
        resultDisplay.innerHTML = 'error occured while trying to convert'        
    } 
}

// fetch(`https://v6.exchangerate-api.com/v6/codes`, {
//     headers:{
//         Authorization: `Bearer ${apiKey}`
//     }
// })
// .then((res)=>{
//     if (res.ok){
//        res.json()
//        .then((data)=>{
//             const supportedCodes = data['supported_codes']
//             selectedFields.forEach((selectedField)=>{
//                 supportedCodes.forEach((supportedCode)=>{
//                     const actualCode = supportedCode[0]
//                     selectedField.innerHTML += `<option value = '${actualCode}'>${actualCode}</option>`
//                 })
//             })
//        }) 
//     }
// })
// .catch(()=>{
//     console.log(err);
    
// })
