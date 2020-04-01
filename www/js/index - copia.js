/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var bannerAdUnit = "ca-app-pub-3096329003114803/7523999379";
var interstitialAdUnit = "ca-app-pub-4906074177432504/1649035673";
var isOverlap = true; //true: overlap, false: split
var isTest = false;

document.addEventListener("deviceready", function(){
	window.admob.setUp(bannerAdUnit, interstitialAdUnit, isOverlap, isTest);
	//
	window.admob.onBannerAdPreloaded = function() {
		/*alert('onBannerAdPreloaded');*/
	};
	window.admob.onBannerAdLoaded = function() {
		/*alert('onBannerAdLoaded');*/
	};
	window.admob.onBannerAdShown = function() {
		/*alert('onBannerAdShown');*/
	};
	window.admob.onBannerAdHidden = function() {
		/*alert('onBannerAdHidden');*/
	};	
	//
	window.admob.onInterstitialAdPreloaded = function() {
		alert('onInterstitialAdPreloaded');
	};
	window.admob.onInterstitialAdLoaded = function() {
		alert('onInterstitialAdLoaded');
	};
	window.admob.onInterstitialAdShown = function() {
		alert('onInterstitialAdShown');
	};
	window.admob.onInterstitialAdHidden = function() {
		alert('onInterstitialAdHidden');
	};
	
	window.admob.showBannerAd('bottom-center', 'SMART_BANNER');
	
}, false);

var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
		$.support.cors                 = true;
        $.mobile.allowCrossDomainPages = true;
		$.mobile.pushStateEnabled = false;
        //app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};
