$(document).ready(function () {
	//PIE	

	(function (d3) {
		'use strict';

		var dataset = [
			{
				label: 'Rolex',
				count: 10
			},
			{
				label: 'Vacheron Constantin',
				count: 10
			},
			{
				label: 'Breguet',
				count: 10
			},
			{
				label: 'Breitling',
				count: 10
			},
			{
				label: 'Omega',
				count: 10
			}
        ];

		var svgWidth = 600,
			svgHeight = 220,
			radius = Math.min(svgWidth, svgHeight) / 2,
			donutWidth = 35;

		var color = d3.scale.category10();

		var svg = d3.select('#device-chart--donut')
			.append('svg')
			.attr('width', svgWidth)
			.attr('height', svgHeight)
			.append('g')
			.attr("class", "container")
			.attr('transform', 'translate(' + (svgWidth / 2) + ',' + (svgHeight / 2) + ')');


		var arc = d3.svg.arc()
			.innerRadius(radius - donutWidth)
			.outerRadius(radius);



		var pie = d3.layout.pie()
			.value(function (d) {
				return d.count;
			})
			.sort(null);


		var tooltip = d3.select('#device-chart--donut')
			.append('div')
			.attr('class', 'tooltip');


		tooltip.append('div')
			.attr('class', 'label');

		tooltip.append('div')
			.attr('class', 'count');

		tooltip.append('div')
			.attr('class', 'percent');



		var path = svg.selectAll('path')
			.data(pie(dataset))
			.enter()
			.append('path')
			.attr('d', arc)
			.attr('fill', function (d, i) {
				return color(d.data.label);
			});
		// .each(function(d) { this._current = d; });


		path.on('mouseover', function (d) {

			var total = d3.sum(dataset.map(function (d) {
				return d.count;
			}));

			var percent = Math.round(1000 * d.data.count / total) / 10;

			tooltip.select('.label').html(d.data.label);

			tooltip.select('.count').html(d.data.count);

			tooltip.select('.percent').html(percent + '%');

			tooltip.style('display', 'block');
		});

		path.on('mouseout', function () {
			tooltip.style('display', 'none');
		});



		// Leyenda
		var legendRectSize = 18,
			legendSpacing = 4;


		var legend = svg.selectAll('.legend')
			.data(color.domain())
			.enter()
			.append('g')
			.attr('class', 'legend')
			.attr('transform', function (d, i) {

				var height = legendRectSize + legendSpacing,
					offset = height * color.domain().length / 2,
					horz = -2 * legendRectSize,
					vert = i * height - offset;
				return 'translate(' + horz + ',' + vert + ')';

			});

		// Contenido
		legend.append('rect')
			.attr('width', legendRectSize)
			.attr('height', legendRectSize)
			.style('fill', color)
			.style('stroke', color)
			.on('click', function (label) {
				var rect = d3.select(this);
				var enabled = true;
				var totalEnabled = d3.sum(dataset.map(function (d) {
					return (d.enabled) ? 1 : 0;
				}));

				if (rect.attr('class') === 'disabled') {
					rect.attr('class', '');
				} else {
					if (totalEnabled < 2) return;
					rect.attr('class', 'disabled');
					enabled = false;
				}

				pie.value(function (d) {
					if (d.label === label) d.enabled = enabled;
					return (d.enabled) ? d.count : 0;
				});

				path = path.data(pie(dataset));

				path.transition()
					.duration(750)
					.attrTween('d', function (d) {
						var interpolate = d3.interpolate(this._current, d);
						this._current = interpolate(0);
						return function (t) {
							return arc(interpolate(t));
						};
					});

			});

		legend.append('text')
			.attr('x', legendRectSize + legendSpacing)
			.attr('y', legendRectSize - legendSpacing)
			.text(function (d) {
				return d;
			});


	})(window.d3);

});





//ANCHOR-MENU

var menu_selector = ".anchor-list"; // Переменная должна содержать название класса или идентификатора, обертки нашего меню.

