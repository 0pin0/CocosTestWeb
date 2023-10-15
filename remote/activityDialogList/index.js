System.register("chunks:///_virtual/activityDialogList", ['./ActivityDialogType.ts'], function () {
  return {
    setters: [null],
    execute: function () {}
  };
});

System.register("chunks:///_virtual/ActivityDialogType.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "33707XH2YdCzJQq749v8GpI", "ActivityDialogType", undefined);
      /** 活動ui類型, 銜接DialogType的ActivityUi **/


      let ActivityDialogType = exports('ActivityDialogType', /*#__PURE__*/function (ActivityDialogType) {
        ActivityDialogType[ActivityDialogType["Undefined"] = 0] = "Undefined";
        ActivityDialogType[ActivityDialogType["Game1"] = 1] = "Game1";
        ActivityDialogType[ActivityDialogType["Max"] = 2] = "Max";
        return ActivityDialogType;
      }({}));

      class ActivityUiHelper {
        static getDialogName(activityId) {
          // 再用活動enum 英文下載活動ui ab(包含活動的code)
          return ActivityDialogType[activityId];
        }

      }

      exports('ActivityUiHelper', ActivityUiHelper);

      cclegacy._RF.pop();
    }
  };
});

(function(r) {
  r('virtual:///prerequisite-imports/activityDialogList', 'chunks:///_virtual/activityDialogList'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});