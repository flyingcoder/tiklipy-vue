import express from 'express';
import fs from "fs";
import path from "path";
import { SitemapStream, streamToPromise } from "sitemap";
import sj from "stream-json";
import s from "stream-json/streamers/StreamArray.js";
import map from "through2-map";
import { createGzip } from "zlib";
import 'dotenv/config';

const router = express.Router();
const { parser } = sj;
const { streamArray } = s;
let sitemap;

router.get("/", (req, res) => {
    res.header('Content-Type', 'application/xml');
    res.header('Content-Encoding', 'gzip');

    if(sitemap) {
        res.send(sitemap);
        return;
    }

    try {
        const gzippedStream = fs
            .createReadStream(
                path.resolve("routes", '..', 'server', 'perf-data.json')
            )
            // stream parse the json - this avoids having to pull the entire file into memory
            .pipe(parser())
            .pipe(streamArray()) // replace with streamValues for JSONStream
            .pipe(map.obj((chunk) => chunk.value))
            .pipe(new SitemapStream({ 
                hostname: process.env.VITE_APP_URL,
                lastmodDateOnly: false,
                xmlns: {
                    xhtml: true,
                    image: true,
                }
            }))
            .pipe(createGzip());
    
        streamToPromise(gzippedStream).then((sm) => (sitemap = sm));

        gzippedStream.pipe(res).on('error', (e) => {
            throw e;
        });
    } catch (e) {
        req.log.error(e);
        res.status(500).end();
    }
})

export default router;