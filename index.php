<?php
/*
Plugin Name: custom-blocks
*/

function registerBlock() {
    wp_enqueue_script(
        "custom-block",
        plugins_url("dest" . DIRECTORY_SEPARATOR . "bundle.js", __FILE__),
        ["wp-blocks", "wp-element", "wp-editor"],
        filemtime(plugin_dir_path(__FILE__) . "dest" . DIRECTORY_SEPARATOR . "bundle.js")
    );
    wp_enqueue_style(
        "block-style",
        plugins_url("dest" . DIRECTORY_SEPARATOR . "bundle.css", __FILE__),
        [],
        filemtime(plugin_dir_path(__FILE__) . "dest" . DIRECTORY_SEPARATOR . "bundle.css")
    );
    // apply theme style.
//    wp_enqueue_style(
//        "theme-style",
//        get_template_directory_uri() . DIRECTORY_SEPARATOR . "assets" . DIRECTORY_SEPARATOR . "css" . DIRECTORY_SEPARATOR . "style.css",
//        [],
//        filemtime(get_template_directory() . DIRECTORY_SEPARATOR . "assets" . DIRECTORY_SEPARATOR . "css" . DIRECTORY_SEPARATOR . "style.css")
//    );

}
add_action("enqueue_block_editor_assets", "registerBlock");
