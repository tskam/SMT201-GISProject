var wms_layers = [];

var lyr_Tengah20250203_0 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Tengah-20250203<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Tengah20250203_0.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [11544529.816449, 149857.985119, 11549223.764192, 153516.511914]
        })
    });
var format_Landuse_2019_1 = new ol.format.GeoJSON();
var features_Landuse_2019_1 = format_Landuse_2019_1.readFeatures(json_Landuse_2019_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Landuse_2019_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Landuse_2019_1.addFeatures(features_Landuse_2019_1);
var lyr_Landuse_2019_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Landuse_2019_1, 
                style: style_Landuse_2019_1,
                popuplayertitle: 'Landuse_2019',
                interactive: true,
    title: 'Landuse_2019<br />\
    <img src="styles/legend/Landuse_2019_1_0.png" /> BUSINESS 2<br />\
    <img src="styles/legend/Landuse_2019_1_1.png" /> CIVIC & COMMUNITY INSTITUTION<br />\
    <img src="styles/legend/Landuse_2019_1_2.png" /> COMMERCIAL<br />\
    <img src="styles/legend/Landuse_2019_1_3.png" /> COMMERCIAL & RESIDENTIAL<br />\
    <img src="styles/legend/Landuse_2019_1_4.png" /> EDUCATIONAL INSTITUTION<br />\
    <img src="styles/legend/Landuse_2019_1_5.png" /> HEALTH & MEDICAL CARE<br />\
    <img src="styles/legend/Landuse_2019_1_6.png" /> MASS RAPID TRANSIT<br />\
    <img src="styles/legend/Landuse_2019_1_7.png" /> OPEN SPACE<br />\
    <img src="styles/legend/Landuse_2019_1_8.png" /> PARK<br />\
    <img src="styles/legend/Landuse_2019_1_9.png" /> PLACE OF WORSHIP<br />\
    <img src="styles/legend/Landuse_2019_1_10.png" /> RESERVE SITE<br />\
    <img src="styles/legend/Landuse_2019_1_11.png" /> RESIDENTIAL<br />\
    <img src="styles/legend/Landuse_2019_1_12.png" /> ROAD<br />\
    <img src="styles/legend/Landuse_2019_1_13.png" /> SPORTS & RECREATION<br />\
    <img src="styles/legend/Landuse_2019_1_14.png" /> TRANSPORT FACILITIES<br />\
    <img src="styles/legend/Landuse_2019_1_15.png" /> UTILITY<br />\
    <img src="styles/legend/Landuse_2019_1_16.png" /> WATERBODY<br />\
    <img src="styles/legend/Landuse_2019_1_17.png" /> <br />' });
var format_Tengah_2 = new ol.format.GeoJSON();
var features_Tengah_2 = format_Tengah_2.readFeatures(json_Tengah_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Tengah_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Tengah_2.addFeatures(features_Tengah_2);
var lyr_Tengah_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Tengah_2, 
                style: style_Tengah_2,
                popuplayertitle: 'Tengah',
                interactive: true,
                title: '<img src="styles/legend/Tengah_2.png" /> Tengah'
            });

lyr_Tengah20250203_0.setVisible(true);lyr_Landuse_2019_1.setVisible(false);lyr_Tengah_2.setVisible(true);
var layersList = [lyr_Tengah20250203_0,lyr_Landuse_2019_1,lyr_Tengah_2];
lyr_Landuse_2019_1.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'LU_DESC': 'LU_DESC', 'LU_TEXT': 'LU_TEXT', 'GPR': 'GPR', 'WHI_Q_MX': 'WHI_Q_MX', 'GPR_B_MN': 'GPR_B_MN', 'INC_CRC': 'INC_CRC', 'FMEL_UPD_D': 'FMEL_UPD_D', 'snippet': 'snippet', });
lyr_Tengah_2.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'SUBZONE_NO': 'SUBZONE_NO', 'SUBZONE_N': 'SUBZONE_N', 'SUBZONE_C': 'SUBZONE_C', 'CA_IND': 'CA_IND', 'PLN_AREA_N': 'PLN_AREA_N', 'PLN_AREA_C': 'PLN_AREA_C', 'REGION_N': 'REGION_N', 'REGION_C': 'REGION_C', 'INC_CRC': 'INC_CRC', 'FMEL_UPD_D': 'FMEL_UPD_D', 'snippet': 'snippet', });
lyr_Landuse_2019_1.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'LU_DESC': 'TextEdit', 'LU_TEXT': 'TextEdit', 'GPR': 'TextEdit', 'WHI_Q_MX': 'TextEdit', 'GPR_B_MN': 'TextEdit', 'INC_CRC': 'TextEdit', 'FMEL_UPD_D': 'TextEdit', 'snippet': 'TextEdit', });
lyr_Tengah_2.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'SUBZONE_NO': 'TextEdit', 'SUBZONE_N': 'TextEdit', 'SUBZONE_C': 'TextEdit', 'CA_IND': 'TextEdit', 'PLN_AREA_N': 'TextEdit', 'PLN_AREA_C': 'TextEdit', 'REGION_N': 'TextEdit', 'REGION_C': 'TextEdit', 'INC_CRC': 'TextEdit', 'FMEL_UPD_D': 'TextEdit', 'snippet': 'TextEdit', });
lyr_Landuse_2019_1.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'LU_DESC': 'no label', 'LU_TEXT': 'no label', 'GPR': 'no label', 'WHI_Q_MX': 'no label', 'GPR_B_MN': 'no label', 'INC_CRC': 'no label', 'FMEL_UPD_D': 'no label', 'snippet': 'no label', });
lyr_Tengah_2.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'SUBZONE_NO': 'no label', 'SUBZONE_N': 'no label', 'SUBZONE_C': 'no label', 'CA_IND': 'no label', 'PLN_AREA_N': 'no label', 'PLN_AREA_C': 'no label', 'REGION_N': 'no label', 'REGION_C': 'no label', 'INC_CRC': 'no label', 'FMEL_UPD_D': 'no label', 'snippet': 'no label', });
lyr_Tengah_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});