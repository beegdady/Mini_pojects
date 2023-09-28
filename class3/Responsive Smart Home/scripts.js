



var faqicon = document.getElementsByClassName('faq_icon');
var faqanswer = document.getElementsByClassName('faq_answer');

for (let i = 0; i < faqicon.length; i++) {
    faqicon[i].addEventListener('click', function() {
        if (faqanswer[i].classList.contains('faq_show')) {
            faqanswer[i].classList.remove('faq_show');
            faqanswer[i].classList.add('faq_hide');
        } else {
            faqanswer[i].classList.remove('faq_hide');
            faqanswer[i].classList.add('faq_show');
        }
        
    });
}


