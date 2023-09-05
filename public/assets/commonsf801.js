/******* CASA ANGELINA commons.js - 2022 Alberto "DeLiVeRaNcE" Oliva - Mediasoul SNC *********/

var windowWidth;
var windowHeight;

var $menuDark = false;
var $videoLoaded = false;
var $imagesLoaded = false;
var $imgGlobalID = 0;
var $bookFirstOccurrence = true;
var $scrollPos = 0;
var $updateReady = true;
var $lastPosX = 0;
var $lastPosY = 0;
var $isSafari =  navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Mac') != -1 && navigator.userAgent.indexOf('Chrome') == -1;

(function( $ ) { /* give me back my dollar, baby */
$(function() {
		
windowWidth = $(window).width();
windowHeight = $(window).height();


/********************** READY **********************/


$(document).ready(function(){
	
	checkCookiePrefs();
	
	$('.brownieIco').on('click',function(){
		$('.brownie').addClass('closed');
		$(this).parent().parent().parent().removeClass('closed');
		
		if($(this).parent().parent().parent().attr('id') == "cookieBrownie"){
			readCookiePrefs();
		}
		
	})
	
	$('.accept').on('click',function(){
		$(this).parent().parent().parent().parent().addClass('closed');
		$(this).parent().parent().parent().parent().removeClass('opened');
		
		initCookiePrefs();
		
		
		if(getCookie('$newsletterPrompt') != 'true') {
			setTimeout(function(){
				setCookie('$newsletterPrompt', true, 60);
				$('#newsLetterBrownie .brownieIco').trigger('click');
			},1000)
		} 
		
	});
	
	$('.brownieClose').on('click',function(){
		$(this).parent().parent().parent().addClass('closed');
		
		/*if($(this).parent().parent().parent().attr('id') == "newsLetterBrownie"){
			if(getCookie('$pcrPrompt') != 'true') {
				setTimeout(function(){
				setCookie('$pcrPrompt', true, 2);
				$('#covidBrownie .brownieIco').trigger('click');
				},1000)
			}
		}*/
		
	});
	
	$('.customize').on('click',function(){
		if(!$('#cookieBrownie').hasClass('opened')) {
			$('#cookieBrownie').addClass('opened')
		} else {
			$('#cookieBrownie').removeClass('opened');
		}
	})
	
	var $scrollDirection;
	
	
	  if ($isSafari) {
	        $('html').addClass('is-safari-osx');	        
	   }
	  
	 
	 $('.langsContainer a').attr('data-disabled',true);
	  
	  
	 if(isTouchEnabled){
		    $('body, #hImgContainer, #hImgLayer, #hFacilitiesSticky, nav, #hElementsLayer, .overlay, section.galleryContainer, #footerSticky').height(windowHeight);
		    $('.fullPicture, .fullPicture > div:first-child, #footerTarget, footer').height(windowHeight*2);
		    $('.fullPicture > div:eq(1)').height(windowHeight);
			$('#hTarget').css('top',windowHeight);
			
			if(isMobile) {
				$('#footerMain').height(windowHeight);
			}
	 }
	 
	if(isMobile){ /* mobile adjustments */
			$('.hFacilitiesBackground, #hFacilitiesTop ').attr('data-scroll-offset','0,'+windowHeight);

			$('#hDiningSticky, #footerSticky').removeAttr('data-scroll-sticky').removeAttr('data-scroll-target');
			$('#tasteText, #tasteTitle').attr('data-scroll-repeat','');
			
			$('.fullPictureSticky, #otherSticky').removeAttr('data-scroll-sticky');
			$('#fullPictureTarget,#fullPictureTarget2,#fullPictureTarget3,#fullPictureTarget4').attr('data-scroll-offset','0,60%');
			$('#detailTopImgContainer').removeClass('d400');
			
			$('#detailServicesPic').attr('data-scroll-speed','0.5');
			$('.verticalPic, .compositionText').attr('data-scroll-speed','0.3');
			
			$('.compositionPic img, .menuPic img').attr('data-scroll-speed','-0.5');
			$('.sliderContainer, .galleryContainer > img, .simplePicture img').attr('data-scroll-speed','-0.25');
			
			$('.langsContainer a').each(function(){
				$(this).text($(this).text().substr(0,2))
			});
			
			$('.hDiningItem.long').addClass('top_translated').addClass('has_transition_3000').attr('data-scroll-class','show').attr('data-scroll-offset','0').attr('data-scroll-repeat',false);
			
			$('#removeTable').attr('data-scroll-offset','0');

	} /* else {
		$('.lang-item a').each(function(){
			$(this).text(  $(this).text().replace($(this).text().charAt(1),$(this).text().charAt(1).toUpperCase()))});
	} */
	
	scrollMenu = new LocomotiveScroll({
		 el: document.getElementById('navScroller'),   
		 smooth: true,
           lerp:  !isMobile ? 0.06 : 0.1,
           class:'show',
           scrollbarClass:'m-scrollbar',
           touchMultiplier:2.5,
           scrollFromAnywhere: false,
           smartphone:{
           	smooth:true
           },
           tablet:{
           	smooth:true
           }
     });
	
	$textIndex = 0;
	
	$('.text.more p').each(function(){
			if($(this).html().indexOf('<br') != -1){				
				$(this).shorten({
					showChars:$(this).html().indexOf('<br'),
					ellipsesText: "",
					moreText: '<div class="oButton onDark has_transition_1500 show bordered open transparent" data-scroll="" data-scroll-repeat="" data-scroll-class="open"> <div class="oContent"><div class="oLabelContainer no_overflow"><span class="oLabel top_hidden has_transition_1000 block d200 transition_all">'+get_more_text()+'</span></div></div></div>',
					lessText: '<div class="oButton onDark has_transition_1500 show bordered open transparent" data-scroll="" data-scroll-repeat="" data-scroll-class="open"> <div class="oContent"><div class="oLabelContainer no_overflow"><span class="oLabel top_hidden has_transition_1000 block d200 transition_all">'+get_less_text()+'</span></div></div></div>',
					onMore: function(){
						setTimeout(function(){scrollLayer.update()},2)
					},
					onLess: function(){
						setTimeout(function(){scrollLayer.update()},2)
					}
				});
			}				
			$textIndex++;})
	
	
	function get_more_text(){
		if(lang == 'it'){
			return 'continua';
		} else {
			return 'more';
		}
	}
	
	function get_less_text(){
		if(lang == 'it'){
			return 'nascondi';
		} else {
			return 'less';
		}
	}
	
	if(isMobile){
		if($('#detailText .text .shortcontent').length == 0){
			$('#detailText .hBook').css('margin-top','34px');
		}
	} else {
		if($('#detailText .text .shortcontent').length == 0){
			$('#detailText .hBook').css('margin-top','5vw');
		}
	}
	
	if(current != "overview" || (current == "overview" && isMobile)){ /******** SCROLL LAYER **********/

		scrollLayer = new LocomotiveScroll({
			 el: document.querySelector('article'),   
			 smooth: true,
	           getDirection:true,
	           lerp: !isMobile ? 0.06 : 0.1,
	           scrollFromAnywhere: false,
	           touchMultiplier:2.5,
	           class:'show',
	           smartphone:{
	           	smooth:true
	           },
	           tablet:{
	           	smooth:true
	           },
	           direction:'vertical'
		});
		
		
		$introTop = false;
		$fullPictureScroll = false;
		$galleryLocking = false;
		$lockTimeout = false;
		$pressScrolling = false;
		
		scrollLayer.on('scroll', (args) => {	
			$scrollDirection = args.direction;
			$scrollPos = args.scroll.y;
			
			if(!isTouchEnabled){
				$viewElements = Object.entries(args.currentElements);			
				$viewElements.forEach(function($viewElement) {
		
					if($($viewElement[1].el).attr('data-precision')){
							$target = $($viewElement[1].el);
							$target.offsetY = $target.offset().top;
							$target.offsetX = $target.offset().left;
							$target.width = $target.outerWidth();
							$target.height = $target.outerHeight();
							
							$delta = {};
							$delta.y = $lastPosY - $target.offsetY;
							$delta.x = $lastPosX - $target.offsetX;
						
							
							if(($delta.y > 0 && $delta.y <  $target.height && $delta.x > 0 && $delta.x < $target.width) && !$target.hasClass('target')) {
								$target.trigger('mouseover');
								
							}
							
							if(($delta.y < 0 || $delta.y >  $target.height || $delta.x < 0 || $delta.x > $target.width) && $target.hasClass('target')) {
								$target.trigger('mouseout');
							}					
						}
					
				});
			}
			
			if(current == "index" && $scrollPos > windowHeight*2.75 && !isMobile) {
				
				if($scrollDirection == "down") {
					$('#mainLogo, #brownies, .mobile, .email, header .ig, header .fb, header .langsContainer').addClass('hidden')
				}
				
				if($scrollDirection == "up" && !$galleryLocking) {
					$('#mainLogo, #brownies, .mobile, .email, header .ig, header .fb, header .langsContainer').removeClass('hidden')
				}
				
			} else if(current == "index" && isMobile){
				if($scrollDirection == "down") {
					$('#mainLogo, #brownies, .mobile, .email, header .ig, header .fb, header .langsContainer').addClass('hidden')
				}
				
				if($scrollDirection == "up" && !$galleryLocking && $scrollPos > windowHeight) {
					$('#mainLogo, #brownies, .mobile, .email, header .ig, header .fb, header .langsContainer').removeClass('hidden')
				}
			} else if(current != "index"){
				if($scrollDirection == "down") {
					$('#mainLogo, #brownies, .mobile, .email, header .ig, header .fb, header .langsContainer').addClass('hidden')
				}
				
				if($scrollDirection == "up" && !$galleryLocking && !$pressScrolling) {
					$('#mainLogo, #brownies, .mobile, .email, header .ig, header .fb, header .langsContainer').removeClass('hidden')
				}
			}
			
			if(typeof args.currentElements['hTarget'] === 'object') {
		        let progress = args.currentElements['hTarget'].progress 
		        
		        if(!isMobile) {
		        	
		        	if($scrollDirection == "down" && !$introTop && $scrollPos > 5){
		        		$introTop = true;
			        	scrollLayer.scrollTo(windowHeight*1.75);
			        }
		        	
		        	if($scrollDirection == "up" && $introTop){
		        		$introTop = false;
			        	scrollLayer.scrollTo(0);
			        }
		        	
			        $('#hImgLayer').css('transform','translateY('+(progress)*166+'vh) translateX(-'+(progress)*22+'vw)');
			        $('#hImgCover').css('transform','scale('+(1/(progress*4+1))+')')
			        $('#hImg').css('transform','scale('+(1*(progress*4+1))+') translateX('+progress*8+'vw)');
			        $('#hElementsLayer').css('opacity',1-progress*5);

			        
			        if($('#hVideoLayer').hasClass('open')){
		        		$('#hVideoLayer').trigger('click');
			        }
			        
			        
			        
		        } else {
		        	
		        	if($scrollDirection == "down" && !$introTop  && $scrollPos > 5){
		        		$introTop = true;
			        	scrollLayer.scrollTo(windowHeight*1.8);
			        }
		        	
		        	if($scrollDirection == "up" && $introTop){
		        		$introTop = false;
			        	scrollLayer.scrollTo(0);
			        }
		        	
		        	$('#hImgLayer').css('transform','translateY('+(progress)*140+'vh) ');
				    $('#hImgCover').css('transform','scale(1,'+(1/(progress*6+1))+')')
				    $('#hImg').css('transform','scale(1,'+(1*(progress*6+1))+') translateX('+progress*45+'px) translateY(-'+progress*3+'vh)');
			        $('#hElementsLayer').css('opacity',1-progress*5);
			        
			        if($('#hVideoLayer').hasClass('open')){
		        		$('#hVideoLayer').trigger('click');
			        }

		        }
		        
		       
		         
			}
			
			
			if(typeof args.currentElements['hPayTarget'] === 'object') {
				 let progress = args.currentElements['hPayTarget'].progress;
				 			 
				 if(!isMobile) {
					 $('#hImgLayer').css('transform','translateY(166vh) translateX(-22vw)');
					 $('#hImgCover').css('transform','scale(0.2)')
					 $('#hImg').css('transform','scale(5) translateX(8vw) translateY(-'+progress*2+'vw)');
				 } else {
					 $('#hImgLayer').css('transform','translateY(140vh)');
					 $('#hImgCover').css('transform','scale(1,0.14)')
					 $('#hImg').css('transform','scale(1,7) translateX(45px) translateY(-'+(3+progress*2)+'vh)'); 
				 }
			}
			
			
			
			if(typeof args.currentElements['ethosContent'] === 'object') {
				 let progress = args.currentElements['ethosContent'].progress;
				 
				 if(progress > 0.2 && progress < 0.4){
				        $('#ethosLayer').css('opacity',(progress-0.2)*5);

			       }
			}
			
			
			if(typeof args.currentElements['hDiningSticky'] === 'object' && !isMobile) {
				 let progress = args.currentElements['hDiningSticky'].progress;
				 
				 $('#hDiningScroll').css('transform','translateY(calc(-'+progress*100+'% + '+progress*$('.hDiningItem').height()+'px + ' +progress*16.5+'vw))');

			}
			
			if(typeof args.currentElements['hLifeStyleSticky'] === 'object' || typeof args.currentElements['hLifeStyleSticky2'] === 'object' || typeof args.currentElements['hLifeStyleSticky3'] === 'object' || typeof args.currentElements['hLifeStyleSticky4'] === 'object' || typeof args.currentElements['hLifeStyleSticky5'] === 'object' || typeof args.currentElements['hLifeStyleSticky6'] === 'object' || typeof args.currentElements['hLifeStyleSticky7'] === 'object' || typeof args.currentElements['hLifeStyleSticky8'] === 'object') {
				 let progress;
				 
				   if(typeof args.currentElements['hLifeStyleSticky'] === 'object') {
						progress = args.currentElements['hLifeStyleSticky'].progress;
						current = $(scrollLayer.scroll.els.hLifeStyleSticky.el).parent();
			        }
					
				   if(typeof args.currentElements['hLifeStyleSticky2'] === 'object') {
						progress = args.currentElements['hLifeStyleSticky2'].progress;
						current = $(scrollLayer.scroll.els.hLifeStyleSticky2.el).parent();
			        }
					
				   if(typeof args.currentElements['hLifeStyleSticky3'] === 'object') {
						progress = args.currentElements['hLifeStyleSticky3'].progress;
						current = $(scrollLayer.scroll.els.hLifeStyleSticky3.el).parent();
			        }
					
				   if(typeof args.currentElements['hLifeStyleSticky4'] === 'object') {
						progress = args.currentElements['hLifeStyleSticky4'].progress;
						current = $(scrollLayer.scroll.els.hLifeStyleSticky4.el).parent();
			        }
					
				   if(typeof args.currentElements['hLifeStyleSticky5'] === 'object') {
						progress = args.currentElements['hLifeStyleSticky5'].progress;
						current = $(scrollLayer.scroll.els.hLifeStyleSticky5.el).parent();
			        }
					
				   if(typeof args.currentElements['hLifeStyleSticky6'] === 'object') {
						progress = args.currentElements['hLifeStyleSticky6'].progress;
						current = $(scrollLayer.scroll.els.hLifeStyleSticky6.el).parent();
			        }
					
				   if(typeof args.currentElements['hLifeStyleSticky7'] === 'object') {
						progress = args.currentElements['hLifeStyleSticky7'].progress;
						current = $(scrollLayer.scroll.els.hLifeStyleSticky7.el).parent();
			        }
					
				   if(typeof args.currentElements['hLifeStyleSticky8'] === 'object') {
						progress = args.currentElements['hLifeStyleSticky8'].progress;
						current = $(scrollLayer.scroll.els.hLifeStyleSticky8.el).parent();
			        }
				 
				 if(!isMobile){
					 
	
					 $('.hLSBlockPic img',current.next()).css('transform','translateY('+(-100+(progress*100))+'%)');
					 
					 } else {
						 $('.hLSBlockPic img',current.next()).css('transform','translateY('+(-100+(progress*100))+'%)');

					 }
	
				 
			}
			
			
			
			if(typeof args.currentElements['hFacilitiesSticky'] === 'object') {
				 let progress = args.currentElements['hFacilitiesSticky'].progress;
				 
				 if(!isMobile){
					 $('#hFacilitiesScroller').css('transform','translateX(-'+(progress*56)+'%)');
				 } else {
					 $('#hFacilitiesScroller').css('transform','translateX(-'+(progress*79)+'%)');
	
				 }
			}
			
			if(typeof args.currentElements['footerSticky'] === 'object' && !isMobile) {
				 let progress = args.currentElements['footerSticky'].progress;
				 
				 $('#footerMain, #footerData').css('transform','translateX(-'+(progress*50)+'vw)');	
				 $('#footerLeft').css('transform','translateX('+(progress*50)+'vw)');	
			}
			
			
			/******* DETAIL STICKY **********/
			
			if(typeof args.currentElements['detailTopTarget'] === 'object') {
		        let progress = args.currentElements['detailTopTarget'].progress;
		        

		        if(progress < 0.4){
			        $('#detailTopLayer').css('opacity',progress*2.5);

		        }
		        
		        if(progress < 0.5){
		        
			        $('#detailTopImg').css('transform','scale('+(0.8*(1+(progress*2)*0.25))+')');
			        $('#detailImgBlock').css('transform','scale('+(1.25/(1+(progress*2)*0.25))+')')			        
			       
		        }
		        
		        if(progress > 0.5){
		        	 $('#detailTopImg, #detailImgBlock').css('transform','scale(1)');
		        }
		        
		        
			}
			
			
			
			if(typeof args.currentElements['fullPictureTarget'] === 'object' || typeof args.currentElements['fullPictureTarget2'] === 'object' || typeof args.currentElements['fullPictureTarget3'] === 'object'  || typeof args.currentElements['fullPictureTarget4'] === 'object') {
		        
				let progress;
				
				
				if(typeof args.currentElements['fullPictureTarget'] === 'object'){
					progress = args.currentElements['fullPictureTarget'].progress;
					parent = $(scrollLayer.scroll.els.fullPictureTarget.el).parent();
					current = scrollLayer.scroll.els.fullPictureTarget;
		        }
				
				if(typeof args.currentElements['fullPictureTarget2'] === 'object'){
					progress = args.currentElements['fullPictureTarget2'].progress;
					parent = $(scrollLayer.scroll.els.fullPictureTarget2.el).parent();
					current = scrollLayer.scroll.els.fullPictureTarget2;
		        }
				
				if(typeof args.currentElements['fullPictureTarget3'] === 'object'){
					progress = args.currentElements['fullPictureTarget3'].progress;
					parent = $(scrollLayer.scroll.els.fullPictureTarget3.el).parent();
					current = scrollLayer.scroll.els.fullPictureTarget3;
		        }
				
				if(typeof args.currentElements['fullPictureTarget4'] === 'object'){
					progress = args.currentElements['fullPictureTarget4'].progress;
					parent = $(scrollLayer.scroll.els.fullPictureTarget4.el).parent();
					current = scrollLayer.scroll.els.fullPictureTarget4;
		        }
				
		        
		        if(!isMobile){
		        
			        if(progress <= 0.3333){
			        	  $fullPictureScroll = false;
	
			        	 $('.fullPictureBlock',parent).css('transform','scale(0.8)')
					     $('.fullPictureContainer',parent).css('transform','scale(1.25)')
	
			        }
			        
			        if(progress > 0.334 && progress < 0.665){
			        	  if(!$fullPictureScroll && $scrollDirection == "down"){
				        	  $fullPictureScroll = true;
				        	  scrollLayer.scrollTo(current.top + windowHeight + 1,{duration:500});
			        	  }	
			        	  
			        	  if(!$fullPictureScroll && $scrollDirection == "up"){
				        	  $fullPictureScroll = true;
				        	  scrollLayer.scrollTo(current.top,{duration:500});
			        	  }	
			        	  
			        	  $('.fullPictureBlock',parent).css('transform','scale('+(0.8*(1+((progress-0.333)*3)*0.25))+')')
					      $('.fullPictureContainer',parent).css('transform','scale('+(1.25/(1+((progress-0.333)*3)*0.25))+')');
			        }
			        
			        if(progress >= 0.666){
			        	 $('.fullPictureBlock, .fullPictureContainer',parent).css('transform','scale(1)');
			        	  $fullPictureScroll = false;
			        }
		        
		        } else {
		        	 $('.fullPictureBlock',parent).css('transform','scale('+(0.8*(1+((progress-0.333)*3)*0.25))+')')
				     $('.fullPictureContainer',parent).css('transform','scale('+(1.25/(1+((progress-0.333)*3)*0.25))+')');
		        }
		        
		      
		        
			}
			
			
			if(typeof args.currentElements['otherSticky'] === 'object' && !isMobile) {
				 let progress = args.currentElements['otherSticky'].progress;
				 $('#otherItems').css('transform','translateY(calc(-'+progress*100+'% + '+progress*((windowHeight-$('.otherItem:first').height()-25) - ($('#otherFixed .blockTitle').height() + ($('.otherItem').height() - $('.otherItemPic').height())))+'px)'); 
			}
			
			if((typeof args.currentElements['galleryLock'] === 'object' || typeof args.currentElements['galleryLock2'] === 'object') && !isMobile){				
				
				if(typeof args.currentElements['galleryLock'] === 'object'){
					current = scrollLayer.scroll.els.galleryLock;
		        }
				
				if(typeof args.currentElements['galleryLock2'] === 'object'){
					current = scrollLayer.scroll.els.galleryLock2;
		        }
				
				
				if(($scrollPos > current.top && $scrollPos < current.top + 350 && !$galleryLocking) || ($scrollPos > current.top - 350 && $scrollPos < current.top && !$galleryLocking)){
						$galleryLocking = true;
						$('#mainLogo, #brownies, .mobile, .email').addClass('hidden')
						scrollLayer.scrollTo(current.el,{duration:500});
				}
				
				if($scrollPos >current.top + 350 || $scrollPos <current.top - 350) {
					$galleryLocking = false;
					
				}
				
			}
			

		});
		
		scrollLayer.on('call', func => {								
			if(func == 'load' && !$imagesLoaded){
				 $imagesLoaded = true;
				 imgGlobalLoad();
			}
			
			if(func == 'showHeader'){
				if($scrollDirection == "down" && !$('#mainMenuController').hasClass('dark') && $scrollPos < 150){
					$('#mainLogo').removeClass('hidden');
					$('#mainMenuController .line').removeClass('quickColor');
					$('#bookNow').removeClass('open').addClass('dark');
					$('#mainMenuController').removeClass('show');
					$('#mainMenuController .line').addClass('no_transition');
					$('#mainMenuController, .headerButton, #brownies, header .langsContainer, #textSwitch').addClass('dark');
					$('#hLogo').removeClass('show');
					setTimeout(function(){
						$('#mainMenuController .line').removeClass('no_transition');
						$('#mainMenuController').addClass('show');
					},1);
					setTimeout(function(){
						$('#bookNow').addClass('open');
					},360);
					$('#hElementsLayer').css('pointer-events','none');
					$('#navigationTrack').removeClass('show').removeClass('open');
				}
				if($scrollDirection == "up" && $('#mainMenuController').hasClass('dark') && $scrollPos < 150){
					$('#bookNow').removeClass('open').removeClass('dark');
					$('#hLogo').addClass('show');
					$('#mainMenuController .line').addClass('quickColor')
					$('#mainMenuController, .headerButton, #brownies, #textSwitch, header .langsContainer').removeClass('dark');
					$('#hElementsLayer').css('pointer-events','all');

					setTimeout(function(){
						$('#bookNow').addClass('open');
					},360)
				}
			}
			
			
			if(func == 'hideHeader'){
				if($scrollDirection == "up"  && $('#mainMenuController').hasClass('dark') && $scrollPos < 150){
					$('#mainLogo').addClass('hidden');
				}
			}
			
			if(func == 'layerUpdate'){
				if($updateReady) {
					$updateReady = false;
					commonOffsets();
					scrollLayer.update();
					setTimeout(function(){
						$updateReady = true;
					},1000)
				}
			}
			
			
			if(func == 'weatherManage'){
				if($scrollDirection == "up" && $scrollPos  < scrollLayer.scroll.els.weatherIn.top){
					weatherOut();
					setTimeout(function(){
						$('#weather .animating').addClass('no_transition').addClass('top_low').removeClass('no_opacity');
					},480);
				}
				
				if($scrollDirection == "down"){
					$('#weather .animating').removeClass('no_transition'); 
					weatherIn();
				}
			}
			
			if(func == 'headerToWhite'){
				if($scrollDirection == "down" && $('#bookNow').hasClass('dark')){
					$('#bookNow').removeClass('open').removeClass('dark');
					$('#mainMenuController .line').addClass('quickColor')
					$('#mainMenuController, .headerButton, #brownies, #textSwitch, #mainLogo, header .langsContainer').removeClass('dark');					
					setTimeout(function(){
						$('#bookNow').addClass('open');
					},360)
				} else if($scrollDirection == "up" && !$('#bookNow').hasClass('dark')){ 
					$('#bookNow').removeClass('open').addClass('dark');
					$('#mainMenuController, .headerButton, #brownies,  #mainLogo, header .langsContainer, #textSwitch').addClass('dark');
					setTimeout(function(){
						$('#bookNow').addClass('open');
					},360);
				}
			}
			
			if(func == 'headerToDark'){
				if($scrollDirection == "down" && !$('#bookNow').hasClass('dark')){
					$('#bookNow').removeClass('open').addClass('dark');
					$('#mainMenuController, .headerButton, #brownies,  #mainLogo, header .langsContainer, #textSwitch').addClass('dark');
					setTimeout(function(){
						$('#bookNow').addClass('open');
					},360);
				} else if($scrollDirection == "up" && $('#bookNow').hasClass('dark')){
					$('#bookNow').removeClass('open').removeClass('dark');
					$('#mainMenuController .line').addClass('quickColor')
					$('#mainMenuController, .headerButton, #brownies, #mainLogo, header .langsContainer, #textSwitch').removeClass('dark');					
					setTimeout(function(){
						$('#bookNow').addClass('open');
					},360)
				}
			}

			if(func == "runAccolades" && isMobile){
				$('#accoladesScroller').addClass('runAccolades');
			}
			
			if(func == 'removeTable'){
				if($scrollDirection == "down") {
				$('#reserveTable').removeClass('show');
				}
				
				if($scrollDirection == "up") {
				$('#reserveTable').addClass('show');
				}
			}
		});
		
		
		/********* END SCROLL LAYER ************/
	
	} else {  /************ SCROLL OVERVIEW *************/
		
		
		
		scrollOverview = new LocomotiveScroll({
			 el: document.querySelector('article'),   
			 smooth: true,
	           getDirection:true,
	           lerp:0.04,
	           scrollFromAnywhere: false,
	           touchMultiplier:2.5,
	           multiplier:3,
	           class:'show',
	           smartphone:{
	           	smooth:true
	           },
	           tablet:{
	           	smooth:true,
	           	direction:'horizontal',
	           	gestureDirection: 'horizontal'
	           	
	           },
	           direction:'horizontal'
		});
		
		scrollOverview.on('scroll', (args) => {	
			$scrollDirection = args.direction;
			$scrollPos = args.scroll.x;
			
			if($scrollDirection == "left") {
				$('#brownies').removeClass('hidden')
			}
			
			if($scrollDirection == "right") {
				$('#brownies').addClass('hidden');
			}
			
			$viewElements = Object.entries(args.currentElements);
			
			
			$viewElements.forEach(function($viewElement) {
	
				if($($viewElement[1].el).attr('data-precision')){
						$target = $($viewElement[1].el);
						$target.offsetY = $target.offset().top;
						$target.offsetX = $target.offset().left;
						$target.width = $target.outerWidth();
						$target.height = $target.outerHeight();
						
						$delta = {};
						$delta.y = $lastPosY - $target.offsetY;
						$delta.x = $lastPosX - $target.offsetX;
					
						
						if(($delta.y > 0 && $delta.y <  $target.height && $delta.x > 0 && $delta.x < $target.width) && !$target.hasClass('target')) {
							$target.trigger('mouseover');
							
						}
						
						if(($delta.y < 0 || $delta.y >  $target.height || $delta.x < 0 || $delta.x > $target.width) && $target.hasClass('target')) {
							$target.trigger('mouseout');
						}
						
					}
				
			});
			
			
			/*if($scrollDirection == "right" && $dataView == 0) {
				$snapReady = false;
				setTimeout(function(){
					$snapReady = true;
					$dataView = 1;
				},3000)

			}
			
				if($scrollDirection == "right" && $snapReady && $dataView > 0){
					$snapReady = false;
					scrollOverview.scroll.multiplier = 0.001;
					scrollOverview.setScroll(windowWidth,0)
					$('#overviewControls .oNavigation.right').trigger('click');
					setTimeout(function(){
						$snapReady = true;
					},1000)
				}
				
				if($scrollDirection == "left" && $snapReady && $dataView > 1){
					$snapReady = false;
					scrollOverview.scroll.multiplier = 0.001;
					scrollOverview.setScroll(windowWidth,0)
					$('#overviewControls .oNavigation.left').trigger('click');
					setTimeout(function(){
						$snapReady = true;
					},1000)
				}
				
			
			
			if($scrollDirection == "left" && $snapReady && $dataView == 1){
				$dataView = 0;
				scrollOverview.scroll.multiplier = 3;
			}*/
			
			
	
		});
		
	}
	
	$dataView = 0;
	$snapReady = true;
	
	$('#overviewControls .oNavigation').on('click',function(){
		if($(this).hasClass('left')){
			if($('#overviewItemPicsContainer .itemPic.active').index() > 0) {
				$('.oNavigation.right').addClass('show').addClass('open');					
				manageOverview($(this).parent().parent().parent(),'<')
			}
			
			if($('#overviewItemPicsContainer .itemPic.active').index() == 0) {
				$('.oNavigation.left').removeClass('show').removeClass('open');

			}
		} else {
			if($('#overviewItemPicsContainer .itemPic.active').index() < $('#overviewItemPicsContainer .itemPic').length - 1) {
			manageOverview($(this).parent().parent().parent(),'>')
			$('.oNavigation.left').addClass('show').addClass('open');
			}
			
			if($('#overviewItemPicsContainer .itemPic.active').index() == $('#overviewItemPicsContainer .itemPic').length - 1) {
				$('.oNavigation.right').removeClass('show').removeClass('open');
			}
		}

	})
	
	
	/****************** DETAILS **********************/
	
	
	/************************************************/
	
	/* WP-FORMS COMPATIBILITY WITH LOCOMOTIVE SCROLL SNIPPET - Alberto "DeLiVeRaNcE" Oliva 2021*/
	
	if($('.wpforms-form').length > 0){
		if($('.wpforms-datepicker').length > 0){
			jQuery('.wpforms-datepicker-wrap')[0]._flatpickr.config.onOpen.push(function(){
				 scrollLayer.stop();
			})
			
			jQuery('.wpforms-datepicker-wrap')[0]._flatpickr.config.onClose.push(function(){
				 scrollLayer.start();
			})
		}
		
		if($('.wpforms-timepicker').length > 0){
			jQuery('.wpforms-timepicker').timepicker().on('hideTimepicker',function(e){
				scrollLayer.start();
			})
			
			jQuery('.wpforms-timepicker').timepicker().on('showTimepicker',function(){
				 scrollLayer.stop();
			})
		}
		
		$('.wpforms-disclaimer-description').on('mouseover touchstart',function(){
			scrollLayer.stop();
		}).on('mouseout touchend',function(){
			scrollLayer.start();
		})
				
		window.wpforms.scrollToError = function(){};
		window.wpforms.animateScrollTop = function(){};
		
		
		
		
		var waitForFormSuccess;
		
		$('.formContainer .wpforms-submit').on('click',function(){
				clearInterval(waitForFormSuccess);
				waitForFormSuccess = setInterval(function(){
					if(!$('.formContainer .wpforms-form').length){
						clearInterval(waitForFormSuccess);
						scrollLayer.update();
						scrollLayer.scroll.checkScroll(true);
						scrollLayer.scrollTo('#detailForm');							
					}
				},50)
		})
		
		
	}
	
	/*********************************************************************************/
	
	
	/*$('.navItem').on('mouseover',function(){
		$('.subItem',$(this)).addClass('show');
	})
	
	$('.navItem').on('mouseout',function(){
		$('.subItem',$(this)).removeClass('show');
	})*/
	
	
	
	$('.menuController, #menuClose').on('click',function(){
		manageNav();
	})
	
	$('.menuController').on('mouseover',function(){
		if($('nav').hasClass('active')) {
			$('nav .overlayClose').addClass('hover');
		}
	})
	
	$('.menuController').on('mouseout',function(){
		if($('nav').hasClass('active')) {
			$('nav .overlayClose').removeClass('hover');
		}
	})

	$('#rightHeader .mobile, #footerInfo a').on('click',function(){
			ga('send', 'event', 'Click', 'Telefono', 'Click su bottone Telefono');
	})

	$('#rightHeader .email, .mailBlock a').on('click',function(){
			ga('send', 'event', 'Click', 'MailTo', 'Click su bottone email in header');
	})


	$('.socials a').on('click',function(){
			ga('send', 'event', 'Click', 'Social', 'Click Social');
	})
	
	$('.galleryContainer .sliderArrow').on('click',function(){
		if($(this).hasClass('left')){
			manageSlider($(this).parent().parent().parent(),'<')
		} else {
			manageSlider($(this).parent().parent().parent(),'>')
		}	
	})

	
	$('.urlManager:not(.no_default)').on('click',function(e){
		e.preventDefault();
		urlManager($(this).attr('href'));
	})
	
	run_clocks ();
	setWeatherData();
	
	
		$('.brownieIcoContainer').each(function(b){
			setTimeout(function(){
				$('.brownieIcoContainer:eq('+b+')').removeClass('hidden');
			},500+100*b);
		})
	
	
	// IN HEAD //
	
	if(current == "index"){
		
		$('#hImg').imagesLoaded(function(){
		
		$('#hImgContainer').addClass('show');
		
	
		
		setTimeout(function(){
			$('#hLogo').addClass('show');
			$('#mainMenuController').addClass('show');
			$('.headerButton').addClass('show');
		},800)
		
		setTimeout(function(){
			$('#bookNow').addClass('show');
			$('#scrollDown').addClass('show');
			$('header .langsContainer').addClass('show');

		},1200)
		
		setTimeout(function(){
			$('#bookNow').addClass('open');
			
		},1550);
		
		
		
		
		if(!isTouchEnabled && !isMobile) { /* video config on desktop - disabled */
			// 	offsetPos = 150;
		
			// 	deltaX = jQuery('#hVideoLayer').width()/2 - 225;
			// 	deltaY = jQuery('#hVideoLayer').height()/6 +75;
				
				
			// 	baseX = jQuery('#hVideoLayer video').width();
			// 	baseY = jQuery('#hVideoLayer video').height();
				
			// 	$('#hVideoLayer video').css('clip-path','inset('+ ((deltaY*2) - offsetPos) +'px '+ ((baseX - deltaX*2) + offsetPos) +'px '+ ((baseY - deltaY*2) + offsetPos) +'px '+ ((deltaX*2) - offsetPos) +'px round 25px)');
			// 	$('#hVideoLayer video').css('-webkit-clip-path','inset('+ ((deltaY*2) - offsetPos) +'px '+ ((baseX - deltaX*2) + offsetPos) +'px '+ ((baseY - deltaY*2) + offsetPos) +'px '+ ((deltaX*2) - offsetPos) +'px round 25px)');

				
			// 	setTimeout(function(){
		
			// 	deltaX = $('#hVideoLayer').width()/2 - 300;
			// 	deltaY = $('#hVideoLayer').height()/6;
				
				
			// 	baseX = $('#hVideoLayer video').width()-300;
			// 	baseY = $('#hVideoLayer video').height()-300;
		  	
			// 	$('#hVideoLayer video').css('clip-path','inset('+ ((deltaY*2) - offsetPos) +'px '+ ((baseX - deltaX*2) + offsetPos) +'px '+ ((baseY - deltaY*2) + offsetPos) +'px '+ ((deltaX*2) - offsetPos) +'px round 25px)');
			// 	$('#hVideoLayer video').css('-webkit-clip-path','inset('+ ((deltaY*2) - offsetPos) +'px '+ ((baseX - deltaX*2) + offsetPos) +'px '+ ((baseY - deltaY*2) + offsetPos) +'px '+ ((deltaX*2) - offsetPos) +'px round 25px)');

			// 	},2000);
				
			// 	$('#hVideoLayer').on('click',function(e){
			// 		if(!$('#hVideoLayer').hasClass('open')){
			// 			$('#hVideoLayer').addClass('open');
			// 			ga('send', 'event', 'Click', 'Video Layer', 'Apertura Video in Home Page');
			// 			$audioVid = '<video autoplay class="no_opacity has_transition_1000 audioVid" src="/wp-content/themes/casangelina/assets/video/home.mp4"></video>'
			// 			$('#hVideoLayer').append($audioVid);
			// 			$('#navigationTrack').removeClass('open').removeClass('show');
						
					
			// 			setTimeout(function(){
			// 				$('.audioVid').removeClass('no_opacity');
			// 			},500)
						
			// 			setTimeout(function(){
			// 				$('#navigationTrack .oLabel').text(get_close_text());
			// 				$('#hVideoLayer').attr('data-text',get_close_text());
			// 			},1000);
						
						
			// 			setTimeout(function(){
			// 				$('#hVideoLayer video:not(.audioVid)').remove();
			// 				$('#navigationTrack').addClass('open').addClass('show');
			// 			},1500)
						
			// 		} else {
			// 			$('#hVideoLayer').removeClass('open');
			// 			$('#navigationTrack').removeClass('open').removeClass('show');
		
			// 			deltaX = e.pageX - $('#hVideoLayer').offset().left;
			// 			deltaY = e.pageY - $('#hVideoLayer').offset().top;
			// 			baseX = $('#hVideoLayer video').width()-300;
			// 			baseY = $('#hVideoLayer video').height()-300;
			// 			$('#hVideoLayer video').removeClass('audioVid');
			// 			$('#hVideoLayer video')[0].muted = true;
			// 			$('#hVideoLayer video').css('clip-path','inset('+ ((deltaY*2) - offsetPos) +'px '+ ((baseX - deltaX*2) + offsetPos) +'px '+ ((baseY - deltaY*2) + offsetPos) +'px '+ ((deltaX*2) - offsetPos) +'px round 25px)');
			// 			$('#hVideoLayer video').css('-webkit-clip-path','inset('+ ((deltaY*2) - offsetPos) +'px '+ ((baseX - deltaX*2) + offsetPos) +'px '+ ((baseY - deltaY*2) + offsetPos) +'px '+ ((deltaX*2) - offsetPos) +'px round 25px)');

						
			// 			setTimeout(function(){
			// 				$('#navigationTrack .oLabel').text(get_watch_text());
			// 				$('#hVideoLayer').attr('data-text',get_watch_text());

			// 			},1000);
						
			// 			if($scrollPos <= 5) {
			// 			setTimeout(function(){
			// 				$('#navigationTrack').addClass('open').addClass('show');
			// 			},1500)
			// 			}
			// 		}
					
			// 		function get_close_text() {
			// 		    if (lang == "it") {
			// 		        return "chiudi"
			// 		    } else if (lang == "en") {
			// 		        return "close"
			// 		    } else if (lang == "fr") {
			// 		        return "fermer"
			// 		    } else if (lang == "de") {
			// 		    	return "schließen"
			// 		    }
			// 		}
					
			// 		function get_watch_text() {
			// 		    if (lang == "it") {
			// 		        return "guarda"
			// 		    } else if (lang == "en") {
			// 		        return "watch"
			// 		    } else if (lang == "fr") {
			// 		        return "regarde"
			// 		    } else if (lang == "de") {
			// 		    	return "sehen"
			// 		    }
			// 		}
			// 	})
			
				
			// $('#hVideoLayer').on('mouseenter',function(){
			// 	$('#hVideoLayer').off('mouseenter');
			// 	$(window).on('mousemove',function(e){		
			// 	  	if(!$('#hVideoLayer').hasClass('open')){
			// 			deltaX = e.pageX - $('#hVideoLayer').offset().left;
			// 			deltaY = e.pageY - $('#hVideoLayer').offset().top;
						
			// 			baseX = $('#hVideoLayer video').width()-300;
			// 			baseY = $('#hVideoLayer video').height()-300;
			// 	  	} 
				  	
				  	
			// 		offsetPos = 150;
					
				  
			// 		$('#hVideoLayer').css('transform','scale(0.5) translateX(-'+ (windowWidth/2 - e.pageX/2)/2 +'px) translateY('+ (-(windowHeight/2 - e.pageY)/2)+'px)')
			// 		$('#hVideoLayer video').css('clip-path','inset('+ ((deltaY*2) - offsetPos) +'px '+ ((baseX - deltaX*2) + offsetPos) +'px '+ ((baseY - deltaY*2) + offsetPos) +'px '+ ((deltaX*2) - offsetPos) +'px round 25px)');
			// 		$('#hVideoLayer video').css('-webkit-clip-path','inset('+ ((deltaY*2) - offsetPos) +'px '+ ((baseX - deltaX*2) + offsetPos) +'px '+ ((baseY - deltaY*2) + offsetPos) +'px '+ ((deltaX*2) - offsetPos) +'px round 25px)');
					
				    
		
		
			// 	})
			// })
			
			
			// if ($isSafari) { // clip path work around
			// 			$b = 0;
			// 			setInterval(function(){
			// 				$b++;
			// 				if($b == 10){
			// 					$('#hVideoLayer video').css('top','0%');
			// 				}
							
			// 				if($b == 20){
			// 					$('#hVideoLayer video').css('top','0.001%');
			// 					$b = 0;
			// 				}
			// 			}) 
			// 		 }
			
		} /* end video config on desktop */ else {
			
			offsetPos = 200;
			jQuery('#hVideoLayer video').css('clip-path','inset('+ (windowHeight/2) +'px '+  (windowWidth/2) +'px round 25px)');
			jQuery('#hVideoLayer video').css('-webkit-clip-path','inset('+ (windowHeight/2) +'px '+  (windowWidth/2) +'px round 25px)');
			
			setTimeout(function(){
				jQuery('#hVideoLayer video').css('clip-path','inset('+ (windowHeight/2 - offsetPos/2) +'px '+  (windowWidth/2 - offsetPos/2) +'px round 25px)');
				jQuery('#hVideoLayer video').css('-webkit-clip-path','inset('+ (windowHeight/2 - offsetPos/2) +'px '+  (windowWidth/2 - offsetPos/2) +'px round 25px)');

			},1500);
			
			setTimeout(function(){
					$('.oButton.watch').addClass('show');
			},2000);
			
			setTimeout(function(){
				$('.oButton.watch').addClass('open');
			},2100);
			
			$('#hVideoLayer, .oButton.watch, .oButton.close').on('click',function(e){
				if(!$('#hVideoLayer').hasClass('open')){
					$('#hVideoLayer').addClass('open');
					ga('send', 'event', 'Click', 'Video Layer', 'Apertura Video in Home Page (Dispositivo Mobile)');
					$audioVid = '<video autoplay playsinline class="no_opacity has_transition_1000 audioVid" src="/wp-content/themes/casangelina/assets/video/home.mp4"></video>'
					$('#hVideoLayer').append($audioVid);
					$('.oButton.watch').removeClass('open').removeClass('show');
					$('.audioVid')[0].play();
						
				
					setTimeout(function(){
						$('.audioVid').removeClass('no_opacity');
					},500)
					

					
					setTimeout(function(){
						$('#hVideoLayer video:not(.audioVid)').remove();
						$('.oButton.close').addClass('show');
					},1500)
					
					setTimeout(function(){
						$('.oButton.close').addClass('open');
					},1600)
					
				} else {
					$('#hVideoLayer').removeClass('open');
					$('.oButton.close').removeClass('open').removeClass('show');
	
					
					$('#hVideoLayer video').removeClass('audioVid');
					$('#hVideoLayer video')[0].muted = true;
					jQuery('#hVideoLayer video').css('clip-path','inset('+ (windowHeight/2 - offsetPos/2) +'px '+  (windowWidth/2 - offsetPos/2) +'px round 25px)');
					jQuery('#hVideoLayer video').css('-webkit-clip-path','inset('+ (windowHeight/2 - offsetPos/2) +'px '+  (windowWidth/2 - offsetPos/2) +'px round 25px)');


					
					setTimeout(function(){
						$('.oButton.watch').addClass('show');
					},1500);
					
					setTimeout(function(){
						$('.oButton.watch').addClass('open');
					},1600)
				}
				})
		}
		$('.hExperienceBlock .hExperienceButton').on('click',function(e){
			$currentIndex = $('.hExperienceBlock.show').index();
			$newIndex =  $(this).parent().index();
						
			
			if($currentIndex != $newIndex){
			$direction = $newIndex > $currentIndex ? $direction = '>' : $direction = '<';
			
			$('.hExperienceBlock').removeClass('show');
			$(this).parent().addClass('show');
			
			manageExperienceWidget($(this).parent().parent().parent(), $direction, $newIndex);
			}
		})
		})
				
	} /* end if index */ else {
		$('#mainMenuController').addClass('show');
		
		setTimeout(function(){
			$('#mainLogo').addClass('show');
		},400);
		
		setTimeout(function(){
			$('.headerButton').addClass('show');
		},800)
		
		setTimeout(function(){
			$('#bookNow, #reserveTable').addClass('show');
			$('header .langsContainer').addClass('show');

		},1200)
		
		setTimeout(function(){
			$('#bookNow, #reserveTable').addClass('open');
		},1550);
		
		if(current=="overview"){
			setTimeout(function(){
			$('#overviewIntroRight .oButton').addClass('open');
			},500);
			
			if(!isMobile){
			$('#overviewIntroRight .oButton').on('click',function(){
				scrollOverview.scrollTo('right');
			})
			} else {
				
				$('#overviewSnippetContainer').css('height',$('.overviewSnippet:eq(0)').height());
			}

		}
	}
		
	$firstTrack = true;
	
	$(window).on('mousemove',function(e){
		$lastPosX = e.pageX;
		$lastPosY = e.pageY;		
		$('#tracker').css('transform','translate('+e.pageX+'px,'+e.pageY+'px');
		
		if($firstTrack){
			$firstTrack = false;
		$('#simpleTrack').removeClass('no_opacity');
		}
		
		
	});
	
	
	if(current != "overview" || (current == "overview" && isMobile)){ 
		/**** first update routine *****/
		
		setTimeout(function(){
			//scrollLayer.update();
		},1000)
	}
	
	
	/********* ACTIVE LAYERS ********/
	
	$('.activeLayer, .hFacilitiesItem, .hDiningItem, #hVideoLayer, .otherItem, .pressButton, [data-disabled]').on('click',manageTrackAction).on('mouseover', manageTrackHover).on('mouseout', manageTrackOut);
	
	if(isMobile){
		
		
		$('.galleryContainer .activeLayerContainer').swipe({
			threshold:100,
			swipe : function(event, direction) {
	        		if (direction === 'left') {
	        			 
			            	$('.activeLayer.right',$(this)).trigger('click');
			        } else if (direction === 'right') {
			            	$('.activeLayer.left',$(this)).trigger('click');
			        }

	        },
	      
	        swipeStatus:function(event, phase,direction) {
	            if (phase=="cancel" || phase =="end") {
	            		scrollLayer.start();
	            	
	            }
	        	
	        	if (phase=="start" || phase =="move") {
	        		if (direction === 'left' || direction === 'right') {
		            	scrollLayer.stop();
	        		}
	            		
	            	
	            }
	          }
	    });
	}
	
	/************************************************/
	
	
	/********** BOOK NOW INIT + OVERLAYS **********/
	
	$('#bookNow').on('click',function(){
		openOverlay($('#bookOverlay'));
		// ga('send', 'event', 'Click', 'Book Now', 'Click su bottone Book Now');
	})
	
	$('.credits').on('click',function(){
		openOverlay($('#creditsOverlay'));
	})
	
	$('.thanks').on('click',function(){
		openOverlay($('#thanksOverlay'));
	})
	
	$('.overlayClose').on('click',function(){
			closeOverlay($(this).parent())
	})
	
	$('#reserveTable').on('click',function(){
		openOverlay($('#tableOverlay'));
		ga('send', 'event', 'Click', 'Reserve Table', 'Click su bottone Reserve Table');
	})
	
	var $reopening = new Date(2023,3,1);
	var $today = $reopening > new Date() ? $reopening : new Date();
	var $tomorrow = new Date($today).setDate($today.getDate()+1)
	
	// var bookArrival = $('.bookArrival input').flatpickr({
	// 	mode: "single",
	// 	minDate: "today",
	// 	dateFormat: lang == "en" ? "m/d/y" : "d/m/y",
	// 	locale: lang,
	// 	defaultDate: $today,
	// 	onChange: function(selectedDates, dateStr, instance) {
	// 		$suggestedDeparture = new Date(selectedDates[0]).setDate(selectedDates[0].getDate()+1)
	// 		bookDeparture.setDate($suggestedDeparture);
	//     },
	// });
	
	// var bookDeparture = $('.bookDeparture input').flatpickr({
	// 	mode: "single",
	// 	minDate: "today",
	// 	dateFormat: lang == "en" ? "m/d/y" : "d/m/y",
	// 	locale: lang,
	// 	defaultDate: $tomorrow
	// });

	
	
	$('#bookSubmit').on('click',function(){
		$arrival = bookArrival.selectedDates[0];
		$departure = bookDeparture.selectedDates[0];
		
		$arrivalDay = $arrival.getDate();
		$arrivalMonth = (($arrival.getMonth()+1)<10 ? '0'+($arrival.getMonth()+1) : ($arrival.getMonth()+1));
		$arrivalYear = $arrival.getFullYear();
		
		$departureDay = $departure.getDate();
		$departureMonth = (($departure.getMonth()+1)<10 ? '0'+($departure.getMonth()+1) : ($departure.getMonth()+1));
		$departureYear = $departure.getFullYear();
		

		$bookUrl = "https://booking.casangelina.com/?adult="+$("#bookGuests").val()+"&arrive="+$arrivalYear+"-"+$arrivalMonth+"-"+$arrivalDay+"&depart="+$departureYear+"-"+$departureMonth+"-"+$departureDay+"&chain=24447&currency=EUR&hotel=38068&src=30C&locale="+get_locale();
		
		//window.open(decorateUrl($bookUrl));
		window.open($bookUrl);
		
		
	})
	
	$('.no_default').on('click',function(e){
		e.preventDefault();
	})
	
	$('.textIndexItem').on('click',function(){
		scrollLayer.scrollTo($(this).attr('data-href'),{duration:200+(200*$(this).index())})
	})
	
	
	$('.hBook').on('click',function(){
		
		
		if($(this).hasClass('room')){
		
		$bookUrl = "https://booking.casangelina.com/Landing?hotel=38068&chain=24447&currency=EUR&src=30C&locale="+get_locale()+"&room="+$('.hBook.room').attr('data-code');
		
		
		}
		
		//window.open(decorateUrl($bookUrl));
		window.open($bookUrl);
		
		
	})

});


/********************** END  READY **********************/



/********************* RESIZE *************************/

$(window).on('resize',function(){
	windowWidth = $(window).width();
	windowHeight = $(window).height();
	
	isMobile = (windowWidth <= 960);
	
	
	if(isTouchEnabled){
		$('body, #hImgContainer, #hImgLayer, #hFacilitiesSticky, nav, #hElementsLayer, .overlay, section.galleryContainer, #footerSticky').height(windowHeight);
	    $('.fullPicture, .fullPicture > div:first-child, #footerTarget, footer').height(windowHeight*2);
	    $('.fullPicture > div:eq(1)').height(windowHeight);
		$('#hTarget').css('top',windowHeight);
		
		if(isMobile) {
			$('#footerMain').height(windowHeight);
		}
		
		offsetPos = 200;
		jQuery('#hVideoLayer video').css('clip-path','inset('+ (windowHeight/2 - offsetPos/2) +'px '+  (windowWidth/2 - offsetPos/2) +'px round 25px)');
		jQuery('#hVideoLayer video').css('-webkit-clip-path','inset('+ (windowHeight/2 - offsetPos/2) +'px '+  (windowWidth/2 - offsetPos/2) +'px round 25px)');
 }
	
	if(isMobile){
		$('.hFacilitiesBackground, #hFacilitiesTop ').attr('data-scroll-offset','0,'+windowHeight);
		
	}
	
	
	if(current != "overview"){
		commonOffsets();
	} else {
		setTimeout(function(){
			if(!isMobile && scrollOverview.scroll.instance.scroll.x > windowWidth / 1.5){
			scrollOverview.scrollTo('right');
			}
		},1)
		
	}
	
})


/*********************** FUNCTIONS ********************/


function manageTrackHover(e) {
	if($(e.currentTarget).attr('data-icon') == "textArrow") {
		$('#simpleTrack').addClass('no_opacity');
		$('#navigationTrack .oLabel').text($(this).attr('data-text'))
		$('#navigationTrack').removeClass().addClass('top_ultralow').addClass('has_transition_1500').addClass('oButton').addClass($(this).attr('data-theme')).addClass('show').addClass('open');	
	}
	
	if($(e.currentTarget).attr('data-icon') == "arrow") {
		$('#simpleTrack').addClass('no_opacity');
		$('#actionTrack').addClass('show').addClass($(this).attr('data-theme'));
	}
	
	if($(e.currentTarget).attr('data-disabled')) {
		$('#simpleTrack').addClass('no_opacity');
	}
	
	$(e.currentTarget).addClass('target');
}

function manageTrackOut(e) {
		$('#simpleTrack').removeClass('no_opacity');
		$('#navigationTrack').removeClass('show').removeClass('open');
		$('.target').removeClass('target');
		$('#actionTrack').removeClass('show').removeClass('dark');
}

function manageTrackAction(e){
	$target = $(e.currentTarget);
	$action = $target.attr('data-action');
	$direction = $target.attr('data-direction');
	switch ($action){
		case 'navigation':
			
			urlManager( $(this).attr('data-href')); 
			break;
		case 'runSlider':
			 manageSlider($target.parent().parent(),$direction);
			break;
		case 'managePress':	
			 managePress($target);
		break;
	}
}

function openOverlay($overlay){
	if(!$overlay.hasClass('active')) {
		$overlay.addClass('active');
		
		setTimeout(function(){
			$('.mainBackground',$overlay).removeClass('hidden');
			$overlay.addClass('show');
		},1);
		
		if($overlay.attr('id') == "bookOverlay"){
			setTimeout(function(){
				$('.oButton',$overlay).addClass('open')
			},960)
		}	
	}
}

function closeOverlay($overlay){
	$('.overlayClose circle',$overlay).removeClass('has_transition_1000_inout').addClass('has_transition_1000');
	$overlay.removeClass('show');
	
	if($overlay.attr('id') == "bookOverlay"){
			$('.oButton',$overlay).removeClass('open')
	}	
	
	setTimeout(function(){
		$overlay.addClass('hidden');
	},500)

	
	setTimeout(function(){
			$('.mainBackground',$overlay).addClass('hidden');
			$overlay.removeClass('active').removeClass('hidden');
			$('.overlayClose circle',$overlay).addClass('has_transition_1000_inout').removeClass('has_transition_1000');
		},1000)
}


function commonOffsets() {
	if(!isMobile){
		$('#otherTarget').height($('#otherItems').height()*2-(windowHeight-$('.otherItem:first').height()-25) + ($('#otherFixed .blockTitle').height() + ($('.otherItem').height() - $('.otherItemPic').height()))).css('top',-(windowHeight-$('.otherItem:first').height()-25));
		$('#hDiningTarget').height($('#hDiningScroll').height()*2-windowWidth/100*15 - $('.hDiningItem:first').height()).css('top',windowWidth/100*15);
	}
	
	if($('#hFacilitiesSticky').innerHeight() > windowHeight) {
		$('#hFacilitiesTarget').css('top',$('#hFacilitiesSticky').innerHeight()-windowHeight);
	} else {
		//$('#hFacilitiesTarget').css('top',0);
	}
	

	scrollLayer.update();
}

function urlManager(href) {
	$url = href;
		
	$('body').addClass('has_transition_1500').addClass('exiting');
	
	if($('nav').hasClass('active')) {manageNav()}
	
	
	setTimeout(function(){
		window.location.href = $url;
	},350)
}

function imgGlobalLoad(){
	if($('img:eq('+$imgGlobalID+')')[0].hasAttribute("data-src")){
		$('img:eq('+$imgGlobalID+')').attr('src',$('img:eq('+$imgGlobalID+')').attr('data-src')).removeAttr('data-src');
		$('img:eq('+$imgGlobalID+')').imagesLoaded(function(success){
			if($('img:eq('+$imgGlobalID+')').attr('data-update') == 'true'){
				scrollLayer.update();
			}
			if($('img:eq('+($imgGlobalID+1)+')').length > 0){
				$imgGlobalID++;
				imgGlobalLoad();				
			}
		})
	} else {	
		if($('img:eq('+($imgGlobalID+1)+')').length > 0){
			$imgGlobalID++;
			imgGlobalLoad();			
		}
	
	}
}

function manageNav() {
	if(!$('nav').hasClass('active')) {
		$('nav').addClass('active');
		$('#navVideo video')[0].play();

		$('#navLogo .logoLine').removeClass('exit');
		
		$('#mainMenuController').removeClass('show');
		
		
		setTimeout(function(){
			$('#navBackground').removeClass('hidden');
			$('#navVideo').removeClass('no_opacity');
			$('#hLogo').removeClass('show');
			$('#navLogo, #navSideItems, #navBottom .socials').addClass('show')
			$('.navSection').removeClass('show');
			$('#mainLogo, .headerButton, .langsContainer').addClass('menuForced');
			$('header  .langsContainer').addClass('shifted')
			if(isMobile) {
				$('nav .langsContainer').addClass('show');
			}
		},1)
		
		setTimeout(function(){
			$('#menuClose').addClass('show');
			scrollMenu.update();
			if($('.navItem.active').length != 0){
				$target = $('.navItem.active').parent();
				$('.navSection').removeClass('show');
				scrollMenu.scrollTo($target[0],{duration:1,disableLerp:true,offset:-(parseInt($('#navTop').css('padding-top')) + (isMobile ? 55 : 70) + parseInt($target.css('margin-top')) + parseInt($target.prev().height()))})
				scrollMenu.update();
				
			}
			
			
		},500)
		
	} else {		
		if($('nav').hasClass('active')) {
			$('nav .overlayClose').removeClass('hover');
		}
		
		$('.navSection').removeClass('show');
		$('#navLogo .logoLine').addClass('exit');
		$('#navLogo, #navSideItems, #navBottom .socials').removeClass('show');
		$('#mainLogo, .headerButton, .langsContainer').removeClass('menuForced');
		$('#menuClose').removeClass('show');
		if(isMobile) {
			$('nav .langsContainer').removeClass('show');
		}
		
		setTimeout(function(){
			$('nav').addClass('hidden');
			$('#mainMenuController').addClass('show');
			$('header .langsContainer').removeClass('shifted');
		
		},500)
		
		setTimeout(function(){
			$('#navVideo').addClass('no_opacity');
			$('#hLogo').addClass('show');
			$('#navBackground').addClass('hidden');
			$('nav').removeClass('active').removeClass('hidden');

		},1000)
	}
}


function manageSlider($scope,$direction){
	var $sliderCount = $('.gallery .slideContainer',$scope).length;	
	var $sliderActive = $('.gallery  .slideContainer.active',$scope).index();
	

	if($direction == ">"){
		if($('.gallery .slideContainer.active',$scope).index() < $sliderCount-1){
			$sliderActive = $('.gallery .slideContainer.active',$scope).index() + 1;
		} else {
			$sliderActive = 0;
		}
		
		runSlider($scope,$sliderActive,$sliderCount,$direction);
	}
	if($direction == "<"){
		if($('.gallery .slideContainer.active',$scope).index() == 0){
			$sliderActive = $sliderCount-1;
		} else {
			$sliderActive = $('.gallery .slideContainer.active',$scope).index() - 1;
		}
		runSlider($scope,$sliderActive,$sliderCount,$direction);
	}
	
}


var galleryIndex = 0;

function runSlider ($scope,$sliderActive,$sliderCount,$direction){
	galleryIndex++;
	
	
	if($('.gallery .slideContainer:eq('+($sliderActive)+') img',$scope)[0].hasAttribute("gallery-src")){
		$('.gallery .slideContainer:eq('+($sliderActive)+') img',$scope).attr('srcset',$('.gallery .slideContainer:eq('+($sliderActive)+') img',$scope).attr('gallery-srcset')).removeAttr('gallery-srcset').attr('src',$('.gallery .slideContainer:eq('+($sliderActive)+') img',$scope).attr('gallery-src')).removeAttr('gallery-src');
		$('.previewContainer .slideContainer:eq('+($sliderActive)+') img',$scope).attr('srcset',$('.previewContainer .slideContainer:eq('+($sliderActive)+') img',$scope).attr('gallery-srcset')).removeAttr('gallery-srcset').attr('src',$('.previewContainer .slideContainer:eq('+($sliderActive)+') img',$scope).attr('gallery-src')).removeAttr('gallery-src');

		
		$('.loading').removeClass('no_opacity').show();
		
		$('.gallery .slideContainer:eq('+($sliderActive)+') img',$scope).imagesLoaded(function(){
			$('.loading').addClass('no_opacity');
			setTimeout(function(){$('.loading',$scope).hide()},800)
			
			$('.gallery .slideContainer',$scope).removeClass('active');
			$('.gallery .slideContainer:eq('+($sliderActive)+') .slide, .gallery .slideContainer:eq('+($sliderActive)+') .t_container, .gallery .slideContainer:eq('+($sliderActive)+') img',$scope).addClass('no_transition');
			$('.gallery .slideContainer:eq('+($sliderActive)+')',$scope).css('z-index',galleryIndex).removeClass('show').addClass('active');
			
			$('.previewContainer .slideContainer',$scope).removeClass('active');
			$('.previewContainer .slideContainer:eq('+($sliderActive)+') .slide, .previewContainer .slideContainer:eq('+($sliderActive)+') .t_container, .previewContainer .slideContainer:eq('+($sliderActive)+') img',$scope).addClass('no_transition');
			$('.previewContainer .slideContainer:eq('+($sliderActive)+')',$scope).css('z-index',galleryIndex).removeClass('show').addClass('active');

			if($direction == '>'){
				$('.gallery .slideContainer:eq('+($sliderActive)+') .slide',$scope).removeClass('mask_left').addClass('mask_right');
				
				$('.previewContainer .slideContainer:eq('+($sliderActive)+') .slide',$scope).removeClass('mask_bottom').addClass('mask_top');

			}
			
			if($direction == '<'){
				$('.gallery .slideContainer:eq('+($sliderActive)+') .slide',$scope).removeClass('mask_right').addClass('mask_left');
				
				$('.previewContainer .slideContainer:eq('+($sliderActive)+') .slide',$scope).removeClass('mask_top').addClass('mask_bottom');

			}

			
			setTimeout(function(){
				$('.gallery .slideContainer:eq('+($sliderActive)+') .slide, .gallery .slideContainer:eq('+($sliderActive)+') .t_container, .gallery .slideContainer:eq('+($sliderActive)+') img',$scope).removeClass('no_transition');
				$('.gallery .slideContainer:eq('+($sliderActive)+')',$scope).addClass('show');
				
				$('.previewContainer .slideContainer:eq('+($sliderActive)+') .slide, .previewContainer .slideContainer:eq('+($sliderActive)+') .t_container, .previewContainer .slideContainer:eq('+($sliderActive)+') img',$scope).removeClass('no_transition');
				$('.previewContainer .slideContainer:eq('+($sliderActive)+')',$scope).addClass('show');
			},15);
			
			
			if($('.sliderCounter',$scope)){
				$('.sliderCounter .current',$scope).text(($sliderActive<9 ? '0':'')+($sliderActive+1))
			}
			
			if($('.previewTitle.caption',$scope)){
				$('.previewTitle.caption',$scope).text($('.gallery .slideContainer:eq('+($sliderActive)+') .slide img',$scope).attr('data-caption'));
			}


		})
	} else {
		//autosize($('.gallery .slideContainer:eq('+($sliderActive)+') img', $scope));
		$('.gallery .slideContainer',$scope).removeClass('active');
		$('.gallery .slideContainer:eq('+($sliderActive)+') .slide, .gallery .slideContainer:eq('+($sliderActive)+') .t_container, .gallery .slideContainer:eq('+($sliderActive)+') img',$scope).addClass('no_transition');
		$('.gallery .slideContainer:eq('+($sliderActive)+')',$scope).css('z-index',galleryIndex).removeClass('show').addClass('active');

		$('.previewContainer .slideContainer',$scope).removeClass('active');
		$('.previewContainer .slideContainer:eq('+($sliderActive)+') .slide, .previewContainer .slideContainer:eq('+($sliderActive)+') .t_container, .previewContainer .slideContainer:eq('+($sliderActive)+') img',$scope).addClass('no_transition');
		$('.previewContainer .slideContainer:eq('+($sliderActive)+')',$scope).css('z-index',galleryIndex).removeClass('show').addClass('active');
		
		if($direction == '>'){
			$('.gallery .slideContainer:eq('+($sliderActive)+') .slide',$scope).removeClass('mask_left').addClass('mask_right');
			
			$('.previewContainer .slideContainer:eq('+($sliderActive)+') .slide',$scope).removeClass('mask_bottom').addClass('mask_top');

		}
		
		if($direction == '<'){
			$('.gallery .slideContainer:eq('+($sliderActive)+') .slide',$scope).removeClass('mask_right').addClass('mask_left');
			
			$('.previewContainer .slideContainer:eq('+($sliderActive)+') .slide',$scope).removeClass('mask_top').addClass('mask_bottom');

		}

		
		setTimeout(function(){
			$('.gallery .slideContainer:eq('+($sliderActive)+') .slide, .gallery .slideContainer:eq('+($sliderActive)+') .t_container, .gallery .slideContainer:eq('+($sliderActive)+') img',$scope).removeClass('no_transition');
			$('.gallery .slideContainer:eq('+($sliderActive)+')',$scope).addClass('show');
			
			$('.previewContainer .slideContainer:eq('+($sliderActive)+') .slide, .previewContainer .slideContainer:eq('+($sliderActive)+') .t_container, .previewContainer .slideContainer:eq('+($sliderActive)+') img',$scope).removeClass('no_transition');
			$('.previewContainer .slideContainer:eq('+($sliderActive)+')',$scope).addClass('show');
		},15);
		
		if($('.sliderCounter',$scope)){
			$('.sliderCounter .current',$scope).text(($sliderActive<9 ? '0':'')+($sliderActive+1))
		}
		
		if($('.previewTitle.caption',$scope)){
			$('.previewTitle.caption',$scope).text($('.gallery .slideContainer:eq('+($sliderActive)+') .slide img',$scope).attr('data-caption'));
		}
	}

}

var $experienceWidgetZIndex = 0; 

function manageExperienceWidget($scope,$direction,$newIndex) {
	
	if(!isMobile){
	

		$('#hExperiencesPics .hExperiencePic',$scope).removeClass('active');
		
		
		if($direction == '>') {
			
			$('#hExperiencesPics .hExperiencePic:eq('+$newIndex+') > div').removeClass('mask_top').addClass('mask_bottom');
			
		}
		
		if($direction == '<') {
			
			
			$('#hExperiencesPics .hExperiencePic:eq('+$newIndex+') > div').removeClass('mask_bottom').addClass('mask_top');
		}
		
		
		$('#hExperiencesPics .hExperiencePic:eq('+$newIndex+') .has_transition_2000',$scope).addClass('no_transition');
		$('#hExperiencesPics .hExperiencePic:eq('+$newIndex+')',$scope).addClass('active');
		$('#hExperiencesPics .hExperiencePic:eq('+$newIndex+')',$scope).removeClass('show').css('z-index',$experienceWidgetZIndex++);
	
		
		setTimeout(function(){
			$('#hExperiencesPics .hExperiencePic:eq('+$newIndex+') .has_transition_2000',$scope).removeClass('no_transition');
			$('#hExperiencesPics .hExperiencePic:eq('+$newIndex+')',$scope).addClass('show');	
		},10);
	
	} else {
		
		
		$('.hExperiencePic',$scope).removeClass('active').removeClass('show');
		
		
		if($direction == '>') {
			
			$('.hExperienceBlock:eq('+$newIndex+') .hExperiencePic > div').removeClass('mask_top').addClass('mask_bottom');
			
		}
		
		if($direction == '<') {
			
			$('.hExperienceBlock:eq('+$newIndex+') .hExperiencePic > div').removeClass('mask_bottom').addClass('mask_top');
		}
		
		$('.hExperienceBlock:eq('+$newIndex+') .hExperiencePic .has_transition_2000',$scope).addClass('no_transition');
		$('.hExperienceBlock:eq('+$newIndex+') .hExperiencePic',$scope).addClass('active');
		$('.hExperienceBlock:eq('+$newIndex+') .hExperiencePic',$scope).removeClass('show').css('z-index',$experienceWidgetZIndex++);
	
		
		setTimeout(function(){
			$('.hExperienceBlock:eq('+$newIndex+') .hExperiencePic .has_transition_2000',$scope).removeClass('no_transition');
			$('.hExperienceBlock:eq('+$newIndex+') .hExperiencePic',$scope).addClass('show');	
		},250);
		
		
		
	}
	
	setTimeout(function(){scrollLayer.update()},500);

}


var $overviewWidgetZIndex = 2; 

function manageOverview ($scope,$direction) {
	$currentIndex = $oldIndex = $('.itemPic.active',$scope).index();
	$totalElements = $('.itemPic',$scope).length;
	
	$('.overviewSnippet, .detailSubtitle, .detailTitle', $scope).removeClass('show');
	$('.itemPic',$scope).removeClass('active');
	
	
	if($direction == '>') {
		if($currentIndex < $totalElements-1){
			$currentIndex++;
		} else {
			$currentIndex = 0;
		}
		$('.itemPic:eq('+$currentIndex+') > div').removeClass('mask_left').addClass('mask_right');
		
	}
	
	if($direction == '<') {
		if($currentIndex > 0){
			$currentIndex--;
		} else {
			$currentIndex = $totalElements-1;
		}
		
		$('.itemPic:eq('+$currentIndex+') > div').removeClass('mask_right').addClass('mask_left');
	}
	
	$('.itemPic:eq('+$currentIndex+') .has_transition_2000',$scope).addClass('no_transition');
	$('.itemPic:eq('+$currentIndex+')',$scope).addClass('active');
	$('.itemPic:eq('+$currentIndex+')',$scope).removeClass('show').css('z-index',$overviewWidgetZIndex++);
	$dataView = $('.itemPic:eq('+$currentIndex+')',$scope).index()+1;

	
	setTimeout(function(){
		$('.itemPic:eq('+$currentIndex+') .has_transition_2000',$scope).removeClass('no_transition');
		$('.itemPic:eq('+$currentIndex+')',$scope).addClass('show');
	},10);
	
	setTimeout(function(){
		$('.overviewSnippet, .detailTitle, .detailSubtitle',$scope).removeClass('active');
		$('.overviewSnippet:eq('+$currentIndex+'), .detailTitle:eq('+$currentIndex+'), .detailSubtitle:eq('+$currentIndex+')',$scope).removeClass('show');
		$('.overviewSnippet:eq('+$currentIndex+'), .detailTitle:eq('+$currentIndex+'), .detailSubtitle:eq('+$currentIndex+')',$scope).addClass('active');
		$('#overviewSnippetContainer').css('height',$('.overviewSnippet.active').height());
		$('#overviewItems .activeLayer').attr('data-href',$('.detailTitle.active',$scope).attr('data-href'));
		$('#overviewMobileView').attr('href',$('.detailTitle.active',$scope).attr('data-href'))
	},400)
	
	setTimeout(function(){
	
			if(!isMobile) {
				scrollOverview.update();
			} else {
				scrollLayer.update();
			}
	},500)
}

function managePress($item){
	$currentSet = $item.attr('data-set');
	
	$('.pressButton').removeClass('active');
	$item.addClass('active');
	
	$('.pressContent').removeClass('has_transition_800').addClass('has_transition_400').addClass('no_opacity');
	
	$pressScrolling = true;
	$('#mainLogo, #brownies, .mobile, .email').addClass('hidden');
	
	setTimeout(function(){
		$('.pressContent').hide().removeClass('has_transition_400').addClass('has_transition_800');
		$('.pressContent:not(:first)').addClass('tripleMargin');
		$('.pressContent *').addClass('no_transition').removeClass('show');

		if($currentSet == "all"){
			$('.pressContent').show()
		} else {
			$('#'+$currentSet).removeClass('tripleMargin').show();
		}
		
		if($scrollPos > scrollLayer.scroll.els.pressTarget.top){
			scrollLayer.scrollTo('#pressBody',{duration:1, disableLerp:true});
		}
		
	},400)
	
	setTimeout(function(){
		$('.pressContent *').removeClass('no_transition');
		$('.pressContent').removeClass('no_opacity');
		scrollLayer.update();
	},401);
	
	setTimeout(function(){
		$pressScrolling = false;
	},600)
}


function initCookiePrefs() {
	setCookie('$cookieExists', true, 60);
	$('.brownieIco').css('pointer-events','all');
	
	if($('#gdprMarketing').prop("checked")) {
		setCookie('$gdprMarketing', true, 60)
		 
		window.dataLayer = window.dataLayer || [];
	    function gtag(){dataLayer.push(arguments)};
	    gtag('consent', 'update', {'ad_storage': 'granted'});
	    
	} else {
		$gdprMarketing = false;
		setCookie('$gdprMarketing', false, 60)
		window.dataLayer = window.dataLayer || [];
	    function gtag(){dataLayer.push(arguments)};
	    gtag('consent', 'update', {'ad_storage': 'denied'});
	}
	
if($('#gdprAnalytics').prop("checked")) {
		setCookie('$gdprAnalytics', true, 60)
	
		window.dataLayer = window.dataLayer || [];
	 	function gtag(){dataLayer.push(arguments)};
		gtag('consent', 'update', {'analytics_storage': 'granted'});
	
	} else {
		setCookie('$gdprAnalytics', false, 60)
		
		window.dataLayer = window.dataLayer || [];
	    function gtag(){dataLayer.push(arguments)};
	    gtag('consent', 'update', {'analytics_storage': 'denied'});
	}	
	
}

function readCookiePrefs () {
		
	if(getCookie('$gdprAnalytics') == 'true') { $('#gdprAnalytics').prop("checked",true) } else { $('#gdprAnalytics').prop("checked",false)}
	if(getCookie('$gdprMarketing') == 'true') { $('#gdprMarketing').prop("checked",true) } else { $('#gdprMarketing').prop("checked",false)}
}

function checkCookiePrefs (){
	if(getCookie('$cookieExists') == 'true') {
		readCookiePrefs();
		
		if(getCookie('$newsletterPrompt') != 'true') {
			setTimeout(function(){
				setCookie('$newsletterPrompt', true, 60);
				$('#newsLetterBrownie .brownieIco').trigger('click');
			},3000)
		} /*else {
			if(getCookie('$pcrPrompt') != 'true') {

				setCookie('$pcrPrompt', true, 60);
				setTimeout(function(){
				$('#covidBrownie .brownieIco').trigger('click');
				},3000)
			}
		}*/
		
	} else {
		setTimeout(function(){
			$('#cookieBrownie .brownieIco').trigger('click');
			$('.brownieIco',$('#cookieBrownie').siblings()).css('pointer-events','none');
		},3000)
	}
}


function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}



function launchIntoFullscreen(element) {
	if(element.requestFullscreen) {
	    element.requestFullscreen();
	  } else if(element.mozRequestFullScreen) {
	    element.mozRequestFullScreen();
	  } else if(element.webkitRequestFullscreen) {
	    element.webkitRequestFullscreen();
	  } else if(element.msRequestFullscreen) {
	    element.msRequestFullscreen();
	  }
}


function exitFullScreen()
{

    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
    } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
    }
}


var clocks_running;

function run_clocks (){
	 
	
	 var time1;
	 var time2;
	 var time3;
	 var time4;
	 var time5;
	 var time6;
	 var time7;
	
	    function updateClock(){
	        	time1 = dayjs.tz(new Date(), $('.clock:eq(0)').attr('timezone')),
	            second1 = time1.second() * 6,
	            minute1 = time1.minute() * 6 + second1 / 60,
	            hour1 = ((time1.hour() % 12) / 12) * 360 + 90 + minute1 / 12;

		        $('#hour_1').css("transform", "rotate(" + hour1 + "deg)");
		        $('#minute_1').css("transform", "rotate(" + minute1 + "deg)");
		        $('#second_1').css("transform", "rotate(" + second1 + "deg)");
		        
		        
		        time2 = dayjs.tz(new Date(), $('.clock:eq(1)').attr('timezone')),
	            second2 = time2.second() * 6,
	            minute2 = time2.minute() * 6 + second2 / 60,
	            hour2 = ((time2.hour() % 12) / 12) * 360 + 90 + minute2 / 12;
	
		        $('#hour_2').css("transform", "rotate(" + hour2 + "deg)");
		        $('#minute_2').css("transform", "rotate(" + minute2 + "deg)");
		        $('#second_2').css("transform", "rotate(" + second2 + "deg)");
		        
		        time3 = dayjs.tz(new Date(), $('.clock:eq(2)').attr('timezone')),
		        second3 = time3.second() * 6,
		        minute3 = time3.minute() * 6 + second3 / 60,
		        hour3 = ((time3.hour() % 12) / 12) * 360 + 90 + minute3 / 12;
	
			    $('#hour_3').css("transform", "rotate(" + hour3 + "deg)");
			    $('#minute_3').css("transform", "rotate(" + minute3 + "deg)");
			    $('#second_3').css("transform", "rotate(" + second3 + "deg)");
			    
			    time4 = dayjs.tz(new Date(), $('.clock:eq(3)').attr('timezone')),
			    second4 = time4.second() * 6,
			    minute4 = time4.minute() * 6 + second4 / 60,
			    hour4 = ((time4.hour() % 12) / 12) * 360 + 90 + minute4 / 12;
	
				$('#hour_4').css("transform", "rotate(" + hour4 + "deg)");
				$('#minute_4').css("transform", "rotate(" + minute4 + "deg)");
				$('#second_4').css("transform", "rotate(" + second4 + "deg)");
				
				time5 = dayjs.tz(new Date(), $('.clock:eq(4)').attr('timezone')),
				second5 = time5.second() * 6,
				minute5 = time5.minute() * 6 + second5 / 60,
				hour5 = ((time5.hour() % 12) / 12) * 360 + 90 + minute5 / 12;
				
				$('#hour_5').css("transform", "rotate(" + hour5 + "deg)");
				$('#minute_5').css("transform", "rotate(" + minute5 + "deg)");
				$('#second_5').css("transform", "rotate(" + second5 + "deg)");
				
				time6 = dayjs.tz(new Date(), $('.clock:eq(5)').attr('timezone')),
				second6 = time6.second() * 6,
				minute6 = time6.minute() * 6 + second6 / 60,
				hour6 = ((time6.hour() % 12) / 12) * 360 + 90 + minute6 / 12;
				
				$('#hour_6').css("transform", "rotate(" + hour6 + "deg)");
				$('#minute_6').css("transform", "rotate(" + minute6 + "deg)");
				$('#second_6').css("transform", "rotate(" + second6 + "deg)");
				
				time7 = dayjs.tz(new Date(), $('.clock:eq(6)').attr('timezone')),
				second7 = time7.second() * 6,
				minute7 = time7.minute() * 6 + second7 / 60,
				hour7 = ((time7.hour() % 12) / 12) * 360 + 90 + minute7 / 12;
				
				$('#hour_7').css("transform", "rotate(" + hour7 + "deg)");
				$('#minute_7').css("transform", "rotate(" + minute7 + "deg)");
				$('#second_7').css("transform", "rotate(" + second7 + "deg)");
		    }
	
		    function timedUpdate () {
		        updateClock();
		        clocks_running = setTimeout(timedUpdate, 1000);
		    }
		  
		    timedUpdate();
		
}


function set_weather(day,data){
    
	if($(data).find('day:eq('+day+') hour').length == 8){
    	if($nowHour < 3 ){
    		now_node = 0;
    		actual_node = now_node;

    	} else {
    		now_node = Math.floor($nowHour / 3);
    		actual_node = now_node;
    	}
    } else {
		now_node = Math.floor($nowHour / 6);
		actual_node = now_node + 4;
		
		 $('.hour_box').each(function(h){
			 if(h < 4){
				 $(this).addClass('no_opacity');
			 }
		 });

    }

    // SET WHICH HOUR IS ACTIVE //
    
    $('.hour_box:eq('+actual_node+')').addClass('active');
    
    //DAY ICO //
    
    day_ico_0 = $(data).find('day:eq('+day+') hour[value="00:00"] description').text();
    day_ico_1 = $(data).find('day:eq('+day+') hour[value="03:00"] description').text();
    day_ico_2 = $(data).find('day:eq('+day+') hour[value="06:00"] description').text();
    day_ico_3 = $(data).find('day:eq('+day+') hour[value="09:00"] description').text();
    day_ico_4 = $(data).find('day:eq('+day+') hour[value="12:00"] description').text();
    day_ico_5 = $(data).find('day:eq('+day+') hour[value="15:00"] description').text();
    day_ico_6 = $(data).find('day:eq('+day+') hour[value="18:00"] description').text();
    day_ico_7 = $(data).find('day:eq('+day+') hour[value="21:00"] description').text();
    
    $('.hour_box').each(function(h){
    	if((h == 0 || h == 1 || h == 7) && (window['day_ico_'+h] == 1 || window['day_ico_'+h] == 2 || window['day_ico_'+h] == 3)){
    	$('.hour_box:eq('+h+') .hour_ico img').attr('src','/wp-content/themes/casangelina/assets/images/weather/n'+window['day_ico_'+h]+'.png');
    	} else {
        	$('.hour_box:eq('+h+') .hour_ico img').attr('src','/wp-content/themes/casangelina/assets/images/weather/'+window['day_ico_'+h]+'.png');

    	}
    });
    
    $('.hour_box .hour_ico img').imagesLoaded(function(){
    	/*if(scrollType == "iScroll"){
    		myScroll.refresh();
    	}*/
    });
    
    // DAY DESCRIPTION //
    
    $('#weather .weather_ico .meteo_stats').text(get_day_text(window['day_ico_'+actual_node]));
    $('#weather .weather_ico .meteo_ico_big img').attr('src','/wp-content/themes/casangelina/assets/images/weather/'+window['day_ico_'+actual_node]+'.png');
    
    if((actual_node == 0 || actual_node == 1 || actual_node == 7 && window['day_ico_'+actual_node]) && (window['day_ico_'+actual_node] == 1 || window['day_ico_'+actual_node] == 2 || window['day_ico_'+actual_node] == 3)) {
        $('#weather .weather_ico .meteo_ico_big img').attr('src','/wp-content/themes/casangelina/assets/images/weather/n'+window['day_ico_'+actual_node]+'.png');
    }

    
    // WIND DIR //
    
    $windDirection = $(data).find('day:eq('+day+') hour:eq(' + now_node + ') windir').text();
    $('#weather .wind_direction p').text(get_wind_dir($windDirection));
    
    // WIND SPEED //
    
    $windSpeed = $(data).find('day:eq('+day+') hour:eq(' + now_node + ') windvel').text();
    $('#weather .wind_ico .meteo_stats').text(get_wind_speed($windSpeed));
    $('#weather .wind_ico img').attr('src','/wp-content/themes/casangelina/assets/images/weather/wind/'+get_wind_ico($windSpeed)+'.png');
    $('#weather .wind_speed p').text($windSpeed + ' m/s');
    
    // TEMP //
    
    $temp = Math.round(parseInt($(data).find('day:eq('+ day +') hour:eq(' + now_node + ') temp').text()));
    $('.temp_text .temp_num').text($temp);																		
  
};

function set_marine(day,data){

	$nowDate = new Date();
	$nowHour = $nowDate.getHours();               
	
	if($(data).find('day:eq('+day+') hour').length == 8){
	if($nowHour < 3 ){
		now_node = 0;
	} else {
		now_node = Math.floor($nowHour / 3);
	}
	}
	
	$waveHeight = $(data).find("day:eq(" + day + ") hour:eq(" + now_node + ") waveheight").text();
	if ($waveHeight == "") {
	$waveHeight = 0
	}
	
	
	//WAVE HEIGHT //
	
	$('#weather .wave_height p').text($waveHeight + ' M');
	$('#weather .sea_ico .meteo_ico_big img').attr('src','/wp-content/themes/casangelina/assets/images/weather/sea/'+get_wave_pic($waveHeight)+'.png');
	$('#weather .sea_ico .meteo_stats').text(get_wave_height($waveHeight));
};


function setWeatherData() { // MAIN LAUNCHER //

	$.get("https://meteo.casangelina.com/get-weather.php", function(data) {
	
		weatherData = data;
		
		$nowDate = new Date();
		$nowHour = $nowDate.getHours();
		
		switch (lang) {
			case "en":
			days_short = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
				days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
				months = month; 
			break;
			case "it":
				days_short = ["Dom", "Lun", "Mar", "Mer", "Gio", "Ven", "Sab"];
				days = ["Domenica", "Lunedì", "Martedì", "Mercoledì", "Giovedì", "Venerdì", "Sabato"];
				months = mesi; 
			break;
			case "fr":
				days_short = ["Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"];
				days = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];
				months = mois;
			break
			case "de":
				days_short = ["Son", "Mon", "Die", "Mit", "Don", "Fre", "Sam"];
				days = ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"];
				months = monate;
			break;
		}
		
		switch (lang) {
			case "en":
			  
			    break;
			case "it":
			   
			    break;
			case "fr":
				
			    break;            
			case "de":
				break
		}
		
		// SETUP CALENDAR //
		
		$('#date .year').text($nowDate.getFullYear());
		if(lang == 'en'){
			$('#date .day').html('<span class="ext-day">'+days[$nowDate.getDay()] + '</span> <span class="ext-date">' +$nowDate.getDate()+''+nth($nowDate.getDate())+' ' + months[($nowDate.getMonth())]+'</span>')
		} else {
			$('#date .day').html('<span class="ext-date">'+$nowDate.getDate()+' '+ months[($nowDate.getMonth())]+',</span><span class="ext-day">'+days[$nowDate.getDay()]+'</span>' ) 
		
		}
		
		
		
		// SETUP FORECAST DAYS //
		$day0 = new Date();
		$day1 = addDays($day0,1);
		$day2 = addDays($day0,2);
		$day3 = addDays($day0,3);
		$day4 = addDays($day0,4);
		$day5 = addDays($day0,5);
		$day6 = addDays($day0,6);
		
		$('#days .day_name').each(function(d){
			if(d > 0){
				$('#days .day_name:eq('+d+') p').text(days_short[window['$day'+d].getDay()]);
			}
		});
		
		
		
		$('#days .day_name').on('click',manage_forecast);
		
		        
		set_weather(0,weatherData);
		
		$.get("https://meteo.casangelina.com/get-sea.php", function(data) {
			seaData = data;
			set_marine(0,seaData);
		})
	});
}
	
