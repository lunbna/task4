

window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    
    // التحقق من موضع التمرير
    if (window.scrollY > 600) { // يمكنك تغيير القيمة حسب الحاجة
        navbar.classList.add('navbar-scrolled');
    } else {
        navbar.classList.remove('navbar-scrolled');
    }
});
const changingText = document.getElementById('changing-text');
const textArray = ['نحن هنا لخدمتكم', 'توفير أفضل الخدمات البلدية', 'التواصل معنا لمزيد من المعلومات'];
let textIndex = 0;

function changeText() {
    changingText.innerText = textArray[textIndex];
    textIndex = (textIndex + 1) % textArray.length;
}

setInterval(changeText, 3000);
window.onload = changeText;

function showSection(sectionId) {
    // Hide all sections
    document.querySelectorAll('.collapse').forEach(collapse => {
        if (collapse.id !== sectionId) {
            $(collapse).collapse('hide');
        }
    });

    // Show the selected section
    $('#' + sectionId).collapse('show');
}
function updatePaymentFields() {
    const select = document.getElementById('paymentSelect1');
    const inputContainer = document.getElementById('inputContainer');
    const actionButton = document.getElementById('actionButton');
    inputContainer.innerHTML = '';  // Clear current fields

    if (select.value === 'buildingFine') {
        // Add two input fields for building fine
        inputContainer.innerHTML = `

               <div class="form-group d-flex">
            
                            <input type="text" id="paymentInput1"
                             class="form-control mb-2 col-md-10 col-sm-12" 
                             placeholder=" رقم قطعة الأرض">
                           <input type="text" id="paymentInput1" 
                           class="form-control mb-2 col-md-10 col-sm-12" 
                           placeholder="رقم المشروع">
                           
                </div>
                 
                 
        `;
        actionButton.textContent = 'تحقق الآن';
    } else {
        // Add a single input field for other options
        inputContainer.innerHTML = `
        <div class="d-flex flex-wrap col-md-12 col-sm-4">
         <input type="text" id="paymentInput1" class="form-control mb-2 col-md-12" placeholder="الرجاء إدخال رقم أذن الدفع">
        </div>
        
        `;
           actionButton.textContent = 'ادفع فوراً'
    }
}