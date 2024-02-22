window.addEventListener('load', function () {


    const head = this.document.head;
    const body = this.document.body;

    function facadesLoad() {

        // CSS Load Here



        // JS Load Here

        const google_tag = document.createElement('script')
        google_tag.async = true;
        google_tag.src = 'https://www.googletagmanager.com/gtag/js?id=UA-17468101-1';
        body.appendChild(google_tag)


        const cookieBar = document.createElement('script')
        cookieBar.src = 'js/jquery.cookiebar.js';
        body.appendChild(cookieBar)


        const notify_func = document.createElement('script')
        notify_func.src = 'js/notify_func.js';
        body.appendChild(notify_func)

        const theia_sticky_sidebar = document.createElement('script')
        theia_sticky_sidebar.src = 'js/theia-sticky-sidebar.js';
        body.appendChild(theia_sticky_sidebar)
    }

    function lazyFacadesLoad() {
        setTimeout(() => {
            // FB Activation
            (function (d, s, id) {
                var js, fjs = d.getElementsByTagName(s)[0];
                if (d.getElementById(id)) return;
                js = d.createElement(s); js.id = id;
                js.src = 'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.10&appId=1365407963556488';
                fjs.parentNode.insertBefore(js, fjs);
            }(document, 'script', 'facebook-jssdk'));


            //  Google Tag Activation
            window.dataLayer = window.dataLayer || [];
            function gtag() { dataLayer.push(arguments); }
            gtag('js', new Date());
            gtag('config', 'UA-17468101-1');


            // Activate Cookie Bar
            $(document).ready(function () {
                'use strict';
                $.cookieBar({
                    fixed: true
                });
            });


            // Thea sticky sidebar activation

            jQuery('.left-imgbox').theiaStickySidebar({
                additionalMarginTop: 80
            });
            jQuery('.right-imgbox').theiaStickySidebar({
                additionalMarginTop: 80
            });

        }, 1000)
    }

    function vendorCssLoad(){
        const vendor = document.createElement('link')
        vendor.href = 'css/vendors.css';
        vendor.type = 'text/css'
        vendor.rel = 'stylesheet'
        head.appendChild(vendor)
    }

    this.window.addEventListener('scroll', function () {
        if (this.window.scrollY > 1000) {
            if (!window.rh) {
                window.rh = true;
                facadesLoad();
                lazyFacadesLoad();
            }
        }else if(this.window.scrollY > 300){
            console.log(this.window.scrollY)
            if(!this.window.rh_vendor){
                this.window.rh_vendor = true;
                vendorCssLoad();
            }
        }
    })


    this.setTimeout(() => {
        const google_font = this.document.createElement('link')
        google_font.rel = 'stylesheet'
        google_font.href = 'https://fonts.googleapis.com/css2?family=Gochi+Hand&family=Montserrat:wght@300;400;500;600;700&display=swap'
        head.appendChild(google_font)
    },6000)



})