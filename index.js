const Data = [
    { "id": "1", "upazilla_id": "1", "name": "Subil", "bn_name": "সুবিল", "url": "subilup.comilla.gov.bd" },
    { "id": "2", "upazilla_id": "1", "name": "North Gunaighor", "bn_name": "উত্তর গুনাইঘর", "url": "gunaighornorthup.comilla.gov.bd" },
    { "id": "3", "upazilla_id": "1", "name": "South Gunaighor", "bn_name": "দক্ষিণ গুনাইঘর", "url": "gunaighorsouth.comilla.gov.bd" },
    { "id": "4", "upazilla_id": "1", "name": "Boroshalghor", "bn_name": "বড়শালঘর", "url": "boroshalghorup.comilla.gov.bd" },
    { "id": "5", "upazilla_id": "1", "name": "Rajameher", "bn_name": "রাজামেহার", "url": "rajameherup.comila.gov.bd" },
    { "id": "6", "upazilla_id": "1", "name": "Yousufpur", "bn_name": "ইউসুফপুর", "url": "yousufpurup.comilla.gov.bd" },
    { "id": "7", "upazilla_id": "1", "name": "Rasulpur", "bn_name": "রসুলপুর", "url": "rasulpurup.comilla.gov.bd" },
    { "id": "8", "upazilla_id": "1", "name": "Fatehabad", "bn_name": "ফতেহাবাদ", "url": "fatehabadup.comilla.gov.bd" },
    { "id": "9", "upazilla_id": "1", "name": "Elahabad", "bn_name": "এলাহাবাদ", "url": "elahabadup.comilla.gov.bd" },
    { "id": "10", "upazilla_id": "1", "name": "Jafargonj", "bn_name": "জাফরগঞ্জ", "url": "jafargonjup.comilla.gov.bd" },
    { "id": "11", "upazilla_id": "1", "name": "Dhampti", "bn_name": "ধামতী", "url": "dhamptiup.comilla.gov.bd" },
    { "id": "12", "upazilla_id": "1", "name": "Mohanpur", "bn_name": "মোহনপুর", "url": "mohanpurup.comilla.gov.bd" },
    { "id": "13", "upazilla_id": "1", "name": "Vani", "bn_name": "ভানী", "url": "vaniup.comilla.gov.bd" },
    { "id": "14", "upazilla_id": "1", "name": "Barkamta", "bn_name": "বরকামতা", "url": "barkamtaup.comilla.gov.bd" },
    { "id": "15", "upazilla_id": "1", "name": "Sultanpur", "bn_name": "সুলতানপুর", "url": "sultanpurup.comilla.gov.bd" },
    { "id": "16", "upazilla_id": "2", "name": "Aganagar", "bn_name": "আগানগর", "url": "aganagarup.comilla.gov.bd" },
    { "id": "17", "upazilla_id": "2", "name": "Bhabanipur", "bn_name": "ভবানীপুর", "url": "bhabanipurup.comilla.gov.bd" },
    { "id": "18", "upazilla_id": "2", "name": "North Khoshbas", "bn_name": "উত্তর খোশবাস", "url": "khoshbasnorthup.comilla.gov.bd" },
    { "id": "19", "upazilla_id": "2", "name": "South Khoshbas", "bn_name": "দক্ষিন খোশবাস", "url": "khoshbassouthup.comilla.gov.bd" },
    { "id": "20", "upazilla_id": "2", "name": "Jhalam", "bn_name": "ঝলম", "url": "jhalamup.comilla.gov.bd" },
     
]


//This functionality will remove upazila_id, url and add value of every item. 

const modifiedArray = Data.map(item => {
    const { upazilla_id, url, ...rest } = item;
    return { ...rest, value: item.name };
});



// const jsnData= JSON.stringify(modifiedArray)
// console.log(jsnData);

console.log(modifiedArray)