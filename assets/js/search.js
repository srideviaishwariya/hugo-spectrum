/*
 *
 *    ADOBE CONFIDENTIAL
 *    ___________________
 *
 *    Copyright 2020 Adobe Systems Incorporated
 *    All Rights Reserved.
 *
 *    NOTICE:  All information contained herein is, and remains
 *    the property of Adobe Systems Incorporated and its suppliers,
 *    if any.  The intellectual and technical concepts contained
 *    herein are proprietary to Adobe Systems Incorporated and its
 *    suppliers and are protected by all applicable intellectual property
 *    laws, including trade secret and copyright laws.
 *    Dissemination of this information or reproduction of this material
 *    is strictly forbidden unless prior written permission is obtained
 *    from Adobe Systems Incorporated.
 *
 */
(function($) {
    'use strict';
    var Search = {
        init: function() {
            $(document).ready(function() {
               $(document).on('coral-search:submit', 'coral-search', function(e) {
                    var query = $(this).val();
                    var searchPage = "{{ "search/" | absURL }}?q=" + query;
                    document.location = searchPage;
                    return false;
                });
            });
        },
    };
    Search.init();
}(jQuery));
