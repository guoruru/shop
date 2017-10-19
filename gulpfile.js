/**
 * Created by Administrator on 2017/10/16.
 */
var url = require('url');
var fs = require('fs');
var path = require('path');
var gulp = require('gulp');
var webserver = require('gulp-webserver');
gulp.task('webserver', function () {
    gulp.src("./")
        .pipe(webserver({
            host: 'localhost',
            port: 8090,
            livereload: true,
            open: true,
            directiveListing: {
                path: './',
                enable: true
            },
            middleware: function (req, res, next) {
                var urlObj = url.parse(req.url, true).search.split('?')[1] + '.json';
                var urlFile = path.join(__dirname, 'Data', urlObj);
                fs.exists(urlFile, function (exist) {
                    if (!exist) {
                        res.writeHead(404, {
                            "Content-Type": "text/json;charset=utf-8"
                        });
                        res.end("can not find this file")
                    } else {
                        fs.readFile(urlFile, function (err, data) {
                            if (err) return console.error(err);
                            res.writeHead(200, {
                                "Content-Type": "text/json;charset=utf-8",
                                "Access-Control-Allow-Origin": "http://localhost:63342"
                            });
                            res.end(data.toString());
                        })
                    }
                })
            }
        }))
});