## 综述

Xplayer是一款音乐播放器, 支持 audio flash 播放.

* 版本：1.0
* 作者：宝码
* demo：[http://gallery.kissyui.com/xplayer/1.1/demo/index.html](http://gallery.kissyui.com/xplayer/1.1/demo/index.html)
* mini demo[http://gallery.kissyui.com/xplayer/1.1/demo/mini.html](http://gallery.kissyui.com/xplayer/1.1/demo/mini.html)

## 初始化组件

    S.use('gallery/xplayer/1.1/index', function (S, Xplayer) {
        var xplayer = new Xplayer();

        xplayer.load({
            'url' : 'http://example.com/kissy.mp3'
        })

        xplayer.play();
    })

## API说明

[https://rawgit.com/noyobo/xplayer/master/1.1/doc/index.html](https://rawgit.com/noyobo/xplayer/master/1.1/doc/index.html)

> mini 的 API一致