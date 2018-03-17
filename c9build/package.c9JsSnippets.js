define("plugins/c9JsSnippets/package.c9JsSnippets", [], {
    "name": "c9JsSnippets",
    "c9": {
        "plugins": [
            {
                "packagePath": "plugins/c9JsSnippets/__static__"
            }
        ]
    }
});

define("plugins/c9JsSnippets/__static__",[], function(require, exports, module) {
    main.consumes = [
        "Plugin", "plugin.debug"
    ];
    main.provides = [];
    return main;
    function main(options, imports, register) {
        var debug = imports["plugin.debug"];
        var Plugin = imports.Plugin;
        var plugin = new Plugin();
        plugin.version = "undefined";
        plugin.on("load", function load() {
            [
                {
                    "type": "snippets",
                    "filename": "javascript.snippets",
                    "data": "# scope: javascript\nsnippet test\n\tif (${1:true}) {\n\t\t${2}\n\t}\n\t${0}\n\n\nsnippet maxlen\n\t// eslint-disable-next-line max-len ${0}\n\nsnippet eslint\n\t// eslint-disable-next-line ${0}\n\nsnippet flow\n\t// @flow\n\t${0}\n\nsnippet noflow\n\t// @noflow\n\t${0}\n\nsnippet expectError\n\t// $ExpectError\n\nsnippet fixMe\n\t// $FlowFixMe\n\nsnippet comment\n\t//------------------------------------------------------------------------------\n\t// ${0}\n\t//------------------------------------------------------------------------------\n\n\nsnippet react\n\t// @flow\n\timport * as React from 'react';\n\t${0}\n\n\nsnippet stf\n\timport * as React from 'react';\n\timport { shallow } from 'enzyme';\n\timport ${1} from './index.js';\n\n\tdescribe('<${1} />', () => {\n\t  it('${2}', () => {\n\t    const wrapper = shallow(\n\t      <${1} ${0} />\n\t    );\n\t    expect(wrapper).toMatchSnapshot();\n\t  );\n\t});\n\t\n\nsnippet sts\n\tit('${2}', () => {\n\t  const wrapper = shallow(\n\t    <${1} ${0} />\n\t  );\n\t  expect(wrapper).toMatchSnapshot();\n\t});\n\nsnippet describe\n\tdescribe('${1}', () => {\n\t  it('${2}', () => {\n\t    const wrapper = shallow(\n\t      <${1} ${0} />\n\t    );\n\t    expect(wrapper).toMatchSnapshot();\n\t  });\n\t});\n\n"
                }
            ].forEach(function(x) {
                debug.addStaticPlugin(x.type, "c9JsSnippets", x.filename, x.data, plugin);
            });
        });
        
        plugin.load("c9JsSnippets.bundle");
        
        register(null, {});
    }
});
