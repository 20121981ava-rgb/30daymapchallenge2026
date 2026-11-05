var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 0.550000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_amenity_place_of_worship_Paraguay_1 = new ol.format.GeoJSON();
var features_amenity_place_of_worship_Paraguay_1 = format_amenity_place_of_worship_Paraguay_1.readFeatures(json_amenity_place_of_worship_Paraguay_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_amenity_place_of_worship_Paraguay_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_amenity_place_of_worship_Paraguay_1.addFeatures(features_amenity_place_of_worship_Paraguay_1);
var lyr_amenity_place_of_worship_Paraguay_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_amenity_place_of_worship_Paraguay_1, 
                style: style_amenity_place_of_worship_Paraguay_1,
                popuplayertitle: 'amenity_place_of_worship_Paraguay',
                interactive: false,
    title: 'amenity_place_of_worship_Paraguay<br />\
    <img src="styles/legend/amenity_place_of_worship_Paraguay_1_0.png" /> christian<br />\
    <img src="styles/legend/amenity_place_of_worship_Paraguay_1_1.png" /> linistica<br />\
    <img src="styles/legend/amenity_place_of_worship_Paraguay_1_2.png" /> muslim<br />\
    <img src="styles/legend/amenity_place_of_worship_Paraguay_1_3.png" /> pagan<br />\
    <img src="styles/legend/amenity_place_of_worship_Paraguay_1_4.png" /> <br />' });
var format_buddhist_places_paraguay_2 = new ol.format.GeoJSON();
var features_buddhist_places_paraguay_2 = format_buddhist_places_paraguay_2.readFeatures(json_buddhist_places_paraguay_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_buddhist_places_paraguay_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_buddhist_places_paraguay_2.addFeatures(features_buddhist_places_paraguay_2);
var lyr_buddhist_places_paraguay_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_buddhist_places_paraguay_2, 
                style: style_buddhist_places_paraguay_2,
                popuplayertitle: 'buddhist_places_paraguay',
                interactive: false,
                title: '<img src="styles/legend/buddhist_places_paraguay_2.png" /> buddhist_places_paraguay'
            });
var format_geoBoundariesPRYADM1_3 = new ol.format.GeoJSON();
var features_geoBoundariesPRYADM1_3 = format_geoBoundariesPRYADM1_3.readFeatures(json_geoBoundariesPRYADM1_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_geoBoundariesPRYADM1_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_geoBoundariesPRYADM1_3.addFeatures(features_geoBoundariesPRYADM1_3);
var lyr_geoBoundariesPRYADM1_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_geoBoundariesPRYADM1_3, 
                style: style_geoBoundariesPRYADM1_3,
                popuplayertitle: 'geoBoundaries-PRY-ADM1',
                interactive: false,
                title: '<img src="styles/legend/geoBoundariesPRYADM1_3.png" /> geoBoundaries-PRY-ADM1'
            });
var format_jewish_places_paraguay_4 = new ol.format.GeoJSON();
var features_jewish_places_paraguay_4 = format_jewish_places_paraguay_4.readFeatures(json_jewish_places_paraguay_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_jewish_places_paraguay_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_jewish_places_paraguay_4.addFeatures(features_jewish_places_paraguay_4);
var lyr_jewish_places_paraguay_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_jewish_places_paraguay_4, 
                style: style_jewish_places_paraguay_4,
                popuplayertitle: 'jewish_places_paraguay',
                interactive: false,
                title: '<img src="styles/legend/jewish_places_paraguay_4.png" /> jewish_places_paraguay'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_amenity_place_of_worship_Paraguay_1.setVisible(true);lyr_buddhist_places_paraguay_2.setVisible(true);lyr_geoBoundariesPRYADM1_3.setVisible(true);lyr_jewish_places_paraguay_4.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_amenity_place_of_worship_Paraguay_1,lyr_buddhist_places_paraguay_2,lyr_geoBoundariesPRYADM1_3,lyr_jewish_places_paraguay_4];
