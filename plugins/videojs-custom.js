/**
 * Created by yagiz on 11/28/16.
 */
function examplePlugin(options){

    this.holder = document.createElement("div");
    this.holder.className = "yagiz";

    this.on('play', function(e){
        console.log("starting coding a plugin");
    });
};

videojs.plugin('examplePlugin', examplePlugin);