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
  
  // #####################
  // Quiz Functionality
  
  function removeDefaultOption(){
    $(this).removeClass("defaultGrey").children("option[value=0]").remove();
	 $(this).closest('form').find('div.control-group').removeClass('error success');
	 $(this).closest('form').find('span.help-inline').removeClass('right wrong');
	
	//if($(this).val() == "0") $(this).addClass("empty");
	var theSelection = $(this).closest("div.control-group");
	var theId = theSelection.attr('id');
	
	var theOption = null;
	var subSelect = null;
	var theNextSelection = null;
	var subSelectTag = null;
	var optionsLength = null;
	
	// show first sub option (if quantitative: is it desk based or field based?)
	if ((theId == "choice1a")||(theId == "choice2a")||(theId == "choice3a")||(theId == "choice4a")){
		theOption = theSelection.find('select');
			subSelect = theId+"1";
			theNextSelection = $("div.control-group#"+subSelect);
		if (theOption.val()==1){
			subSelectTag = theNextSelection.find('select');
			theNextSelection.slideUp('fast', function() { // hide
				// Animation complete - reset sub options
				subSelectTag.addClass('defaultGrey');
				optionsLength = subSelectTag.find('option').size();
				if(optionsLength<3){
					subSelectTag.prepend('<option value="0" selected="selected">Desk based or field based?</option>');
				}
			 });
			// now hide the other sub item
			var subSubSelect = subSelect+"b";
			theNextSelection = $("div.control-group#"+subSubSelect);
			var subSubSelectTag = theNextSelection.find('select');
			theNextSelection.slideUp('fast', function() { // hide
				// Animation complete - reset sub sub option
				subSubSelectTag.addClass('defaultGrey');
				optionsLength = subSubSelectTag.find('option').size();
				if(optionsLength<4){
					subSubSelectTag.prepend('<option value="0" selected="selected">Type of field research?</option>');
				}
			  });
			  

		}else if (theOption.val()==2){
			theNextSelection.slideDown('fast'); // show
		}
	}
	
	// show second sub option (if field based: is it experimental, observational or survey?)
	if ((theId == "choice1a1")||(theId == "choice2a1")||(theId == "choice3a1")||(theId == "choice4a1")){
		theOption = theSelection.find('select');
			subSelect = theId+"b";
			theNextSelection = $("div.control-group#"+subSelect);
			if (theOption.val()==1){
				var thisSelectTag = theNextSelection.find('select');
				theNextSelection.slideUp('fast', function() { // hide
				// Animation complete - reset sub sub option
				thisSelectTag.addClass('defaultGrey');
				optionsLength = thisSelectTag.find('option').size();
				if(optionsLength<4){
					thisSelectTag.prepend('<option value="0" selected="selected">Type of field research?</option>');
				}
			  });
			}else if (theOption.val()==2){
				theNextSelection.slideDown('fast'); // show
			}
	}
	
}

$("select")
    .on('change keyup', removeDefaultOption);

// answers
var quiz1 = ['2','2','3','1'];
var quiz2 = ['1','0','0','1'];
var quiz3 = ['2','2','3','2'];
var quiz4 = ['2','2','1','1'];
$("form").submit(function() {
		var $thisForm = $(this);
        var formId = $thisForm.attr('id');
		// selected options to array
		var answerArray = [];
		 answerArray = eval(formId);
		 
		$thisForm.find('select').each(function( index ) {
	  	 	//optionsArray.push($(this).val());
			if($(this).val()== answerArray[index]){
				 // console.log('correct');
				 $(this).closest('div.control-group').addClass('success');
				 $(this).next('span.help-inline').addClass('right');
			 }else{
				 $(this).closest('div.control-group').addClass('error');
				 $(this).next('span.help-inline').addClass('wrong');
			 }
		});

		// stop form submission
  		return false;
    });



}(window.jQuery)