// Include the required tools used on tasks
const { watch, src, series, dest, parallel } = require("gulp")
const terser = require("gulp-terser")
const newer = require("gulp-newer")
const babel = require("gulp-babel")
const postcss = require("gulp-postcss")
const cleanCSS = require("gulp-clean-css")
const cssbeautify = require("gulp-cssbeautify")
const concat = require("gulp-concat")
const htmlmin = require("gulp-htmlmin")
const inlinesource = require("gulp-inline-source")
const cachebust = require("gulp-cache-bust")
const eslint = require("gulp-eslint")
const imagemin = require("gulp-imagemin")
const autoprefixer = require("autoprefixer")
const del = require("del")

// Initialise plugins
const browsersync = require("browser-sync").create()
// const reload = browserSync.reload;

// Specify the Source files
const SRC_HTML = ["index.html"]
const SRC_JS = "app.js"
const SRC_JS_MODULES = [
  "assets/js/jquery-3.5.1.min.js",
  "assets/js/jquery-ui-1.12.1.min.js",
  "assets/js/lazysizes.min.js",
]
const SRC_CSS = ["assets/css/*.css", "!assets/css/preloader.css"]
const SRC_IMG = "assets/img/*"
const SRC_PDF = "assets/pdf/*"

// Specify the Destination folders
const DEST_HTML = "dist/"
const DEST_JS = "dist/js"
const DEST_CSS = "dist/css"
const DEST_IMG = "dist/img"
const DEST_PDF = "dist/pdf"

// BrowserSync
function browserSync(done) {
  browsersync.init({
    server: {
      baseDir: "./dist/",
    },
    port: 3000,
  })
  done()
}

// BrowserSync Reload
function browserSyncReload(done) {
  browsersync.reload()
  done()
}

// CLEAN files
function htmlClean() {
  return del([DEST_HTML])
}

function jsClean() {
  return del([DEST_JS])
}

function cssClean() {
  return del([DEST_CSS])
}

function imgClean() {
  return del(["./dist/assets"])
}

// Lint files
function lint() {
  return src(SRC_JS)
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError())
}

// Build JS
function jsBuild() {
  return src(SRC_JS)
    .pipe(babel())
    .pipe(terser())
    .pipe(concat("app.min.js"))
    .pipe(dest(DEST_JS))
}

// Build CSS
function cssBuild() {
  return src(SRC_CSS)
    .pipe(postcss([autoprefixer()]))
    .pipe(cssbeautify({ autosemicolon: true }))
    .pipe(cleanCSS({ compatibility: "ie8" }))
    .pipe(concat("styles.min.css"))
    .pipe(dest(DEST_CSS))
}

function htmlBuild() {
  return src(SRC_HTML)
    .pipe(htmlmin({ collapseWhitespace: true, removeComments: true }))
    .pipe(inlinesource({ compress: true }))
    .pipe(
      cachebust({
        type: "timestamp",
      })
    )
    .pipe(dest(DEST_HTML))
}

function images() {
  return src(SRC_IMG)
    .pipe(newer(DEST_IMG))
    .pipe(
      imagemin([
        imagemin.gifsicle({ interlaced: true }),
        imagemin.mozjpeg({ progressive: true }),
        imagemin.optipng({ optimizationLevel: 5 }),
        imagemin.svgo({
          plugins: [
            {
              removeViewBox: false,
              collapseGroups: true,
            },
          ],
        }),
      ])
    )
    .pipe(dest(DEST_IMG))
    .pipe(dest("dist/img"))
}

function jsModulesCopy() {
  return src(SRC_JS_MODULES).pipe(dest(DEST_JS))
}

function copyFiles() {
  return src([
    "googlec6cb74579ce2fc25.html",
    "sitemap.xml",
    "robots.txt",
    "CNAME",
    "README.md",
  ]).pipe(dest(DEST_HTML))
}

function pdfCopy() {
  return src(SRC_PDF).pipe(dest(DEST_PDF))
}

// WATCH for file changes and run the tasks
function watchFiles() {
  watch(SRC_JS, jsBuild)
  watch(SRC_JS_MODULES, jsModulesCopy)
  watch(SRC_CSS, cssBuild)
  watch(SRC_PDF, pdfCopy)
  watch(["assets/css/preloader.css", "index.html"], htmlBuild)
  watch(SRC_IMG, images)
  watch([...SRC_JS, ...SRC_CSS, "index.html"], browserSyncReload)
}

const clean = parallel(jsClean, cssClean, imgClean)
const build = parallel(
  htmlBuild,
  jsBuild,
  cssBuild,
  images,
  jsModulesCopy,
  pdfCopy,
  copyFiles
)
const watcher = parallel(watchFiles, browserSync)

// Export tasks
exports.lint = lint
exports.htmlBuild = series(htmlClean, htmlBuild)
exports.jsBuild = series(jsClean, lint, parallel(jsBuild, jsModulesCopy))
exports.cssBuild = series(cssClean, cssBuild)
exports.pdfCopy = pdfCopy
exports.jsModulesCopy = jsModulesCopy
exports.images = images
exports.watch = watcher
exports.build = build
exports.default = series(clean, build)
