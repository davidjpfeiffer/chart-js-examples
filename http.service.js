window.app.httpService = (function () {
    'use strict';

    var httpService = {
        get: get,
        put: put,
        post: post,
        remove: remove
    };

    return httpService;

    function get(url, body) {
        return http(url, body, 'GET');
    }

    function put(url, body) {
        return http(url, body, 'PUT');
    }

    function post(url, body) {
        return http(url, body, 'POST');
    }

    function remove(url, body) {
        return http(url, body, 'DELETE');
    }

    function http(url, body, method) {
        var options = {
            method: method,
            body: JSON.stringify(body),
            headers: { 'Content-Type': 'application/json; charset=utf-8' }
        };

        return fetch(url, options)
            .then(filterResponse);

        function filterResponse(response) {
            return response.json();
        }
    }

}());
