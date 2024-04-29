  // 2. This code loads the IFrame Player API code asynchronously.
  var tag = document.createElement('script');

  tag.src = "https://www.youtube.com/iframe_api";
  var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  // 3. This function creates an <iframe> (and YouTube player)
  //    after the API code downloads.
  function onYouTubeIframeAPIReady() {
    new YT.Player('player', {
      // <div id="player"></div>
      videoId: 'Y6_X0UoEsBQ',
      playerVars: {
        autoplay: true, 
        loop : true,
        playlist: 'Y6_X0UoEsBQ',
      },
      events: {
        onReady : function (e) {
          e.target.mute(); // 음소거 
        }
      }
    });
  }