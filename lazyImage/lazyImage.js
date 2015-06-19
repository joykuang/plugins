/*! 
  * LazyImage Plugin, Coded by Joy Kuang, 
  * https://github.com/joykuang/plugins
  * http://joykuang.com for more information about me.
  * @pama element: domEle with [data-bgsrc]
  * @pama callback: callback function
  * @return: element with autoHeighted!
**/
var lazyImage = function (domEle, callback) {
    //检测Zepto/jQuery依赖，无依赖则抛出错误
    if ((Zepto && typeof Zepto === "function") || (jQuery && typeof jQuery === "function")) {
        var obj;
        if (domEle === Object) obj = $(domEle);
        if (!domEle) obj = $('body');
        var bgImgs = obj.find("[data-bgsrc]"),
            Imgs = obj.find("[data-src]");
        
        if (!obj && !bgImgs && !Imgs) return;
        if (obj.attr("data-bgsrc")) {
            var url = obj.attr("data-bgsrc");
            obj.css("background-image", 'url("' + url + '")')
        }
        if (obj.attr("data-src")) {
            var url = obj.attr("data-src");
            obj.attr("src", url)
        }
        bgImgs.each(function (index) {
            var url = $(this).attr("data-bgsrc");
            $(this).css("background-image", 'url("' + url + '")')
        });
        Imgs.each(function (index) {
            var url = $(this).attr("data-src");
            $(this).attr("src", url)
        })
    } else {
        throw new Error("Zepto/jQuery required!");
        return;
    }
    domEle && typeof domEle === "function" && domEle();
    callback && typeof callback === "function" && callback();
};
window.lazyImage = lazyImage;