function onScroll() {
	var scroll_top = $(document).scrollTop();
	$(menu_selector + " a").each(function () {
		var hash = $(this).attr("href");
		var target = $(hash);
		if (target.offset().top <= scroll_top && target.position().top + target.outerHeight() > scroll_top) {
			$(menu_selector + " a.active").removeClass("active");
			$(this).addClass("active");
		} else {
			$(this).removeClass("active");
		}
	});
}

$(document).ready(function () {
	jQuery("a").click(function () {

		var elementClick = jQuery(this).attr("href");
		var destination = jQuery(elementClick).offset().top;
		jQuery("html, body").animate({
			scrollTop: destination
		}, 500);


		return false;


	});
	$(document).on("scroll", onScroll);

	$("a[href^=#]").click(function (e) {
		e.preventDefault();

		$(document).off("scroll");
		$(menu_selector + " a.active").removeClass("active");
		$(this).addClass("active");
		var hash = $(this).attr("href");
		var target = $(hash);

		$("html, body").animate({
			scrollTop: target.offset().top
		}, 500, function () {
			window.location.hash = hash;
			$(document).on("scroll", onScroll);
		});

	});

});



$(document).ready(function () {
//	OPENCOMMENT
//	$('.desc-open-coment__open, .desc-open-coment__close').click(function () {
//		$('.desc-open-coment__comment').slideToggle(300);
//		$('.desc-open-coment').toggleClass('active');
//	});
	
	
	//ACORD
	$('.acordion-mech__title').click(function () {
		var block = $(this).closest('.acord-list__item');
		var btn = $(this);
		var submenu = $(block).find('.acordion-mech__desc');

		if ($(block).hasClass('active')) {
			$(block).removeClass('active');
			$(submenu).slideDown(300);
		} else {
			$(block).addClass('active');
			$(submenu).slideUp(300);
		}
	});

	
		$('.desc-open-coment__open, .desc-open-coment__close').click(function () {
		var block = $(this).closest('.desc-open-coment');
		var btn = $(this);
		var submenu = $(block).find('.desc-open-coment__comment');

		if ($(block).hasClass('active')) {
			$(block).removeClass('active');
			$(submenu).slideUp(300);
		} else {
			$(block).addClass('active');
			$(submenu).slideDown(300);
		}
	});
	
	
	
	
	
	
	

	//TAB	
	$(this).find('.tabs-title-list__item').each(function (i) {
		$(this).click(function () {
			$(this).addClass('active').siblings().removeClass('active')
				.closest('.tabs-desc-wrap').find('.tabs-desc__item').removeClass('active').eq(i).addClass('active');
		});
	});

	//FIXMENU
	jQuery(window).scroll(function () {
		if (jQuery(window).scrollTop() >= 200) {
			jQuery('.anchor-list, .contant-admin__anchor-list').addClass('fixed');
		} else jQuery('.anchor-list, .contant-admin__anchor-list').removeClass('fixed');
	});


	//	COMMENT
	$('.ico-del').click(function () {
		var block = $(this).closest('.acordion-mech__title-ico');

		if ($(block).hasClass('active')) {
			$(block).removeClass('active');
		} else {
			$(block).addClass('active');
		}
	});

	//APP-LIST
	$('.sort-max').click(function () {
		$('.sort-max, .application-list').addClass('active');
		$('.sort-min').removeClass('active');
	});

	$('.sort-min').click(function () {
		$('.sort-min').addClass('active');
		$('.sort-max, .application-list').removeClass('active');
	});



});



//TAGINPUT

var foo = new TIB(document.getElementById('tag-input__input'), {
	join: ', ',
	text: ['eee'],
	values: ['Застежка']

});
foo.create();



var foo = new TIB(document.getElementById('tag-input__input-2'), {
	join: ', ',
	text: ['eee'],
	values: ['Застежка']

});
foo.create();
