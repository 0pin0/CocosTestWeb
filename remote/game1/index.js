System.register("chunks:///_virtual/game1", ['./Game1Dialog.ts'], function () {
  return {
    setters: [null],
    execute: function () {}
  };
});

System.register("chunks:///_virtual/Game1Dialog.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './UiDialog.ts', './ActivityDialogType.ts'], function (exports) {
  var _applyDecoratedDescriptor, _initializerDefineProperty, cclegacy, Label, _decorator, UiDialog, ActivityDialogType;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _initializerDefineProperty = module.initializerDefineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
      Label = module.Label;
      _decorator = module._decorator;
    }, function (module) {
      UiDialog = module.UiDialog;
    }, function (module) {
      ActivityDialogType = module.ActivityDialogType;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor, _descriptor2;

      cclegacy._RF.push({}, "1a896lC8XlJ/p/UeBOvfTZA", "Game1Dialog", undefined);
      /** 小遊戲1 ui */


      const {
        ccclass,
        property
      } = _decorator;
      let Game1Dialog = exports('default', (_dec = property({
        displayName: "文字1",
        type: Label
      }), _dec2 = property({
        displayName: "文字2",
        type: Label
      }), ccclass(_class = (_class2 = class Game1Dialog extends UiDialog {
        constructor(...args) {
          super(...args); //#region data

          _initializerDefineProperty(this, "text1Label", _descriptor, this);

          _initializerDefineProperty(this, "text2Label", _descriptor2, this);
        } //#endregion data


        onLoad() {
          this.dialogTypeNum = ActivityDialogType.Game1;
        }

        start() {
          if (this.checkFailData()) {
            return;
          }
        }

        checkFailData() {
          if (this.text1Label == null || this.text2Label == null) {
            console.error("checkFailData fail");
            return true;
          }

          return false;
        }

        onDestroy() {}
        /** 按下 關閉鈕 */


        onCloseBtn() {
          console.log("onCloseBtn");
          this.node.active = false; // UiManager.instance.closeActivityDialog(ActivityDialogType.Game1, "close");
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "text1Label", [_dec], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "text2Label", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

(function(r) {
  r('virtual:///prerequisite-imports/game1', 'chunks:///_virtual/game1'); 
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