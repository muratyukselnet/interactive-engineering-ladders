
const verticals = [
    "technology",
    "influence",
    "system",
    "process",
    "people",
];

const levels = {
    'technology': [
        "creates",
        "masters",
        "evangelizes",
        "specializes",
        "adopts",
    ],
    'influence': [
        "community",
        "company",
        "multiple-teams",
        "team",
        "subsystem",
    ],
    'process': [
        "defines",
        "adjusts",
        "challenges",
        "enforces",
        "follows",
    ],
     'people': [
        "manages",
        "coordinates",
        "mentors",
        "supports",
        "learns",
    ],
    'system': [
        "leads",
        "evolves",
        "owns",
        "designs",
        "enhances",
    ]
}

let stage;
let selected = {
    "technology": 'adopts',
    "influence": 'subsystem',
    "system": 'enhances',
    "process": 'learns',
    "people": 'follows',
};

function createPentagons()
{
    const width = document.getElementById('canvas-container').clientWidth;
    const height = document.getElementById('canvas-container').clientHeight;
    const biggestRadius = (width - 60) / 2;
    const shapeHeight = Math.round(height / 2 + (height / 150));
    const shapeWidth = Math.round(width / 2 + (width / 15));
    stage = new Konva.Stage({
        container: 'canvas-container',
        width: width,
        height: height,
    });
    let layer = new Konva.Layer();

    let tooltip1 = new Konva.Text({
        id: 'title-technology',
        x: 255,
        y: 0,
        text: "Technology",
        fontFamily: 'Calibri',
        fontSize: 20,
        padding: 5,
        textFill: 'white',
        fill: 'black',
        alpha: 1,
        stroke: '#113',
        strokeWidth: 2,
        visible: true,
    });
    layer.add(tooltip1);

    let tooltip2 = new Konva.Text({
        id: 'title-influence',
        x: 5,
        y: 180,
        text: "Influence",
        fontFamily: 'Calibri',
        fontSize: 20,
        padding: 5,
        textFill: 'white',
        fill: 'black',
        alpha: 1,
        stroke: '#113',
        strokeWidth: 2,
        visible: true,
    });
    layer.add(tooltip2);

    let tooltip3 = new Konva.Text({
        id: 'title-process',
        x: 40,
        y: 560,
        text: "Process",
        fontFamily: 'Calibri',
        fontSize: 20,
        padding: 5,
        textFill: 'white',
        fill: 'black',
        alpha: 1,
        stroke: '#113',
        strokeWidth: 2,
        visible: true,
    });
    layer.add(tooltip3);

    let tooltip4 = new Konva.Text({
        id: 'title-people',
        x: 520,
        y: 560,
        text: "People",
        fontFamily: 'Calibri',
        fontSize: 20,
        padding: 5,
        textFill: 'white',
        fill: 'black',
        alpha: 1,
        stroke: '#113',
        strokeWidth: 2,
        visible: true,
    });
    layer.add(tooltip4);

    let tooltip5 = new Konva.Text({
        id: 'title-system',
        x: 525,
        y: 180,
        text: "System",
        fontFamily: 'Calibri',
        fontSize: 20,
        padding: 5,
        textFill: 'white',
        fill: 'black',
        alpha: 1,
        stroke: '#113',
        strokeWidth: 2,
        visible: true,
    });
    layer.add(tooltip5);

    let pentagon1 = new Konva.RegularPolygon({
        x: shapeHeight,
        y: shapeWidth,
        sides: 5,
        radius: biggestRadius * 20/100,
        fill: null,
        stroke: 'black',
        strokeWidth: 1
    });
    let pentagon2 = new Konva.RegularPolygon({
        x: shapeHeight,
        y: shapeWidth,
        sides: 5,
        radius: biggestRadius * 40/100,
        fill: null,
        stroke: 'black',
        strokeWidth: 1
    });
    let pentagon3 = new Konva.RegularPolygon({
        x: shapeHeight,
        y: shapeWidth,
        sides: 5,
        radius: biggestRadius * 60/100,
        fill: null,
        stroke: 'black',
        strokeWidth: 2
    });
    let pentagon4 = new Konva.RegularPolygon({
        x: shapeHeight,
        y: shapeWidth,
        sides: 5,
        radius: biggestRadius * 80/100,
        fill: null,
        stroke: 'black',
        strokeWidth: 2
    });
    let pentagon5 = new Konva.RegularPolygon({
        x: shapeHeight,
        y: shapeWidth,
        sides: 5,
        radius: biggestRadius,
        fill: null,
        stroke: 'black',
        strokeWidth: 3
    });
    layer.add(pentagon1);
    layer.add(pentagon2);
    layer.add(pentagon3);
    layer.add(pentagon4);
    layer.add(pentagon5);
    stage.add(layer);

    let radiusDiff = biggestRadius / 5;

    levels.technology.forEach(function (value, index, array) {
        let level1text1PositionX = biggestRadius * 8/7;
        let level1text1PositionY = biggestRadius * 20/100;
        let stepDiffX = 30;
        let stepDiffY = radiusDiff * index - 10;

        let tooltip = new Konva.Text({
            id: value,
            groupName: 'technology',
            x: level1text1PositionX - stepDiffX,
            y: level1text1PositionY + stepDiffY,
            text: value,
            fontFamily: 'Calibri',
            fontSize: 14,
            padding: 5,
            textFill: 'white',
            fill: 'black',
            alpha: 1,
            stroke: '#113',
            strokeWidth: 0.5,
            visible: true,
        });
        layer.add(tooltip);
    });
    levels.influence.forEach(function (value, index, array) {
        let level1text1PositionX = biggestRadius * 2/10;
        let level1text1PositionY = biggestRadius * 85/100;
        let stepDiffX = radiusDiff * index * 8/9 - 30;
        let stepDiffY = radiusDiff * index * 2/7 + 10;

        let tooltip = new Konva.Text({
            id: value,
            groupName: 'influence',
            x: level1text1PositionX + stepDiffX,
            y: level1text1PositionY + stepDiffY,
            text: value,
            fontFamily: 'Calibri',
            fontSize: 14,
            padding: 5,
            textFill: 'white',
            fill: 'black',
            alpha: 1,
            stroke: '#113',
            strokeWidth: 0.5,
            visible: true,
        });
        layer.add(tooltip);
    });
    levels.process.forEach(function (value, index, array) {
        let level1text1PositionX = biggestRadius * 5/11;
        let level1text1PositionY = biggestRadius * 215/100;
        let stepDiffX = radiusDiff * index * 4/7 + 5;
        let stepDiffY = radiusDiff * index * 8/9 + 20;

        let tooltip = new Konva.Text({
            id: value,
            groupName: 'process',
            x: level1text1PositionX + stepDiffX,
            y: level1text1PositionY - stepDiffY,
            text: value,
            fontFamily: 'Calibri',
            fontSize: 14,
            padding: 5,
            textFill: 'white',
            fill: 'black',
            alpha: 1,
            stroke: '#113',
            strokeWidth: 0.5,
            visible: true,
        });
        layer.add(tooltip);
    });
    levels.people.forEach(function (value, index, array) {
        let level1text1PositionX = biggestRadius * 18/11;
        let level1text1PositionY = biggestRadius * 211/100;
        let stepDiffX = radiusDiff * index * 4/7;
        let stepDiffY = radiusDiff * index * 8/9 + 10;

        let tooltip = new Konva.Text({
            id: value,
            groupName: 'people',
            x: level1text1PositionX - stepDiffX,
            y: level1text1PositionY - stepDiffY,
            text: value,
            fontFamily: 'Calibri',
            fontSize: 14,
            padding: 5,
            textFill: 'white',
            fill: 'black',
            alpha: 1,
            stroke: '#113',
            strokeWidth: 0.5,
            visible: true,
        });
        layer.add(tooltip);
    });
    levels.system.forEach(function (value, index, array) {
        let level1text1PositionX = biggestRadius * 22/11;
        let level1text1PositionY = biggestRadius * 83/100;
        let stepDiffX = radiusDiff * index;
        let stepDiffY = radiusDiff * index * 3/9 + 10;

        let tooltip = new Konva.Text({
            id: value,
            groupName: 'system',
            x: level1text1PositionX - stepDiffX,
            y: level1text1PositionY + stepDiffY,
            text: value,
            fontFamily: 'Calibri',
            fontSize: 14,
            padding: 5,
            textFill: 'white',
            fill: 'black',
            alpha: 1,
            stroke: '#113',
            strokeWidth: 0.5,
            visible: true,
        });
        layer.add(tooltip);
    });

    stage.on('click', function (e) {
        let item = e.target;
        if (item.className !== 'Text') {
            return;
        }
        let groupName = item.attrs.groupName;
        selected[groupName] = item.attrs.id;
        redrawPentagon(item.attrs.id, groupName)
        updateShare()
    });
}

