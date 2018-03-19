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
                    "filename": "go.snippets",
                    "data": "# scope: _\nsnippet map\n\tmap[${1:T}]${2:T}\n\nsnippet gotest\n\tif (${1:true}) {\n\t\t${2}\n\t}\n\t${0}\n\nsnippet mapT\n\tmap[${1:T}]${2:T}{${0}}\n\nsnippet pleaseWork\n\tif (${1:true}) {\n\t\t${2}\n\t}"
                },
                {
                    "type": "snippets",
                    "filename": "javascript.snippets",
                    "data": "# scope: javascript\n\nsnippet maxlen\n\t// eslint-disable-next-line max-len ${0}\n\nsnippet eslint\n\t// eslint-disable-next-line ${0}\n\nsnippet flow\n\t// @flow\n\t${0}\n\nsnippet noflow\n\t// @noflow\n\t${0}\n\nsnippet expectError\n\t// \\$ExpectError\n\nsnippet fixMe\n\t// \\$FlowFixMe\n\nsnippet comment\n\t//------------------------------------------------------------------------------\n\t// ${0}\n\t//------------------------------------------------------------------------------\n\nsnippet react\n\t// @flow\n\timport * as React from 'react';\n\t${0}\n\n\nsnippet stf\n\timport * as React from 'react';\n\timport { shallow } from 'enzyme';\n\timport ${1} from './index.js';\n\n\tdescribe('<${1} />', () => {\n\t  it('${2}', () => {\n\t    const wrapper = shallow(\n\t      <${1} ${0} />\n\t    );\n\t    expect(wrapper).toMatchSnapshot();\n\t  );\n\t});\n\t\n\nsnippet sts\n\tit('${2}', () => {\n\t  const wrapper = shallow(\n\t    <${1} ${0} />\n\t  );\n\t  expect(wrapper).toMatchSnapshot();\n\t});\n\nsnippet describe\n\tdescribe('${1}', () => {\n\t  it('${2}', () => {\n\t    const wrapper = shallow(\n\t      <${1} ${0} />\n\t    );\n\t    expect(wrapper).toMatchSnapshot();\n\t  });\n\t});\n\nsnippet stateless\n\t// @flow\n\timport * as React from 'react';\n\timport css from './styles.css';\n\t\n\ttype Props = {\n\t  ${2}\n\t};\n\t\n\tconst ${1} = ({${3}}: Props) => {\n\t  return (\n\t    <div>\n\t      ${0}\n\t    </div>\n\t  );\n\t};\n\t\n\texport default ${1};\n\nsnippet connectedcomponent\n\t// @flow\n\timport * as React from 'react';\n\timport { connect } from 'react-redux';\n\timport css from './styles.css';\n\t\n\ttype Props = {\n\t  ${2}\n\t};\n\t\n\tconst mapStateToProps = (state: State): Props => {\n\t  return {\n\t    ${3}\n\t  };\n\t};\n\t\n\t\n\tconst dispatcher = {\n\t  ${5}\n\t};\n\t\n\ttype DispatcherProps = {\n\t  ${4}\n\t};\n\t\n\tclass ${1} extends React.Component<Props & DispatcherProps> {\n\t  render() {\n\t    return (\n\t      <div>\n\t        ${0}\n\t      </div>\n\t    );\n\t  }\n\t}\n\t\n\texport default connect(mapStateToProps, dispatcher)(${1});\n\n\nsnippet component\n\t// @flow\n\timport * as React from 'react';\n\timport css from './styles.css';\n\t\n\ttype Props = {\n\t  ${2}\n\t};\n\t\n\tclass ${1} extends React.Component<Props> {\n\t  render() {\n\t    return (\n\t      <div>\n\t        ${0}\n\t      </div>\n\t    );\n\t  }\n\t}\n\t\n\texport default ${1};\n\nsnippet componentstate\n\t// @flow\n\timport * as React from 'react';\n\timport css from './styles.css';\n\t\n\ttype Props = {\n\t  ${2}\n\t};\n\t\n\ttype State = {\n\t  ${3}\n\t}\n\t\n\tclass ${1} extends React.Component<Props, State> {\n\t  state = {\n\t    ${4}\n\t  }\n\t  \n\t  render() {\n\t    return (\n\t      <div>\n\t        ${0}\n\t      </div>\n\t    );\n\t  }\n\t}\n\t\n\texport default ${1};\n\nsnippet switch\n\tswitch (${1:expression}) {\n\t  case ${3:case}:\n\t    ${4:// code}\n\t    break;\n\t  ${0}\n\t  default:\n\t    ${2:// code}\n\t    break;\n\t}"
                }
            ].forEach(function(x) {
                debug.addStaticPlugin(x.type, "c9.snippets", x.filename, x.data, plugin);
            });
        });
        
        plugin.load("c9.snippets.bundle");
        
        register(null, {});
    }
});
