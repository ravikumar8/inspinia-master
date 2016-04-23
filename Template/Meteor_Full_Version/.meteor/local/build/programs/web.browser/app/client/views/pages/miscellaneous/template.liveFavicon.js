(function(){
Template.__checkName("liveFavicon");
Template["liveFavicon"] = new Template("Template.liveFavicon", (function() {
  var view = this;
  return [ HTML.Raw("<!-- Page heading -->\n    "), Blaze._TemplateWith(function() {
    return {
      title: Spacebars.call("Live favicon"),
      category: Spacebars.call("Miscellaneous")
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("pageHeading"));
  }), HTML.Raw('\n\n    <div class="wrapper wrapper-content  animated fadeInRight">\n        <div class="row">\n            <div class="col-lg-12">\n                <div class="ibox ">\n                    <div class="ibox-title">\n                        <h5>Tinycon</h5>\n                    </div>\n\n                    <div class="ibox-content">\n\n                        <strong>A small library for manipulating the favicon</strong>\n                        <p>\n                            Tinycon allows the addition of alert bubbles and changing the favicon image. Tinycon gracefully falls back to a number in title approach for browsers that don\'t support canvas or dynamic favicons.\n                        </p>\n\n                        <p>\n                            Alerts in the favicon allow users to pin a tab and easily see if their attention is needed.\n                        </p>\n\n                        <div class="text-center p-lg">\n\n                            <a class="btn btn-white" id="iconExample1">Set icon to 1</a>\n                            <a class="btn btn-white" id="iconExample2">Set icon to 1000</a>\n                            <a class="btn btn-white" id="iconExample3">Set icon to string \'In\'</a>\n                            <a class="btn btn-primary" id="iconExample4">Set icon with custom color</a>\n\n                        </div>\n\n                        <h3>\n                            <a aria-hidden="true" href="#options" class="anchor" id="user-content-options"><span class="octicon octicon-link"></span></a>Options</h3>\n                        <p>Tinycon can take a range of options to customise the look</p>\n                        <ul class="task-list">\n                            <li>width: the width of the alert bubble</li>\n                            <li>height: the height of the alert bubble</li>\n                            <li>font: a css string to use for the fontface (recommended to leave this)</li>\n                            <li>colour: the foreground font colour</li>\n                            <li>background: the alert bubble background colour</li>\n                            <li>fallback: should we fallback to a number in brackets for browsers that don\'t support canvas/dynamic favicons? Boolean, or use the string \'force\' to ensure a title update even in supported browsers.</li>\n                            <li>abbreviate: should tinycon shrink large numbers such as 1000 to an abbreviated version (1k). Boolean, defaults to true</li>\n                        </ul>\n\n                        <p><strong>Example usage</strong></p>\n                            <pre>\nTinycon.setBubble(6);\n\nTinycon.setOptions({\n    width: 7,\n    height: 9,\n    font: \'10px arial\',\n    colour: \'#ffffff\',\n    background: \'#549A2F\',\n    fallback: true\n});\n                            </pre>\n\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>') ];
}));

}).call(this);