function redrawPentagon (targetId, groupName) {
    let item = stage.find('#' + targetId);

    if (!item[0] && item[0].className !== 'Text') {
        return;
    }

    item = item[0];

    levels[groupName].forEach(function (value) {
        let otherTexts = stage.find('#' + value);
        if (otherTexts.length === 1) {
            otherTexts[0].attrs.fontSize = 14;
            otherTexts[0].attrs.strokeWidth = 0.5;
        }
    });

    item.attrs.fontSize = 18;
    item.attrs.strokeWidth = 1.3;

    stage.draw();
}

function initialValues()
{
    verticals.forEach(function (value) {
        let currentLevel = levels[value][levels[value].length - 1];
        redrawPentagon(currentLevel, value);
        selected[value] = currentLevel;
    });
}

function updateShare() {
    if (window.history.replaceState) {
        const currentUrl = new URL(window.location);
        currentUrl.searchParams.set('influence', selected.influence);
        currentUrl.searchParams.set('people', selected.people);
        currentUrl.searchParams.set('system', selected.system);
        currentUrl.searchParams.set('process', selected.process);
        currentUrl.searchParams.set('technology', selected.technology);

        window.history.replaceState({path:currentUrl.toString()}, '', currentUrl.toString());
    }
}

function copyUrl() {
    let inputCopy = document.body.appendChild(document.createElement("input"));
    inputCopy.value = window.location.href;
    inputCopy.focus();
    inputCopy.select();
    document.execCommand('copy');
    inputCopy.parentNode.removeChild(inputCopy);
}

function init() {
    createPentagons();
    initialValues();
}

init();