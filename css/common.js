$(document).ready(function(){  

	var jbOffset = $( '#header' ).offset(); 
	$( window ).scroll( function() { 
			if ( $( document ).scrollTop() > jbOffset.top ) { 
					$( '#header' ).addClass( 'jbFixed' ); 
			} else { 
					$( '#header' ).removeClass( 'jbFixed' ); 
			} 
	});
	$(function(){
		$(".topnav").hover(function() {
			$(this).parent().find(".subnav").slideDown('normal').show(); 
			$(this).parent().hover(function() {  
				}, function(){  
				$(this).parent().find(".subnav").slideUp( 500 ); 
			});  
		});  

	});
});  





function setPage(arg) { //navigation hn:1depth, sn:2depth, cn:3depth 를 받음
	page = jQuery.extend({
		hn : "",
		sn : "",
		cn : ""
	}, arg || {});
	if(window.console) {
		console.log("hn : " + page.hn + "\nsn : " + page.sn + "\ncn : " + page.cn);
	}
	if(page.hn != 10) {
		$(".hn" + page.hn + " a").addClass("on"); //1depth 활성
	}

	if(page.hn >= 11) {
		$(".hn" + page.hn + " a").addClass("on"); //유틸 1depth 활성
	}

	$(".sn" + page.sn).find(" a").addClass("on").end().find("> ul").addClass("on").find("> li.cn" + page.cn + " a").addClass("on"); //2depth 활성
}