function manage_forecast () {
	$dayIndex = $(this).index();
	
	$('#days .day_name').each(function(d){
		if(d > 0){
			$('#days .day_name:eq('+d+') p').text(days_short[window['$day'+d].getDay()]);
		}
	});
	
	$('.day_name').removeClass('active');
	$(this).addClass('active');
	
	if($dayIndex>0){
		$(this).find('p').text(days[window['$day'+$dayIndex].getDay()]);
	}
	
	weatherOut();
	setTimeout(function(){
		$('#weather .animating').addClass('no_transition').addClass('top_low').removeClass('no_opacity');
	},480);
	setTimeout(function(){
		$('#weather .animating').removeClass('no_transition'); 
		set_weather($dayIndex,weatherData);
		set_marine($dayIndex,seaData);
		weatherIn ();
		
	},500);
}
	

function weatherIn () {
	$('#weather .animating').each(function(w) {
		setTimeout(function(){
			$('#weather .animating:eq('+w+')').removeClass('top_low');
		},50*w);
	})
}
	
function weatherOut () {
	$('#weather .animating').each(function(w) {
		setTimeout(function(){
			$('#weather .animating:eq('+w+')').addClass('no_opacity');
		},20*w);
	})
}
	
	
function get_wind_dir(wind_direction) {
	if (wind_direction >= 0 && wind_direction <= 11.25) {
	return "N"
	}
	if (wind_direction >= 11.26 && wind_direction <= 33.75) {
	return "NNE"
	}
	if (wind_direction >= 33.76 && wind_direction <= 56.25) {
	return "NE"
	}
	if (wind_direction >= 56.26 && wind_direction <= 78.75) {
	return "ENE"
	}
	if (wind_direction >= 78.76 && wind_direction <= 101.25) {
	return "E"
	}
	if (wind_direction >= 101.26 && wind_direction <= 123.75) {
	return "ESE"
	}
	if (wind_direction >= 123.76 && wind_direction <= 146.25) {
	return "SE"
	}
	if (wind_direction >= 146.26 && wind_direction <= 169.75) {
	return "SSE"
	}
	if (wind_direction >= 169.76 && wind_direction <= 191.25) {
	return "S"
	}
	if (wind_direction >= 191.26 && wind_direction <= 213.75) {
	return "SSW"
	}
	if (wind_direction >= 213.76 && wind_direction <= 236.25) {
	return "SW"
	}
	if (wind_direction >= 236.26 && wind_direction <= 258.75) {
	return "WSW"
	}
	if (wind_direction >= 258.76 && wind_direction <= 281.25) {
	return "W"
	}
	if (wind_direction >= 281.26 && wind_direction <= 303.75) {
	return "WNW"
	}
	if (wind_direction >= 303.76 && wind_direction <= 326.25) {
	return "NW"
	}
	if (wind_direction >= 326.26 && wind_direction <= 348.75) {
	return "NNW"
	}
	if (wind_direction >= 348.76 && wind_direction <= 360) {
	return "N"
	}
}
	
