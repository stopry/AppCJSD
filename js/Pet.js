//Pet界面类
var Pet = (function(_super){
    //宠物x坐标y坐标
    function Pet(posX,posY){
        this.posX = posX;
        this.posY = posX;
        Pet.super(this);
        this.x = this.posX;
        this.y = this.posY;
        //播放宠物动画循环播放;
        this.ani1.play(0,true);
    }
    //注册类
    Laya.class(Pet,"Pet",_super);
    var _proto = Pet.prototype;
    return Pet;
})(ui.PetUI)