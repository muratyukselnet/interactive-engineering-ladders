
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
let positions;
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
        strokeWidth: 1,
        opacity: 0.3,
    });
    let pentagon2 = new Konva.RegularPolygon({
        x: shapeHeight,
        y: shapeWidth,
        sides: 5,
        radius: biggestRadius * 40/100,
        fill: null,
        stroke: 'black',
        strokeWidth: 1,
        opacity: 0.3,
    });
    let pentagon3 = new Konva.RegularPolygon({
        x: shapeHeight,
        y: shapeWidth,
        sides: 5,
        radius: biggestRadius * 60/100,
        fill: null,
        stroke: 'black',
        strokeWidth: 2,
        opacity: 0.3,
    });
    let pentagon4 = new Konva.RegularPolygon({
        x: shapeHeight,
        y: shapeWidth,
        sides: 5,
        radius: biggestRadius * 80/100,
        fill: null,
        stroke: 'black',
        strokeWidth: 2,
        opacity: 0.3,
    });
    let pentagon5 = new Konva.RegularPolygon({
        x: shapeHeight,
        y: shapeWidth,
        sides: 5,
        radius: biggestRadius,
        fill: null,
        stroke: 'black',
        strokeWidth: 3,
        opacity: 0.3,
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
        updateSelectedShape()
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

    positions = { technology: { adopts: {}, specializes: {}, evangelizes: {}, masters: {}, creates: {} },
        influence: { subsystem: {}, team: {}, 'multiple-teams': {}, company: {}, community: {} },
        process: { follows: {}, enforces: {}, challenges: {}, adjust: {}, defines: {} },
        people: { learns: {}, supports: {}, mentors: {}, coordinates: {}, manages: {} },
        system: { enhances: {}, designs: {}, owns: {}, evolves: {}, leads: {} } };

    positions.technology.creates.x = 306;
    positions.technology.creates.y = 72;
    positions.influence.community.x = 49;
    positions.influence.community.y = 259;
    positions.process.defines.x = 146;
    positions.process.defines.y = 559;
    positions.people.manages.x = 464;
    positions.people.manages.y = 558;
    positions.system.leads.x = 563;
    positions.system.leads.y = 259;

    positions.technology.masters.x = 306;
    positions.technology.masters.y = 127;
    positions.influence.company.x = 99;
    positions.influence.company.y = 276;
    positions.process.adjust.x = 178;
    positions.process.adjust.y = 516;
    positions.people.coordinates.x = 432;
    positions.people.coordinates.y = 515;
    positions.system.evolves.x = 509;
    positions.system.evolves.y = 276;

    positions.technology.evangelizes.x = 306;
    positions.technology.evangelizes.y = 179;
    positions.influence["multiple-teams"].x = 152;
    positions.influence["multiple-teams"].y = 292;
    positions.process.challenges.x = 210;
    positions.process.challenges.y = 472;
    positions.people.mentors.x = 400;
    positions.people.mentors.y = 473;
    positions.system.owns.x = 459;
    positions.system.owns.y = 293;

    positions.technology.specializes.x = 305;
    positions.technology.specializes.y = 235;
    positions.influence.team.x = 203;
    positions.influence.team.y = 309;
    positions.process.enforces.x = 242;
    positions.process.enforces.y = 426;
    positions.people.supports.x = 367;
    positions.people.supports.y = 429;
    positions.system.designs.x = 407;
    positions.system.designs.y = 308;

    positions.technology.adopts.x = 306;
    positions.technology.adopts.y = 288;
    positions.influence.subsystem.x = 253;
    positions.influence.subsystem.y = 326;
    positions.process.follows.x = 274;
    positions.process.follows.y = 386;
    positions.people.learns.x = 336;
    positions.people.learns.y = 384;
    positions.system.enhances.x = 356;
    positions.system.enhances.y = 324;

    let urlParams = new URLSearchParams(window.location.search);
    selected.technology = urlParams.get('technology') ? urlParams.get('technology') : 'creates';
    selected.influence = urlParams.get('influence') ? urlParams.get('influence') : 'team';
    selected.process = urlParams.get('process') ? urlParams.get('process') : 'follows';
    selected.people = urlParams.get('people') ? urlParams.get('people') : 'manages';
    selected.system = urlParams.get('system') ? urlParams.get('system') : 'enhances';

    let points = [];
    points.push(positions.technology[selected.technology].x);
    points.push(positions.technology[selected.technology].y);
    points.push(positions.influence[selected.influence].x);
    points.push(positions.influence[selected.influence].y);
    points.push(positions.process[selected.process].x);
    points.push(positions.process[selected.process].y);
    points.push(positions.people[selected.people].x);
    points.push(positions.people[selected.people].y);
    points.push(positions.system[selected.system].x);
    points.push(positions.system[selected.system].y);

    let layer2 = new Konva.Layer();
    let poly = new Konva.Line({
        id: 'selectedShape',
        points: points,
        fill: null,
        stroke: 'black',
        strokeWidth: 2,
        opacity: 0.9,
        closed: true,
        visible: true,
        listening: false,
    });
    layer2.add(poly);
    stage.add(layer2);
}

function updateSelectedShape() {

    let points = [];
    points.push(positions.technology[selected.technology].x);
    points.push(positions.technology[selected.technology].y);
    points.push(positions.influence[selected.influence].x);
    points.push(positions.influence[selected.influence].y);
    points.push(positions.process[selected.process].x);
    points.push(positions.process[selected.process].y);
    points.push(positions.people[selected.people].x);
    points.push(positions.people[selected.people].y);
    points.push(positions.system[selected.system].x);
    points.push(positions.system[selected.system].y);

    let selectedShape = stage.find('#selectedShape')[0];
    selectedShape.attrs.points = points;
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
    updateSelectedShape();
}

init();