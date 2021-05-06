// Theme
export const THEME_SET = "THEME_SET";
export const THEMES = {
  DEFAULT: "DEFAULT",
  DARK: "DARK",
  LIGHT: "LIGHT",
  BLUE: "BLUE",
  GREEN: "GREEN",
  INDIGO: "INDIGO",
};

export const LayerTypes = {
  TEXT: 1,
  LOGO: 2,
  BASE: 3,
  OVERLAY: 4,
  UPLOAD: 5,
  CAR: 6,
  SHAPE: 7,
};

export const PaintingGuides = {
  CARMASK: "car-mask",
  WIREFRAME: "wireframe",
  SPONSORBLOCKS: "sponsor-blocks",
  NUMBERBLOCKS: "number-blocks",
  GRID: "grid",
};

export const Palette = {
  red: "#ff0000",
  blue: "#0000ff",
  green: "#00ff00",
  yellow: "#FFFF00",
  cyan: "#00FFFF",
  lime: "#BFFF00",
  gray: "#808080",
  orange: "#FFA500",
  purple: "#800080",
  black: "#000000",
  white: "#FFFFFF",
  pink: "#FFC0CB",
  darkblue: "#00008b",
};

export const DialogTypes = {
  BASEPAINT: "BASEPAINT",
  SHAPE: "SHAPE",
  LOGO: "LOGO",
  UPLOAD: "UPLOAD",
  TEXT: "TEXT",
};

export const DefaultLayer = {
  upload_id: 0,
  layer_visible: 1,
  layer_locked: 0,
  layer_order: 0,
  time_modified: 0,
  confirm: "",
  layer_data: {
    name: "",
    text: "",
    width: 0,
    height: 0,
    radius: 0,
    innerRadius: 0,
    outerRadius: 0,
    left: 0,
    top: 0,
    rotation: 0,
    flop: 0,
    flip: 0,
    scaleX: 1,
    scaleY: 1,
    stroke: 0,
    font: 0,
    size: 0,
    scolor: null,
    color: null,
    opacity: 1,
    shadowColor: null,
    shadowBlur: 0,
    shadowOpacity: 1,
    shadowOffsetX: 0,
    shadowOffsetY: 0,
    cornerTopLeft: 0,
    cornerTopRight: 0,
    cornerBottomLeft: 0,
    cornerBottomRight: 0,
    numPoints: 5,
    angle: 60,
    points: [],
    lineCap: "round",
    lineJoin: "round",
    pointerLength: 20,
    pointerWidth: 20,
  },
};

export const MouseModes = {
  DEFAULT: "DEFAULT",
  RECT: "Rectangle",
  CIRCLE: "Circle",
  ELLIPSE: "Ellipse",
  REGULARPOLYGON: "Regular Polygon",
  ARROW: "Arrow",
  LINE: "Line",
  WEDGE: "Wedge",
  POLYGON: "Polygon",
  SOFTPOLYGON: "Soft Polygon",
  STAR: "Star",
  RING: "Ring",
  ARC: "Arc",
  PEN: "Pen",
};

