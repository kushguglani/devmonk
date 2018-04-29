(function( window, document) { 
    
    var video = document.getElementsByTagName('video')[0], 
		videoControls = document.getElementById('videoControls'),	 
		play = document.getElementById('play'), 
		 
		progressContainer = document.getElementById("progress"), 
		progressHolder = document.getElementById("progress_box"), 
		playProgressBar = document.getElementById("play_progress"), 
		 
		fullScreenToggleButton = document.getElementById("fullScreen");
    
    var videoPlayer = {

        showHideControls : function() { 
            // Shows and hides the video player. 
            video.addEventListener('mouseover', function() { 
                videoControls.style.opacity = 1; 
            }, false); 
             
            videoControls.addEventListener('mouseover', function() { 
                videoControls.style.opacity = 1; 
            }, false); 
             
            video.addEventListener('mouseout', function() { 
                videoControls.style.opacity = 0; 
            }, false); 
             
            videoControls.addEventListener('mouseout', function() { 
                videoControls.style.opacity = 0; 
            }, false); 
        }, 

        initializeControls : function() { 
            // When all meta information has loaded, show controls 
            videoPlayer.showHideControls(); 
        },
        init : function() { 
            // this is equal to the videoPlayer object. 
            var that = this; 
             
            // Helpful CSS trigger for JS.  
            document.documentElement.className = 'js'; 
             
            // Get rid of the default controls, because we'll use our own. 
            video.removeAttribute('controls'); 
             
            // When meta data is ready, show the controls 
            video.addEventListener('loadeddata', this.initializeControls, false); 
        }
    }; 
     
    videoPlayer.init(); 
}( this, document ));