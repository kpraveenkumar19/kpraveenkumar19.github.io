var animationGoingOn = false;

$(document).ready( function() {

	$(window).scroll( function() {
		position();
	});

	$(window).resize( function() {
		position();
	});

	$('#back-to-top').click( function(event) {
		event.preventDefault();
		animationGoingOn = true;
		$("html, body").animate( { scrollTop: 0 }, 2000, function() {
			animationGoingOn = false;
		});
		$("#back-to-top").fadeOut(1000);
	});

	// Open all external links in a new tab
	$('a').each(function() {
		var href = $(this).attr('href');
		if (href && href.startsWith('http')) {
			try {
				var url = new URL(href, window.location.origin);
				// Only open in new tab if the hostname is different from the current site
				if (url.hostname !== window.location.hostname && url.hostname !== 'praveenk.dev') {
					$(this).attr('target', '_blank');
					$(this).attr('rel', 'noopener noreferrer');
				}
			} catch (e) {
				// Fallback or ignore if URL parsing fails
			}
		}
	});
});

function position()
{	
	if(animationGoingOn)
		return;
	
	if($(this).scrollTop()>220) {
		var width = $(document).width();
		if(width>920) {
			$('#back-to-top').css('right', (width - 700)/4 - 75);
			$('#back-to-top').css('bottom', (width - 700)/4 - 75);	
			$('#back-to-top').fadeIn(1000);
		}
		else {
			$('#back-to-top').hide();
		}
	}
	else {
		$('#back-to-top').hide();
	}
}