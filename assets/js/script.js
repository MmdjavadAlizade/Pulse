//>————===={ Script }====————<\\

//>————===={ Banks list }
const banks = [{
    "card_no": 627381,
    "bank_name": "ansar",
    "bank_title": "بانک انصار",
    "bank_logo": "https://basemax.github.io/DetectIranianBankWeb/images/ansar-05.svg",
    "color": "%23aa1a1f"
}, {
    "card_no": 636214,
    "bank_name": "ayandeh",
    "bank_title": "بانک آینده",
    "bank_logo": "https://basemax.github.io/DetectIranianBankWeb/images/ayande-03.svg",
    "color": "%23cc932b"
}, {
    "card_no": 502938,
    "bank_name": "dey",
    "bank_title": "بانک دی",
    "bank_logo": "https://basemax.github.io/DetectIranianBankWeb/images/day-12.svg",
    "color": "%230dffffff"
}, {
    "card_no": 627412,
    "bank_name": "eghtesad_novin",
    "bank_title": "بانک اقتصادنوین",
    "bank_logo": "https://basemax.github.io/DetectIranianBankWeb/images/eghtesad-04.svg",
    "color": "%23662891"
}, {
    "card_no": 628157,
    "bank_name": "etebari_tosee",
    "bank_title": "موسسه اعتباری توسعه",
    "bank_logo": "https://basemax.github.io/DetectIranianBankWeb/images/tose-11.svg",
    "color": "%238f2426"
}, {
    "card_no": 505416,
    "bank_name": "gardeshgari",
    "bank_title": "بانک گردشگری",
    "bank_logo": "https://basemax.github.io/DetectIranianBankWeb/images/gardeshgari-20.svg",
    "color": "%2300a1be"
}, {
    "card_no": 639599,
    "bank_name": "ghavvamin",
    "bank_title": "بانک قوامین",
    "bank_logo": "https://basemax.github.io/DetectIranianBankWeb/images/ghavvamin-31.svg",
    "color": "%23007d3d"
}, {
    "card_no": 627488,
    "bank_name": "kar_afarin",
    "bank_title": "بانک کارآفرین",
    "bank_logo": "https://basemax.github.io/DetectIranianBankWeb/images/karafarin-06.svg",
    "color": "%230c7309"
}, {
    "card_no": 502910,
    "bank_name": "kar_afarin",
    "bank_title": "بانک کارآفرین",
    "bank_logo": "https://basemax.github.io/DetectIranianBankWeb/images/karafarin-06.svg",
    "color": "%230c7309"
}, {
    "card_no": 603770,
    "bank_name": "keshavarzi",
    "bank_title": "بانک کشاورزی",
    "bank_logo": "https://basemax.github.io/DetectIranianBankWeb/images/keshavarzi-07.svg",
    "color": "%23d8ac4e"
}, {
    "card_no": 639217,
    "bank_name": "keshavarzi",
    "bank_title": "بانک کشاورزی",
    "bank_logo": "https://basemax.github.io/DetectIranianBankWeb/images/keshavarzi-07.svg",
    "color": "%23d8ac4e"
}, {
    "card_no": 628023,
    "bank_name": "maskan",
    "bank_title": "بانک مسکن",
    "bank_logo": "https://basemax.github.io/DetectIranianBankWeb/images/maskan-26.svg",
    "color": "%23ec520d"
}, {
    "card_no": 639370,
    "bank_name": "mehr_e_eghtesad",
    "bank_title": "بانک مهر اقتصاد",
    "bank_logo": "https://basemax.github.io/DetectIranianBankWeb/images/mehreghtesad-14.svg",
    "color": "%231a656565"
}, {
    "card_no": 606373,
    "bank_name": "mehr_e_iranian",
    "bank_title": "بانک قرض الحسنه مهر ایرانیان",
    "bank_logo": "https://basemax.github.io/DetectIranianBankWeb/images/mehriran-15.svg",
    "color": "%23209b1c"
}, {
    "card_no": 603799,
    "bank_name": "melliiran",
    "bank_title": "بانک ملی ایران",
    "bank_logo": "https://basemax.github.io/DetectIranianBankWeb/images/melli-22.svg",
    "color": "%23faae32"
}, {
    "card_no": 610433,
    "bank_name": "mellat",
    "bank_title": "بانک ملت",
    "bank_logo": "https://basemax.github.io/DetectIranianBankWeb/images/mellat-02.svg",
    "color": "%23b30404"
}, {
    "card_no": 991975,
    "bank_name": "mellat",
    "bank_title": "بانک ملت",
    "bank_logo": "https://basemax.github.io/DetectIranianBankWeb/images/mellat-02.svg",
    "color": "%23b30404"
}, {
    "card_no": 111111,
    "bank_name": "ok",
    "bank_title": "همه کارتخوان‌ها",
    "bank_logo": "https://basemax.github.io/DetectIranianBankWeb/images/shetab.svg",
    "color": "%233497FD"
}, {
    "card_no": 622106,
    "bank_name": "parsian",
    "bank_title": "بانک پارسیان",
    "bank_logo": "https://basemax.github.io/DetectIranianBankWeb/images/pasargad-21.svg",
    "color": "%23b17d53"
}, {
    "card_no": 502229,
    "bank_name": "pasargad",
    "bank_title": "بانک پاسارگاد",
    "bank_logo": "https://basemax.github.io/DetectIranianBankWeb/images/pasargad-10.svg",
    "color": "%23edaa18"
}, {
    "card_no": 639347,
    "bank_name": "pasargad",
    "bank_title": "بانک پاسارگاد",
    "bank_logo": "https://basemax.github.io/DetectIranianBankWeb/images/pasargad-10.svg",
    "color": "%23edaa18"
}, {
    "card_no": 627760,
    "bank_name": "post_bank",
    "bank_title": "پست بانک ایران",
    "bank_logo": "https://basemax.github.io/DetectIranianBankWeb/images/post-09.svg",
    "color": "%2314763e"
}, {
    "card_no": 589463,
    "bank_name": "refah",
    "bank_title": "بانک رفاه",
    "bank_logo": "https://basemax.github.io/DetectIranianBankWeb/images/refahkargaran-28.svg",
    "color": "%23173576"
}, {
    "card_no": 627961,
    "bank_name": "saanat_va_maadan",
    "bank_title": "بانک صنعت و معدن",
    "bank_logo": "https://basemax.github.io/DetectIranianBankWeb/images/sanatmadan-16.svg",
    "color": "%239b814c"
}, {
    "card_no": 603769,
    "bank_name": "saderat",
    "bank_title": "بانک صادرات",
    "bank_logo": "https://basemax.github.io/DetectIranianBankWeb/images/saderat-29.svg",
    "color": "%232d2a68"
}, {
    "card_no": 621986,
    "bank_name": "saman",
    "bank_title": "بانک سامان",
    "bank_logo": "https://basemax.github.io/DetectIranianBankWeb/images/saman-01.svg",
    "color": "%231a7dcdf1"
}, {
    "card_no": 639607,
    "bank_name": "sarmayeh",
    "bank_title": "بانک سرمایه",
    "bank_logo": "https://basemax.github.io/DetectIranianBankWeb/images/sarmaye-17.svg",
    "color": "%23afb2ae"
}, {
    "card_no": 589210,
    "bank_name": "sepah",
    "bank_title": "بانک سپه",
    "bank_logo": "https://basemax.github.io/DetectIranianBankWeb/images/sepah-24.svg",
    "color": "%231b5fc1"
}, {
    "card_no": 504706,
    "bank_name": "shahr",
    "bank_title": "بانک شهر",
    "bank_logo": "https://basemax.github.io/DetectIranianBankWeb/images/shahr-25.svg",
    "color": "%23d8262c"
}, {
    "card_no": 502806,
    "bank_name": "shahr",
    "bank_title": "بانک شهر",
    "bank_logo": "https://basemax.github.io/DetectIranianBankWeb/images/shahr-25.svg",
    "color": "%23d8262c"
}, {
    "card_no": 639346,
    "bank_name": "sina",
    "bank_title": "بانک سینا",
    "bank_logo": "https://basemax.github.io/DetectIranianBankWeb/images/sina-23.svg",
    "color": "%23277eb5"
}, {
    "card_no": 627353,
    "bank_name": "tejarat",
    "bank_title": "بانک تجارت",
    "bank_logo": "https://basemax.github.io/DetectIranianBankWeb/images/tejarat-13.svg",
    "color": "%232e4a98"
}, {
    "card_no": 585983,
    "bank_name": "tejarat",
    "bank_title": "بانک تجارت",
    "bank_logo": "https://basemax.github.io/DetectIranianBankWeb/images/tejarat-13.svg",
    "color": "%232e4a98"
}, {
    "card_no": 636949,
    "bank_name": "tejarat",
    "bank_title": "بانک حکمت",
    "bank_logo": "https://basemax.github.io/DetectIranianBankWeb/images/hekmat-30.svg",
    "color": "%23324c88"
}, {
    "card_no": 627648,
    "bank_name": "tosee_saderat",
    "bank_title": "بانک توسعه صادرات",
    "bank_logo": "https://basemax.github.io/DetectIranianBankWeb/images/tosesaderat-18.svg",
    "color": "%23006d08"
}, {
    "card_no": 502908,
    "bank_name": "tosee_taavon",
    "bank_title": "بانک توسعه تعاون",
    "bank_logo": "https://basemax.github.io/DetectIranianBankWeb/images/tosetaavon-19.svg",
    "color": "%2350b4d0"
}];
//>————===={ Detect bank }
const detect_bank = (db_card_number) => {
    const onlyNum = str => str.replace(/[^.\d]/g, '');
    db_card_number = onlyNum(String(db_card_number));
    if (db_card_number.length < 6) return undefined;
    let card_number_prefix = parseInt(db_card_number.substr(0, 6));

    const bank = banks.filter(b => b.card_no === card_number_prefix);
    return bank.length === 0 ? undefined : bank[0];
};
//>————===={ Change English number to Farsi number }
function toFarsiNumber(number) {
    const englishnumbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    const farsinumbers = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];

    return number.split('').map(char => {
        const index = englishnumbers.indexOf(char);
        return index !== -1 ? farsinumbers[index] : char;
    }).join('');
}
function toEnglishNumber(number) {
    const farsinumbers = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
    const englishnumbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    return number.split('').map(char => {
        const index = farsinumbers.indexOf(char);
        return index !== -1 ? englishnumbers[index] : char;
    }).join('');
}



