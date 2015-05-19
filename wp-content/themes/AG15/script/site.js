// Spark Backbone JS application

(function($){

// Spark Application
  var AppView = Backbone.View.extend({
  		el: 'body',

  		// Default Variables for Application
  		defaults: function() {
  			return {
  			}
  		},

  		//Delegated Events for user actions
  		events: {
        //Mobile Menu
          // "click .mobile-btn": "doSidr"
      		// "click .mobile-btn": "doMenu"

        // //Project Grid
        //   ,"click .project.box:not(.open)": "openProject"
        //   ,"click .project.detail .close": "closeProject"
        //   ,"click .detail-pager li.next": "nextProject"
        //   ,"click .detail-pager li.prev": "prevProject"

        // //Team Grid
        //   ,"click .team.box:not(.open)" : "openMember"
        //   ,"click .member-detail .close"  : "closeMember"
        //   ,"click .detail-pager li.next": "nextMember"
        //   ,"click .detail-pager li.prev": "prevMember"

        // //Contact form
        //   ,"click .form-trigger": "toggleForm"
        //   ,"change .interest select": "selectChange"
  		},


  		//Initialization function
  		initialize: function(){
        // this.doSidr();
        this.doIsotope();
        this.smoothDivScroll();
        var browser = new TileBrowser();

        //Mobile Menu
          // "click .mobile-btn": "doSidr"
          $('.mobile-btn').click(this.doMenu);

        //Project Grid
          $('.project.box:not(.open)').click(this.openProject);
          $('.project.detail .close').click(this.closeProject);
          $('.detail-pager li.next').click(this.nextProject);
          $('.detail-pager li.prev').click(this.prevProject);

        //Team Grid
          $('.team.box:not(.open)').click(this.openMember);
          $('.member-detail .close').click(this.closeMember);
          $('.detail-pager li.next').click(this.nextMember);
          $('.detail-pager li.prev').click(this.prevMember);

        //Contact form
          $('.form-trigger').click(this.toggleForm);
          $('.interest select').on('change', this.selectChange)        



  		}

  		,doSidr: function(){
        $('.mobile-btn').sidr({
          name: 'sidr-main',
          source: 'header nav',
          side: 'right',
          body: 'html'
        });
  		}
      ,doMenu: function(){
        $('header nav').toggleClass('on');
      }
      ,doIsotope: function(){
          $('.flip-tile-wall').imagesLoaded(function(){
            // $('.flip-tile-wall').isotope({
            //   itemSelector: '.flip-card'
            // })
          })
      }

      //Projects
      ,openProject: function(e, elem) {
        var self      = this
            ,$elem    = elem ? elem : $( e.currentTarget )
            ,id       = $elem.data('id')
            ,filter   = '.'+id
            ,$detail  = $('.detail-container').cycle();


        $('html, body').animate({
            scrollTop: $('.tile-browser').offset().top
        }, 1000);

        if( $('.project.detail.'+id).length ){
          var $detailSlide=  $('.project.detail.'+id+':not(.cycle-sentinel)');  
          var index = $detail.data('cycle.API').getSlideIndex($detailSlide);
          $detail.cycle('goto', index);          
          $('.tile-detail').addClass('open'); 
              // $('.tile-browser .tile-container').isotope({ filter:filter });
              // $('.tile-browser .tile-container').isotope('destroy');
        }else{
          var data = {
                action: 'project_detail',
                projectId: id
              },
              $detail = $('.detail-container')
                          .addClass('loading')
                          .cycle();

            $.post(ajaxurl, data, function(template) {

                  $(template).addClass('loaded');
                  $detail.cycle('add', template );
                  $('.project.detail.'+id).find('.cycle-slideshow').imagesLoaded(function(){
                    this.cycle();
                  });

                  $detail.removeClass('loading');
                  $('.tile-detail').addClass('open');
                  
                  var detailSlide=  $('.project.detail.'+id);  
                  var index = $detail.data('cycle.API').getSlideIndex($('.project.detail.'+id));
                  $detail.cycle('goto', index);     

            });

            // $('.tile-browser .tile-container').isotope({ filter:filter });
            // $('.tile-browser .tile-container').isotope('destroy');
            // $('.tile-browser .tile-container').cycle({
            //     slideClass: '.project.box'
            // });
          
            $detail.siblings('.open').each(function(){
              $(this).removeClass('open');
            });
        }
      }
      ,nextProject: function(e){
          var self  = this;
          var $currentId = $('.detail-container > .cycle-slide-active').data('id');
          var $currentThumb = $('.tile-container [data-id='+$currentId+']:not(.cycle-sentinel)');
          
          if( $currentThumb.nextAll(':not(.isotope-hidden)') ){
            $currentThumb.nextAll(':not(.isotope-hidden):first').click();
          }else{
            $('.tile-container').children(':not(.isotope-hidden):first').click();
          }
      }
      ,prevProject: function(e){
          var self  = this;
          var $currentId = $('.detail-container > .cycle-slide-active').data('id');
          var $currentThumb = $('.tile-container [data-id='+$currentId+']:not(.cycle-sentinel)');
          
          if( $currentThumb.prevAll(':not(.isotope-hidden)') ){
            $currentThumb.prevAll(':not(.isotope-hidden):first').click();
          }else{
            $('.tile-container').children(':not(.isotope-hidden):last').click();
          }
      }
      ,closeProject: function(e,elem){
        var self = this;

        $('.tile-detail').removeClass('open');
        // var $elem = elem ? elem : $( e.currentTarget ).parents('.project.box');
        // var id = $elem.data('id');
        // var filter = '.'+id;

        //     $elem.removeClass('open');
        //     $('.tile-browser .tile-container').isotope({ filter:'*' });
      }

      //Team
      ,openMember: function(e, elem){
        var self      = this
            ,$elem    = elem ? elem : $( e.currentTarget )
            ,id       = $elem.data('id')
            ,$detail  = $('.detail-container').cycle();

        $('html, body').animate({
            scrollTop: $('.tile-browser').offset().top
        }, 1000);

        if( $('.member-detail.'+id).length ){
          var $detailSlide=  $('.member-detail.'+id+':not(.cycle-sentinel)');  
          var index = $detail.data('cycle.API').getSlideIndex($detailSlide);
          $detail.cycle('goto', index);          
          $('.tile-detail').addClass('open'); 
              // $('.tile-browser .tile-container').isotope({ filter:filter });
              // $('.tile-browser .tile-container').isotope('destroy');
        }else{
          var data = {
                action: 'member_detail',
                memberId: id
              },
              $detail = $('.detail-container')
                          .addClass('loading')
                          .cycle();

            $.post(ajaxurl, data, function(template) {

                  $(template).addClass('loaded');
                  $detail.cycle('add', template );;
                  $('.member-detail.'+id).find('.cycle-slideshow').imagesLoaded(function(){
                    this.cycle();
                  });

                  $detail.removeClass('loading');
                  $('.tile-detail').addClass('open');
                  
                  var detailSlide=  $('.member-detail.'+id);  
                  var index = $detail.data('cycle.API').getSlideIndex($('.member-detail.'+id));
                  $detail.cycle('goto', index);     

            });

            // $('.tile-browser .tile-container').isotope({ filter:filter });
            // $('.tile-browser .tile-container').isotope('destroy');
            // $('.tile-browser .tile-container').cycle({
            //     slideClass: '.project.box'
            // });
          
            $detail.siblings('.open').each(function(){
              $(this).removeClass('open');
            });
        }
      }
      ,nextMember: function(e){
          var self  = this;
          var $currentId = $('.detail-container > .cycle-slide-active').data('id');
          var $currentThumb = $('.tile-container [data-id='+$currentId+']:not(.cycle-sentinel)');
          
          if( $currentThumb.nextAll(':not(.isotope-hidden)') ){
            $currentThumb.nextAll(':not(.isotope-hidden):first').click();
          }else{
            $('.tile-container').children(':not(.isotope-hidden):first').click();
          }
      }
      ,prevMember: function(e){
          var self  = this;
          var $currentId = $('.detail-container > .cycle-slide-active').data('id');
          var $currentThumb = $('.tile-container [data-id='+$currentId+']:not(.cycle-sentinel)');
          
          if( $currentThumb.prevAll(':not(.isotope-hidden)') ){
            $currentThumb.prevAll(':not(.isotope-hidden):first').click();
          }else{
            $('.tile-container').children(':not(.isotope-hidden):last').click();
          }
      }
      ,closeMember: function(e, elem){
        var self = this;
        $('.tile-detail').removeClass('open');       
      }

      //Connect
      ,toggleForm: function(e){
        var form = $(e.currentTarget).parent().siblings('.ag-form');

        $('.ag-form.open').not(form).removeClass('open');
        form.toggleClass('open');

          form.one("transitionend", function(){
            $('html, body').animate({
                scrollTop: form.parents('form').offset().top
            }, 500);
          });
      }
      ,selectChange: function(e){
        var select = $(e.currentTarget);
        var selected = select.val();
        var selectedClass = selected ? this.makeSafeForCSS(selected[0]) : null;
        var form = select.parents('.wpcf7').find('.budget-select');
        if( selected == null || selected.length > 1 ){
          form.attr('selected-option', 'All');
        }
        else if ( selected != null ){
          form.attr('selected-option', selectedClass);
        }

      }
      ,makeSafeForCSS: function(name) {
        var step1 = name.replace(/^[^-_a-zA-Z]+/, '').replace(/^-(?:[-0-9]+)/, '-');
        var step2 = step1 && step1.replace(/[^-_a-zA-Z0-9]+/g, '-');
        var step3 = step2.toLowerCase();
        return step3;
          // return name.replace(/[^a-z0-9]/g, function(s) {
          //     var c = s.charCodeAt(0);
          //     if (c == 32) return '-';
          //     if (c >= 65 && c <= 90) return s.toLowerCase();
          //     return '__' + ('000' + c.toString(16)).slice(-4);
          // });
      }
      ,smoothDivScroll: function(){
        $(".main-content .blog-feed .slides").smoothDivScroll({});
      }

  });


  $(document).ready(function(){
  		var App = new AppView;
  });
  

})(jQuery);