export const AllowedLayerProps = {
  [LayerTypes.TEXT]: [
    "layer_visible",
    "layer_locked",
    "layer_data",
    "layer_data.name",
    "layer_data.text",
    // "layer_data.width",
    // "layer_data.height",
    "layer_data.left",
    "layer_data.top",
    "layer_data.scaleX",
    "layer_data.scaleY",
    "layer_data.rotation",
    "layer_data.flop",
    "layer_data.flip",
    "layer_data.font",
    "layer_data.color",
    "layer_data.size",
    "layer_data.stroke",
    "layer_data.scolor",
    "layer_data.opacity",
    "layer_data.shadowColor",
    "layer_data.shadowBlur",
    "layer_data.shadowOpacity",
    "layer_data.shadowBlur",
    "layer_data.shadowOffsetX",
    "layer_data.shadowOffsetY",
  ],
  [LayerTypes.LOGO]: [
    "layer_visible",
    "layer_locked",
    "layer_data",
    "layer_data.name",
    "layer_data.width",
    "layer_data.height",
    "layer_data.left",
    "layer_data.top",
    "layer_data.rotation",
    "layer_data.flop",
    "layer_data.flip",
    "layer_data.opacity",
    "layer_data.shadowColor",
    "layer_data.shadowBlur",
    "layer_data.shadowOpacity",
    "layer_data.shadowBlur",
    "layer_data.shadowOffsetX",
    "layer_data.shadowOffsetY",
  ],
  [LayerTypes.OVERLAY]: [
    "layer_visible",
    "layer_locked",
    "layer_data",
    "layer_data.name",
    "layer_data.width",
    "layer_data.height",
    "layer_data.left",
    "layer_data.top",
    "layer_data.rotation",
    "layer_data.flop",
    "layer_data.flip",
    "layer_data.opacity",
    "layer_data.color",
    "layer_data.shadowColor",
    "layer_data.shadowBlur",
    "layer_data.shadowOpacity",
    "layer_data.shadowBlur",
    "layer_data.shadowOffsetX",
    "layer_data.shadowOffsetY",
  ],
  [LayerTypes.SHAPE]: {
    [MouseModes.RECT]: [
      "layer_visible",
      "layer_locked",
      "layer_data",
      "layer_data.name",
      "layer_data.type",
      "layer_data.width",
      "layer_data.height",
      "layer_data.left",
      "layer_data.top",
      "layer_data.rotation",
      "layer_data.flop",
      "layer_data.flip",
      "layer_data.opacity",
      "layer_data.color",
      "layer_data.stroke",
      "layer_data.scolor",
      "layer_data.shadowColor",
      "layer_data.shadowBlur",
      "layer_data.shadowOpacity",
      "layer_data.shadowBlur",
      "layer_data.shadowOffsetX",
      "layer_data.shadowOffsetY",
      "layer_data.cornerTopLeft",
      "layer_data.cornerTopRight",
      "layer_data.cornerBottomLeft",
      "layer_data.cornerBottomRight",
    ],
    [MouseModes.CIRCLE]: [
      "layer_visible",
      "layer_locked",
      "layer_data",
      "layer_data.name",
      "layer_data.type",
      "layer_data.radius",
      "layer_data.left",
      "layer_data.top",
      "layer_data.rotation",
      "layer_data.flop",
      "layer_data.flip",
      "layer_data.opacity",
      "layer_data.color",
      "layer_data.stroke",
      "layer_data.scolor",
      "layer_data.shadowColor",
      "layer_data.shadowBlur",
      "layer_data.shadowOpacity",
      "layer_data.shadowBlur",
      "layer_data.shadowOffsetX",
      "layer_data.shadowOffsetY",
    ],
    [MouseModes.ELLIPSE]: [
      "layer_visible",
      "layer_locked",
      "layer_data",
      "layer_data.name",
      "layer_data.type",
      "layer_data.width",
      "layer_data.height",
      "layer_data.left",
      "layer_data.top",
      "layer_data.rotation",
      "layer_data.flop",
      "layer_data.flip",
      "layer_data.opacity",
      "layer_data.color",
      "layer_data.stroke",
      "layer_data.scolor",
      "layer_data.shadowColor",
      "layer_data.shadowBlur",
      "layer_data.shadowOpacity",
      "layer_data.shadowBlur",
      "layer_data.shadowOffsetX",
      "layer_data.shadowOffsetY",
    ],
    [MouseModes.STAR]: [
      "layer_visible",
      "layer_locked",
      "layer_data",
      "layer_data.name",
      "layer_data.type",
      "layer_data.innerRadius",
      "layer_data.outerRadius",
      "layer_data.numPoints",
      "layer_data.left",
      "layer_data.top",
      "layer_data.rotation",
      "layer_data.flop",
      "layer_data.flip",
      "layer_data.opacity",
      "layer_data.color",
      "layer_data.stroke",
      "layer_data.scolor",
      "layer_data.shadowColor",
      "layer_data.shadowBlur",
      "layer_data.shadowOpacity",
      "layer_data.shadowBlur",
      "layer_data.shadowOffsetX",
      "layer_data.shadowOffsetY",
    ],
    [MouseModes.RING]: [
      "layer_visible",
      "layer_locked",
      "layer_data",
      "layer_data.name",
      "layer_data.type",
      "layer_data.innerRadius",
      "layer_data.outerRadius",
      "layer_data.left",
      "layer_data.top",
      "layer_data.rotation",
      "layer_data.flop",
      "layer_data.flip",
      "layer_data.opacity",
      "layer_data.color",
      "layer_data.stroke",
      "layer_data.scolor",
      "layer_data.shadowColor",
      "layer_data.shadowBlur",
      "layer_data.shadowOpacity",
      "layer_data.shadowBlur",
      "layer_data.shadowOffsetX",
      "layer_data.shadowOffsetY",
    ],
    [MouseModes.REGULARPOLYGON]: [
      "layer_visible",
      "layer_locked",
      "layer_data",
      "layer_data.name",
      "layer_data.type",
      "layer_data.radius",
      "layer_data.numPoints",
      "layer_data.left",
      "layer_data.top",
      "layer_data.rotation",
      "layer_data.flop",
      "layer_data.flip",
      "layer_data.opacity",
      "layer_data.color",
      "layer_data.stroke",
      "layer_data.scolor",
      "layer_data.shadowColor",
      "layer_data.shadowBlur",
      "layer_data.shadowOpacity",
      "layer_data.shadowBlur",
      "layer_data.shadowOffsetX",
      "layer_data.shadowOffsetY",
    ],
    [MouseModes.WEDGE]: [
      "layer_visible",
      "layer_locked",
      "layer_data",
      "layer_data.name",
      "layer_data.type",
      "layer_data.radius",
      "layer_data.angle",
      "layer_data.left",
      "layer_data.top",
      "layer_data.rotation",
      "layer_data.flop",
      "layer_data.flip",
      "layer_data.opacity",
      "layer_data.color",
      "layer_data.stroke",
      "layer_data.scolor",
      "layer_data.shadowColor",
      "layer_data.shadowBlur",
      "layer_data.shadowOpacity",
      "layer_data.shadowBlur",
      "layer_data.shadowOffsetX",
      "layer_data.shadowOffsetY",
    ],
    [MouseModes.ARC]: [
      "layer_visible",
      "layer_locked",
      "layer_data",
      "layer_data.name",
      "layer_data.type",
      "layer_data.innerRadius",
      "layer_data.outerRadius",
      "layer_data.angle",
      "layer_data.left",
      "layer_data.top",
      "layer_data.rotation",
      "layer_data.flop",
      "layer_data.flip",
      "layer_data.opacity",
      "layer_data.color",
      "layer_data.stroke",
      "layer_data.scolor",
      "layer_data.shadowColor",
      "layer_data.shadowBlur",
      "layer_data.shadowOpacity",
      "layer_data.shadowBlur",
      "layer_data.shadowOffsetX",
      "layer_data.shadowOffsetY",
    ],
    [MouseModes.LINE]: [
      "layer_visible",
      "layer_locked",
      "layer_data",
      "layer_data.name",
      "layer_data.type",
      "layer_data.left",
      "layer_data.top",
      "layer_data.points",
      "layer_data.lineCap",
      "layer_data.lineJoin",
      "layer_data.rotation",
      "layer_data.flop",
      "layer_data.flip",
      "layer_data.opacity",
      "layer_data.stroke",
      "layer_data.scolor",
      "layer_data.shadowColor",
      "layer_data.shadowBlur",
      "layer_data.shadowOpacity",
      "layer_data.shadowBlur",
      "layer_data.shadowOffsetX",
      "layer_data.shadowOffsetY",
    ],
    [MouseModes.POLYGON]: [
      "layer_visible",
      "layer_locked",
      "layer_data",
      "layer_data.name",
      "layer_data.type",
      "layer_data.left",
      "layer_data.top",
      "layer_data.points",
      "layer_data.lineCap",
      "layer_data.lineJoin",
      "layer_data.rotation",
      "layer_data.flop",
      "layer_data.flip",
      "layer_data.color",
      "layer_data.opacity",
      "layer_data.stroke",
      "layer_data.scolor",
      "layer_data.shadowColor",
      "layer_data.shadowBlur",
      "layer_data.shadowOpacity",
      "layer_data.shadowBlur",
      "layer_data.shadowOffsetX",
      "layer_data.shadowOffsetY",
    ],
    [MouseModes.ARROW]: [
      "layer_visible",
      "layer_locked",
      "layer_data",
      "layer_data.name",
      "layer_data.type",
      "layer_data.left",
      "layer_data.top",
      "layer_data.points",
      "layer_data.lineCap",
      "layer_data.lineJoin",
      "layer_data.pointerLength",
      "layer_data.pointerWidth",
      "layer_data.rotation",
      "layer_data.flop",
      "layer_data.flip",
      "layer_data.color",
      "layer_data.opacity",
      "layer_data.stroke",
      "layer_data.scolor",
      "layer_data.shadowColor",
      "layer_data.shadowBlur",
      "layer_data.shadowOpacity",
      "layer_data.shadowBlur",
      "layer_data.shadowOffsetX",
      "layer_data.shadowOffsetY",
    ],
  },
  [LayerTypes.UPLOAD]: [
    "layer_visible",
    "layer_locked",
    "layer_data",
    "layer_data.name",
    "layer_data.width",
    "layer_data.height",
    "layer_data.left",
    "layer_data.top",
    "layer_data.rotation",
    "layer_data.flop",
    "layer_data.flip",
    "layer_data.opacity",
    "layer_data.shadowColor",
    "layer_data.shadowBlur",
    "layer_data.shadowOpacity",
    "layer_data.shadowBlur",
    "layer_data.shadowOffsetX",
    "layer_data.shadowOffsetY",
  ],
  [LayerTypes.BASE]: [
    "layer_data.name",
    "layer_visible",
    "layer_data",
    "layer_data.opacity",
    "layer_data.color",
  ],
  [LayerTypes.CAR]: [
    "layer_data.name",
    "layer_visible",
    "layer_data",
    "layer_data.color",
  ],
};
