var wms_layers = [];

var format_CentralEquatoriaStates_0 = new ol.format.GeoJSON();
var features_CentralEquatoriaStates_0 = format_CentralEquatoriaStates_0.readFeatures(json_CentralEquatoriaStates_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CentralEquatoriaStates_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CentralEquatoriaStates_0.addFeatures(features_CentralEquatoriaStates_0);
var lyr_CentralEquatoriaStates_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CentralEquatoriaStates_0, 
                style: style_CentralEquatoriaStates_0,
                popuplayertitle: 'Central Equatoria States',
                interactive: true,
                title: '<img src="styles/legend/CentralEquatoriaStates_0.png" /> Central Equatoria States'
            });
var format_Central_Equatoria_GIScentral_equatoria_states_1 = new ol.format.GeoJSON();
var features_Central_Equatoria_GIScentral_equatoria_states_1 = format_Central_Equatoria_GIScentral_equatoria_states_1.readFeatures(json_Central_Equatoria_GIScentral_equatoria_states_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Central_Equatoria_GIScentral_equatoria_states_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Central_Equatoria_GIScentral_equatoria_states_1.addFeatures(features_Central_Equatoria_GIScentral_equatoria_states_1);
var lyr_Central_Equatoria_GIScentral_equatoria_states_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Central_Equatoria_GIScentral_equatoria_states_1, 
                style: style_Central_Equatoria_GIScentral_equatoria_states_1,
                popuplayertitle: 'Central_Equatoria_GIS — central_equatoria_states',
                interactive: true,
                title: '<img src="styles/legend/Central_Equatoria_GIScentral_equatoria_states_1.png" /> Central_Equatoria_GIS — central_equatoria_states'
            });
var format_amenity_school_2 = new ol.format.GeoJSON();
var features_amenity_school_2 = format_amenity_school_2.readFeatures(json_amenity_school_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_amenity_school_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_amenity_school_2.addFeatures(features_amenity_school_2);
var lyr_amenity_school_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_amenity_school_2, 
                style: style_amenity_school_2,
                popuplayertitle: 'amenity_school',
                interactive: true,
                title: '<img src="styles/legend/amenity_school_2.png" /> amenity_school'
            });
var format_amenity_school_3 = new ol.format.GeoJSON();
var features_amenity_school_3 = format_amenity_school_3.readFeatures(json_amenity_school_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_amenity_school_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_amenity_school_3.addFeatures(features_amenity_school_3);
var lyr_amenity_school_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_amenity_school_3, 
                style: style_amenity_school_3,
                popuplayertitle: 'amenity_school',
                interactive: true,
                title: '<img src="styles/legend/amenity_school_3.png" /> amenity_school'
            });
var format_amenity_school_4 = new ol.format.GeoJSON();
var features_amenity_school_4 = format_amenity_school_4.readFeatures(json_amenity_school_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_amenity_school_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_amenity_school_4.addFeatures(features_amenity_school_4);
var lyr_amenity_school_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_amenity_school_4, 
                style: style_amenity_school_4,
                popuplayertitle: 'amenity_school',
                interactive: true,
                title: '<img src="styles/legend/amenity_school_4.png" /> amenity_school'
            });
var format_highway_primary_5 = new ol.format.GeoJSON();
var features_highway_primary_5 = format_highway_primary_5.readFeatures(json_highway_primary_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_highway_primary_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_highway_primary_5.addFeatures(features_highway_primary_5);
var lyr_highway_primary_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_highway_primary_5, 
                style: style_highway_primary_5,
                popuplayertitle: 'highway_primary',
                interactive: true,
                title: '<img src="styles/legend/highway_primary_5.png" /> highway_primary'
            });
var format_highway_primary_6 = new ol.format.GeoJSON();
var features_highway_primary_6 = format_highway_primary_6.readFeatures(json_highway_primary_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_highway_primary_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_highway_primary_6.addFeatures(features_highway_primary_6);
var lyr_highway_primary_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_highway_primary_6, 
                style: style_highway_primary_6,
                popuplayertitle: 'highway_primary',
                interactive: true,
                title: '<img src="styles/legend/highway_primary_6.png" /> highway_primary'
            });