function get_wind_speed(wind_speed) {
	if (wind_speed == 0) {
		switch (lang) {
		case "en":
		    return "no wind";
		    break;
		case "it":
		    return "assente";
		    break;
		case "fr":
		    return "pas de vent";
		    break;
		case "de":
		    return "kein wind";
		    break
		}
}
	
if (wind_speed >= .1 && wind_speed < 5) {
	switch (lang) {
	case "en":
	    return "weak";
	    break;
	case "it":
	    return "debole";
	    break;
	case "fr":
	    return "faible";
	    break;
	case "de":
	    return "leichter";
	    break;
	    
	}
	}
	if (wind_speed >= 5 && wind_speed < 10) {
	switch (lang) {
	case "en":
	    return "moderate";
	    break;
	case "it":
	    return "debole";
	    break;
	case "fr":
	    return "modéré";
	    break;
	case "de":
	    return "mäßiger";
	    break;
	}
	}
	if (wind_speed >= 10 && wind_speed < 17) {
	switch (lang) {
	case "en":
	    return "strong";
	    break;
	case "it":
	    return "forte";
	    break;
	case "fr":
	    return "fort";
	    break;
	case "en":
	    return "starker";
	    break;
	}
	}
	if (wind_speed >= 17) {
	switch (lang) {
	case "en":
	    return "very strong";
	    break;
	case "it":
	    return "molto forte";
	    break;
	case "fr":
	    return "trés fort";
	    break;
	case "de":
	    return "sehr starker";
	    break;    
	    
	}
	}
	}
	
	function get_day_text(day_weather) {
	if (day_weather == 1) {
	switch (lang) {
	case "en":
	    return "sunny";
	    break;
	case "it":
	    return "sereno";
	    break;
	case "fr":
	    return "soleil";
	    break;
	case "de":
	    return "sonnig";
	    break;
	}
	}
	if (day_weather == 2) {
	switch (lang) {
	case "en":
	    return "sunny";
	    break;
	case "it":
	    return "sereno";
	    break;
	case "fr":
	    return "soleil";
	    break;
	case "de":
	    return "sonnig";
	    break;
	}
	}
	if (day_weather == 3) {
	switch (lang) {
	case "en":
	    return "partly cloudy";
	    break;
	case "it":
	    return "poco nuvoloso";
	    break;
	case "fr":
	    return "partiellement nuageux";
	    break;
	case "de":
	    return "teils bewölkt";
	    break;
	}
	}
	if (day_weather == 4) {
	switch (lang) {
	case "en":
	    return "partly cloudy";
	    break;
	case "it":
	    return "nubi sparse";
	    break;
	case "fr":
	    return "nuages ​​épars";
	    break;
	case "de":
	    return "bewölkt";
	    break;
	}
	}
	if (day_weather == 5) {
	switch (lang) {
	case "en":
	    return "rain and sunny intervals";
	    break;
	case "it":
	    return "pioggia e schiarite";
	    break;
	case "fr":
	    return "pluie";
	    break;
	case "de":
	    return "bewölkt mit regen";
	    break;
	}
	}
	if (day_weather == 6) {
	switch (lang) {
	case "en":
	    return "rain / snow and sunny intervals";
	    break;
	case "it":
	    return "pioggia mista a neve e schiarite";
	    break;
	case "fr":
	    return "pluie et neige";
	    break;
	case "de":
	    return "regen mit schnee";
	    break;
	}
	}
	if (day_weather == 7) {
	switch (lang) {
	case "en":
	    return "snow and sunny intervals";
	    break;
	case "it":
	    return "neve e schiarite";
	    break;
	case "fr":
	    return "neige";
	    break;
	case "de":
	    return "sonnig mit schnee";
	    break;
	}
	}
	if (day_weather == 8) {
	switch (lang) {
	case "en":
	    return "very cloudy";
	    break;
	case "it":
	    return "coperto";
	    break;
	case "fr":
	    return "couvert";
	    break;
	case "de":
	    return "bedeckt";
	    break;
	}
	}
	if (day_weather == 9) {
	switch (lang) {
	case "en":
	    return "weak rain";
	    break;
	case "it":
	    return "pioggia debole";
	    break;
	case "fr":
	    return "faible pluie";
	    break;
	case "de":
	    return "leichtem regen";
	    break;
	}
	}
	if (day_weather == 10) {
	switch (lang) {
	case "en":
	    return "rainy";
	    break;
	case "it":
	    return "pioggia";
	    break;
	case "fr":
	    return "pluie";
	    break;
	case "de":
	    return "regen";
	    break;
	}
	}
	if (day_weather == 11) {
	switch (lang) {
	case "en":
	    return "snow";
	    break;
	case "it":
	    return "neve";
	    break;
	case "fr":
	    return "neige";
	    break;
	case "de":
	    return "schnee";
	    break;
	}
	}
	if (day_weather == 12) {
	switch (lang) {
	case "en":
	    return "rain and snow";
	    break;
	case "it":
	    return "pioggia mista a neve";
	    break;
	case "fr":
	    return "pluie et neige";
	    break;
	case "de":
	    return "regen mit schnee";
	    break;
	}
	}
	if (day_weather == 13) {
	switch (lang) {
	case "en":
	    return "storm";
	    break;
	case "it":
	    return "temporale";
	    break;
	case "fr":
	    return "orage";
	    break;
	case "de":
	    return "sturm";
	    break;
	}
	}
	if (day_weather == 14) {
	switch (lang) {
	case "en":
	    return "fog";
	    break;
	case "it":
	    return "nebbia";
	    break;
	case "fr":
	    return "brouillarde";
	    break;
	case "de":
	    return "nebel";
	    break;
	}
	}
	if (day_weather == 15) {
	switch (lang) {
	case "en":
	    return "fog at dawn";
	    break;
	case "it":
	    return "nebbia al mattino";
	    break;
	case "fr":
	    return "brouillard le matin";
	    break;
	case "de":
	    return "nebel am morgen";
	    break;
	}
	}
	if (day_weather == 16) {
	switch (lang) {
	case "en":
	    return "storm and sunny intervals";
	    break;
	case "it":
	    return "temporale e schiarite";
	    break;
	case "fr":
	    return "orage";
	    break;
	case "de":
	    return "gewitter und blitz";
	    break;
	}
	}
	if (day_weather == 17) {
	switch (lang) {
	case "en":
	    return "hailstorm";
	    break;
	case "it":
	    return "grandine";
	    break;
	case "fr":
	    return "averse de grêle";
	break;
	case "de":
	    return "hagel";
	    break;
	}
	}
	if (day_weather == 18) {
	switch (lang) {
	case "en":
	    return "weak snow";
	    break;
	case "it":
	    return "neve debole";
	    break;
	case "fr":
	    return "neige légère";
	break;
	case "de":
	    return "schneeregene";
	    break;
	}
	}
	}
	
	function get_wind_ico(wind_speed) {
	if (wind_speed == 0) {
	return 1;
	}
	
	if (wind_speed >= .1 && wind_speed < 5) {
	return 2;
	}
	if (wind_speed >= 5 && wind_speed < 10) {
	return 3;
	}
	if (wind_speed >= 10 && wind_speed < 17) {
	return 4;
	}
	if (wind_speed >= 17) {
	return 5;
	}
	}
	
	function get_wave_pic(waveHeight) {
	if (waveHeight == 0) {
	return 1;
	}
	if (waveHeight > 0 && waveHeight <= .099) {
	return 2;
	}
	if (waveHeight >= .1 && waveHeight <= .499) {
	return 3;
	}
	if (waveHeight >= .5 && waveHeight <= 1.249) {
	return 4;
	}
	if (waveHeight >= 1.25 && waveHeight <= 2.499) {
	return 5;
	}
	if (waveHeight >= 2.5 && waveHeight <= 3.999) {
	return 6;
	}
	if (waveHeight >= 4 && waveHeight <= 5.999) {
	return 7;
	}
	if (waveHeight >= 6 && waveHeight <= 8.999) {
	return 8;
	}
	if (waveHeight >= 9 && waveHeight <= 13.999) {
	return 9;
	}
	if (waveHeight >= 14) {
	return 10;
	}
	}
	
	function get_wave_height(waveHeight) {
	if (waveHeight == 0) {
	switch (lang) {
	case "en":
	   return "calm (glassy)";
	    break;
	case "fr":
	    return "calme";
	    break;
	case "it":
	    return "calmo";
	    break;
	case "de":
	    return "ruhig (glasig)";
	     break;
	}
	}
	if (waveHeight > 0 && waveHeight <= .099) {
	switch (lang) {
	case "en":
	    return "calm (rippled)";
	    break;
	case "fr":
	    return "calme (ridée)";
	    break;
	case "it":
	    return "quasi calmo";
	    break;
	case "de":
	    return "ruhig (wellig)";
	    break;
	}
	}
	if (waveHeight >= .1 && waveHeight <= .499) {
	switch (lang) {
	case "en":
	    return "smooth";
	    break;
	case "fr":
	    return "belle";
	    break;
	case "it":
	    return "poco mosso";
	    break;
	case "de":
	    return "smooth";
	    break;
	}
	}
	if (waveHeight >= .5 && waveHeight <= 1.249) {
	switch (lang) {
	case "en":
	    return "slight";
	    break;
	case "fr":
	    return "peu agitée";
	    break;
	case "it":
	    return "mosso";
	    break;
	case "de":
	    return "slight";
	    break;
	}
	}
	if (waveHeight >= 1.25 && waveHeight <= 2.499) {
	switch (lang) {
	case "en":
	    return "moderate";
	    break;
	case "fr":
	    return "agitée";
	    break;
	case "it":
	    return "molto mosso";
	    break;
	case "de":
	    return "moderate";
	    break;
	}
	}
	if (waveHeight >= 2.5 && waveHeight <= 3.999) {
	switch (lang) {
	case "en":
	    return "rough";
	    break;
	case "fr":
	    return "forte";
	    break;
	case "it":
	    return "agitato";
	    break;
	case "de":
	    return "rough";
	    break;
	}
	}
	if (waveHeight >= 4 && waveHeight <= 5.999) {
	switch (lang) {
	case "en":
	    return "very rough";
	    break;
	case "fr":
	    return "trés forte";
	    break;
	case "it":
	    return "molto agitato";
	    break;
	case "de":
	    return "very rough";
	    break;
	}
	}
	if (waveHeight >= 6 && waveHeight <= 8.999) {
	switch (lang) {
	case "en":
	    return "high";
	    break;
	case "fr":
	    return "grosse";
	    break;
	case "it":
	    return "grosso";
	    break;
	case "de":
	    return "very rough";
	    break;
	}
	}
	if (waveHeight >= 9 && waveHeight <= 13.999) {
	switch (lang) {
	case "en":
	    return "very high";
	    break;
	case "fr":
	    return "trés grosse";
	    break;
	case "it":
	    return "molto grosso";
	    break;
	case "de":
	    return "very rough";
	    break;
	}
	}
	if (waveHeight >= 14) {
	switch (lang) {
	case "en":
	    return "phenomenal";
	    break;
	case "fr":
	    return "énorme";
	    break;
	case "it":
	    return "tempestoso";
	    break;
	case "de":
	    return "phenomenal";
	    break;
	}
	}
	}
	
	function nth(d) {
	if(d>3 && d<21) return 'th'; 
	switch (d % 10) {
	case 1:  return "st";
	case 2:  return "nd";
	case 3:  return "rd";
	default: return "th";
	}
	}
	
	var mesi = new Array();
	mesi[0] = "Gennaio";
	mesi[1] = "Febbraio";
	mesi[2] = "Marzo";
	mesi[3] = "Aprile";
	mesi[4] = "Maggio";
	mesi[5] = "Giugno";
	mesi[6] = "Luglio";
	mesi[7] = "Agosto";
	mesi[8] = "Settembre";
	mesi[9] = "Ottobre";
	mesi[10] = "Novembre";
	mesi[11] = "Dicembre";
	
	
	
	var month = new Array();
	month[0] = "January";
	month[1] = "February";
	month[2] = "March";
	month[3] = "April";
	month[4] = "May";
	month[5] = "June";
	month[6] = "July";
	month[7] = "August";
	month[8] = "September";
	month[9] = "October";
	month[10] = "November";
	month[11] = "December";
	
	var mois = new Array();
	mois[0] = "Janvier";
	mois[1] = "Février";
	mois[2] = "Mars";
	mois[3] = "Avril";
	mois[4] = "Mai";
	mois[5] = "Juin";
	mois[6] = "Juillet";
	mois[7] = "Août";
	mois[8] = "Septembre";
	mois[9] = "Octobre";
	mois[10] = "Novembre";
	mois[11] = "Décembre";
	
	var monate = new Array();
	monate[0] = "Januar";
	monate[1] = "Februar";
	monate[2] = "März";
	monate[3] = "April";
	monate[4] = "Mai";
	monate[5] = "Juni";
	monate[6] = "Juli";
	monate[7] = "August";
	monate[8] = "September";
	monate[9] = "Oktober";
	monate[10] = "November";
	monate[11] = "Dezember";
	
	var giorni = new Array();
	giorni[1] = "Lun";
	giorni[2] = "Mar";
	giorni[3] = "Mer";
	giorni[4] = "Gio";
	giorni[5] = "Ven";
	giorni[6] = "Sab";
	giorni[0] = "Dom";
	
	
	var jours = new Array();
	jours[1] = "Lun";
	jours[2] = "Mar";
	jours[3] = "Mer";
	jours[4] = "Jeu";
	jours[5] = "Ven";
	jours[6] = "Sam";
	jours[0] = "Dim";
	
	var tage = new Array();
	tage[1] = "Mo";
	tage[2] = "Di";
	tage[3] = "Mi";
	tage[4] = "Do";
	tage[5] = "Fr";
	tage[6] = "Sa";
	tage[0] = "So";
	
	
	function getMonthNames(){
		if(lang=="it"){
			return mesi;
		} else 	if(lang=="fr"){
			return mois;
		}	if(lang=="de"){
			return monate;
		} else {
			return month
		}
	}
	
	
	
	function getDowNames(){
		if(lang=="it"){
			return giorni;
		} else 	if(lang=="fr"){
			return jours;
		} else 	if(lang=="de"){
			return tage;
		} else {
			return null
		}
	}
	
	function getDowOffset(){
		 	if(lang=="it"){
		   		return 1;
		   	} else 	if(lang=="fr"){
		   		return 1;
		   	} else 	if(lang=="de"){
		   		return 1;
		   	} else {
		   		return 0  	
		   	}
	}
	
	function addDays(date, days) {
	    var result = new Date(date);
	    result.setDate(result.getDate() + days);
	    return result;
	}
	
	function get_locale() {
	    if (lang == "it") {
	        return "it-IT"
	    } else if (lang == "en") {
	        return "en-US"
	    } else if (lang == "fr") {
	        return "fr-FR"
	    } else if (lang == "de") {
	    	return "de-DE"
	    }
	}

	function decorateUrl(urlString) {
  var ga = window[window['GoogleAnalyticsObject']];
  var tracker;
  if (ga && typeof ga.getAll === 'function') {
    tracker = ga.getAll()[0]; // Uses the first tracker created on the page
    urlString = (new window.gaplugins.Linker(tracker)).decorate(urlString);
  }
  return urlString;
}

});
})(jQuery);





