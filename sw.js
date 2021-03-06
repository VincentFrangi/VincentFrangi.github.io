/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["/404.html","689d4f782e6317662b1f6835fcc0c832"],["/about/index.html","b3f16b08710dd3e784f0974c4302f235"],["/assets/css/main.css","774ae4842dd35ead37ef11cd1341deda"],["/assets/img/favicon.jpg","3b71e1f89397608b2da98f27edcc6216"],["/assets/img/icons/android-chrome-192x192.png","11120a70b14fa66ca7a5ef74a0a95169"],["/assets/img/icons/android-chrome-256x256.png","cf03f52506d9458e7d3ef62244f0b65e"],["/assets/img/icons/apple-touch-icon.png","cf03f52506d9458e7d3ef62244f0b65e"],["/assets/img/icons/favicon-16x16.png","39e3df0a29d9b9aa91f8d1e583973612"],["/assets/img/icons/favicon-32x32.png","b9174d8e569cbb3cbcaf0619573f0afc"],["/assets/img/icons/icon-github.svg","4e06335104a29f91e08d4ef420da7679"],["/assets/img/icons/icon-instagram.svg","1e1119e2628235ee4c8771bff15eb2ca"],["/assets/img/icons/icon-twitter.svg","30551913d5399d6520e8a74b6f1e23f0"],["/assets/img/icons/mstile-150x150.png","1cea2ceb806d1a018330a51a1d8b73b6"],["/assets/img/icons/safari-pinned-tab.svg","32a0797d889cead949114529f204092c"],["/assets/img/posts/capeman-retrochars-crt.jpg","e9f6805eb9064c9162c5774e19d13500"],["/assets/img/posts/capeman-retrochars-crt_lg.jpg","e9f6805eb9064c9162c5774e19d13500"],["/assets/img/posts/capeman-retrochars-crt_md.jpg","6c66ca83782e53edd71c75ffbee10580"],["/assets/img/posts/capeman-retrochars-crt_placehold.jpg","791c61459e4cde8bc29665c317dc4135"],["/assets/img/posts/capeman-retrochars-crt_sm.jpg","225812f80e5cc2a3a08e49776a6df8a8"],["/assets/img/posts/capeman-retrochars-crt_thumb.jpg","7ae3e22cfc78a5db9b761f2b7c5d537e"],["/assets/img/posts/capeman-retrochars-crt_thumb@2x.jpg","2f515e3e7943ce0db952edec23c0dcc0"],["/assets/img/posts/capeman-retrochars-crt_xs.jpg","75d1a5fc2cbe68e55b3fb58df43a4cd9"],["/assets/img/posts/lake.jpg","07a770ea21461a6c8186f17a90d36922"],["/assets/img/posts/lake_lg.jpg","3d6c51ea653f9b3e282584503f24377d"],["/assets/img/posts/lake_md.jpg","ae7c374df4bd7df7230712201b862296"],["/assets/img/posts/lake_placehold.jpg","39314205b72fe1ade2f442e10a15e74a"],["/assets/img/posts/lake_sm.jpg","b340fbf49721c8b91e13f345165a780c"],["/assets/img/posts/lake_thumb.jpg","378a055fec7b7cc30e1df7506a7d6069"],["/assets/img/posts/lake_thumb@2x.jpg","7d43f718bc545902f4af964d0c800aff"],["/assets/img/posts/lake_xs.jpg","41f355f0d7c165e3eb535e65b6a8bc36"],["/assets/img/posts/mushroom.jpg","70200ff0b35151ca49032c53537e3f35"],["/assets/img/posts/mushroom_lg.jpg","8b85cc71552700029dac77bb0c35be23"],["/assets/img/posts/mushroom_md.jpg","747eeee5ee6c25030cfcf2184f050821"],["/assets/img/posts/mushroom_placehold.jpg","e75ff679c4dce7a2179ff48d56749ac2"],["/assets/img/posts/mushroom_sm.jpg","b2f1a25e51fd472faedf39485089db36"],["/assets/img/posts/mushroom_thumb.jpg","c24b059a80ce97eb7804413d62692183"],["/assets/img/posts/mushroom_thumb@2x.jpg","2f7facd7274781c653e093dbc602a42c"],["/assets/img/posts/mushroom_xs.jpg","74e8a592a578ef982a59adfc2dc73563"],["/assets/img/posts/snow.jpg","6ea9b175fd7a4d7bf8ee6e2cb9847652"],["/assets/img/posts/snow_lg.jpg","033293ca9dbc39b722ccc3323c633557"],["/assets/img/posts/snow_md.jpg","4480e49da7e04d960307be0a2c319395"],["/assets/img/posts/snow_placehold.jpg","e784332a8f9d1f09c16b4c25a7d05083"],["/assets/img/posts/snow_sm.jpg","723d78e5d32f4713907ff6ebb4c81d28"],["/assets/img/posts/snow_thumb.jpg","40a62e40484f4707eee85aae95c9747b"],["/assets/img/posts/snow_thumb@2x.jpg","e4b70180d1ee7573f5e927080caaad52"],["/assets/img/posts/snow_xs.jpg","d755c58ef18a11eb6692d0c1c04e67ae"],["/assets/img/posts/web_workflow.jpg","ff13e2742ea4483db2f79208f71fd4f2"],["/assets/img/posts/web_workflow_lg.jpg","ff13e2742ea4483db2f79208f71fd4f2"],["/assets/img/posts/web_workflow_md.jpg","301140e03f82fa2a47be82bd48d75b04"],["/assets/img/posts/web_workflow_placehold.jpg","1efb78bbaefb98aba4c27c58f43589af"],["/assets/img/posts/web_workflow_sm.jpg","a19f0d4b2b58d03f1734b7b6f59f1c47"],["/assets/img/posts/web_workflow_thumb.jpg","c8f83f463e0b74b0dfa404ebf741a30e"],["/assets/img/posts/web_workflow_thumb@2x.jpg","59be34088092bafd3470b06de4dd7f04"],["/assets/img/posts/web_workflow_xs.jpg","1e569778ed7cc391946a2aa4759b2b2f"],["/assets/js/bundle.js","df854a763d7d3fd95381b95081eb822f"],["/beautyful-invoice-latex/index.html","df8279954af47b9862eaa3268d3e201f"],["/categories/index.html","e5f72eb98e9d7a2b6eefa572d1173339"],["/contact/index.html","31719488bf0b57bd6c5be8e719ee412b"],["/cv/index.html","c295520c02c14c6e12bfcbc5478b74e1"],["/how-i-relax/index.html","70b5bd2993dd371886f21caba9d4b84e"],["/index.html","5f3ab33e1396354a7a01b0b0ed0a3394"],["/inkscape-jpeg/index.html","1d5318cc0edf0e3b8473e00c1f095e3a"],["/pi-retro-gaming/index.html","5ccfd39a8b9d99901d4b16b724b9c311"],["/qx90c/index.html","954e4ccf40b5430344f551ce5aab489e"],["/ressources/posts/2018-10-03-website-creation/web_workflow.png","d42614278dd19dddada761739da86fdb"],["/ressources/posts/2018-10-03-website-creation/web_workflow.svg","28d3654397169f44831d4c40ac0c1fac"],["/ressources/posts/2018-10-10-pi-retro-gaming/capeman-retrochars-crt.jpg","7041482b67eaf4838de1ac857b447ffb"],["/sw.js","ebf79b8044b60efc68c15720fc330163"],["/website-creation/index.html","ee1ff5676e9fcb85bcacd59e6791bd2b"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function (originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function (originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







