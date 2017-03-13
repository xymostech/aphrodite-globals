import {StyleSheetServer} from "aphrodite";

import {injectGlobals} from "../index.js";
import {injectGlobals as injectGlobalsNoImportant} from "../no-important.js";

describe("injectGlobals", () => {
    it("injects styles into the global scope", () => {
        const {css} = StyleSheetServer.renderStatic(() => {
            injectGlobals({
                div: {
                    color: "blue",
                },

                a: {
                    ":hover": {
                        textDecoration: "none",
                    },
                },
            });
        });

        expect(css.content).toEqual(
            "div{color:blue !important;}" +
            "a:hover{text-decoration:none !important;}");
    });

    it("injects non-!important styles into the global scope", () => {
        const {css} = StyleSheetServer.renderStatic(() => {
            injectGlobalsNoImportant({
                div: {
                    color: "blue",
                },

                a: {
                    ":hover": {
                        textDecoration: "none",
                    },
                },
            });
        });

        expect(css.content).toEqual(
            "div{color:blue;}" +
            "a:hover{text-decoration:none;}");
    });
});
