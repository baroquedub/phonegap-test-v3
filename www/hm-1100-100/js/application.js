// Application specific scripts
// version 1.0
// ++++++++++++++++++++++++++++++++++++++++++

!function ($) {

  $(function(){

    var $window = $(window)

    // Disable certain links in docs
    $('section [href^=#]').click(function (e) {
      e.preventDefault()
    })

    // side bar
    $('.jdp-site-sidenav').affix({
      offset: {
        top: function () { return $window.width() <= 980 ? 290 : 210 }
      , bottom: 270
      }
    })

    // make code pretty
    // window.prettyPrint && prettyPrint()


    // tooltip demo
    $('.tooltip-demo').tooltip({
      selector: "a[rel=tooltip]"
    })

    $('.tooltip-test').tooltip()
    $('.popover-test').popover()

    // popover 
    $("a[rel=popover]")
      .popover()
      .click(function(e) {
        e.preventDefault()
      })
	  
	

	  //accordion navlist toggle icon
	  $('ul.nav-list').find('a.accordion-toggle').live('click',function(e){
			var theIcon = $(this).children('i');
        	theIcon.toggleClass('icon-plus').toggleClass("icon-minus");
    	 });

  })
  


}(window.jQuery)