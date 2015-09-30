$(function() {
  $('form.signup').on('submit',function(e){
    e.preventDefault();
    var email = $(this).find('input[name="email"]').val();

    // list
    $.ajax('http://bostype.com/sendy/subscribe', {
      type : 'POST',
      data : {
        email : email,
        list : 'Ct7zsQu3UIBOKuXcvE583Q',
        boolean : true
      },
      success : function(res) {

      }
    });

    // send the vids
    $.ajax('http://wesbos.com/mc/sendvids.php',{
      data :  {email : email},
      dataType : 'jsonp'
    });

    // side it up
    $('form.signup, p.naw').slideUp();

    // tell the what is next
    $('p.desc').html('Thanks! The videos will be in your inbox in a few minutes! <br><strong>Mind showing some love?</strong> Share this page — this allows me to produce more great videos!').addClass('success');

    // seeing if FB ads are worth anything (probably not!)
    window._fbq = window._fbq || [];
    window._fbq.push(['track', '6024371845617', {'value':'0.00','currency':'CAD'}]);

    // Twitter
    twttr.conversion.trackPid('l62u2', { tw_sale_amount: 0, tw_order_quantity: 0 });

    // Google Analytics
    ga('send', 'event', 'signup','clpu');

  });
});


// twitter
!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');

// facebook
(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&appId=107600482664934&version=v2.3";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

// Google Analytics
ga('create', 'UA-61412542-1', 'auto');
ga('send', 'pageview');

// Facebook Ads

(function() {
    var _fbq = window._fbq || (window._fbq = []);
    if (!_fbq.loaded) {
      var fbds = document.createElement('script');
      fbds.async = true;
      fbds.src = '//connect.facebook.net/en_US/fbds.js';
      var s = document.getElementsByTagName('script')[0];
      s.parentNode.insertBefore(fbds, s);
      _fbq.loaded = true;
    }
  })();
