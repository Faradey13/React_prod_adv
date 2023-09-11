
import webpack, { RuleSetRule } from 'webpack';
import path from "path";
import {BuildPaths} from "../build/types/config";
import {buildCssLoader} from "../build/loaders/buildCssLoader";

export default ({config}: {config:webpack.Configuration}) => {
    const paths: BuildPaths = {
        html: '',
        build: '',
        entry: '',
        src: path.resolve(__dirname, '..', '..', 'src')
    }


    const rules = config.module!.rules as RuleSetRule[];
    // eslint-disable-next-line no-param-reassign
    config.module!.rules = rules.map((rule) =>
        /svg/.test(rule.test as string) ? { ...rule, exclude: /\.svg$/i } : rule
    );

    config.module!.rules.push({
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    });
    config.resolve.modules.push(paths.src)
    config.resolve.extensions.push('.ts', '.tsx');
    config.module.rules.push(buildCssLoader(true))

    return config
}