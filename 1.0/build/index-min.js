/*!build time : 2014-07-17 6:54:51 PM*/
KISSY.add("gallery/xplayer/1.0/plugin/status",function(){return{duration:0,currentTime:0,loadedTime:0,volume:1,isPaused:!0,isPlaying:!1,pausePosition:0,readyState:0}}),KISSY.add("gallery/xplayer/1.0/plugin/audio",function(a,b,c){var d=b.extend({initializer:function(){var a=this;a.audio=new Audio,a._addEvent(),a.status=c},_addEvent:function(){var a=this;a.audio.addEventListener("timeupdate",function(b){a.status.currentTime=this.currentTime,a.status.duration=this.duration,a.fire(b.type,a.status)}),a.audio.addEventListener("ended",function(b){a.status.isPlaying=!1,a.status.isPaused=!1,a.fire(b.type)}),a.audio.addEventListener("progress",function(b){if(null!=a.audio.buffered&&a.audio.buffered.length){var c=a.audio.buffered.end(a.audio.buffered.length-1);a.fire(b.type,{progress:1e3*c,duration:1e3*a.audio.duration})}}),a.audio.addEventListener("error",function(b){a.fire(b.type)})},load:function(a){var b=this;b.set("src",a),b.audio.src=a,b.audio.volume=b.get("volume"),b.audio.load()},play:function(){var b=this;a.log(b.status.isPlaying),b.status.isPlaying||(b.status.isPlaying=!0,b.status.isPaused=!1,b.audio.play())},pause:function(){var a=this;a.status.isPaused||(a.status.isPlaying=!1,a.status.isPaused=!0,a.status.pausePosition=a.audio.currentTime,a.audio.pause())},stop:function(){var a=this;a.status.isPlaying=!1,a.status.isPaused=!1,a.status.pausePosition=0;try{a.audio.currentTime=0}catch(b){}a.audio.pause()},setPosition:function(a){var b=this;b.audio.readyState>0&&(b.status.currentTime=a/1e3,b.audio.currentTime=b.status.currentTime,b.status.pausePosition=a),b.status.isPlaying||b.play()},setVolume:function(a){var b=this;b.status.volume=a,b.set("volume",a)}},{ATTRS:{volume:{value:.5,setter:function(a){return this.audio.volume=a,a},validator:function(b){return 1>=b&&b>=0&&a.isNumber(b)?!0:!1}},src:{}}});return d},{requires:["base","./status"]}),KISSY.add("gallery/xplayer/1.0/plugin/audioSwf",function(a,b,c,d){function e(a){var b="0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz".split("");a||(a=Math.floor(Math.random()*b.length));for(var c="",d=0;a>d;d++)c+=b[Math.floor(Math.random()*b.length)];return c}var f=window,g="../flash/xplayer.swf?v="+a.now();-1===window.location.href.indexOf("github.xiami.com")&&(g="http://a.tbcdn.cn/s/kissy/gallery/xplayer/1.0/xplayer.swf");var h=b.extend({initializer:function(){var b=this,h=e(10),i="Xplayer_"+h,j=document.createElement("DIV");j.id="XP_"+i,j.style.position="absolute",j.style.width="1px",j.style.height="1px",j.style.left="-1000px",j.style.top="-1000px",document.body.appendChild(j);var k={src:g,attrs:{width:1,height:1,id:"J_xiamiPlayerSwf_"+h},params:{allowScriptAccess:"always",wmode:"window",flashVars:{xplayerinterface:i}},render:j,version:"9.0"};b.status=d,b.interface=f[i]={timeupdate:function(a){b.status.currentTime=a.currentTime,b.status.duration=a.duration,b.fire("timeupdate",a)},ended:function(a){b.status.isPlaying=!1,b.status.isPaused=!1,b.fire("ended",a)},progress:function(a){b.fire("progress",a)},error:function(){a.log("error"),b.fire("error")}},b.player=new c(k)},load:function(a){var b=this;b.set("src",a),b.player.callSWF("jsSrc",[a])},play:function(){var b=this;a.log(b.status.isPlaying,"","\u662f\u5426\u6b63\u5728\u64ad\u653e"),b.status.isPlaying||(b.status.isPlaying=!0,b.status.isPaused=!1,b.player.callSWF("jsPlay"))},pause:function(){var a=this;a.status.isPaused||(a.status.isPlaying=!1,a.status.isPaused=!0,a.player.callSWF("jsPause"))},stop:function(){var a=this;a.status.isPlaying=!1,a.status.isPaused=!0,a.status.pausePosition=0,a.player.callSWF("jsStop")},setPosition:function(a){var b=this;b.status.pausePosition=a,b.player.callSWF("jsPosition",[Number(a)]),b.status.isPlaying||b.play()},setVolume:function(a){var b=this;b.status.volume=a,b.player.callSWF("setVolume",[Number(v)])}},{ATTR:{volume:{value:1,setter:function(a){return this.audio.volume=a,a},validator:function(b){return 1>=b&&b>=0&&a.isNumber(b)?!0:!1}},src:{}}});return h},{requires:["base","swf","./status"]}),KISSY.add("gallery/xplayer/1.0/index",function(a,b,c,d){"use strict";function e(b){var c=this;c.config=a.mix({autoplay:!1,forceFlash:!1,forceAudio:!1},b,!0),c._init()}{var f="";b.all}return e.prototype={_init:function(){var a=this;if(a.track=null,a.config.forceFlash)return a.player=new d,a;if(a.config.forceAudio)return a.player=new c,a;var b=a.supportAudio();return a.player=b?new c:new d,a},load:function(a){var b=this;if(!a.url||a.url==f)throw new Error("Can't find a URL parameter");return b.stop(),b.track=a,b.player.load(b.track.url),b.config.autoplay&&b.play(),b},on:function(a,b){var c=this;return c.player.on(a,b),c},play:function(b){var c=this;return(isNaN(b)||a.isUndefined(b))&&(b=0),c.player.play(b),c},stop:function(){var a=this;return a.player.stop(),a},pause:function(){var a=this;return a.player.pause(),a},setPosition:function(b){var c=this;return a.isUndefined(b)?c:(c.player.setPosition(b),c)},getTrack:function(){var a=this;return a.track},setVolume:function(a){var b=this;b.player.setVolume(a)},supportAudio:function(){var a=document.createElement("audio");return!(!a.canPlayType||!a.canPlayType("audio/mpeg").replace(/no/,""))}},e},{requires:["node","./plugin/audio","./plugin/audioSwf"]});