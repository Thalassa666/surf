$(window).on('load', e => {
    let player;
    const playerContainer = $('.player');
  
    let eventsInit = () => { 
      player = document.getElementById("video");
      $(".player__start").on('click', e => {
        e.preventDefault();
  
        if (playerContainer.hasClass('paused')) {
          playerContainer.removeClass('paused');
          player.pause();
        } else {
          playerContainer.addClass('paused');   
          player.play();
        }
        if (!playerContainer.hasClass('active')) {
          playerContainer.addClass('active');
        }
      });
  
      $('.player__playback').on('click', e => {
        const bar = $(e.currentTarget);
        const clickedPosition = e.originalEvent.layerX;
        const newButtonPositionPercent = (clickedPosition / bar.width()) * 100;
        const newPlayBackPosition = (player.duration / 100) * newButtonPositionPercent;
  
        if (!playerContainer.hasClass('active')) {
          playerContainer.addClass('active');
        }
  
        if (!playerContainer.hasClass('paused')) {
          playerContainer.addClass('paused');
          player.play();
        }
  
        $('.player__playback-button').css('left', `${newButtonPositionPercent}%`);
  
        player.currentTime = newPlayBackPosition;
      });
  
      $('.player__video-btn').on('click', e => {
        const button = document.getElementById('videobtn');
        button.style.display = 'none';
        if (playerContainer.hasClass('active')) {
          playerContainer.removeClass('active');
        } else {
          playerContainer.addClass('active');
        }
  
        if (playerContainer.hasClass('paused')) {
          playerContainer.removeClass('paused');
          player.pause();
        } else {
          playerContainer.addClass('paused');
          player.play();
        }
      });
      // Типо звук
      $('.player__sound').on('click', e => {
        const bar = $(e.currentTarget);
        const clickedPosition = e.originalEvent.layerX;
        const newButtonPositionPercent = (clickedPosition / bar.width()) * 100;
        const newPlayBackPosition = (1 / 100) * newButtonPositionPercent;
  
        $('.player__sound-button').css('left', `${newButtonPositionPercent}%`);
  
        player.volume = newPlayBackPosition;
      });
  
      $('.player__mute').on('click', e => {
        if (!player.muted) {
          console.log('Мут звука');
          // $('.player__sound-button').css('left', '0');
          $('.player__sound-button').addClass('muted');
          player.muted = true;
        } else {
          console.log('Убираем мут');
          $('.player__sound-button').removeClass('muted');
          player.muted = false;
        }
      });
    }
  
    const formatTime = timeSec => { // Форматирование времени (добавление нулей)
      const roundTime = Math.round(timeSec);
  
      const minutes = addZero(Math.floor(roundTime / 60));
      const seconds = addZero(roundTime - minutes * 60);
  
      function addZero(num) {
        return num < 10 ? `0${num}` : `${num}`;
      }
  
      return `${minutes}:${seconds}`;
    }
  
    const onPlayerReady = e => { // Интервал обновления и само добавление таймингов
      let interval;
      const durationSec = player.duration;
      const time = formatTime(durationSec);
  
      $('.player__duration-estimate').text(time);
  
      if (typeof interval !== 'undefined') {
        clearInterval(interval);
      }
  
      interval = setInterval(e => {
        const completedSec = Math.trunc(player.currentTime);
        const completedPercent = (completedSec / durationSec) * 100;
  
        $('.player__playback-button').css('left', `${completedPercent}%`);
  
        $('.player__duration-completed').text(formatTime(completedSec));
      }, 1000)
    };
  
    eventsInit();
    onPlayerReady();
  })