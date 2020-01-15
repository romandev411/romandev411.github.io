const gulp = require('gulp');
const del = require('del');
const browserSync = require('browser-sync');
const sass = require('gulp-sass');
const rename = require('gulp-rename');
const prefix = require('gulp-autoprefixer');
const cssnano = require('gulp-cssnano');
const sourcemaps = require('gulp-sourcemaps');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');
const pngquant = require('imagemin-pngquant');
const plumber = require('gulp-plumber');
const svgSprite = require('gulp-svg-sprites');
const svgmin = require('gulp-svgmin');
const cheerio = require('gulp-cheerio');
const replace = require('gulp-replace');
const babel = require('gulp-babel');
const notifier = require('node-notifier');
const eslint = require('gulp-eslint');
const path = require('path');
const sassLint = require('sass-lint');
const through = require('through2');
const svgToSss = require('gulp-svg-to-css');
const insert = require('gulp-insert');
const runSequence = require('run-sequence');
const twig = require('gulp-twig');
const tap = require('gulp-tap');
const base64Img = require('base64-img');
const fs = require('fs');

const { reload } = browserSync;

const pathes = {
  dist: {
    html: 'dist/html',
    js: 'dist/js',
    static: 'dist/static/',
    css: 'dist/css',
    sprites: 'dist/images/sprites',
    img: 'dist/images',
    video: 'dist/video',
    fonts: 'dist/fonts',
  },
  src: {
    html: 'src/html',
    js: 'src/js',
    sass: 'src/sass',
    img: 'src/images',
    video: 'src/video',
    svg: 'src/images-sprite/svg-sprite',
    cssIcons: 'src/images-sprite/css-sprite',
    imgIcons: 'src/images-sprite/img-sprite',
    templates: 'src/templates',
    fonts: 'src/fonts',
  },
};

const config = {
  jsModules: [
    `${pathes.src.js}/modules.js`,
    `${pathes.src.js}/modules/**/*.js`,
    `${pathes.src.js}/components/**/*.js`,
  ],
  jsLibs: [
    // `node_modules/jquery/dist/jquery.js`,
  ],
};

function plumberFn(error) {
  notifier.notify(error.message);
}

gulp.task('clean', () => {
  const vals = [];
  Object.keys(pathes.dist).forEach(key => {
    vals.push(pathes.dist[key]);
  });
  return del.sync(vals);
});

gulp.task('copy', () => {
  gulp.src(`${pathes.src.fonts}/**/*`).pipe(gulp.dest(pathes.dist.fonts));
});

gulp.task('sass-lint', () =>
  gulp.src([`${pathes.src.sass}/**/*.s+(a|c)ss`, `!${pathes.src.sass}/libs/**/*`]).pipe(
    through.obj((chunk, enc, cb) => {
      const file = chunk;
      const userOptions = {};

      // load our config from sassLint and the user provided options if available
      file.sassConfig = sassLint.getConfig(userOptions);
      // save the config file within the file object for access when this file is piped around
      file.userOptions = userOptions;

      // lint the file and pass the user defined options and config path to sass lint to handle
      file.sassLint = [
        sassLint.lintFileText(
          {
            text: file.contents,
            format: path.extname(file.path).replace('.', ''),
            filename: path.relative(process.cwd(), file.path),
          },
          userOptions
        ),
      ];

      // show messages
      if (file.sassLint[0].warningCount > 0 || file.sassLint[0].errorCount > 0) {
        const message = file.sassLint[0].messages
          .map(m => `${m.message} ${m.line}:${m.column} (${m.ruleId})`)
          .join(',\n');

        notifier.notify({
          title: `SCSS: ${path.basename(file.path)}`,
          message,
        });

        console.log(file.path, message);
      }
      cb(null, file);
    })
  )
);

gulp.task('html', () =>
  gulp
    .src(`${pathes.src.html}/*.twig`)
    .pipe(
      twig({
        data: {
          title: 'Gulp and Twig',
          benefits: ['Fast', 'Flexible', 'Secure'],
        },
      })
    )
    .pipe(gulp.dest(pathes.dist.html))
    .pipe(reload({ stream: true }))
);

gulp.task('html-watch', ['html'], reload);