//touchswipe
(function(a){if(typeof define==="function"&&define.amd&&define.amd.jQuery){define(["jquery"],a)}else{a(jQuery)}}(function(f){var p="left",o="right",e="up",x="down",c="in",z="out",m="none",s="auto",l="swipe",t="pinch",A="tap",j="doubletap",b="longtap",y="hold",D="horizontal",u="vertical",i="all",r=10,g="start",k="move",h="end",q="cancel",a="ontouchstart" in window,v=window.navigator.msPointerEnabled&&!window.navigator.pointerEnabled,d=window.navigator.pointerEnabled||window.navigator.msPointerEnabled,B="TouchSwipe";var n={fingers:1,threshold:75,cancelThreshold:null,pinchThreshold:20,maxTimeThreshold:null,fingerReleaseThreshold:250,longTapThreshold:200,doubleTapThreshold:200,swipe:null,swipeLeft:null,swipeRight:null,swipeUp:null,swipeDown:null,swipeStatus:null,pinchIn:null,pinchOut:null,pinchStatus:null,click:null,tap:null,doubleTap:null,longTap:null,hold:null,triggerOnTouchEnd:true,triggerOnTouchLeave:false,allowPageScroll:"auto",fallbackToMouseEvents:true,excludedElements:"label, button, input, select, textarea, a, .noSwipe"};f.fn.swipe=function(G){var F=f(this),E=F.data(B);if(E&&typeof G==="string"){if(E[G]){return E[G].apply(this,Array.prototype.slice.call(arguments,1))}else{f.error("Method "+G+" does not exist on jQuery.swipe")}}else{if(!E&&(typeof G==="object"||!G)){return w.apply(this,arguments)}}return F};f.fn.swipe.defaults=n;f.fn.swipe.phases={PHASE_START:g,PHASE_MOVE:k,PHASE_END:h,PHASE_CANCEL:q};f.fn.swipe.directions={LEFT:p,RIGHT:o,UP:e,DOWN:x,IN:c,OUT:z};f.fn.swipe.pageScroll={NONE:m,HORIZONTAL:D,VERTICAL:u,AUTO:s};f.fn.swipe.fingers={ONE:1,TWO:2,THREE:3,ALL:i};function w(E){if(E&&(E.allowPageScroll===undefined&&(E.swipe!==undefined||E.swipeStatus!==undefined))){E.allowPageScroll=m}if(E.click!==undefined&&E.tap===undefined){E.tap=E.click}if(!E){E={}}E=f.extend({},f.fn.swipe.defaults,E);return this.each(function(){var G=f(this);var F=G.data(B);if(!F){F=new C(this,E);G.data(B,F)}})}function C(a4,av){var az=(a||d||!av.fallbackToMouseEvents),J=az?(d?(v?"MSPointerDown":"pointerdown"):"touchstart"):"mousedown",ay=az?(d?(v?"MSPointerMove":"pointermove"):"touchmove"):"mousemove",U=az?(d?(v?"MSPointerUp":"pointerup"):"touchend"):"mouseup",S=az?null:"mouseleave",aD=(d?(v?"MSPointerCancel":"pointercancel"):"touchcancel");var ag=0,aP=null,ab=0,a1=0,aZ=0,G=1,aq=0,aJ=0,M=null;var aR=f(a4);var Z="start";var W=0;var aQ=null;var T=0,a2=0,a5=0,ad=0,N=0;var aW=null,af=null;try{aR.bind(J,aN);aR.bind(aD,a9)}catch(ak){f.error("events not supported "+J+","+aD+" on jQuery.swipe")}this.enable=function(){aR.bind(J,aN);aR.bind(aD,a9);return aR};this.disable=function(){aK();return aR};this.destroy=function(){aK();aR.data(B,null);aR=null};this.option=function(bc,bb){if(av[bc]!==undefined){if(bb===undefined){return av[bc]}else{av[bc]=bb}}else{f.error("Option "+bc+" does not exist on jQuery.swipe.options")}return null};function aN(bd){if(aB()){return}if(f(bd.target).closest(av.excludedElements,aR).length>0){return}var be=bd.originalEvent?bd.originalEvent:bd;var bc,bb=a?be.touches[0]:be;Z=g;if(a){W=be.touches.length}else{bd.preventDefault()}ag=0;aP=null;aJ=null;ab=0;a1=0;aZ=0;G=1;aq=0;aQ=aj();M=aa();R();if(!a||(W===av.fingers||av.fingers===i)||aX()){ai(0,bb);T=at();if(W==2){ai(1,be.touches[1]);a1=aZ=au(aQ[0].start,aQ[1].start)}if(av.swipeStatus||av.pinchStatus){bc=O(be,Z)}}else{bc=false}if(bc===false){Z=q;O(be,Z);return bc}else{if(av.hold){af=setTimeout(f.proxy(function(){aR.trigger("hold",[be.target]);if(av.hold){bc=av.hold.call(aR,be,be.target)}},this),av.longTapThreshold)}ao(true)}return null}function a3(be){var bh=be.originalEvent?be.originalEvent:be;if(Z===h||Z===q||am()){return}var bd,bc=a?bh.touches[0]:bh;var bf=aH(bc);a2=at();if(a){W=bh.touches.length}if(av.hold){clearTimeout(af)}Z=k;if(W==2){if(a1==0){ai(1,bh.touches[1]);a1=aZ=au(aQ[0].start,aQ[1].start)}else{aH(bh.touches[1]);aZ=au(aQ[0].end,aQ[1].end);aJ=ar(aQ[0].end,aQ[1].end)}G=a7(a1,aZ);aq=Math.abs(a1-aZ)}if((W===av.fingers||av.fingers===i)||!a||aX()){aP=aL(bf.start,bf.end);al(be,aP);ag=aS(bf.start,bf.end);ab=aM();aI(aP,ag);if(av.swipeStatus||av.pinchStatus){bd=O(bh,Z)}if(!av.triggerOnTouchEnd||av.triggerOnTouchLeave){var bb=true;if(av.triggerOnTouchLeave){var bg=aY(this);bb=E(bf.end,bg)}if(!av.triggerOnTouchEnd&&bb){Z=aC(k)}else{if(av.triggerOnTouchLeave&&!bb){Z=aC(h)}}if(Z==q||Z==h){O(bh,Z)}}}else{Z=q;O(bh,Z)}if(bd===false){Z=q;O(bh,Z)}}function L(bb){var bc=bb.originalEvent;if(a){if(bc.touches.length>0){F();return true}}if(am()){W=ad}a2=at();ab=aM();if(ba()||!an()){Z=q;O(bc,Z)}else{if(av.triggerOnTouchEnd||(av.triggerOnTouchEnd==false&&Z===k)){bb.preventDefault();Z=h;O(bc,Z)}else{if(!av.triggerOnTouchEnd&&a6()){Z=h;aF(bc,Z,A)}else{if(Z===k){Z=q;O(bc,Z)}}}}ao(false);return null}function a9(){W=0;a2=0;T=0;a1=0;aZ=0;G=1;R();ao(false)}function K(bb){var bc=bb.originalEvent;if(av.triggerOnTouchLeave){Z=aC(h);O(bc,Z)}}function aK(){aR.unbind(J,aN);aR.unbind(aD,a9);aR.unbind(ay,a3);aR.unbind(U,L);if(S){aR.unbind(S,K)}ao(false)}function aC(bf){var be=bf;var bd=aA();var bc=an();var bb=ba();if(!bd||bb){be=q}else{if(bc&&bf==k&&(!av.triggerOnTouchEnd||av.triggerOnTouchLeave)){be=h}else{if(!bc&&bf==h&&av.triggerOnTouchLeave){be=q}}}return be}function O(bd,bb){var bc=undefined;if(I()||V()){bc=aF(bd,bb,l)}else{if((P()||aX())&&bc!==false){bc=aF(bd,bb,t)}}if(aG()&&bc!==false){bc=aF(bd,bb,j)}else{if(ap()&&bc!==false){bc=aF(bd,bb,b)}else{if(ah()&&bc!==false){bc=aF(bd,bb,A)}}}if(bb===q){a9(bd)}if(bb===h){if(a){if(bd.touches.length==0){a9(bd)}}else{a9(bd)}}return bc}function aF(be,bb,bd){var bc=undefined;if(bd==l){aR.trigger("swipeStatus",[bb,aP||null,ag||0,ab||0,W,aQ]);if(av.swipeStatus){bc=av.swipeStatus.call(aR,be,bb,aP||null,ag||0,ab||0,W,aQ);if(bc===false){return false}}if(bb==h&&aV()){aR.trigger("swipe",[aP,ag,ab,W,aQ]);if(av.swipe){bc=av.swipe.call(aR,be,aP,ag,ab,W,aQ);if(bc===false){return false}}switch(aP){case p:aR.trigger("swipeLeft",[aP,ag,ab,W,aQ]);if(av.swipeLeft){bc=av.swipeLeft.call(aR,be,aP,ag,ab,W,aQ)}break;case o:aR.trigger("swipeRight",[aP,ag,ab,W,aQ]);if(av.swipeRight){bc=av.swipeRight.call(aR,be,aP,ag,ab,W,aQ)}break;case e:aR.trigger("swipeUp",[aP,ag,ab,W,aQ]);if(av.swipeUp){bc=av.swipeUp.call(aR,be,aP,ag,ab,W,aQ)}break;case x:aR.trigger("swipeDown",[aP,ag,ab,W,aQ]);if(av.swipeDown){bc=av.swipeDown.call(aR,be,aP,ag,ab,W,aQ)}break}}}if(bd==t){aR.trigger("pinchStatus",[bb,aJ||null,aq||0,ab||0,W,G,aQ]);if(av.pinchStatus){bc=av.pinchStatus.call(aR,be,bb,aJ||null,aq||0,ab||0,W,G,aQ);if(bc===false){return false}}if(bb==h&&a8()){switch(aJ){case c:aR.trigger("pinchIn",[aJ||null,aq||0,ab||0,W,G,aQ]);if(av.pinchIn){bc=av.pinchIn.call(aR,be,aJ||null,aq||0,ab||0,W,G,aQ)}break;case z:aR.trigger("pinchOut",[aJ||null,aq||0,ab||0,W,G,aQ]);if(av.pinchOut){bc=av.pinchOut.call(aR,be,aJ||null,aq||0,ab||0,W,G,aQ)}break}}}if(bd==A){if(bb===q||bb===h){clearTimeout(aW);clearTimeout(af);if(Y()&&!H()){N=at();aW=setTimeout(f.proxy(function(){N=null;aR.trigger("tap",[be.target]);if(av.tap){bc=av.tap.call(aR,be,be.target)}},this),av.doubleTapThreshold)}else{N=null;aR.trigger("tap",[be.target]);if(av.tap){bc=av.tap.call(aR,be,be.target)}}}}else{if(bd==j){if(bb===q||bb===h){clearTimeout(aW);N=null;aR.trigger("doubletap",[be.target]);if(av.doubleTap){bc=av.doubleTap.call(aR,be,be.target)}}}else{if(bd==b){if(bb===q||bb===h){clearTimeout(aW);N=null;aR.trigger("longtap",[be.target]);if(av.longTap){bc=av.longTap.call(aR,be,be.target)}}}}}return bc}function an(){var bb=true;if(av.threshold!==null){bb=ag>=av.threshold}return bb}function ba(){var bb=false;if(av.cancelThreshold!==null&&aP!==null){bb=(aT(aP)-ag)>=av.cancelThreshold}return bb}function ae(){if(av.pinchThreshold!==null){return aq>=av.pinchThreshold}return true}function aA(){var bb;if(av.maxTimeThreshold){if(ab>=av.maxTimeThreshold){bb=false}else{bb=true}}else{bb=true}return bb}function al(bb,bc){if(av.allowPageScroll===m||aX()){bb.preventDefault()}else{var bd=av.allowPageScroll===s;switch(bc){case p:if((av.swipeLeft&&bd)||(!bd&&av.allowPageScroll!=D)){bb.preventDefault()}break;case o:if((av.swipeRight&&bd)||(!bd&&av.allowPageScroll!=D)){bb.preventDefault()}break;case e:if((av.swipeUp&&bd)||(!bd&&av.allowPageScroll!=u)){bb.preventDefault()}break;case x:if((av.swipeDown&&bd)||(!bd&&av.allowPageScroll!=u)){bb.preventDefault()}break}}}function a8(){var bc=aO();var bb=X();var bd=ae();return bc&&bb&&bd}function aX(){return !!(av.pinchStatus||av.pinchIn||av.pinchOut)}function P(){return !!(a8()&&aX())}function aV(){var be=aA();var bg=an();var bd=aO();var bb=X();var bc=ba();var bf=!bc&&bb&&bd&&bg&&be;return bf}function V(){return !!(av.swipe||av.swipeStatus||av.swipeLeft||av.swipeRight||av.swipeUp||av.swipeDown)}function I(){return !!(aV()&&V())}function aO(){return((W===av.fingers||av.fingers===i)||!a)}function X(){return aQ[0].end.x!==0}function a6(){return !!(av.tap)}function Y(){return !!(av.doubleTap)}function aU(){return !!(av.longTap)}function Q(){if(N==null){return false}var bb=at();return(Y()&&((bb-N)<=av.doubleTapThreshold))}function H(){return Q()}function ax(){return((W===1||!a)&&(isNaN(ag)||ag<av.threshold))}function a0(){return((ab>av.longTapThreshold)&&(ag<r))}function ah(){return !!(ax()&&a6())}function aG(){return !!(Q()&&Y())}function ap(){return !!(a0()&&aU())}function F(){a5=at();ad=event.touches.length+1}function R(){a5=0;ad=0}function am(){var bb=false;if(a5){var bc=at()-a5;if(bc<=av.fingerReleaseThreshold){bb=true}}return bb}function aB(){return !!(aR.data(B+"_intouch")===true)}function ao(bb){if(bb===true){aR.bind(ay,a3);aR.bind(U,L);if(S){aR.bind(S,K)}}else{aR.unbind(ay,a3,false);aR.unbind(U,L,false);if(S){aR.unbind(S,K,false)}}aR.data(B+"_intouch",bb===true)}function ai(bc,bb){var bd=bb.identifier!==undefined?bb.identifier:0;aQ[bc].identifier=bd;aQ[bc].start.x=aQ[bc].end.x=bb.pageX||bb.clientX;aQ[bc].start.y=aQ[bc].end.y=bb.pageY||bb.clientY;return aQ[bc]}function aH(bb){var bd=bb.identifier!==undefined?bb.identifier:0;var bc=ac(bd);bc.end.x=bb.pageX||bb.clientX;bc.end.y=bb.pageY||bb.clientY;return bc}function ac(bc){for(var bb=0;bb<aQ.length;bb++){if(aQ[bb].identifier==bc){return aQ[bb]}}}function aj(){var bb=[];for(var bc=0;bc<=5;bc++){bb.push({start:{x:0,y:0},end:{x:0,y:0},identifier:0})}return bb}function aI(bb,bc){bc=Math.max(bc,aT(bb));M[bb].distance=bc}function aT(bb){if(M[bb]){return M[bb].distance}return undefined}function aa(){var bb={};bb[p]=aw(p);bb[o]=aw(o);bb[e]=aw(e);bb[x]=aw(x);return bb}function aw(bb){return{direction:bb,distance:0}}function aM(){return a2-T}function au(be,bd){var bc=Math.abs(be.x-bd.x);var bb=Math.abs(be.y-bd.y);return Math.round(Math.sqrt(bc*bc+bb*bb))}function a7(bb,bc){var bd=(bc/bb)*1;return bd.toFixed(2)}function ar(){if(G<1){return z}else{return c}}function aS(bc,bb){return Math.round(Math.sqrt(Math.pow(bb.x-bc.x,2)+Math.pow(bb.y-bc.y,2)))}function aE(be,bc){var bb=be.x-bc.x;var bg=bc.y-be.y;var bd=Math.atan2(bg,bb);var bf=Math.round(bd*180/Math.PI);if(bf<0){bf=360-Math.abs(bf)}return bf}function aL(bc,bb){var bd=aE(bc,bb);if((bd<=45)&&(bd>=0)){return p}else{if((bd<=360)&&(bd>=315)){return p}else{if((bd>=135)&&(bd<=225)){return o}else{if((bd>45)&&(bd<135)){return x}else{return e}}}}}function at(){var bb=new Date();return bb.getTime()}function aY(bb){bb=f(bb);var bd=bb.offset();var bc={left:bd.left,right:bd.left+bb.outerWidth(),top:bd.top,bottom:bd.top+bb.outerHeight()};return bc}function E(bb,bc){return(bb.x>bc.left&&bb.x<bc.right&&bb.y>bc.top&&bb.y<bc.bottom)}}}));


