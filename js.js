/* COPYRIGHT JAN WOLF
www.jan-wolf.de */

//Variables
var loaded = -1;
var dealer;
var firstInit = true;
var locations = [
	{
		"name" : "Bangkok Night Market",
		"images" : ["assets/location31_0.jpg", "assets/location31_1.jpg", "assets/location31_2.jpg", "assets/location31_3.jpg"],
		"audios" : ["assets/location31_0.mp3", "assets/location31_1.mp3", "assets/location31_2.mp3", "assets/location31_3.mp3"]
	},
	{
		"name" : "Big Intersection",
		"images" : ["assets/location14_0.jpg", "assets/location14_1.jpg", "assets/location14_2.jpg", "assets/location14_3.jpg"],
		"audios" : ["assets/location14_0.mp3", "assets/location14_1.mp3", "assets/location14_2.mp3", "assets/location14_3.mp3"]
	},
	{
		"name" : "Wires & Cars",
		"images" : ["assets/location15_0.jpg", "assets/location15_1.jpg", "assets/location15_2.jpg", "assets/location15_3.jpg"],
		"audios" : ["assets/location15_0.mp3", "assets/location15_1.mp3", "assets/location15_2.mp3", "assets/location15_3.mp3"]
	},
	{
		"name" : "Under the Skytrain",
		"images" : ["assets/location16_0.jpg", "assets/location16_1.jpg", "assets/location16_2.jpg", "assets/location16_3.jpg"],
		"audios" : ["assets/location16_0.mp3", "assets/location16_1.mp3", "assets/location16_2.mp3", "assets/location16_3.mp3"]
	},
	{
		"name" : "Christmas Tree",
		"images" : ["assets/location17_0.jpg", "assets/location17_1.jpg", "assets/location17_2.jpg", "assets/location17_3.jpg"],
		"audios" : ["assets/location17_0.mp3", "assets/location17_1.mp3", "assets/location17_2.mp3", "assets/location17_3.mp3"]
	},
	{
		"name" : "Siam Paragon Parking",
		"images" : ["assets/location18_0.jpg", "assets/location18_1.jpg", "assets/location18_2.jpg", "assets/location18_3.jpg"],
		"audios" : ["assets/location18_0.mp3", "assets/location18_1.mp3", "assets/location18_2.mp3", "assets/location18_3.mp3"]
	},
	{
		"name" : "Construction Site",
		"images" : ["assets/location19_0.jpg", "assets/location19_1.jpg", "assets/location19_2.jpg", "assets/location19_3.jpg"],
		"audios" : ["assets/location19_0.mp3", "assets/location19_1.mp3", "assets/location19_2.mp3", "assets/location19_3.mp3"]
	},
	{
		"name" : "Sunshades",
		"images" : ["assets/location20_0.jpg", "assets/location20_1.jpg", "assets/location20_2.jpg", "assets/location20_3.jpg"],
		"audios" : ["assets/location20_0.mp3", "assets/location20_1.mp3", "assets/location20_2.mp3", "assets/location20_3.mp3"]
	},
	{
		"name" : "Food-Court",
		"images" : ["assets/location21_0.jpg", "assets/location21_1.jpg", "assets/location21_2.jpg", "assets/location21_3.jpg"],
		"audios" : ["assets/location21_0.mp3", "assets/location21_1.mp3", "assets/location21_2.mp3", "assets/location21_3.mp3"]
	},
	{
		"name" : "Parking Exit",
		"images" : ["assets/location22_0.jpg", "assets/location22_1.jpg", "assets/location22_2.jpg", "assets/location22_3.jpg"],
		"audios" : ["assets/location22_0.mp3", "assets/location22_1.mp3", "assets/location22_2.mp3", "assets/location22_3.mp3"]
	},
	{
		"name" : "Skywalk Observations",
		"images" : ["assets/location23_0.jpg", "assets/location23_1.jpg", "assets/location23_2.jpg", "assets/location23_3.jpg"],
		"audios" : ["assets/location23_0.mp3", "assets/location23_1.mp3", "assets/location23_2.mp3", "assets/location23_3.mp3"]
	},
	{
		"name" : "Bus Station",
		"images" : ["assets/location24_0.jpg", "assets/location24_1.jpg", "assets/location24_2.jpg", "assets/location24_3.jpg"],
		"audios" : ["assets/location24_0.mp3", "assets/location24_1.mp3", "assets/location24_2.mp3", "assets/location24_3.mp3"]
	},
	{
		"name" : "Parking Check",
		"images" : ["assets/location25_0.jpg", "assets/location25_1.jpg", "assets/location25_2.jpg", "assets/location25_3.jpg"],
		"audios" : ["assets/location25_0.mp3", "assets/location25_1.mp3", "assets/location25_2.mp3", "assets/location25_3.mp3"]
	},
	{
		"name" : "Broken Escalator",
		"images" : ["assets/location26_0.jpg", "assets/location26_1.jpg", "assets/location26_2.jpg", "assets/location26_3.jpg"],
		"audios" : ["assets/location26_0.mp3", "assets/location26_1.mp3", "assets/location26_2.mp3", "assets/location26_3.mp3"]
	},
	{
		"name" : "Moving Cranes",
		"images" : ["assets/location27_0.jpg", "assets/location27_1.jpg", "assets/location27_2.jpg", "assets/location27_3.jpg"],
		"audios" : ["assets/location27_0.mp3", "assets/location27_1.mp3", "assets/location27_2.mp3", "assets/location27_3.mp3"]
	},
	{
		"name" : "Fast Food @Siam Square",
		"images" : ["assets/location28_0.jpg", "assets/location28_1.jpg", "assets/location28_2.jpg", "assets/location28_3.jpg"],
		"audios" : ["assets/location28_0.mp3", "assets/location28_1.mp3", "assets/location28_2.mp3", "assets/location28_3.mp3"]
	},
	{
		"name" : "Delivery @Siam Square",
		"images" : ["assets/location29_0.jpg", "assets/location29_1.jpg", "assets/location29_2.jpg", "assets/location29_3.jpg"],
		"audios" : ["assets/location29_0.mp3", "assets/location29_1.mp3", "assets/location29_2.mp3", "assets/location29_3.mp3"]
	},
	{
		"name" : "Tuk-Tuk Stand",
		"images" : ["assets/location30_0.jpg", "assets/location30_1.jpg", "assets/location30_2.jpg", "assets/location30_3.jpg"],
		"audios" : ["assets/location30_0.mp3", "assets/location30_1.mp3", "assets/location30_2.mp3", "assets/location30_3.mp3"]
	},
];

