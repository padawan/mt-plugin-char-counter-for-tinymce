(function($) {

var config	 = MT.Editor.TinyMCE.config;

$.extend(config, {
	theme_advanced_path : false,
	setup : function (ed) {
			ed.onKeyUp.add(function(ed, e) {
				var strip = (tinyMCE.activeEditor.getContent()).replace(/(<([^>]+)>)/ig,'');
				var text = strip.split(' ').length + ' ' + ed.getLang('charcount.words', 'Words') + ', ' + strip.length + ' ' + ed.getLang('charcount.signs', 'Signs');
				tinymce.DOM.setHTML(tinymce.DOM.get(tinyMCE.activeEditor.id + '_path_row'), text);
			}
		);
	}
});

tinyMCE.addI18n({
	fr: {
		charcount: {
			words: 'mots',
			signs: 'signes'
		}
	}
});

})(jQuery);