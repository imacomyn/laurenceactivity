﻿//this is our bootstrap file. It runs when we launch the server.// Activate our export request handler on the server.addHttpRequestHandler('/exportEleves', 'requestHandlers.js', 'exportEleves');addHttpRequestHandler('/exportInscrits', 'requestHandlers.js', 'exportInscrits');addHttpRequestHandler('/exportInStages', 'requestHandlers.js', 'exportInStages');