// Setting DOM elements
const body             = $('body'); 
const topbar           = $('.topbar');
const responsiveNavbar = $('.responsive');

const burgerButton     = $('.burger');
const linkButton       = $('a.btn');

const iconBars         = $('.burger .fa-bars');
const iconCross        = $('.burger .fa-times');

const dayValueNode     = $('.el-value.day');
const hourValueNode    = $('.el-value.hour');
const minuteValueNode  = $('.el-value.minute');
const secondValueNode  = $('.el-value.second');

const dayNameNode      = $('.el-name.day');
const hourNameNode     = $('.el-name.hour');
const minuteNameNode   = $('.el-name.minute');
const secondNameNode   = $('.el-name.second');

// Setting class names
const cssClass = {
    sticky: 'sticky',
    active: 'active',
    scrollLock: 'scroll-lock',
    opacityOne: 'op-1'
};

const endDate = new Date('February 15, 2022 14:30:00').getTime();

const second = 1000;
const minute = second * 60;
const hour   = minute * 60;
const day    = hour * 24;

const dayDeclinations    = ['день', 'дня', 'дней'];
const hourDeclinations   = ['час', 'часа', 'часов'];
const minuteDeclinations = ['минута', 'минуты', 'минут'];
const secondDeclinations = ['секунда', 'секунды', 'секунд'];

const declination = (name,  value) => {

    value = value.toString();

    let valueLastChar = value.charAt(value.length - 1);

    const subDeclination = array => {
        switch (valueLastChar) {
            case '1':
                return array[0];
    
            case '2':
            case '3':
            case '4':
                return array[1];
        
            default:
                return array[2];
        }
    }

    if (value.length > 1 && value.charAt() === '1') {
        switch (name) {
            case 'day':
                return 'дней';

            case 'hour':
                return 'часов';

            case 'minute':
                return 'минут';

            case 'second':
                return 'секунд';
        }
    } else {
        switch (name) {
            case 'day':
                return subDeclination(dayDeclinations);
            case 'hour':
                return subDeclination(hourDeclinations);
    
            case 'minute':
                return subDeclination(minuteDeclinations);
    
            case 'second':
                return subDeclination(secondDeclinations);
        }
    }
}

const countdown = () => {
    let currentDate = new Date().getTime();
    let gap = endDate - currentDate;

    let dayCount    = Math.floor(gap / day);
    let hourCount   = Math.floor((gap % day) / hour);
    let minuteCount = Math.floor((gap % hour) / minute);
    let secondCount = Math.floor((gap % minute) / second);

    let dayDeclination = declination('day', dayCount);
    let hourDeclination = declination('hour', hourCount);
    let minuteDeclination = declination('minute', minuteCount);
    let secondDeclination = declination('second', secondCount);

    dayValueNode.text(dayCount);
    hourValueNode.text(hourCount);
    minuteValueNode.text(minuteCount);
    secondValueNode.text(secondCount);

    dayNameNode.text(dayDeclination);
    hourNameNode.text(hourDeclination);
    minuteNameNode.text(minuteDeclination);
    secondNameNode.text(secondDeclination);

}


$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20) {
            topbar.addClass(cssClass.sticky);
        }
        else {
            topbar.removeClass(cssClass.sticky);
        }

        // if(this.scrollY > 500) {
        //     $('.scroll-up-button').addClass("show");
        // }
        // else {
        //     $('.scroll-up-button').removeClass("show");
        // };
    })

    // $('.scroll-up-button').click(function() {
    //     $('html').animate({scrollTop: 0});
    // });
    
    burgerButton.click(function(){
        body.toggleClass(cssClass.scrollLock);
        responsiveNavbar.toggleClass(cssClass.active);
        iconBars.toggleClass(cssClass.opacityOne);
        iconCross.toggleClass(cssClass.opacityOne);
    })
    
    linkButton.click(function(){
        if (body.hasClass(cssClass.scrollLock) === true) {
            body.toggleClass(cssClass.scrollLock);
            responsiveNavbar.toggleClass(cssClass.active);
            iconBars.toggleClass(cssClass.opacityOne);
            iconCross.toggleClass(cssClass.opacityOne);
        }
    })

})

const countdownEl = document.querySelector('.countdown')

setInterval(countdown, second);