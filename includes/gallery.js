// JavaScript Document

$(document).ready(function(){
	
	$('.gallery_thumbnails a').click(function(e){
		
		e.preventDefault();
		
		//set up vars from thumbnail
		var photo_caption = $(this).attr('title');
		var photo_fullsize = $(this).attr('href');
		var photo_preview = photo_fullsize.replace('_fullsize','_preview');
		
		$('.gallery_preview').fadeOut(100, function(){
			
			$('.gallery_preload_area').html('<img src="'+photo_preview+'"/>');
			$('.gallery_preload_area img').imgpreload(function(){
			
				$('.gallery_preview').html('<a class="overlaylink" href="'+photo_fullsize+'" title="'+photo_caption+'" style="background-image:url('+photo_preview+');"></a>');
				$('.gallery_caption').html('<p><a class="overlaylink zoom" href="'+photo_fullsize+'" title="'+photo_caption+'"></a></p><p>'+photo_caption+'</p>');

				$('.gallery_preview').fadeIn(100);	
				
				setFancyboxLinks();
				updateThumbnails();
				
			});
			
		});
		
	
	});
	
	
	// initialize gallery on load
	var first_photo_caption = $('.gallery_thumbnails a').first().attr('title');
	var first_photo_fullsize = $('.gallery_thumbnails a').first().attr('href');
	var first_photo_preview = first_photo_fullsize.replace('_fullsize','_preview');
		
	$('.gallery_preview').fadeOut(100, function(){
			
		$('.gallery_preload_area').html('<img src="'+first_photo_preview+'"/>');
		$('.gallery_preload_area img').imgpreload(function(){
			
			$('.gallery_preview').html('<a class="overlaylink" href="'+first_photo_fullsize+'" title="'+first_photo_caption+'" style="background-image:url('+first_photo_preview+');"></a>');
			$('.gallery_caption').html('<p><a class="overlaylink zoom" href="'+first_photo_fullsize+'" title="'+first_photo_caption+'"></a></p><p>'+first_photo_caption+'</p>');

			$('.gallery_preview').fadeIn(100);	
				
			setFancyboxLinks();
			updateThumbnails();
				
			});
			
		});
	
	
	
	
});

function setFancyboxLinks(){
	
	$('a.overlaylink').fancybox({
			'titlePosition' : 'inside',
			'titleOpacity' : 0,
			'overlayOpacity' : .8,
			'transitionIn'	: 'none',
			'transitionOut'	: 'none',
			'autoScale' : true
	});
}

function updateThumbnails(){
	
	$('.gallery_thumbnails a').each(function(){
		
		if ( $('.gallery_preview a').attr('href') == $(this).attr('href') ){
			$(this).addClass('selected');
			$(this).children().fadeTo(250, .4);
			
		}else{
			$(this).removeClass('selected');
			$(this).children().css('opacity','1');
		}
	});
}

