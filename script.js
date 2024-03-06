let timer = document.querySelector('.timer');
let time = 59;
let interval = setInterval(() => {
    time--;
    timer.innerHTML = time;
    if (time == 0) {
        time = 60;
    }
}, 1000);
// <script>
    !function(f,b,e,v,n,t,s)
    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
    n.queue=[];t=b.createElement(e);t.async=!0;
    t.src=v;s=b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t,s)}(window, document,'script',
    'https://connect.facebook.net/en_US/fbevents.js');
    fbq('init', '357643373910967');
    fbq('track', 'PageView');
    // </script>
