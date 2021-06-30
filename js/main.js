
let headerHeight = 100
const anchors = document.querySelectorAll('a.anchor')
if (anchors)
  anchors.forEach(function (item) {
    item.addEventListener('click', function () {
      let blockID = item.getAttribute('href').substring(1)
      $("html, body").animate({
        scrollTop: $('#' + blockID).offset().top + "px"
      }, {
        duration: 500,
        easing: "swing"
      });
    })
  })

$(document).on('scroll', function () {
  $('.header').toggleClass('header-fixed', pageYOffset > 80)
});

// valdation 
$.validator.addMethod("pwcheckallowedchars", function (value) {
  return /^[a-zA-Zа-яА-я-()ёЁ ]+$/.test(value) // has only allowed chars letter
}, "Недопустимое значение");

$('#brifForm').validate({
  rules: {
    boomname: {
      required: true,
      pwcheckallowedchars: true,
    },
    boomtel: {
      required: true
    },
    // privacy: {
    //   required: true
    // },

  },
  messages: {

    boomname: {
      required: jQuery.validator.format("Поле не заполнено"),
      minlength: jQuery.validator.format("Минимум 2 символа"),
      maxlength: jQuery.validator.format("Максимум 80 символов"),
    },
    boomtel: {
      required: jQuery.validator.format("Поле не заполнено"),
      minlength: jQuery.validator.format("Номер указан не полностью"),
    },
  },
  errorElement: "span",
  errorClass: "invalid",
  highlight: function (element) {
    $(element).parent().addClass("invalid");
  },
  unhighlight: function (element) {
    $(element).parent().removeClass("invalid");
  },
  focusInvalid: false,
  onclick: function (element) {
    // let submit = document.querySelector(' #brifForm .form-submit')

    // if ($('#brifForm').validate().checkForm()) {
    //   submit.classList.remove('disabled')
    // } else {
    //   submit.classList.add('disabled')
    // }

    // этот код взят из события onkeyup по умолчанию. Нужен чтобы скрывать/показывать ошибку после каждого введенного символа 
    var excludedKeys = [
      16, 17, 18, 20, 35, 36, 37,
      38, 39, 40, 45, 144, 225
    ];
    if (event.which === 9 && this.elementValue(element) === "" || $.inArray(event.keyCode, excludedKeys) !== -1) {
      return;
    } else if (element.name in this.submitted || element.name in this.invalid) {
      this.element(element);
    }
  },
  onkeyup: function (element) {
    // let submit = document.querySelector(' #brifForm .form-submit')

    // if ($('#brifForm').validate().checkForm()) {
    //   submit.classList.remove('disabled')
    // } else {
    //   submit.classList.add('disabled')
    // }

    // этот код взят из события onkeyup по умолчанию. Нужен чтобы скрывать/показывать ошибку после каждого введенного символа 
    var excludedKeys = [
      16, 17, 18, 20, 35, 36, 37,
      38, 39, 40, 45, 144, 225
    ];
    if (event.which === 9 && this.elementValue(element) === "" || $.inArray(event.keyCode, excludedKeys) !== -1) {
      return;
    } else if (element.name in this.submitted || element.name in this.invalid) {
      this.element(element);
    }
  },



});
$('#brifModalForm').validate({
  rules: {
    boomname: {
      required: true,
      pwcheckallowedchars: true,
    },
    boomtel: {
      required: true
    },
    // privacy: {
    //   required: true
    // },

  },
  messages: {

    boomname: {
      required: jQuery.validator.format("Поле не заполнено"),
      minlength: jQuery.validator.format("Минимум 2 символа"),
      maxlength: jQuery.validator.format("Максимум 80 символов"),
    },
    boomtel: {
      required: jQuery.validator.format("Поле не заполнено"),
      minlength: jQuery.validator.format("Номер указан не полностью"),
    },
  },
  errorElement: "span",
  errorClass: "invalid",
  highlight: function (element) {
    $(element).parent().addClass("invalid");
  },
  unhighlight: function (element) {
    $(element).parent().removeClass("invalid");
  },
  focusInvalid: false,
  onclick: function (element) {
    // let submit = document.querySelector(' #brifForm .form-submit')

    // if ($('#brifForm').validate().checkForm()) {
    //   submit.classList.remove('disabled')
    // } else {
    //   submit.classList.add('disabled')
    // }

    // этот код взят из события onkeyup по умолчанию. Нужен чтобы скрывать/показывать ошибку после каждого введенного символа 
    var excludedKeys = [
      16, 17, 18, 20, 35, 36, 37,
      38, 39, 40, 45, 144, 225
    ];
    if (event.which === 9 && this.elementValue(element) === "" || $.inArray(event.keyCode, excludedKeys) !== -1) {
      return;
    } else if (element.name in this.submitted || element.name in this.invalid) {
      this.element(element);
    }
  },
  onkeyup: function (element) {
    // let submit = document.querySelector(' #brifForm .form-submit')

    // if ($('#brifForm').validate().checkForm()) {
    //   submit.classList.remove('disabled')
    // } else {
    //   submit.classList.add('disabled')
    // }

    // этот код взят из события onkeyup по умолчанию. Нужен чтобы скрывать/показывать ошибку после каждого введенного символа 
    var excludedKeys = [
      16, 17, 18, 20, 35, 36, 37,
      38, 39, 40, 45, 144, 225
    ];
    if (event.which === 9 && this.elementValue(element) === "" || $.inArray(event.keyCode, excludedKeys) !== -1) {
      return;
    } else if (element.name in this.submitted || element.name in this.invalid) {
      this.element(element);
    }
  },



});

$('.form-tel').mask('+0 (000) 000 00 00');
$('.form-tel').on('input', function () {
  let val = $(this).val();
  if (val[1] == 8) {
    $(this).val(7 + val.slice(2));
  }
});


const toModalBrifBtns = document.querySelectorAll('.js-toModalBrif')
const modalBrif = document.querySelector('.modal-brif')


if (modalBrif && toModalBrifBtns.length > 0) {
  const modalBg = modalBrif.querySelector('.modal-bg')
  modalBg.addEventListener('click', function (e) {
    modalBrif.classList.remove('active')
    document.body.style.overflow = 'auto'
  
  })
  toModalBrifBtns.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      modalBrif.classList.add('active')
      document.body.style.overflow = 'hidden'
    })
  })
}