var format_highway_secondary_7 = new ol.format.GeoJSON();
var features_highway_secondary_7 = format_highway_secondary_7.readFeatures(json_highway_secondary_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_highway_secondary_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_highway_secondary_7.addFeatures(features_highway_secondary_7);
var lyr_highway_secondary_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_highway_secondary_7, 
                style: style_highway_secondary_7,
                popuplayertitle: 'highway_secondary',
                interactive: true,
                title: '<img src="styles/legend/highway_secondary_7.png" /> highway_secondary'
            });
var format_highway_secondary_8 = new ol.format.GeoJSON();
var features_highway_secondary_8 = format_highway_secondary_8.readFeatures(json_highway_secondary_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_highway_secondary_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_highway_secondary_8.addFeatures(features_highway_secondary_8);
var lyr_highway_secondary_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_highway_secondary_8, 
                style: style_highway_secondary_8,
                popuplayertitle: 'highway_secondary',
                interactive: true,
                title: '<img src="styles/legend/highway_secondary_8.png" /> highway_secondary'
            });

        var lyr_OpenStreetMap_9 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

lyr_CentralEquatoriaStates_0.setVisible(true);lyr_Central_Equatoria_GIScentral_equatoria_states_1.setVisible(true);lyr_amenity_school_2.setVisible(true);lyr_amenity_school_3.setVisible(true);lyr_amenity_school_4.setVisible(true);lyr_highway_primary_5.setVisible(true);lyr_highway_primary_6.setVisible(true);lyr_highway_secondary_7.setVisible(true);lyr_highway_secondary_8.setVisible(true);lyr_OpenStreetMap_9.setVisible(true);
var layersList = [lyr_CentralEquatoriaStates_0,lyr_Central_Equatoria_GIScentral_equatoria_states_1,lyr_amenity_school_2,lyr_amenity_school_3,lyr_amenity_school_4,lyr_highway_primary_5,lyr_highway_primary_6,lyr_highway_secondary_7,lyr_highway_secondary_8,lyr_OpenStreetMap_9];
lyr_CentralEquatoriaStates_0.set('fieldAliases', {'fid': 'fid', 'GID_1': 'GID_1', 'GID_0': 'GID_0', 'COUNTRY': 'COUNTRY', 'NAME_1': 'NAME_1', 'VARNAME_1': 'VARNAME_1', 'NL_NAME_1': 'NL_NAME_1', 'TYPE_1': 'TYPE_1', 'ENGTYPE_1': 'ENGTYPE_1', 'CC_1': 'CC_1', 'HASC_1': 'HASC_1', 'ISO_1': 'ISO_1', });
lyr_Central_Equatoria_GIScentral_equatoria_states_1.set('fieldAliases', {'fid': 'fid', 'GID_1': 'GID_1', 'GID_0': 'GID_0', 'COUNTRY': 'COUNTRY', 'NAME_1': 'NAME_1', 'VARNAME_1': 'VARNAME_1', 'NL_NAME_1': 'NL_NAME_1', 'TYPE_1': 'TYPE_1', 'ENGTYPE_1': 'ENGTYPE_1', 'CC_1': 'CC_1', 'HASC_1': 'HASC_1', 'ISO_1': 'ISO_1', });
lyr_amenity_school_2.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'amenity': 'amenity', 'school:gender': 'school:gender', 'education': 'education', 'operational_status': 'operational_status', 'capacity:teachers': 'capacity:teachers', 'capacity:pupils': 'capacity:pupils', 'capacity:classrooms': 'capacity:classrooms', 'addr:state': 'addr:state', 'addr:payam': 'addr:payam', 'addr:boma': 'addr:boma', 'contact:phone': 'contact:phone', 'grades': 'grades', 'denomination': 'denomination', 'barrier': 'barrier', 'office': 'office', 'addr:housenumber': 'addr:housenumber', 'toilets:type': 'toilets:type', 'toilets:num_chambers': 'toilets:num_chambers', 'building:classrooms': 'building:classrooms', 'operator:wikidata': 'operator:wikidata', 'website': 'website', 'source:version': 'source:version', 'source:gender': 'source:gender', 'addr:zone': 'addr:zone', 'addr:settlement': 'addr:settlement', 'addr:block': 'addr:block', 'is_in:province': 'is_in:province', 'phone': 'phone', 'email': 'email', 'addr:street': 'addr:street', 'addr:lc_village': 'addr:lc_village', 'student:count': 'student:count', 'school': 'school', 'status': 'status', 'source:agency': 'source:agency', 'tourism': 'tourism', 'name:ar': 'name:ar', 'name:am': 'name:am', 'name:en': 'name:en', 'religion': 'religion', 'generator:source': 'generator:source', 'water_supply': 'water_supply', 'toilets': 'toilets', 'start_date': 'start_date', 'staff_houses': 'staff_houses', 'staff_count:teachers': 'staff_count:teachers', 'source:form': 'source:form', 'opening_hours': 'opening_hours', 'note:code': 'note:code', 'location': 'location', 'class_blocks_num': 'class_blocks_num', 'capacity': 'capacity', 'addr:village': 'addr:village', 'operator': 'operator', 'place': 'place', 'operator:type': 'operator:type', 'man_made': 'man_made', 'wikidata': 'wikidata', 'isced:level': 'isced:level', 'source:date': 'source:date', 'addr:subcounty': 'addr:subcounty', 'addr:parish': 'addr:parish', 'addr:district': 'addr:district', 'addr:county': 'addr:county', 'addr:city': 'addr:city', 'name': 'name', });
lyr_amenity_school_3.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'barrier': 'barrier', });
lyr_amenity_school_4.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'amenity': 'amenity', 'education': 'education', 'description': 'description', 'religion': 'religion', 'grades': 'grades', 'sport': 'sport', 'leisure': 'leisure', 'name:fr': 'name:fr', 'denomination': 'denomination', 'opening_hours': 'opening_hours', 'roof:material': 'roof:material', 'contact:phone': 'contact:phone', 'social_facility:for': 'social_facility:for', 'social_facility': 'social_facility', 'education:program_orphans': 'education:program_orphans', 'contact:website': 'contact:website', 'addr:postcode': 'addr:postcode', 'surface': 'surface', 'boundary': 'boundary', 'name:ar': 'name:ar', 'barrier': 'barrier', 'addr:street': 'addr:street', 'abandoned:building': 'abandoned:building', 'name:en': 'name:en', 'building': 'building', 'operator': 'operator', 'landuse': 'landuse', 'wikidata': 'wikidata', 'type': 'type', 'source:date': 'source:date', 'operator:type': 'operator:type', 'name': 'name', 'isced:level': 'isced:level', 'addr:subcounty': 'addr:subcounty', 'addr:parish': 'addr:parish', 'addr:district': 'addr:district', 'addr:county': 'addr:county', 'addr:city': 'addr:city', });
lyr_highway_primary_5.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'crossing:markings': 'crossing:markings', 'natural': 'natural', 'ele': 'ele', 'description': 'description', 'alt_name': 'alt_name', 'surface': 'surface', 'motor_vehicle': 'motor_vehicle', 'military': 'military', 'crossing_ref': 'crossing_ref', 'crossing': 'crossing', 'ford': 'ford', 'name': 'name', 'junction': 'junction', 'country': 'country', 'barrier': 'barrier', });
lyr_highway_primary_6.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'key': 'key', 'embankment': 'embankment', 'sidewalk': 'sidewalk', 'foot': 'foot', 'bridge:ref': 'bridge:ref', 'bridge:name': 'bridge:name', 'ford': 'ford', 'AUTO_ID': 'AUTO_ID', 'ref:ar': 'ref:ar', 'source_ref': 'source_ref', 'attribution': 'attribution', 'lanes': 'lanes', 'id': 'id', 'source:date': 'source:date', 'junction': 'junction', 'name:fr': 'name:fr', 'smoothness': 'smoothness', 'oneway': 'oneway', 'maxweight': 'maxweight', 'maxspeed': 'maxspeed', 'layer': 'layer', 'bridge': 'bridge', 'lane_markings': 'lane_markings', 'motor_vehicle': 'motor_vehicle', 'alt_name': 'alt_name', 'surface': 'surface', 'ref': 'ref', 'name:ar': 'name:ar', 'name': 'name', });
lyr_highway_secondary_7.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'public_transport': 'public_transport', 'bus': 'bus', 'inscription': 'inscription', 'historic': 'historic', 'waterway': 'waterway', 'amenity': 'amenity', 'ford': 'ford', 'operator': 'operator', 'name': 'name', 'barrier': 'barrier', });
lyr_highway_secondary_8.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'noref': 'noref', 'width': 'width', 'maxweight:signed': 'maxweight:signed', 'noname': 'noname', 'embankment': 'embankment', 'maxspeed': 'maxspeed', 'junction': 'junction', 'bridge:ref': 'bridge:ref', 'bridge:name': 'bridge:name', 'name:ar': 'name:ar', 'ford': 'ford', 'lane_markings': 'lane_markings', 'motor_vehicle': 'motor_vehicle', 'layer': 'layer', 'bridge': 'bridge', 'oneway': 'oneway', 'source_ref': 'source_ref', 'attribution': 'attribution', 'source:date': 'source:date', 'id': 'id', 'description': 'description', 'cutting': 'cutting', 'lanes': 'lanes', 'name:fr': 'name:fr', 'ref': 'ref', 'surface': 'surface', 'name': 'name', });
lyr_CentralEquatoriaStates_0.set('fieldImages', {'fid': 'TextEdit', 'GID_1': 'TextEdit', 'GID_0': 'TextEdit', 'COUNTRY': 'TextEdit', 'NAME_1': 'TextEdit', 'VARNAME_1': 'TextEdit', 'NL_NAME_1': 'TextEdit', 'TYPE_1': 'TextEdit', 'ENGTYPE_1': 'TextEdit', 'CC_1': 'TextEdit', 'HASC_1': 'TextEdit', 'ISO_1': 'TextEdit', });
lyr_Central_Equatoria_GIScentral_equatoria_states_1.set('fieldImages', {'fid': 'TextEdit', 'GID_1': 'TextEdit', 'GID_0': 'TextEdit', 'COUNTRY': 'TextEdit', 'NAME_1': 'TextEdit', 'VARNAME_1': 'TextEdit', 'NL_NAME_1': 'TextEdit', 'TYPE_1': 'TextEdit', 'ENGTYPE_1': 'TextEdit', 'CC_1': 'TextEdit', 'HASC_1': 'TextEdit', 'ISO_1': 'TextEdit', });
lyr_amenity_school_2.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'amenity': '', 'school:gender': '', 'education': '', 'operational_status': '', 'capacity:teachers': '', 'capacity:pupils': '', 'capacity:classrooms': '', 'addr:state': '', 'addr:payam': '', 'addr:boma': '', 'contact:phone': '', 'grades': '', 'denomination': '', 'barrier': '', 'office': '', 'addr:housenumber': '', 'toilets:type': '', 'toilets:num_chambers': '', 'building:classrooms': '', 'operator:wikidata': '', 'website': '', 'source:version': '', 'source:gender': '', 'addr:zone': '', 'addr:settlement': '', 'addr:block': '', 'is_in:province': '', 'phone': '', 'email': '', 'addr:street': '', 'addr:lc_village': '', 'student:count': '', 'school': '', 'status': '', 'source:agency': '', 'tourism': '', 'name:ar': '', 'name:am': '', 'name:en': '', 'religion': '', 'generator:source': '', 'water_supply': '', 'toilets': '', 'start_date': '', 'staff_houses': '', 'staff_count:teachers': '', 'source:form': '', 'opening_hours': '', 'note:code': '', 'location': '', 'class_blocks_num': '', 'capacity': '', 'addr:village': '', 'operator': '', 'place': '', 'operator:type': '', 'man_made': '', 'wikidata': '', 'isced:level': '', 'source:date': '', 'addr:subcounty': '', 'addr:parish': '', 'addr:district': '', 'addr:county': '', 'addr:city': '', 'name': '', });
lyr_amenity_school_3.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'barrier': '', });
lyr_amenity_school_4.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'amenity': '', 'education': '', 'description': '', 'religion': '', 'grades': '', 'sport': '', 'leisure': '', 'name:fr': '', 'denomination': '', 'opening_hours': '', 'roof:material': '', 'contact:phone': '', 'social_facility:for': '', 'social_facility': '', 'education:program_orphans': '', 'contact:website': '', 'addr:postcode': '', 'surface': '', 'boundary': '', 'name:ar': '', 'barrier': '', 'addr:street': '', 'abandoned:building': '', 'name:en': '', 'building': '', 'operator': '', 'landuse': '', 'wikidata': '', 'type': '', 'source:date': '', 'operator:type': '', 'name': '', 'isced:level': '', 'addr:subcounty': '', 'addr:parish': '', 'addr:district': '', 'addr:county': '', 'addr:city': '', });
lyr_highway_primary_5.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'highway': '', 'crossing:markings': '', 'natural': '', 'ele': '', 'description': '', 'alt_name': '', 'surface': '', 'motor_vehicle': '', 'military': '', 'crossing_ref': '', 'crossing': '', 'ford': '', 'name': '', 'junction': '', 'country': '', 'barrier': '', });
lyr_highway_primary_6.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'highway': '', 'key': '', 'embankment': '', 'sidewalk': '', 'foot': '', 'bridge:ref': '', 'bridge:name': '', 'ford': '', 'AUTO_ID': '', 'ref:ar': '', 'source_ref': '', 'attribution': '', 'lanes': '', 'id': '', 'source:date': '', 'junction': '', 'name:fr': '', 'smoothness': '', 'oneway': '', 'maxweight': '', 'maxspeed': '', 'layer': '', 'bridge': '', 'lane_markings': '', 'motor_vehicle': '', 'alt_name': '', 'surface': '', 'ref': '', 'name:ar': '', 'name': '', });
lyr_highway_secondary_7.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'highway': '', 'public_transport': '', 'bus': '', 'inscription': '', 'historic': '', 'waterway': '', 'amenity': '', 'ford': '', 'operator': '', 'name': '', 'barrier': '', });
lyr_highway_secondary_8.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'highway': '', 'noref': '', 'width': '', 'maxweight:signed': '', 'noname': '', 'embankment': '', 'maxspeed': '', 'junction': '', 'bridge:ref': '', 'bridge:name': '', 'name:ar': '', 'ford': '', 'lane_markings': '', 'motor_vehicle': '', 'layer': '', 'bridge': '', 'oneway': '', 'source_ref': '', 'attribution': '', 'source:date': '', 'id': '', 'description': '', 'cutting': '', 'lanes': '', 'name:fr': '', 'ref': '', 'surface': '', 'name': '', });
lyr_CentralEquatoriaStates_0.set('fieldLabels', {'fid': 'no label', 'GID_1': 'no label', 'GID_0': 'no label', 'COUNTRY': 'no label', 'NAME_1': 'no label', 'VARNAME_1': 'no label', 'NL_NAME_1': 'no label', 'TYPE_1': 'no label', 'ENGTYPE_1': 'no label', 'CC_1': 'no label', 'HASC_1': 'no label', 'ISO_1': 'no label', });
lyr_Central_Equatoria_GIScentral_equatoria_states_1.set('fieldLabels', {'fid': 'no label', 'GID_1': 'no label', 'GID_0': 'no label', 'COUNTRY': 'no label', 'NAME_1': 'no label', 'VARNAME_1': 'no label', 'NL_NAME_1': 'no label', 'TYPE_1': 'no label', 'ENGTYPE_1': 'no label', 'CC_1': 'no label', 'HASC_1': 'no label', 'ISO_1': 'no label', });
lyr_amenity_school_2.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'amenity': 'no label', 'school:gender': 'no label', 'education': 'no label', 'operational_status': 'no label', 'capacity:teachers': 'no label', 'capacity:pupils': 'no label', 'capacity:classrooms': 'no label', 'addr:state': 'no label', 'addr:payam': 'no label', 'addr:boma': 'no label', 'contact:phone': 'no label', 'grades': 'no label', 'denomination': 'no label', 'barrier': 'no label', 'office': 'no label', 'addr:housenumber': 'no label', 'toilets:type': 'no label', 'toilets:num_chambers': 'no label', 'building:classrooms': 'no label', 'operator:wikidata': 'no label', 'website': 'no label', 'source:version': 'no label', 'source:gender': 'no label', 'addr:zone': 'no label', 'addr:settlement': 'no label', 'addr:block': 'no label', 'is_in:province': 'no label', 'phone': 'no label', 'email': 'no label', 'addr:street': 'no label', 'addr:lc_village': 'no label', 'student:count': 'no label', 'school': 'no label', 'status': 'no label', 'source:agency': 'no label', 'tourism': 'no label', 'name:ar': 'no label', 'name:am': 'no label', 'name:en': 'no label', 'religion': 'no label', 'generator:source': 'no label', 'water_supply': 'no label', 'toilets': 'no label', 'start_date': 'no label', 'staff_houses': 'no label', 'staff_count:teachers': 'no label', 'source:form': 'no label', 'opening_hours': 'no label', 'note:code': 'no label', 'location': 'no label', 'class_blocks_num': 'no label', 'capacity': 'no label', 'addr:village': 'no label', 'operator': 'no label', 'place': 'no label', 'operator:type': 'no label', 'man_made': 'no label', 'wikidata': 'no label', 'isced:level': 'no label', 'source:date': 'no label', 'addr:subcounty': 'no label', 'addr:parish': 'no label', 'addr:district': 'no label', 'addr:county': 'no label', 'addr:city': 'no label', 'name': 'no label', });
lyr_amenity_school_3.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'barrier': 'no label', });
lyr_amenity_school_4.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'amenity': 'no label', 'education': 'no label', 'description': 'no label', 'religion': 'no label', 'grades': 'no label', 'sport': 'no label', 'leisure': 'no label', 'name:fr': 'no label', 'denomination': 'no label', 'opening_hours': 'no label', 'roof:material': 'no label', 'contact:phone': 'no label', 'social_facility:for': 'no label', 'social_facility': 'no label', 'education:program_orphans': 'no label', 'contact:website': 'no label', 'addr:postcode': 'no label', 'surface': 'no label', 'boundary': 'no label', 'name:ar': 'no label', 'barrier': 'no label', 'addr:street': 'no label', 'abandoned:building': 'no label', 'name:en': 'no label', 'building': 'no label', 'operator': 'no label', 'landuse': 'no label', 'wikidata': 'no label', 'type': 'no label', 'source:date': 'no label', 'operator:type': 'no label', 'name': 'no label', 'isced:level': 'no label', 'addr:subcounty': 'no label', 'addr:parish': 'no label', 'addr:district': 'no label', 'addr:county': 'no label', 'addr:city': 'no label', });
lyr_highway_primary_5.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'highway': 'no label', 'crossing:markings': 'no label', 'natural': 'no label', 'ele': 'no label', 'description': 'no label', 'alt_name': 'no label', 'surface': 'no label', 'motor_vehicle': 'no label', 'military': 'no label', 'crossing_ref': 'no label', 'crossing': 'no label', 'ford': 'no label', 'name': 'no label', 'junction': 'no label', 'country': 'no label', 'barrier': 'no label', });
lyr_highway_primary_6.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'highway': 'no label', 'key': 'no label', 'embankment': 'no label', 'sidewalk': 'no label', 'foot': 'no label', 'bridge:ref': 'no label', 'bridge:name': 'no label', 'ford': 'no label', 'AUTO_ID': 'no label', 'ref:ar': 'no label', 'source_ref': 'no label', 'attribution': 'no label', 'lanes': 'no label', 'id': 'no label', 'source:date': 'no label', 'junction': 'no label', 'name:fr': 'no label', 'smoothness': 'no label', 'oneway': 'no label', 'maxweight': 'no label', 'maxspeed': 'no label', 'layer': 'no label', 'bridge': 'no label', 'lane_markings': 'no label', 'motor_vehicle': 'no label', 'alt_name': 'no label', 'surface': 'no label', 'ref': 'no label', 'name:ar': 'no label', 'name': 'no label', });
lyr_highway_secondary_7.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'highway': 'no label', 'public_transport': 'no label', 'bus': 'no label', 'inscription': 'no label', 'historic': 'no label', 'waterway': 'no label', 'amenity': 'no label', 'ford': 'no label', 'operator': 'no label', 'name': 'no label', 'barrier': 'no label', });
lyr_highway_secondary_8.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'highway': 'no label', 'noref': 'no label', 'width': 'no label', 'maxweight:signed': 'no label', 'noname': 'no label', 'embankment': 'no label', 'maxspeed': 'no label', 'junction': 'no label', 'bridge:ref': 'no label', 'bridge:name': 'no label', 'name:ar': 'no label', 'ford': 'no label', 'lane_markings': 'no label', 'motor_vehicle': 'no label', 'layer': 'no label', 'bridge': 'no label', 'oneway': 'no label', 'source_ref': 'no label', 'attribution': 'no label', 'source:date': 'no label', 'id': 'no label', 'description': 'no label', 'cutting': 'no label', 'lanes': 'no label', 'name:fr': 'no label', 'ref': 'no label', 'surface': 'no label', 'name': 'no label', });
lyr_highway_secondary_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});