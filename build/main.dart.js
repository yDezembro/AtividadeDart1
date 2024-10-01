
define('zapp_user_main', ['dart_sdk', 'flutter_sdk'], (function load__zapp_user_main(dart_sdk, flutter_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const _interceptors = dart_sdk._interceptors;
  const js = dart_sdk.js;
  const ui = dart_sdk.ui;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const app = flutter_sdk.src__material__app;
  const theme_data = flutter_sdk.src__material__theme_data;
  const colors = flutter_sdk.src__material__colors;
  const framework = flutter_sdk.src__widgets__framework;
  const scaffold = flutter_sdk.src__material__scaffold;
  const app_bar = flutter_sdk.src__material__app_bar;
  const text = flutter_sdk.src__widgets__text;
  const scroll_view = flutter_sdk.src__widgets__scroll_view;
  const basic = flutter_sdk.src__widgets__basic;
  const card = flutter_sdk.src__material__card;
  const list_tile = flutter_sdk.src__material__list_tile;
  const icon = flutter_sdk.src__widgets__icon;
  const icon_data = flutter_sdk.src__widgets__icon_data;
  const edge_insets = flutter_sdk.src__painting__edge_insets;
  const binding = flutter_sdk.src__widgets__binding;
  var $46zapp_entry = Object.create(dart.library);
  var main = Object.create(dart.library);
  var web_plugin_registrant = Object.create(dart.library);
  var $toString = dartx.toString;
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T = {
    VoidTovoid: () => (T.VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))(),
    ListOfString: () => (T.ListOfString = dart.constFn(core.List$(core.String)))(),
    ListOfStringTodynamic: () => (T.ListOfStringTodynamic = dart.constFn(dart.fnType(dart.dynamic, [T.ListOfString()])))(),
    JSArrayOfString: () => (T.JSArrayOfString = dart.constFn(_interceptors.JSArray$(core.String)))(),
    dynamicToNull: () => (T.dynamicToNull = dart.constFn(dart.fnType(core.Null, [dart.dynamic])))(),
    VoidToNull: () => (T.VoidToNull = dart.constFn(dart.fnType(core.Null, [])))(),
    ObjectAndStackTraceTovoid: () => (T.ObjectAndStackTraceTovoid = dart.constFn(dart.fnType(dart.void, [core.Object, core.StackTrace])))(),
    ZoneAndZoneDelegateAndZone__Tovoid: () => (T.ZoneAndZoneDelegateAndZone__Tovoid = dart.constFn(dart.fnType(dart.void, [async.Zone, async.ZoneDelegate, async.Zone, core.String])))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.fn(main.main, T.VoidTovoid());
    },
    get C1() {
      return C[1] = dart.const({
        __proto__: text.Text.prototype,
        [Widget_key]: null,
        [Text_selectionColor]: null,
        [Text_textHeightBehavior]: null,
        [Text_textWidthBasis]: null,
        [Text_semanticsLabel]: null,
        [Text_maxLines]: null,
        [Text_textScaleFactor]: null,
        [Text_overflow]: null,
        [Text_softWrap]: null,
        [Text_locale]: null,
        [Text_textDirection]: null,
        [Text_textAlign]: null,
        [Text_strutStyle]: null,
        [Text_style]: null,
        [Text_textSpan]: null,
        [Text_data]: "Aplicação Bancária"
      });
    },
    get C7() {
      return C[7] = dart.const({
        __proto__: icon_data.IconData.prototype,
        [IconData_matchTextDirection]: true,
        [IconData_fontPackage]: null,
        [IconData_fontFamily]: "MaterialIcons",
        [IconData_codePoint]: 57500
      });
    },
    get C6() {
      return C[6] = dart.const({
        __proto__: icon.Icon.prototype,
        [Widget_key]: null,
        [Icon_textDirection]: null,
        [Icon_semanticLabel]: null,
        [Icon_shadows]: null,
        [Icon_color]: null,
        [Icon_opticalSize]: null,
        [Icon_grade]: null,
        [Icon_weight]: null,
        [Icon_fill]: null,
        [Icon_size]: null,
        [Icon_icon]: C[7] || CT.C7
      });
    },
    get C8() {
      return C[8] = dart.const({
        __proto__: text.Text.prototype,
        [Widget_key]: null,
        [Text_selectionColor]: null,
        [Text_textHeightBehavior]: null,
        [Text_textWidthBasis]: null,
        [Text_semanticsLabel]: null,
        [Text_maxLines]: null,
        [Text_textScaleFactor]: null,
        [Text_overflow]: null,
        [Text_softWrap]: null,
        [Text_locale]: null,
        [Text_textDirection]: null,
        [Text_textAlign]: null,
        [Text_strutStyle]: null,
        [Text_style]: null,
        [Text_textSpan]: null,
        [Text_data]: "Saldo: R$ 2.500,00"
      });
    },
    get C9() {
      return C[9] = dart.const({
        __proto__: text.Text.prototype,
        [Widget_key]: null,
        [Text_selectionColor]: null,
        [Text_textHeightBehavior]: null,
        [Text_textWidthBasis]: null,
        [Text_semanticsLabel]: null,
        [Text_maxLines]: null,
        [Text_textScaleFactor]: null,
        [Text_overflow]: null,
        [Text_softWrap]: null,
        [Text_locale]: null,
        [Text_textDirection]: null,
        [Text_textAlign]: null,
        [Text_strutStyle]: null,
        [Text_style]: null,
        [Text_textSpan]: null,
        [Text_data]: "Conta Corrente"
      });
    },
    get C11() {
      return C[11] = dart.const({
        __proto__: icon_data.IconData.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: null,
        [IconData_fontFamily]: "MaterialIcons",
        [IconData_codePoint]: 57409
      });
    },
    get C10() {
      return C[10] = dart.const({
        __proto__: icon.Icon.prototype,
        [Widget_key]: null,
        [Icon_textDirection]: null,
        [Icon_semanticLabel]: null,
        [Icon_shadows]: null,
        [Icon_color]: null,
        [Icon_opticalSize]: null,
        [Icon_grade]: null,
        [Icon_weight]: null,
        [Icon_fill]: null,
        [Icon_size]: 50,
        [Icon_icon]: C[11] || CT.C11
      });
    },
    get C5() {
      return C[5] = dart.const({
        __proto__: list_tile.ListTile.prototype,
        [Widget_key]: null,
        [ListTile_minLeadingWidth]: null,
        [ListTile_minVerticalPadding]: null,
        [ListTile_horizontalTitleGap]: null,
        [ListTile_enableFeedback]: null,
        [ListTile_selectedTileColor]: null,
        [ListTile_tileColor]: null,
        [ListTile_autofocus]: false,
        [ListTile_focusNode]: null,
        [ListTile_splashColor]: null,
        [ListTile_hoverColor]: null,
        [ListTile_focusColor]: null,
        [ListTile_selected]: false,
        [ListTile_mouseCursor]: null,
        [ListTile_onFocusChange]: null,
        [ListTile_onLongPress]: null,
        [ListTile_onTap]: null,
        [ListTile_enabled]: true,
        [ListTile_contentPadding]: null,
        [ListTile_style]: null,
        [ListTile_textColor]: null,
        [ListTile_iconColor]: null,
        [ListTile_selectedColor]: null,
        [ListTile_shape]: null,
        [ListTile_visualDensity]: null,
        [ListTile_dense]: null,
        [ListTile_isThreeLine]: false,
        [ListTile_trailing]: C[6] || CT.C6,
        [ListTile_subtitle]: C[8] || CT.C8,
        [ListTile_title]: C[9] || CT.C9,
        [ListTile_leading]: C[10] || CT.C10
      });
    },
    get C4() {
      return C[4] = dart.const({
        __proto__: card.Card.prototype,
        [Widget_key]: null,
        [Card_child]: C[5] || CT.C5,
        [Card_semanticContainer]: true,
        [Card_margin]: null,
        [Card_clipBehavior]: null,
        [Card_borderOnForeground]: true,
        [Card_shape]: null,
        [Card_elevation]: 4,
        [Card_surfaceTintColor]: null,
        [Card_shadowColor]: null,
        [Card_color]: null
      });
    },
    get C12() {
      return C[12] = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 8,
        [EdgeInsets_right]: 8,
        [EdgeInsets_top]: 8,
        [EdgeInsets_left]: 8
      });
    },
    get C3() {
      return C[3] = dart.const({
        __proto__: basic.Padding.prototype,
        [Widget_key]: null,
        [SingleChildRenderObjectWidget_child]: C[4] || CT.C4,
        [Padding_padding]: C[12] || CT.C12
      });
    },
    get C16() {
      return C[16] = dart.const({
        __proto__: text.Text.prototype,
        [Widget_key]: null,
        [Text_selectionColor]: null,
        [Text_textHeightBehavior]: null,
        [Text_textWidthBasis]: null,
        [Text_semanticsLabel]: null,
        [Text_maxLines]: null,
        [Text_textScaleFactor]: null,
        [Text_overflow]: null,
        [Text_softWrap]: null,
        [Text_locale]: null,
        [Text_textDirection]: null,
        [Text_textAlign]: null,
        [Text_strutStyle]: null,
        [Text_style]: null,
        [Text_textSpan]: null,
        [Text_data]: "Saldo: R$ 1.000,00"
      });
    },
    get C17() {
      return C[17] = dart.const({
        __proto__: text.Text.prototype,
        [Widget_key]: null,
        [Text_selectionColor]: null,
        [Text_textHeightBehavior]: null,
        [Text_textWidthBasis]: null,
        [Text_semanticsLabel]: null,
        [Text_maxLines]: null,
        [Text_textScaleFactor]: null,
        [Text_overflow]: null,
        [Text_softWrap]: null,
        [Text_locale]: null,
        [Text_textDirection]: null,
        [Text_textAlign]: null,
        [Text_strutStyle]: null,
        [Text_style]: null,
        [Text_textSpan]: null,
        [Text_data]: "Poupança"
      });
    },
    get C19() {
      return C[19] = dart.const({
        __proto__: icon_data.IconData.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: null,
        [IconData_fontFamily]: "MaterialIcons",
        [IconData_codePoint]: 58707
      });
    },
    get C18() {
      return C[18] = dart.const({
        __proto__: icon.Icon.prototype,
        [Widget_key]: null,
        [Icon_textDirection]: null,
        [Icon_semanticLabel]: null,
        [Icon_shadows]: null,
        [Icon_color]: null,
        [Icon_opticalSize]: null,
        [Icon_grade]: null,
        [Icon_weight]: null,
        [Icon_fill]: null,
        [Icon_size]: 50,
        [Icon_icon]: C[19] || CT.C19
      });
    },
    get C15() {
      return C[15] = dart.const({
        __proto__: list_tile.ListTile.prototype,
        [Widget_key]: null,
        [ListTile_minLeadingWidth]: null,
        [ListTile_minVerticalPadding]: null,
        [ListTile_horizontalTitleGap]: null,
        [ListTile_enableFeedback]: null,
        [ListTile_selectedTileColor]: null,
        [ListTile_tileColor]: null,
        [ListTile_autofocus]: false,
        [ListTile_focusNode]: null,
        [ListTile_splashColor]: null,
        [ListTile_hoverColor]: null,
        [ListTile_focusColor]: null,
        [ListTile_selected]: false,
        [ListTile_mouseCursor]: null,
        [ListTile_onFocusChange]: null,
        [ListTile_onLongPress]: null,
        [ListTile_onTap]: null,
        [ListTile_enabled]: true,
        [ListTile_contentPadding]: null,
        [ListTile_style]: null,
        [ListTile_textColor]: null,
        [ListTile_iconColor]: null,
        [ListTile_selectedColor]: null,
        [ListTile_shape]: null,
        [ListTile_visualDensity]: null,
        [ListTile_dense]: null,
        [ListTile_isThreeLine]: false,
        [ListTile_trailing]: C[6] || CT.C6,
        [ListTile_subtitle]: C[16] || CT.C16,
        [ListTile_title]: C[17] || CT.C17,
        [ListTile_leading]: C[18] || CT.C18
      });
    },
    get C14() {
      return C[14] = dart.const({
        __proto__: card.Card.prototype,
        [Widget_key]: null,
        [Card_child]: C[15] || CT.C15,
        [Card_semanticContainer]: true,
        [Card_margin]: null,
        [Card_clipBehavior]: null,
        [Card_borderOnForeground]: true,
        [Card_shape]: null,
        [Card_elevation]: 4,
        [Card_surfaceTintColor]: null,
        [Card_shadowColor]: null,
        [Card_color]: null
      });
    },
    get C13() {
      return C[13] = dart.const({
        __proto__: basic.Padding.prototype,
        [Widget_key]: null,
        [SingleChildRenderObjectWidget_child]: C[14] || CT.C14,
        [Padding_padding]: C[12] || CT.C12
      });
    },
    get C23() {
      return C[23] = dart.const({
        __proto__: text.Text.prototype,
        [Widget_key]: null,
        [Text_selectionColor]: null,
        [Text_textHeightBehavior]: null,
        [Text_textWidthBasis]: null,
        [Text_semanticsLabel]: null,
        [Text_maxLines]: null,
        [Text_textScaleFactor]: null,
        [Text_overflow]: null,
        [Text_softWrap]: null,
        [Text_locale]: null,
        [Text_textDirection]: null,
        [Text_textAlign]: null,
        [Text_strutStyle]: null,
        [Text_style]: null,
        [Text_textSpan]: null,
        [Text_data]: "Fatura: R$ 900,00"
      });
    },
    get C24() {
      return C[24] = dart.const({
        __proto__: text.Text.prototype,
        [Widget_key]: null,
        [Text_selectionColor]: null,
        [Text_textHeightBehavior]: null,
        [Text_textWidthBasis]: null,
        [Text_semanticsLabel]: null,
        [Text_maxLines]: null,
        [Text_textScaleFactor]: null,
        [Text_overflow]: null,
        [Text_softWrap]: null,
        [Text_locale]: null,
        [Text_textDirection]: null,
        [Text_textAlign]: null,
        [Text_strutStyle]: null,
        [Text_style]: null,
        [Text_textSpan]: null,
        [Text_data]: "Cartão de Crédito"
      });
    },
    get C26() {
      return C[26] = dart.const({
        __proto__: icon_data.IconData.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: null,
        [IconData_fontFamily]: "MaterialIcons",
        [IconData_codePoint]: 57759
      });
    },
    get C25() {
      return C[25] = dart.const({
        __proto__: icon.Icon.prototype,
        [Widget_key]: null,
        [Icon_textDirection]: null,
        [Icon_semanticLabel]: null,
        [Icon_shadows]: null,
        [Icon_color]: null,
        [Icon_opticalSize]: null,
        [Icon_grade]: null,
        [Icon_weight]: null,
        [Icon_fill]: null,
        [Icon_size]: 50,
        [Icon_icon]: C[26] || CT.C26
      });
    },
    get C22() {
      return C[22] = dart.const({
        __proto__: list_tile.ListTile.prototype,
        [Widget_key]: null,
        [ListTile_minLeadingWidth]: null,
        [ListTile_minVerticalPadding]: null,
        [ListTile_horizontalTitleGap]: null,
        [ListTile_enableFeedback]: null,
        [ListTile_selectedTileColor]: null,
        [ListTile_tileColor]: null,
        [ListTile_autofocus]: false,
        [ListTile_focusNode]: null,
        [ListTile_splashColor]: null,
        [ListTile_hoverColor]: null,
        [ListTile_focusColor]: null,
        [ListTile_selected]: false,
        [ListTile_mouseCursor]: null,
        [ListTile_onFocusChange]: null,
        [ListTile_onLongPress]: null,
        [ListTile_onTap]: null,
        [ListTile_enabled]: true,
        [ListTile_contentPadding]: null,
        [ListTile_style]: null,
        [ListTile_textColor]: null,
        [ListTile_iconColor]: null,
        [ListTile_selectedColor]: null,
        [ListTile_shape]: null,
        [ListTile_visualDensity]: null,
        [ListTile_dense]: null,
        [ListTile_isThreeLine]: false,
        [ListTile_trailing]: C[6] || CT.C6,
        [ListTile_subtitle]: C[23] || CT.C23,
        [ListTile_title]: C[24] || CT.C24,
        [ListTile_leading]: C[25] || CT.C25
      });
    },
    get C21() {
      return C[21] = dart.const({
        __proto__: card.Card.prototype,
        [Widget_key]: null,
        [Card_child]: C[22] || CT.C22,
        [Card_semanticContainer]: true,
        [Card_margin]: null,
        [Card_clipBehavior]: null,
        [Card_borderOnForeground]: true,
        [Card_shape]: null,
        [Card_elevation]: 4,
        [Card_surfaceTintColor]: null,
        [Card_shadowColor]: null,
        [Card_color]: null
      });
    },
    get C20() {
      return C[20] = dart.const({
        __proto__: basic.Padding.prototype,
        [Widget_key]: null,
        [SingleChildRenderObjectWidget_child]: C[21] || CT.C21,
        [Padding_padding]: C[12] || CT.C12
      });
    },
    get C2() {
      return C[2] = dart.constList([C[3] || CT.C3, C[13] || CT.C13, C[20] || CT.C20], framework.Widget);
    }
  }, false);
  var C = Array(27).fill(void 0);
  var I = ["file:///zapp/project/lib/main.dart"];
  $46zapp_entry.runAppGuarded = function runAppGuarded() {
    async.runZonedGuarded(core.Null, dart.fn(() => {
      if (T.ListOfStringTodynamic().is(C[0] || CT.C0)) {
        T.ListOfStringTodynamic().as(C[0] || CT.C0)(T.JSArrayOfString().of([]));
      } else {
        (C[0] || CT.C0)();
      }
      if (js.context.hasProperty("__notifyFlutterRendered")) {
        async.Future.delayed(new core.Duration.new({milliseconds: 250})).then(core.Null, dart.fn(_ => {
          js.context.callMethod("__notifyFlutterRendered", [false]);
        }, T.dynamicToNull()));
      }
    }, T.VoidToNull()), dart.fn((e, stackTrace) => {
      if (js.context.hasProperty("zappHandlerUserError")) {
        js.context.callMethod("zappHandlerUserError", [e[$toString](), stackTrace.toString()]);
      }
    }, T.ObjectAndStackTraceTovoid()), {zoneSpecification: new async._ZoneSpecification.new({print: dart.fn((self, parent, zone, line) => {
          if (js.context.hasProperty("zappHandlerUserPrint")) {
            js.context.callMethod("zappHandlerUserPrint", [line]);
          }
        }, T.ZoneAndZoneDelegateAndZone__Tovoid())})});
  };
  $46zapp_entry.main = function main$() {
    return async.async(dart.void, function* main() {
      yield ui.webOnlyWarmupEngine({runApp: dart.fn(() => {
          $46zapp_entry.runAppGuarded();
        }, T.VoidToNull()), registerPlugins: dart.fn(() => {
          web_plugin_registrant.registerPlugins();
        }, T.VoidToNull())});
    });
  };
  main.BankingApp = class BankingApp extends framework.StatelessWidget {
    build(context) {
      return new app.MaterialApp.new({title: "Aplicação Bancária", theme: theme_data.ThemeData.new({primarySwatch: colors.Colors.blue}), home: new main.HomePage.new()});
    }
    static ['_#new#tearOff']() {
      return new main.BankingApp.new();
    }
  };
  (main.BankingApp.new = function() {
    main.BankingApp.__proto__.new.call(this);
    ;
  }).prototype = main.BankingApp.prototype;
  dart.addTypeTests(main.BankingApp);
  dart.addTypeCaches(main.BankingApp);
  dart.setMethodSignature(main.BankingApp, () => ({
    __proto__: dart.getMethods(main.BankingApp.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(main.BankingApp, I[0]);
  var Widget_key = dart.privateName(framework, "Widget.key");
  var Text_selectionColor = dart.privateName(text, "Text.selectionColor");
  var Text_textHeightBehavior = dart.privateName(text, "Text.textHeightBehavior");
  var Text_textWidthBasis = dart.privateName(text, "Text.textWidthBasis");
  var Text_semanticsLabel = dart.privateName(text, "Text.semanticsLabel");
  var Text_maxLines = dart.privateName(text, "Text.maxLines");
  var Text_textScaleFactor = dart.privateName(text, "Text.textScaleFactor");
  var Text_overflow = dart.privateName(text, "Text.overflow");
  var Text_softWrap = dart.privateName(text, "Text.softWrap");
  var Text_locale = dart.privateName(text, "Text.locale");
  var Text_textDirection = dart.privateName(text, "Text.textDirection");
  var Text_textAlign = dart.privateName(text, "Text.textAlign");
  var Text_strutStyle = dart.privateName(text, "Text.strutStyle");
  var Text_style = dart.privateName(text, "Text.style");
  var Text_textSpan = dart.privateName(text, "Text.textSpan");
  var Text_data = dart.privateName(text, "Text.data");
  var ListTile_minLeadingWidth = dart.privateName(list_tile, "ListTile.minLeadingWidth");
  var ListTile_minVerticalPadding = dart.privateName(list_tile, "ListTile.minVerticalPadding");
  var ListTile_horizontalTitleGap = dart.privateName(list_tile, "ListTile.horizontalTitleGap");
  var ListTile_enableFeedback = dart.privateName(list_tile, "ListTile.enableFeedback");
  var ListTile_selectedTileColor = dart.privateName(list_tile, "ListTile.selectedTileColor");
  var ListTile_tileColor = dart.privateName(list_tile, "ListTile.tileColor");
  var ListTile_autofocus = dart.privateName(list_tile, "ListTile.autofocus");
  var ListTile_focusNode = dart.privateName(list_tile, "ListTile.focusNode");
  var ListTile_splashColor = dart.privateName(list_tile, "ListTile.splashColor");
  var ListTile_hoverColor = dart.privateName(list_tile, "ListTile.hoverColor");
  var ListTile_focusColor = dart.privateName(list_tile, "ListTile.focusColor");
  var ListTile_selected = dart.privateName(list_tile, "ListTile.selected");
  var ListTile_mouseCursor = dart.privateName(list_tile, "ListTile.mouseCursor");
  var ListTile_onFocusChange = dart.privateName(list_tile, "ListTile.onFocusChange");
  var ListTile_onLongPress = dart.privateName(list_tile, "ListTile.onLongPress");
  var ListTile_onTap = dart.privateName(list_tile, "ListTile.onTap");
  var ListTile_enabled = dart.privateName(list_tile, "ListTile.enabled");
  var ListTile_contentPadding = dart.privateName(list_tile, "ListTile.contentPadding");
  var ListTile_style = dart.privateName(list_tile, "ListTile.style");
  var ListTile_textColor = dart.privateName(list_tile, "ListTile.textColor");
  var ListTile_iconColor = dart.privateName(list_tile, "ListTile.iconColor");
  var ListTile_selectedColor = dart.privateName(list_tile, "ListTile.selectedColor");
  var ListTile_shape = dart.privateName(list_tile, "ListTile.shape");
  var ListTile_visualDensity = dart.privateName(list_tile, "ListTile.visualDensity");
  var ListTile_dense = dart.privateName(list_tile, "ListTile.dense");
  var ListTile_isThreeLine = dart.privateName(list_tile, "ListTile.isThreeLine");
  var Icon_textDirection = dart.privateName(icon, "Icon.textDirection");
  var Icon_semanticLabel = dart.privateName(icon, "Icon.semanticLabel");
  var Icon_shadows = dart.privateName(icon, "Icon.shadows");
  var Icon_color = dart.privateName(icon, "Icon.color");
  var Icon_opticalSize = dart.privateName(icon, "Icon.opticalSize");
  var Icon_grade = dart.privateName(icon, "Icon.grade");
  var Icon_weight = dart.privateName(icon, "Icon.weight");
  var Icon_fill = dart.privateName(icon, "Icon.fill");
  var Icon_size = dart.privateName(icon, "Icon.size");
  var IconData_matchTextDirection = dart.privateName(icon_data, "IconData.matchTextDirection");
  var IconData_fontPackage = dart.privateName(icon_data, "IconData.fontPackage");
  var IconData_fontFamily = dart.privateName(icon_data, "IconData.fontFamily");
  var IconData_codePoint = dart.privateName(icon_data, "IconData.codePoint");
  var Icon_icon = dart.privateName(icon, "Icon.icon");
  var ListTile_trailing = dart.privateName(list_tile, "ListTile.trailing");
  var ListTile_subtitle = dart.privateName(list_tile, "ListTile.subtitle");
  var ListTile_title = dart.privateName(list_tile, "ListTile.title");
  var ListTile_leading = dart.privateName(list_tile, "ListTile.leading");
  var Card_child = dart.privateName(card, "Card.child");
  var Card_semanticContainer = dart.privateName(card, "Card.semanticContainer");
  var Card_margin = dart.privateName(card, "Card.margin");
  var Card_clipBehavior = dart.privateName(card, "Card.clipBehavior");
  var Card_borderOnForeground = dart.privateName(card, "Card.borderOnForeground");
  var Card_shape = dart.privateName(card, "Card.shape");
  var Card_elevation = dart.privateName(card, "Card.elevation");
  var Card_surfaceTintColor = dart.privateName(card, "Card.surfaceTintColor");
  var Card_shadowColor = dart.privateName(card, "Card.shadowColor");
  var Card_color = dart.privateName(card, "Card.color");
  var SingleChildRenderObjectWidget_child = dart.privateName(framework, "SingleChildRenderObjectWidget.child");
  var EdgeInsets_bottom = dart.privateName(edge_insets, "EdgeInsets.bottom");
  var EdgeInsets_right = dart.privateName(edge_insets, "EdgeInsets.right");
  var EdgeInsets_top = dart.privateName(edge_insets, "EdgeInsets.top");
  var EdgeInsets_left = dart.privateName(edge_insets, "EdgeInsets.left");
  var Padding_padding = dart.privateName(basic, "Padding.padding");
  main.HomePage = class HomePage extends framework.StatelessWidget {
    build(context) {
      return new scaffold.Scaffold.new({appBar: new app_bar.AppBar.new({title: C[1] || CT.C1}), body: new scroll_view.ListView.new({children: C[2] || CT.C2})});
    }
    static ['_#new#tearOff']() {
      return new main.HomePage.new();
    }
  };
  (main.HomePage.new = function() {
    main.HomePage.__proto__.new.call(this);
    ;
  }).prototype = main.HomePage.prototype;
  dart.addTypeTests(main.HomePage);
  dart.addTypeCaches(main.HomePage);
  dart.setMethodSignature(main.HomePage, () => ({
    __proto__: dart.getMethods(main.HomePage.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(main.HomePage, I[0]);
  main.main = function main$0() {
    binding.runApp(new main.BankingApp.new());
  };
  web_plugin_registrant.registerPlugins = function registerPlugins() {
  };
  dart.trackLibraries("zapp_user_main", {
    "file:///zapp/project/.zapp_entry.dart": $46zapp_entry,
    "file:///zapp/project/lib/main.dart": main,
    "file:///zapp/project/.dart_tool/dartpad/web_plugin_registrant.dart": web_plugin_registrant
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["/zapp/project/.zapp_entry.dart","/zapp/project/lib/main.dart","/zapp/project/.dart_tool/dartpad/web_plugin_registrant.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AA2CI,IA1BF,iCAAgB;AACd,UAAoB,6BAGD;AAF8B,QAA9B,AAAkB,6BAElB,eAF2B;;AAEL,QAAF,CAApB;;AAEnB,UAAO,AAAQ,uBAAY;AAKvB,QAJK,AAAqC,qBAA7B,qCAAuB,uBAAW,QAAC;AAG9C,UAFC,AAAQ,sBAAW,2BAA2B,CAC/C;;;wBAIL,SAAC,GAAG;AACL,UAAO,AAAQ,uBAAY;AAIvB,QAHC,AAAQ,sBAAW,wBAAwB,CAC5C,AAAE,CAAD,eACD,AAAW,UAAD;;2DAGM,yCACb,SAAC,MAAM,QAAQ,MAAM;AAC1B,cAAO,AAAQ,uBAAY;AAC4B,YAAlD,AAAQ,sBAAW,wBAAwB,CAAC,IAAI;;;EAI3D;;AAEiB;AAQd,MAPD,MAAS,gCACC;AACS,UAAf;6CAEe;AACmB,UAAjB;;IAGvB;;;UC/C4B;AACxB,YAAO,iCACE,6BACA,yCACiB,4BAElB;IAEV;;;;;;;;EACF;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;UAI4B;AACxB,YAAO,oCACG,sDAGF;IAyCV;;;;;;;;EACF;;;;;;;;;AAjEsB,IAApB,eAAO;EACT;;ECGwB","file":"main.js"}');

  return {
    zapp__project__$46zapp_entry: $46zapp_entry,
    zapp__project__lib__main: main,
    zapp__project__$46dart_tool__dartpad__web_plugin_registrant: web_plugin_registrant
  };
}));


