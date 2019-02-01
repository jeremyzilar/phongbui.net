// JavaScript Document

$(document).ready(function() {
				
	$("a[rel=works-on-paper]").fancybox({
				'transitionIn'		: 'none',
				'transitionOut'		: 'none',
				'titlePosition' 	: 'inside',
				'titleOpacity'  	: '0',
				'titleFormat'		: function(title, currentArray, currentIndex, currentOpts) {
				return '<span id="fancybox-title-inside">Image ' + (currentIndex + 1) + ' / ' + currentArray.length + (title.length ? ' &nbsp; ' + title : '') + '</span>';
								}
							});
							
	$("a[rel=construction]").fancybox({
			   	'transitionIn'		: 'none',
			  	'transitionOut'		: 'none',
			 	'titlePosition' 	: 'inside',
			  	'titleOpacity'  	: '0',
				'titleFormat'		: function(title, currentArray, currentIndex, currentOpts) {
		  				return '<span id="fancybox-title-inside">Image ' + (currentIndex + 1) + ' / ' + currentArray.length + (title.length ? ' &nbsp; ' + title : '') + '</span>';
									}
							});


})