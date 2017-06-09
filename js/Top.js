var Top = (function(_super){
    function Top(){
        Top.super(this);
        this.init();
        this.isPlay = false;
    }
    Laya.class(Top,"Top",_super);
    var _proto = Top.prototype;

    _proto.init = function(){
        stopMusic();
        this.bgShoudBtn.on('click',this,this.MusicCtr);
    }
    //背景音乐控制
    _proto.MusicCtr = function(){
        if(this.isPlay){
            this.bgShoudBtn.skin = "createRole/stop_music.png";
            this.music_play.stop();
            stopMusic();
            this.isPlay = false;
        }else{
           this.bgShoudBtn.skin = "createRole/play_music.png";
           this.music_play.play(0,true);
           playMusic();
           this.isPlay = true;
        }
    }

    return Top;
})(ui.TopUI)