//shorten
/*
 * jQuery Shorten plugin 1.1.0
 *
 * Copyright (c) 2014 Viral Patel
 * http://viralpatel.net
 *
 * Licensed under the MIT license:
 *   http://www.opensource.org/licenses/mit-license.php
 */

/*
** updated by Jeff Richardson
** Updated to use strict,
** IE 7 has a "bug" It is returning undefined when trying to reference string characters in this format
** content[i]. IE 7 allows content.charAt(i) This works fine in all modern browsers.
** I've also added brackets where they weren't added just for readability (mostly for me).
*/

(function($) {
    $.fn.shorten = function(settings) {
        "use strict";

        var config = {
            showChars: 100,
            minHideChars: 10,
            ellipsesText: "...",
            moreText: "more",
            lessText: "less",
            onLess: function() {},
            onMore: function() {},
            errMsg: null,
            force: false
        };

        if (settings) {
            $.extend(config, settings);
        }

        if ($(this).data('jquery.shorten') && !config.force) {
            return false;
        }
        $(this).data('jquery.shorten', true);

        $(document).off("click", '.morelink');

        $(document).on({
            click: function() {

                var $this = $(this);
                if ($this.hasClass('less')) {
                    $this.removeClass('less');
                    $this.html(config.moreText);
                    $this.parent().prev().animate({'height':'0'+'%'},0, 'linear', function () { $this.parent().prev().prev().show(); }).hide(0, function() {
                        config.onLess();
                      });

                } else {
                    $this.addClass('less');
                    $this.html(config.lessText);
                    $this.parent().prev().animate({'height':'100'+'%'},0, 'linear', function () { $this.parent().prev().prev().hide(); }).show(0, function() {
                        config.onMore();
                      });
                    
                }
                return false;
            }
        }, '.morelink');

        return this.each(function() {
            var $this = $(this);

            var content = $this.html();
            var contentlen = $this.text().length;
            if (contentlen > config.showChars + config.minHideChars) {
                var c = content.substr(0, config.showChars);
                if (c.indexOf('<') >= 0) // If there's HTML don't want to cut it
                {
                    var inTag = false; // I'm in a tag?
                    var bag = ''; // Put the characters to be shown here
                    var countChars = 0; // Current bag size
                    var openTags = []; // Stack for opened tags, so I can close them later
                    var tagName = null;

                    for (var i = 0, r = 0; r <= config.showChars; i++) {
                        if (content[i] == '<' && !inTag) {
                            inTag = true;

                            // This could be "tag" or "/tag"
                            tagName = content.substring(i + 1, content.indexOf('>', i));

                            // If its a closing tag
                            if (tagName[0] == '/') {


                                if (tagName != '/' + openTags[0]) {
                                    config.errMsg = 'ERROR en HTML: the top of the stack should be the tag that closes';
                                } else {
                                    openTags.shift(); // Pops the last tag from the open tag stack (the tag is closed in the retult HTML!)
                                }

                            } else {
                                // There are some nasty tags that don't have a close tag like <br/>
                                if (tagName.toLowerCase() != 'br') {
                                    openTags.unshift(tagName); // Add to start the name of the tag that opens
                                }
                            }
                        }
                        if (inTag && content[i] == '>') {
                            inTag = false;
                        }

                        if (inTag) { bag += content.charAt(i); } // Add tag name chars to the result
                        else {
                            r++;
                            if (countChars <= config.showChars) {
                                bag += content.charAt(i); // Fix to ie 7 not allowing you to reference string characters using the []
                                countChars++;
                            } else // Now I have the characters needed
                            {
                                if (openTags.length > 0) // I have unclosed tags
                                {
                                    //console.log('They were open tags');
                                    //console.log(openTags);
                                    for (j = 0; j < openTags.length; j++) {
                                        //console.log('Cierro tag ' + openTags[j]);
                                        bag += '</' + openTags[j] + '>'; // Close all tags that were opened

                                        // You could shift the tag from the stack to check if you end with an empty stack, that means you have closed all open tags
                                    }
                                    break;
                                }
                            }
                        }
                    }
                    c = $('<div/>').html(bag + '<span class="ellip">' + config.ellipsesText + '</span>').html();
                }else{
                    c+=config.ellipsesText;
                }

                var html = '<div class="shortcontent">' + c +
                    '</div><div class="allcontent">' + content +
                    '</div><span><a href="javascript://nop/" class="morelink">' + config.moreText + '</a></span>';

                $this.html(html);
                $this.find(".allcontent").hide(); // Hide all text
                $('.shortcontent p:last', $this).css('margin-bottom', 0); //Remove bottom margin on last paragraph as it's likely shortened
            }
        });

    };

})(jQuery);