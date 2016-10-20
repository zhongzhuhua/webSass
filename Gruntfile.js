// grunt 配置
module.exports = function(grunt) {
    // 加载 grunt 所需插件
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');

    // 初始化配置
    grunt.initConfig({
        // sass 编译
        sass: {
            options: {
                // 不生成 sourcemap 文件
                'sourcemap=none': '',
                // 指定 style in [nested,expanded,compact,compressed]
                style: 'compact'
            },
            // 压缩公用 css
            dist: {
                files: [{
                    // 多文件生成
                    expand: true,
                    // 指定 scss 文件夹
                    cwd: 'scss',
                    src: ['*.scss'],
                    dest: './css',
                    ext: '.css'
                }]
            }
        },

        // 监听 sass 文件修改
        watch: {
            // 监控配置
            options: {
                // 1s 执行，默认 500ms
                debounceDelay: 1000
            },
            sass: {
                files: ['scss/**/*.scss'],
                tasks: ['sass']
            }
        }
    });

    // 默认任务执行 sass
    grunt.registerTask('default', '默认任务', function() {
        grunt.task.run(['sass']);
    });

    grunt.registerTask('watch', '默认任务', function() {
        grunt.task.run(['sass', 'watch']);
    });
};
