/*! 
  * AutoHeight Plugin, Coded by Joy Kuang, 
  * https://github.com/joykuang/plugins
  * http://joykuang.com for more information about me.
  * @pama element: selector with [data-height]
  * @pama callback: callback function
  * @return: element with autoHeighted!
**/
var autoHeight = function (element, callback) {
    //检测Zepto/jQuery依赖，无依赖则抛出错误
    if ((!window.Zepto && typeof Zepto !== "function") && (!window.jQuery && typeof jQuery !== "function")) {
        throw new Error("Zepto/jQuery required!");
        return;
    }
    //正则表达式匹配[两位非零整数:两位非零整数]
    var expr = /^\+?[1-9][0-9]*:\+?[1-9][0-9]*$/;
    //判断选择器
    if (element === Object) {
        var current = $(element),
            children = current.find("[data-height]"),
            divHeight = 0,
            currentHeight = current.attr("data-height");
            
        if (!current.attr("data-height")) {
            if (expr.test(currentHeight)) {
                var w = parseInt(currentHeight.split(':')[0]),
                        h = parseInt(currentHeight.split(':')[1]);
                divHeight = current.width() / w * h;
                divDom.height(divHeight)
            } 
        }
        children.each(function () {
             var current = $(this);
            if (expr.test(currentHeight)) {
                var w = parseInt(currentHeight.split(':')[0]),
                        h = parseInt(currentHeight.split(':')[1]);
                divHeight = current.width() / w * h;
                divDom.height(divHeight)
            } 
        });
    } else {
        $("[data-height]").each(function () {
            var divDom = $(this);
            divHeight = 0, value = divDom.attr("data-height");
            if (expr.test(value)) {
                var w = parseInt(value.split(':')[0]),
                        h = parseInt(value.split(':')[1]);
                divHeight = divDom.width() / w * h;
                divDom.height(divHeight)
            } 
        });
    }
    callback && typeof callback === "function" && callback();
}
window.autoHeight = autoHeight;