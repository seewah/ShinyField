/**
 * ShinyField jQuery Plugin v0.1.0
 *
 * Copyright 2012 Mendeley Ltd.
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
 *
 * To make your text, password fields look pretty! Comes with html5-placeholder support. Though having a
 * placeholder value specified is NOT a requirement.
 *
 * See https://www.mendeley.com/join/ :)
 *
 * Example usage:
 *
 * 	$(function() {
 * 		$("#fname").shinify(options);
 *	});
 *
 * allowed options are: wrapperId, wrapperClass, hintSpanId, hintSpanClass
 */
(function($) {

	$.fn.shinify = function(options) {
   		return this.each(function() {
			var element = $(this);
			if(element.data("shinyfield")) return;
			var shinyField = new ShinyField(this, options);
			element.data("shinyfield", shinyField);
    		});
	};

	var ShinyField = function(element, options) {
		this.input = $(element);
		this.settings = $.extend({}, options);
		this.wrapper = null;
		this.hintSpan = null;
		this.hintText = null;
		this.init();
	};
	
	ShinyField.prototype.init = function() {
		this.input.wrap('<span class="shiny-field-wrapper"/>');
		this.wrapper = this.input.parent();
		if(this.settings.wrapperId) this.wrapper.attr("id", this.settings.wrapperId);
		if(this.settings.wrapperClass) this.wrapper.addClass(this.settings.wrapperClass);
		this.hintText = this.input.attr("placeholder");
		if(this.hintText) {
			this.input.attr("placeholder", "");
			this.input.after('<span class="shiny-field-hint"/>');
			this.hintSpan = this.input.next();
			this.hintSpan.text(this.hintText);
			if(this.settings.hintSpanId) this.hintSpan.attr("id", this.settings.hintSpanId);
			if(this.settings.hintSpanClass) this.hintSpan.addClass(this.settings.hintSpanClass);
			if(!this.input.val()) this.hintSpan.show();
		}
		this.bindEvents();
	};

	ShinyField.prototype.bindEvents = function() {
		var that = this;
		if(this.hintSpan) {
			this.hintSpan.bind("click.shinify", function() {
				that.input.focus();
			});
		}
		this.input.bind("focus.shinify", function() {
			that.wrapper.addClass("in-focus");
		});
		this.input.bind("blur.shinify", function() {
			that.wrapper.removeClass("in-focus");
		});
		this.input.bind("input.shinify", function() {
			that.toggleHint();
		});
		// property change for IE support specifically!
		this.input.bind("propertychange.shinify", function() {
			that.toggleHint();
		});
	};
	
	ShinyField.prototype.toggleHint = function() {
		if(this.hintSpan) {
			if(this.input.val() !== "") this.hintSpan.hide();
			else this.hintSpan.show();
		}
	};
}) (jQuery);