//>————===={ Home }====————<\\

if(window.location.pathname.split('/')[3] == 'home.html'){
    //>————===={ Show card(s) }
    let home_showcard_id = 1
    while(home_showcard_id <= localStorage.getItem("card_count")){
        try{
            let card_data = JSON.parse(localStorage.getItem(`card-${home_showcard_id}`));
            document.getElementById("home_card_list").innerHTML += `
            <div class="swiper-slide" role="group">
                <div class="row">
                    <div class="col-12 d-flex flex-column align-items-center mb-4">
                        <div class="d-flex align-items-center">
                            <p class="m-0 fs-2 ff-dana-demibold">${toFarsiNumber(Number(card_data.card_balance).toLocaleString())}
                            </p><span class="me-2 fs-5 ff-dana-demibold">ريال</span>
                        </div>
                        <p class="m-0 ff-dana-light">مانده حساب</p>
                    </div>
                    <div class="col-12">
                        <div class="bank-card position-relative mx-auto" id="card-${home_showcard_id}">
                            <img src="${detect_bank(card_data.card_number).bank_logo}" alt="bank logo">
                            <div class="bank-card-textbox d-flex flex-column w-75 text-center position-absolute start-50 translate-middle">
                                <span class="ff-dana-demibold fs-5">${toFarsiNumber(card_data.card_number)}</span><span>${card_data.card_name}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            `;
            document.getElementById(`card-${home_showcard_id}`).style.backgroundImage=`url("data:image/svg+xml,%3Csvg width='100%25' height='100%25' id='svg' viewBox='0 0 1440 590' xmlns='http://www.w3.org/2000/svg' class='transition duration-300 ease-in-out delay-150'%3E%3Cdefs%3E%3ClinearGradient id='gradient' x1='0%25' y1='50%25' x2='100%25' y2='50%25'%3E%3Cstop offset='5%25' stop-color='%230693E3'%3E%3C/stop%3E%3Cstop offset='95%25' stop-color='%2331b5ff'%3E%3C/stop%3E%3C/linearGradient%3E%3C/defs%3E%3Cpath d='M 0,600 L 0,150 C 83.27272727272728,160.59330143540672 166.54545454545456,171.1866028708134 275,180 C 383.45454545454544,188.8133971291866 517.0909090909091,195.8468899521531 612,193 C 706.9090909090909,190.1531100478469 763.0909090909091,177.42583732057415 849,228 C 934.9090909090909,278.57416267942585 1050.5454545454545,392.44976076555025 1154,440 C 1257.4545454545455,487.55023923444975 1348.7272727272727,468.77511961722485 1440,450 L 1440,600 L 0,600 Z' stroke='none' stroke-width='0' fill='${detect_bank(card_data.card_number).color}' fill-opacity='0.53' class='transition-all duration-300 ease-in-out delay-150 path-0'%3E%3C/path%3E%3Cdefs%3E%3ClinearGradient id='gradient' x1='0%25' y1='50%25' x2='100%25' y2='50%25'%3E%3Cstop offset='5%25' stop-color='%230693E3'%3E%3C/stop%3E%3Cstop offset='95%25' stop-color='%230693E3'%3E%3C/stop%3E%3C/linearGradient%3E%3C/defs%3E%3Cpath d='M 0,600 L 0,350 C 79.1866028708134,311.7894736842105 158.3732057416268,273.5789473684211 262,302 C 365.6267942583732,330.4210526315789 493.6937799043062,425.47368421052636 610,474 C 726.3062200956938,522.5263157894736 830.8516746411483,524.5263157894736 912,518 C 993.1483253588517,511.47368421052636 1050.8995215311004,496.42105263157896 1135,517 C 1219.1004784688996,537.578947368421 1329.5502392344497,593.7894736842105 1440,650 L 1440,600 L 0,600 Z' stroke='none' stroke-width='0' fill='${detect_bank(card_data.card_number).color}' fill-opacity='1' class='transition-all duration-300 ease-in-out delay-150 path-1'%3E%3C/path%3E%3C/svg%3E")`
        }catch(e){
            console.log("Error: "+e)
        }
        home_showcard_id++
    }
    //>————===={ Add card item }
    document.getElementById("home_card_list").innerHTML += `
            <div class="swiper-slide">
                <div class="row">
                    <div class="col-12 d-flex flex-column align-items-center mb-4">
                        <div class="d-flex align-items-center">
                            <p class="m-0 fs-2 ff-dana-demibold">اضافه کردن کارت</p>
                        </div>
                        <p class="m-0 ff-dana-light">حساب جدید</p>
                    </div>
                    <div class="col-12">
                        <a class="bank-add-card mx-auto d-flex align-items-center justify-content-center" href="admin.html">
                            <div class="bank-add-imgbox rounded-circle p-2">
                                <img src="public/icons/plus.svg" alt="icon" class="img-fluid">
                            </div>
                        </a>
                    </div>
                </div>
            </div>
            `;
    //>————===={ Swiper maker }
    const swiper = new Swiper('.swiper', {
        pagination: {
            el: '.swiper-pagination',
        },
    });
    //>————===={ Charge card }
    function ab_charge(){
        const card_selected = document.getElementsByClassName("swiper-slide-active")[0].getElementsByClassName("bank-card")[0].id;
        const card_add_balance = document.getElementById('AbCharge').value;
        let card_data = JSON.parse(localStorage.getItem(card_selected));
        let set_balance = Number(card_add_balance) + Number(card_data.card_balance)
        let card_new_data = JSON.stringify(
            {
                "card_bank": card_data.card_bank,
                "card_number": card_data.card_number,
                "card_name": card_data.card_name,
                "card_balance": set_balance
            }
        )
        localStorage.setItem(card_selected, card_new_data);
    }
}



