
  
    
    function preparation_price() {
    const valueTime = $('input[name="okres"]:checked').val();
    const valueLimit = $('.kmLimits .limitKM:checked').attr('data-price');
    let priceValue = $('[data-limit="' + valueLimit + '"]').val();
    $('.pricePlace').html(parseInt(valueTime));
    console.log(valueTime)
    
    const kmLimits_checked = $('.kmLimits .limitKM:checked').is(':checked');
    if (kmLimits_checked) {
        let limitKm = $('.kmLimits .limitKM:checked').attr('data-price');
        if (limitKm) {
            priceValue = parseInt(limitKm);
        }
    }

    const checkTires_checked = $('.option-box-pakiety #checkTires').is(':checked');
    if (checkTires_checked) {
        let tiresPrice = $('.option-box-pakiety #checkTires').attr('data-price');
        if (tiresPrice) {
            priceValue = parseInt(valueLimit) + parseInt(tiresPrice);
        }
    }

    const checkInsurance_checked = $('.option-box-pakiety #checkInsurance').is(':checked');
    if (checkInsurance_checked) {
        let insurancePrice = $('.option-box-pakiety #checkInsurance').attr('data-price');
        if (insurancePrice) {
            priceValue = parseInt(priceValue) + parseInt(insurancePrice);
        }
    }

    const checkAssistance_checked = $('.option-box-pakiety #checkAssistance').is(':checked');
    if (checkAssistance_checked) {
        let assistancePrice = $('.option-box-pakiety #checkAssistance').attr('data-price');
        if (assistancePrice) {
            priceValue = parseInt(priceValue) + parseInt(assistancePrice);
        }
    }
 

    if (!priceValue) {
        $('.pricePlace').html(parseInt(valueLimit));
    } else {
        $('.pricePlace').html(parseInt(priceValue));
    }
}

$(".kmLimits input").change(function () {
    preparation_price();
});

$('.option-box-pakiety #checkTires').on('change', function () {
    preparation_price();
});

$('.option-box-pakiety #checkInsurance').on('change', function () {
    preparation_price();
});

$('.option-box-pakiety #checkAssistance').on('change', function () {
    preparation_price();
});

