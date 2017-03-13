// @flow
import {StyleSheet as origStyleSheet} from "aphrodite";

const globalExtension = {
    selectorHandler: (selector: string, _: string, generateSubtreeStyles: (string) => string): ?string => {
        if (selector[0] !== "#") {
            return null;
        }

        return generateSubtreeStyles(selector.slice(1));
    },
};

const {StyleSheet, css} = origStyleSheet.extend([globalExtension]);

export function injectGlobals(globalStyles: {[string]: any}) {
    const prefixedStyles = {};
    Object.keys(globalStyles).forEach(key => {
        prefixedStyles[`#${key}`] = globalStyles[key];
    });

    const styles = StyleSheet.create({
        global: prefixedStyles,
    });
    css(styles.global);
}
