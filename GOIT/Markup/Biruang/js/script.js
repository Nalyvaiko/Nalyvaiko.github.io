$(function() {
    $('.my-slider').unslider({
        autoplay: false,
        speed: 850,
        arrows: false
    });

    function setEqualHeight(columns) {
		var tallestcolumn = 0;
		columns.each( function() {
			currentHeight = $(this).height();
			if(currentHeight > tallestcolumn) { tallestcolumn = currentHeight; } } );
			columns.height(tallestcolumn);
	}

	setEqualHeight($(".description-col"));
});
