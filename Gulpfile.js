const { src, dest, series, task, watch } = require('gulp');

// Plugins

const rimraf =      require('rimraf');
const concat =      require('gulp-concat');
const scss =        require('gulp-sass');
const clean_css =   require('gulp-clean-css');
const uglify_js =   require('gulp-uglify');
const babel =       require('gulp-babel');

// ===

task('clear', done =>
{
    rimraf.sync('out/*');
    done();
});

task('build_htmls', done =>
{
    const genHtml = require('./engine').genHtml; 

    // Index
    genHtml('src/_layout/index.pug', 'out/index.html', { });

    done();
});

task('build_styles', () =>
{
    return src(['src/_styles/**/*.scss', '!src/_styles/**/_*.scss'])
        .pipe(concat('style.min.css'))
        .pipe(scss())
        .pipe(clean_css())
        .pipe(dest('out'));
});

task('build_scripts', () =>
{
    return src(['src/_scripts/**/*.js'])
        .pipe(babel( { presets: ['@babel/preset-env'] } ))
        .pipe(uglify_js())
        .pipe(dest('out/scripts'));
});

task('move_files', () =>
{
    return src(
        [
            'src/**/*',
            '!site/**/_*/',
            '!site/**/_*/**/*',
            '!site/**/_*'
        ], { nodir: true }
    ).pipe(dest('out'));
});

//

task('build', done =>
{
    series('clear', 'build_styles', 'build_scripts', 'build_htmls', 'move_files')();
    done();
});

task('watch', () =>
{
    watch(['src/**/*'], series('build'));
});