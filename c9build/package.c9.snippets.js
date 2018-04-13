define("plugins/c9.snippets/package.c9.snippets", [], {
    "name": "c9.snippets",
    "c9": {
        "plugins": [
            {
                "packagePath": "plugins/c9.snippets/__static__"
            }
        ]
    }
});

define("plugins/c9.snippets/__static__",[], function(require, exports, module) {
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
                    "filename": "css.snippets",
                    "data": "# scope: css\n\nsnippet import\n\t@import '${1}';${0}\n\n\nsnippet square\n\twidth: ${1};\n\theight: ${1};\n\n"
                },
                {
                    "type": "snippets",
                    "filename": "go.snippets",
                    "data": "# scope: golang\n\nsnippet ap\n\t${1:slice} = append(${1:slice}, ${2:value})\n\nsnippet br\n\tbreak\n\nsnippet ch\n\tchan ${1:int}\n\nsnippet cs\n\tcase ${1:value}:\n\t\t${2:/* code */}\n\nsnippet c\n\tconst ${1:NAME} = ${2:0}\n\nsnippet df\n\tdefer ${1:func}()\n\n\nsnippet dfr\n\tdefer func() {\n\t\tif err := recover(); err != nil {\n\t\t\t${1:/* code */}\n\t\t}\n\t}()\n\nsnippet if\n\tif ${1:/* condition */} {\n\t\t${2:/* code */}\n\t}\n\nsnippet fo\n\tfor ${2:i} = 0; $2 < ${1:count}; $2${3:++} {\n\t\t${4:/* code */}\n\t}\n\n\nsnippet fr\n\tfor ${1:k}, ${2:v} := range ${3} {\n\t\t${4:/* code */}\n\t}\n\nsnippet cn\n\tcontinue\n\nsnippet mapT\n\tmap[${1:T}]${2:T}{${0}}\n\nsnippet err\n\tif err != nil {\n\t\treturn stacktrace.Propagate(err, \"${1}\")\n\t}\n\t${0}\n\nsnippet err2\n\tif err != nil {\n\t\treturn ${1:nil}, stacktrace.Propagate(err, \"${2}\")\n\t}\n\t${0}\n\nsnippet typei\n\t// ${1:name} ${2:description}\n\ttype ${1:name} interface {\n\t\t${0}\n\t}\n\nsnippet types\n\t// ${1:name} ${2:description}\n\ttype ${1:name} struct {\n\t\t${0}\n\t}\n\nsnippet funcc\n\t// ${3:Do} ${6:description}\n\tfunc (${1:s} ${2:T}) ${3:Do}(${4:/* args */}) ${5:error} {\n\t\t${0}\n\t}\n\nsnippet funcp\n\t// ${3:Do} ${6:description}\n\tfunc (${1:s} *${2:T}) ${3:Do}(${4:/* args */}) ${5:error} {\n\t\t${0}\n\t}\n\nsnippet mk\n\tmake(${1:[]string}, ${2:0})\n\nsnippet pr\n\tfmt.Printf(\"${1:%s}\\n\", ${2:var})\n\t${0}\n\nsnippet sp\n\tfmt.Sprintf(\"${1:%s}\", ${2:var})${3}\n\nsnippet sl\n\tselect {\n\tcase ${1:v1} := <-${2:chan1}\n\t\t${3:/* code */}\n\tcase ${4:v2} := <-${5:chan2}\n\t\t${6:/* code */}\n\tdefault:\n\t\t${7:/* code */}\n\t}\n\nsnippet New\n\t// New ${1:description}\n\tfunc New(${2:/* args */}) ${3:/* interface */} {\n\t\treturn &${4:/* struct */}{${5:/* initialize */}}\n\t}"
                },
                {
                    "type": "snippets",
                    "filename": "javascript.snippets",
                    "data": "# scope: javascript\n\nsnippet maxlen\n\t// eslint-disable-next-line max-len ${0}\n\nsnippet eslint\n\t// eslint-disable-next-line ${0}\n\nsnippet flow\n\t// @flow\n\t${0}\n\nsnippet noflow\n\t// @noflow\n\t${0}\n\nsnippet expectError\n\t// \\$ExpectError\n\nsnippet fixMe\n\t// \\$FlowFixMe\n\nsnippet comment\n\t//------------------------------------------------------------------------------\n\t// ${0}\n\t//------------------------------------------------------------------------------\n\nsnippet import\n\timport ${1} from '${2}';${0}\n\n\nsnippet cn\n\tclassName={css.${1}}${0}\n\nsnippet classes\n\tconst classes = className ? `\\${className} \\${${1}}` : ${1};\n\nsnippet react\n\t// @flow\n\timport * as React from 'react';\n\t${0}\n\n\nsnippet stf\n\timport * as React from 'react';\n\timport { shallow } from 'enzyme';\n\timport ${1} from './index.js';\n\n\tdescribe('<${1} />', () => {\n\t  it('${2}', () => {\n\t\tconst wrapper = shallow(\n\t\t  <${1} ${0} />\n\t\t);\n\t\texpect(wrapper).toMatchSnapshot();\n\t  });\n\t});\n\t\n\nsnippet itshallow\n\tit('${2}', () => {\n\t  const wrapper = shallow(\n\t\t<${1} ${0} />\n\t  );\n\t  expect(wrapper).toMatchSnapshot();\n\t});\n\nsnippet it\n\tit('${1}', () => {\n\t  expect(${2}).${0}();\n\t});\n\nsnippet describe\n\tdescribe('${1}', () => {\n\t  it('${2}', () => {\n\t\tconst wrapper = shallow(\n\t\t  <${1} ${0} />\n\t\t);\n\t\texpect(wrapper).toMatchSnapshot();\n\t  });\n\t});\n\nsnippet stateless\n\t// @flow\n\timport * as React from 'react';\n\timport css from './styles.css';\n\t\n\ttype Props = {\n\t  ${2}\n\t};\n\t\n\tconst ${1} = ({${3}}: Props) => {\n\t  return (\n\t\t<div>\n\t\t  ${0}\n\t\t</div>\n\t  );\n\t};\n\t\n\texport default ${1};\n\nsnippet connectedcomponent\n\t// @flow\n\timport * as React from 'react';\n\timport { connect } from 'react-redux';\n\timport css from './styles.css';\n\t\n\ttype Props = {\n\t  ${2}\n\t};\n\t\n\tconst mapStateToProps = (state: State): Props => {\n\t  return {\n\t\t${3}\n\t  };\n\t};\n\t\n\t\n\tconst dispatcher = {\n\t  ${5}\n\t};\n\t\n\ttype DispatcherProps = {\n\t  ${4}\n\t};\n\t\n\tclass ${1} extends React.Component<Props & DispatcherProps> {\n\t  render() {\n\t\treturn (\n\t\t  <div>\n\t\t\t${0}\n\t\t  </div>\n\t\t);\n\t  }\n\t}\n\t\n\texport default connect(mapStateToProps, dispatcher)(${1});\n\n\nsnippet component\n\t// @flow\n\timport * as React from 'react';\n\timport css from './styles.css';\n\t\n\ttype Props = {\n\t  ${2}\n\t};\n\t\n\tclass ${1} extends React.Component<Props> {\n\t  render() {\n\t\treturn (\n\t\t  <div>\n\t\t\t${0}\n\t\t  </div>\n\t\t);\n\t  }\n\t}\n\t\n\texport default ${1};\n\nsnippet componentstate\n\t// @flow\n\timport * as React from 'react';\n\timport css from './styles.css';\n\t\n\ttype Props = {\n\t  ${2}\n\t};\n\t\n\ttype State = {\n\t  ${3}\n\t}\n\t\n\tclass ${1} extends React.Component<Props, State> {\n\t  state = {\n\t\t${4}\n\t  }\n\t  \n\t  render() {\n\t\treturn (\n\t\t  <div>\n\t\t\t${0}\n\t\t  </div>\n\t\t);\n\t  }\n\t}\n\t\n\texport default ${1};\n\nsnippet switch\n\tswitch (${1:expression}) {\n\t  case ${3:case}:\n\t\t${4:// code}\n\t\tbreak;\n\t  ${0}\n\t  default:\n\t\t${2:// code}\n\t\tbreak;\n\t}\n\n\n# Expect to be true\nsnippet tbt\n\texpect(${1}).toBe(true);${0}\n\n\n# Expect to be false\nsnippet tbf\n\texpect(${1}).toBe(false);${0}\n\n\n\t\n"
                },
                {
                    "type": "snippets",
                    "filename": "markdown.snippets",
                    "data": "# scope: markdown\n\n# Wrap the current selected text in a <kbd> element\nsnippet kbd\n\t<kbd>${SELECTION}</kbd>${0}\n"
                }
            ].forEach(function(x) {
                debug.addStaticPlugin(x.type, "c9.snippets", x.filename, x.data, plugin);
            });
        });
        
        plugin.load("c9.snippets.bundle");
        
        register(null, {});
    }
});
