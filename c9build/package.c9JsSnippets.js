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
                    "data": "# scope: javascript\nsnippet test\n\tif (${1:true}) {\n\t\t${2}\n\t}\n\t$0\n\t\nsnippet pleaseWork\n\tif (${1:true}) {\n\t\t${2}\n\t} else {\n\t\t${0}\n\t}\n"
                }
            ].forEach(function(x) {
                debug.addStaticPlugin(x.type, "c9JsSnippets", x.filename, x.data, plugin);
            });
        });
        
        plugin.load("c9JsSnippets.bundle");
        
        register(null, {});
    }
});