// gulp.task('icons-to-scss', () =>
//   gulp
//     .src(`${pathes.src.cssIcons}/**/*`)
//     .pipe(
//       cheerio({
//         run: function run($) {
//           $('[svg]').attr('width', '100%');
//           $('[svg]').attr('height', '100%');
//         },
//         parserOptions: { xmlMode: true },
//       })
//     )
//     .pipe(
//       svgToSss({
//         name: 'icons.scss',
//         prefix: 'icon-',
//         template: `.{{prefix}}{{filename}}{{postfix}}:after { background-image: url('{{{dataurl}}}'); }`,
//       })
//     )
//     .pipe(
//       insert.prepend(`// generated SVG icons
// [class*='icon-']:after {
//   content: '';
//   display: block;
//   width: 100%;
//   height: 100%;
//   background-size: contain;
//   background-position: center;
//   background-repeat: no-repeat;
// }\n\n`)
//     )
//     .pipe(gulp.dest(pathes.src.sass))
//     .pipe(reload({ stream: true }))
// );
//
// gulp.task('img-to-scss', ['icons-to-scss'], () =>
//   // TODO: avoid multiple file loading, change to async
//   gulp
//     .src(`${pathes.src.imgIcons}/**/*`)
//     .pipe(
//       tap(file => {
//         const base64 = base64Img.base64Sync(file.path);
//         const extension = path.extname(file.path);
//         const fileName = path.basename(file.path, extension);
//         fs.appendFileSync(
//           // `${pathes.src.sass}/icons.scss`,
//           // `.icon-img-${fileName}:after { background-image: url('${base64}'); }\n`
//         );
//       })
//     )
//     .pipe(reload({ stream: true }))
// );

gulp.task('sass', () =>
  gulp
    .src([`${pathes.src.sass}/style.scss`])
    .pipe(plumber(plumberFn))
    .pipe(sass())
    .pipe(prefix(['> 1%', 'ie 10']))
    .pipe(gulp.dest(pathes.dist.css))
    .pipe(reload({ stream: true }))
);

gulp.task('css-min-style', ['sass'], () =>
  gulp
    .src([`${pathes.dist.css}/style.css`])
    .pipe(plumber(plumberFn))
    .pipe(cssnano())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest(pathes.dist.css))
    .pipe(reload({ stream: true }))
);

gulp.task('js-libs', () =>
  gulp
    .src(config.jsLibs)
    .pipe(plumber(plumberFn))
    .pipe(sourcemaps.init())
    .pipe(
      babel({
        presets: [['env', { modules: false }]],
      })
    )
    .pipe(concat('libs.js'))
    .pipe(uglify())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(pathes.dist.js))
    .pipe(reload({ stream: true }))
);

gulp.task('js-modules', () =>
  gulp
    .src(config.jsModules)
    .pipe(plumber(plumberFn))
    .pipe(sourcemaps.init())
    .pipe(
      babel({
        presets: [['env', { modules: false }]],
      })
    )
    .pipe(concat('modules.js'))
    .pipe(uglify())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(pathes.dist.js))
    .pipe(reload({ stream: true }))
);

gulp.task('js-modules-update', ['js-modules'], () =>
  gulp
    .src([`${pathes.dist.js}/libs.js`, `${pathes.dist.js}/modules.js`])
    .pipe(plumber(plumberFn))
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(concat('build.js'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(pathes.dist.js))
    .pipe(reload({ stream: true }))
);

gulp.task('js', ['js-libs', 'js-modules'], () =>
  gulp
    .src([`${pathes.dist.js}/libs.js`, `${pathes.dist.js}/modules.js`])
    .pipe(plumber(plumberFn))
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(concat('build.js'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(pathes.dist.js))
    .pipe(reload({ stream: true }))
);

gulp.task('img', () =>
  gulp
    .src(`${pathes.src.img}/**/*`)
    .pipe(
      imagemin({
        interlaced: true,
        progressive: true,
        svgoPlugins: [{ removeViewBox: false }],
        use: [pngquant()],
      })
    )
    .pipe(gulp.dest(pathes.dist.img))
);

gulp.task('svg-sprite-build', () =>
  gulp
    .src(`${pathes.src.svg}/**/*`)
    // minify svg
    .pipe(
      svgmin({
        js2svg: {
          pretty: true,
        },
      })
    )
    // remove all fill and style declarations in out shapes
    .pipe(
      cheerio({
        run: function run($) {
          $('title').remove();
        },
        parserOptions: { xmlMode: true },
      })
    )
    // cheerio plugin create unnecessary string '>', so replace it.
    .pipe(replace('&gt;', '>'))
    // build svg sprite
    .pipe(
      svgSprite({
        mode: 'symbols',
        preview: false,
        svg: {
          symbols: 'sprite.svg',
        },
      })
    )
    .pipe(gulp.dest(pathes.src.html + '/include'))
);

gulp.task('build', callback => {
  runSequence(
    'clean',
    ['copy', 'html', 'js', 'svg-sprite-build', 'img'],
    'css-min-style',
    callback
  );
});

gulp.task('watch-root', ['build'], () => {
  browserSync({ server: './dist' });

  gulp.watch(`${pathes.src.html}/**/*.twig`, ['html-watch']);
  gulp.watch([`${pathes.src.sass}/**/*.scss`], ['css-min-style']);
  // gulp.watch([`${pathes.src.cssIcons}/**/*.svg`, `${pathes.src.imgIcons}/**/*`], ['img-to-scss']);
  gulp.watch(`${pathes.src.img}/**/*`, ['img']);
  gulp.watch(`${pathes.src.svg}/*.svg`, ['svg-sprite-build']);
});

gulp.task('watch', ['watch-root'], () => {
  gulp.watch(config.jsModules, ['js-modules-update']);
});

gulp.task('default', ['watch']);