lyr_amenity_place_of_worship_Paraguay_1.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'amenity': 'amenity', 'facebook': 'facebook', 'noname': 'noname', 'mobile': 'mobile', 'door': 'door', 'internet_access': 'internet_access', 'baby_feeding': 'baby_feeding', 'air_conditioning': 'air_conditioning', 'contact:telegram': 'contact:telegram', 'name:zh-Hant': 'name:zh-Hant', 'name:uk': 'name:uk', 'name:nl': 'name:nl', 'name:lo': 'name:lo', 'name:lb': 'name:lb', 'name:ko-Latn': 'name:ko-Latn', 'name:ka': 'name:ka', 'name:ja-Latn': 'name:ja-Latn', 'name:ig': 'name:ig', 'name:fr': 'name:fr', 'name:el': 'name:el', 'survey:date': 'survey:date', 'power': 'power', 'website_1': 'website_1', 'diocese': 'diocese', 'addr:street_1': 'addr:street_1', 'name:ko': 'name:ko', 'contact:facebook': 'contact:facebook', 'unisex': 'unisex', 'description': 'description', 'name:la': 'name:la', 'name:ja': 'name:ja', 'name:it': 'name:it', 'addr:suburb': 'addr:suburb', 'addr:province': 'addr:province', 'barrier': 'barrier', 'access': 'access', 'amenity_1': 'amenity_1', 'natural': 'natural', 'name:en': 'name:en', 'email': 'email', 'service_times': 'service_times', 'name:de': 'name:de', 'addr:postcode': 'addr:postcode', 'addr:housenumber': 'addr:housenumber', 'opening_hours': 'opening_hours', 'building:levels': 'building:levels', 'phone': 'phone', 'wikimedia_commons': 'wikimedia_commons', 'addr:country': 'addr:country', 'wheelchair': 'wheelchair', 'building': 'building', 'addr:housename': 'addr:housename', 'addr:city': 'addr:city', 'addr:street': 'addr:street', 'seamark:type': 'seamark:type', 'seamark:landmark:function': 'seamark:landmark:function', 'name:es': 'name:es', 'website': 'website', 'entrance': 'entrance', 'denomination': 'denomination', 'check_date': 'check_date', 'religion': 'religion', 'wikipedia': 'wikipedia', 'wikidata': 'wikidata', 'source:population': 'source:population', 'population:date': 'population:date', 'population': 'population', 'place': 'place', 'old_name': 'old_name', 'name': 'name', 'ele': 'ele', 'capital': 'capital', 'alt_name': 'alt_name', });
lyr_buddhist_places_paraguay_2.set('fieldAliases', {'name': 'name', 'religion': 'religion', 'denomination': 'denomination', 'precision': 'precision', 'note': 'note', });
lyr_geoBoundariesPRYADM1_3.set('fieldAliases', {'shapeName': 'shapeName', 'shapeISO': 'shapeISO', 'shapeID': 'shapeID', 'shapeGroup': 'shapeGroup', 'shapeType': 'shapeType', });
lyr_jewish_places_paraguay_4.set('fieldAliases', {'name': 'name', 'religion': 'religion', 'denomination': 'denomination', 'category': 'category', 'precision': 'precision', 'note': 'note', });
lyr_amenity_place_of_worship_Paraguay_1.set('fieldImages', {'fid': 'TextEdit', 'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'amenity': 'TextEdit', 'facebook': 'TextEdit', 'noname': 'TextEdit', 'mobile': 'TextEdit', 'door': 'TextEdit', 'internet_access': 'TextEdit', 'baby_feeding': 'TextEdit', 'air_conditioning': 'TextEdit', 'contact:telegram': 'TextEdit', 'name:zh-Hant': 'TextEdit', 'name:uk': 'TextEdit', 'name:nl': 'TextEdit', 'name:lo': 'TextEdit', 'name:lb': 'TextEdit', 'name:ko-Latn': 'TextEdit', 'name:ka': 'TextEdit', 'name:ja-Latn': 'TextEdit', 'name:ig': 'TextEdit', 'name:fr': 'TextEdit', 'name:el': 'TextEdit', 'survey:date': 'TextEdit', 'power': 'TextEdit', 'website_1': 'TextEdit', 'diocese': 'TextEdit', 'addr:street_1': 'TextEdit', 'name:ko': 'TextEdit', 'contact:facebook': 'TextEdit', 'unisex': 'TextEdit', 'description': 'TextEdit', 'name:la': 'TextEdit', 'name:ja': 'TextEdit', 'name:it': 'TextEdit', 'addr:suburb': 'TextEdit', 'addr:province': 'TextEdit', 'barrier': 'TextEdit', 'access': 'TextEdit', 'amenity_1': 'TextEdit', 'natural': 'TextEdit', 'name:en': 'TextEdit', 'email': 'TextEdit', 'service_times': 'TextEdit', 'name:de': 'TextEdit', 'addr:postcode': 'TextEdit', 'addr:housenumber': 'TextEdit', 'opening_hours': 'TextEdit', 'building:levels': 'TextEdit', 'phone': 'TextEdit', 'wikimedia_commons': 'TextEdit', 'addr:country': 'TextEdit', 'wheelchair': 'TextEdit', 'building': 'TextEdit', 'addr:housename': 'TextEdit', 'addr:city': 'TextEdit', 'addr:street': 'TextEdit', 'seamark:type': 'TextEdit', 'seamark:landmark:function': 'TextEdit', 'name:es': 'TextEdit', 'website': 'TextEdit', 'entrance': 'TextEdit', 'denomination': 'TextEdit', 'check_date': 'TextEdit', 'religion': 'TextEdit', 'wikipedia': 'TextEdit', 'wikidata': 'TextEdit', 'source:population': 'TextEdit', 'population:date': 'TextEdit', 'population': 'TextEdit', 'place': 'TextEdit', 'old_name': 'TextEdit', 'name': 'TextEdit', 'ele': 'TextEdit', 'capital': 'TextEdit', 'alt_name': 'TextEdit', });
lyr_buddhist_places_paraguay_2.set('fieldImages', {'name': 'TextEdit', 'religion': 'TextEdit', 'denomination': 'TextEdit', 'precision': 'TextEdit', 'note': 'TextEdit', });
lyr_geoBoundariesPRYADM1_3.set('fieldImages', {'shapeName': 'TextEdit', 'shapeISO': 'TextEdit', 'shapeID': 'TextEdit', 'shapeGroup': 'TextEdit', 'shapeType': 'TextEdit', });
lyr_jewish_places_paraguay_4.set('fieldImages', {'name': 'TextEdit', 'religion': 'TextEdit', 'denomination': 'TextEdit', 'category': 'TextEdit', 'precision': 'TextEdit', 'note': 'TextEdit', });
lyr_amenity_place_of_worship_Paraguay_1.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'amenity': 'no label', 'facebook': 'no label', 'noname': 'no label', 'mobile': 'no label', 'door': 'no label', 'internet_access': 'no label', 'baby_feeding': 'no label', 'air_conditioning': 'no label', 'contact:telegram': 'no label', 'name:zh-Hant': 'no label', 'name:uk': 'no label', 'name:nl': 'no label', 'name:lo': 'no label', 'name:lb': 'no label', 'name:ko-Latn': 'no label', 'name:ka': 'no label', 'name:ja-Latn': 'no label', 'name:ig': 'no label', 'name:fr': 'no label', 'name:el': 'no label', 'survey:date': 'no label', 'power': 'no label', 'website_1': 'no label', 'diocese': 'no label', 'addr:street_1': 'no label', 'name:ko': 'no label', 'contact:facebook': 'no label', 'unisex': 'no label', 'description': 'no label', 'name:la': 'no label', 'name:ja': 'no label', 'name:it': 'no label', 'addr:suburb': 'no label', 'addr:province': 'no label', 'barrier': 'no label', 'access': 'no label', 'amenity_1': 'no label', 'natural': 'no label', 'name:en': 'no label', 'email': 'no label', 'service_times': 'no label', 'name:de': 'no label', 'addr:postcode': 'no label', 'addr:housenumber': 'no label', 'opening_hours': 'no label', 'building:levels': 'no label', 'phone': 'no label', 'wikimedia_commons': 'no label', 'addr:country': 'no label', 'wheelchair': 'no label', 'building': 'no label', 'addr:housename': 'no label', 'addr:city': 'no label', 'addr:street': 'no label', 'seamark:type': 'no label', 'seamark:landmark:function': 'no label', 'name:es': 'no label', 'website': 'no label', 'entrance': 'no label', 'denomination': 'no label', 'check_date': 'no label', 'religion': 'inline label - always visible', 'wikipedia': 'no label', 'wikidata': 'no label', 'source:population': 'no label', 'population:date': 'no label', 'population': 'no label', 'place': 'no label', 'old_name': 'no label', 'name': 'no label', 'ele': 'no label', 'capital': 'no label', 'alt_name': 'no label', });
lyr_buddhist_places_paraguay_2.set('fieldLabels', {'name': 'no label', 'religion': 'no label', 'denomination': 'no label', 'precision': 'no label', 'note': 'no label', });
lyr_geoBoundariesPRYADM1_3.set('fieldLabels', {'shapeName': 'no label', 'shapeISO': 'no label', 'shapeID': 'no label', 'shapeGroup': 'no label', 'shapeType': 'no label', });
lyr_jewish_places_paraguay_4.set('fieldLabels', {'name': 'no label', 'religion': 'inline label - always visible', 'denomination': 'no label', 'category': 'no label', 'precision': 'no label', 'note': 'no label', });
lyr_jewish_places_paraguay_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});