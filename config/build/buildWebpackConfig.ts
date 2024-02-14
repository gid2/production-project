import path from "path";
import { builLoaders } from "./builLoaders";
import { buildResolvers } from "./buildResolvers";
import { bulidPlugins } from "./bulidPlugins";

import webpack from 'webpack'
import { BuildOptions } from "./types/config";
import { buildDevServer } from "./buildDevServer";

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {

    const {paths, mode, isDev} = options
 return {
    mode,
    entry: paths.entry ,
    output: {
        filename: "[name].[contenthash].js",
        path: paths.build,
        clean: true,
    },
    
    plugins: bulidPlugins(options),

    module:{
        rules: builLoaders(options), 
    },
    resolve: buildResolvers(),
    devtool: isDev ? 'inline-source-map' : undefined,
    devServer: isDev ? buildDevServer(options) : undefined,
}
}
