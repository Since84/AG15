// Peek Slider JS

(function($){
	
	var PeekSlider = Backbone.View.extend({
		el: '.peek-slider',

		defaults: {
			speed: 500,
			slide_class: ".window .slide"
		},

		events: {
			'click .next-button': 'goNext'
			,'click .prev-button': 'goPrev'
		},

		initialize: function(){
			this.createGallery();

		}
		,createGallery: function(){
			this.defaults.active = $(this.defaults.slide_class).first();
			this.defaults.active.addClass('active');

			this.defaults.next 	= this.defaults.active.next().addClass('next');
			this.defaults.next_next = this.defaults.next.next().addClass('next-next');


			this.defaults.prev 	= $(this.defaults.slide_class).last();
			this.defaults.prev.addClass('prev');
			this.defaults.prev_prev = $(this.defaults.slide_class + ":nth-last-child(2)").addClass('prev-prev');



		}
		,goNext: function(){
			//Strip Classes
			this.defaults.next_next.removeClass('next-next');
			this.defaults.next.removeClass('next');	
			this.defaults.active.removeClass('active');
			this.defaults.prev.removeClass('prev');
			this.defaults.prev_prev.removeClass('prev-prev');

			// Reassign Positions

			this.defaults.prev 		= this.defaults.active;
			this.defaults.prev_prev = ( this.defaults.prev.prev().length != 0 )
										? this.defaults.active.prev()
										: $(this.defaults.slide_class).last();

			this.defaults.active 	= this.defaults.next;


			this.defaults.next 		= ( this.defaults.active.next().length != 0 )
										? this.defaults.active.next()
										: $(this.defaults.slide_class).first();

			this.defaults.next_next = ( this.defaults.next.next().length != 0 )
										? this.defaults.next.next()
										: $(this.defaults.slide_class).first();

			// Add Classes
			this.defaults.next.addClass('next');
			this.defaults.next_next.addClass('next-next');	
			this.defaults.active.addClass('active');
			this.defaults.prev.addClass('prev');
			this.defaults.prev_prev.addClass('prev-prev');


			//Over 3 Slides
			$('body').trigger('peekPaged');

		}
		,goPrev: function(){
			this.defaults.next_next.removeClass('next-next');
			this.defaults.next.removeClass('next');	
			this.defaults.active.removeClass('active');
			this.defaults.prev.removeClass('prev');
			this.defaults.prev_prev.removeClass('prev-prev');

			// Reassign Position
			this.defaults.next 		= this.defaults.active;
			this.defaults.next_next = ( this.defaults.next.next().length != 0 )
										? this.defaults.next.next()
										: $(this.defaults.slide_class).first();			

			this.defaults.active 	= this.defaults.prev;
			this.defaults.prev 		= ( this.defaults.active.prev().length != 0 )
										? this.defaults.active.prev()
										: $(this.defaults.slide_class).last();
			this.defaults.prev_prev = ( this.defaults.prev.prev().length != 0 )
										? this.defaults.prev.prev()
										: $(this.defaults.slide_class).last();
				
			// Add Classes
			this.defaults.next.addClass('next');
			this.defaults.next_next.addClass('next-next');	
			this.defaults.active.addClass('active');
			this.defaults.prev.addClass('prev');
			this.defaults.prev_prev.addClass('prev-prev');

			$('.active').trigger('peekPaged');
		}

	});

	$(document).ready(function(){
			var Slider = new PeekSlider;
	})

})(jQuery);