function within(mi,ma,val){
	return Math.max(mi,Math.min(ma,val));
}

function getVol(i) {
	i--;
	return within(0,1,-i*i+1);
}

function timeshift(percentage) {
	//mute all
	jQuery(".audio").prop("volume", 0);

	//hideall
	jQuery(".image:gt(0)").css("opacity", 0);

	if(percentage < 0.33 ) {
		jQuery("#audio0").prop("volume", getVol(percentage/0.66+1));
		jQuery("#audio1").prop("volume", getVol(percentage/0.33+1));
		jQuery("#image1").css("opacity", within(0,1,(percentage/0.33)));

	} else if(percentage < 0.66 ) {
		jQuery("#audio1").prop("volume", getVol(percentage/0.33+1));
		jQuery("#audio2").prop("volume", getVol((percentage-0.33)/0.33));
		jQuery("#image1").css("opacity", 1);
		jQuery("#image2").css("opacity", within(0,1,(percentage-0.33)/0.33));

	} else {
		jQuery("#audio2").prop("volume", getVol((percentage-0.33)/0.33));
		jQuery("#audio3").prop("volume", getVol((percentage-0.66)/0.33));
		jQuery("#image2").css("opacity", 1);
		jQuery("#image3").css("opacity", within(0,1,(percentage-0.66)/0.33));
	}
}

function loadTopic(id){
	loaded = 0;
	name = locations[id]["name"];
	audios_urls = locations[id]["audios"];
	images_urls = locations[id]["images"];

	//Fade Audio
	jQuery(".audio").animate({volume: 0}, 500).promise().done(function(){

		//Fade Images
		jQuery(".image").addClass("transition").css({opacity:0});

		//Load Images & Audio
		setTimeout(function(){
			dealer.setValue(0,0);
			for(i = 0; i < 4; i++) {
				imgObj = new Image();
				audioObj = new Audio();
				onloadedfunction = function(){
					if(this instanceof Image)
						jQuery("#image"+this.id).css("background-image", "url("+this.src+")");
					else {
						audiosrc = jQuery("#audio"+this.id+" source");
						audiosrc.attr("src", this.src).appendTo(audiosrc.parent());
					}

					if(loaded++ >= 7) {
						jQuery(".image:eq(0)").css({opacity: 1});
						jQuery(".audio:eq(0)").delay(500).animate({volume: 1}, 500).promise().done(function(){
							jQuery(".image").removeClass("transition");
							loaded = -1;
						});

						if(firstInit) {

							firstInit = false;

							//Info Handlers - Fade In
							jQuery("#header, #caption, #hints").removeClass("transluent");

							//Info Handlers - Click
							jQuery('#info').on('click', function(e){
								jQuery("#header").toggleClass("expanded");
								jQuery("#caption, #hints").toggleClass("transluent");
							});
						}
					}
				};

				imgObj.onload = onloadedfunction;
				imgObj.src = images_urls[i];
				imgObj.id = i;
    			audioObj.addEventListener('canplaythrough', onloadedfunction, false);
    			audioObj.src = audios_urls[i];
				audioObj.id = i;
			}
		}, 500);
	});

	//Set Title
	jQuery("#title").html(name);
}

jQuery(document).ready(function(){

	//Add Handler & Fill City List..
	citylist = jQuery("#header select");
	citylist.change(function(e) {
		loadTopic(jQuery(this).find(":selected").val());
	});
	for(i = 0; i < locations.length; i++)
		jQuery("<option>").html(locations[i]["name"]).val(i).appendTo(citylist);

	//Timeline
	dealer = new Dragdealer('hints_wrapper', {
		animationCallback: function(x, y) {
		  timeshift(x);
	  }
	});

	//Countdown
	var time = 0;
	setInterval(function(){
		time++;
		jQuery("#countdown span").html(time%60 + " second" + ((time%60 == 1) ? "" : "s"));
		if(time >= 60)
			jQuery("#countdown span").prepend(Math.floor(time / 60) + " minute" + ((time / 60 < 2) ? "" : "s") + " and ");
	}, 1000);

	//Load Topics..
	loadTopic(0);

});