//>————===={ Admin }====————<\\

if(window.location.pathname.split('/')[3] == 'admin.html'){
    //>————===={ Show card(s) }
    let admin_showcard_card_id = 1
    while(admin_showcard_card_id <= localStorage.getItem("card_count")){
        try{
            let card_data = JSON.parse(localStorage.getItem(`card-${admin_showcard_card_id}`));
            document.getElementById("admin_card_list").innerHTML +=`<tr><td>${String(card_data.card_bank).replace("melliiran", "بانک ملی").replace("blubank", "بلو بانک").replace("mellat", "بانک ملت").replace("refah", "بانک رفاه")}</td><td>${card_data.card_number}</td><td>${card_data.card_name}</td><td>${card_data.card_balance}</td><td><button class="btn admin-action-btn text-white w-100" onclick="removecard(${admin_showcard_card_id})">حذف</button></td></tr>`;
        }catch{
            // pass
        }
        admin_showcard_card_id++
    }
    //>————===={ Add card }
    function addcard(){
        let card_number = document.getElementById("addcard_cardnumber").value;
        let card_name = document.getElementById("addcard_name").value;
        let card_balance = document.getElementById("addcard_balance").value;
        if (card_number == "" || card_name == "" || card_balance == ""){
            if(card_number == ""){
                Toastify({
                    text: "شماره کارت خود را وارد کنید",
                    duration: 1500,
                    className: "rounded-3",
                    style: {
                        background: "linear-gradient(to right, #ff0000, #500000)",
                    }
                  }).showToast();
            }
            else if(card_name == ""){
                Toastify({
                    text: "نام و نام خانوادگی خود را وارد کنید",
                    duration: 1500,
                    className: "rounded-3",
                    style: {
                        background: "linear-gradient(to right, #ff0000, #500000)",
                    }
                  }).showToast();
            }
            else if(card_balance == ""){
                Toastify({
                    text: "موجودی خود را وارد کنید",
                    duration: 1500,
                    className: "rounded-3",
                    style: {
                        background: "linear-gradient(to right, #ff0000, #500000)",
                    }
                  }).showToast();
            }
        }else{
            if(detect_bank(card_number) == undefined){
                event.preventDefault();
                Toastify({
                    text: "بانک پیدا نشد",
                    duration: 1500,
                    className: "rounded-3",
                    style: {
                        background: "linear-gradient(to right, #ff0000, #500000)",
                    }
                  }).showToast();
            }else{
                event.preventDefault();
                localStorage.setItem("card_count", Number(localStorage.getItem("card_count"))+1);
                let card_data = JSON.stringify(
                    {
                        "card_bank": detect_bank(card_number).bank_name,
                        "card_number": card_number,
                        "card_name": card_name,
                        "card_balance": card_balance
                    }
                )
                localStorage.setItem(`card-${localStorage.getItem("card_count")}`, card_data);
                Swal.fire({
                    title: "کارت اضافه شد",
                    icon: "success",
                    showConfirmButton: false
                  });
                setTimeout(() => { 
                    location.reload()
                }, 1000)
            }
            
        }
    }
    //>————===={ Remove card }
    function removecard(card_id){
        Swal.fire({
            title: "حذف کردن کارت",
            text: "مطمعنید میخواهید کارت مورد نظر را حذف کنید؟",
            icon: "question",
            showCancelButton: true,
            confirmButtonColor: "#1e2a38",
            cancelButtonColor: "#454d5a",
            confirmButtonText: "بله، حذف کنید",
            cancelButtonText: "لغو"
          }).then((result) => {
            if (result.isConfirmed) {
              localStorage.removeItem(`card-${card_id}`)
              location.reload()
            }
          });
    }
}